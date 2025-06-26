
const express = require('express');
const Partner = require('../models/Partner');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all partners
router.get('/', async (req, res) => {
  try {
    const { category, featured, page = 1, limit = 10 } = req.query;
    const filter = { isActive: true };
    
    if (category) filter.category = category;
    if (featured) filter.isFeatured = featured === 'true';

    const partners = await Partner.find(filter)
      .populate('programs', 'title')
      .sort({ partnershipDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Partner.countDocuments(filter);

    res.json({
      partners,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create partner (Admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const partner = new Partner(req.body);
    await partner.save();
    res.status(201).json(partner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update partner (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    res.json(partner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete partner (Admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    res.json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
