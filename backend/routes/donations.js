
const express = require('express');
const Donation = require('../models/Donation');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all donations (Admin only)
router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { status, program, page = 1, limit = 10 } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (program) filter.programId = program;

    const donations = await Donation.find(filter)
      .populate('programId', 'title')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Donation.countDocuments(filter);

    res.json({
      donations,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create donation
router.post('/', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update donation status (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    res.json(donation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get donation stats
router.get('/stats', async (req, res) => {
  try {
    const totalDonations = await Donation.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' }, count: { $sum: 1 } } }
    ]);

    const monthlyDonations = await Donation.aggregate([
      { $match: { status: 'completed', createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } } },
      { $group: { _id: null, total: { $sum: '$amount' }, count: { $sum: 1 } } }
    ]);

    res.json({
      total: totalDonations[0] || { total: 0, count: 0 },
      monthly: monthlyDonations[0] || { total: 0, count: 0 }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
