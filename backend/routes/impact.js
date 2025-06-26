
const express = require('express');
const Impact = require('../models/Impact');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all impact records
router.get('/', async (req, res) => {
  try {
    const { category, featured, page = 1, limit = 10 } = req.query;
    const filter = { isActive: true };
    
    if (category) filter.category = category;
    if (featured) filter.isFeatured = featured === 'true';

    const impacts = await Impact.find(filter)
      .populate('programId', 'title')
      .sort({ date: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Impact.countDocuments(filter);

    res.json({
      impacts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get impact stats
router.get('/stats', async (req, res) => {
  try {
    const stats = await Impact.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$category',
          totalValue: { $sum: '$value' },
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create impact record (Admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const impact = new Impact(req.body);
    await impact.save();
    res.status(201).json(impact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update impact record (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const impact = await Impact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!impact) {
      return res.status(404).json({ message: 'Impact record not found' });
    }

    res.json(impact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete impact record (Admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const impact = await Impact.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!impact) {
      return res.status(404).json({ message: 'Impact record not found' });
    }

    res.json({ message: 'Impact record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
