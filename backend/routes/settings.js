
const express = require('express');
const Settings = require('../models/Settings');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all settings
router.get('/', async (req, res) => {
  try {
    const { category, isPublic } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (isPublic) filter.isPublic = isPublic === 'true';

    const settings = await Settings.find(filter)
      .populate('lastModifiedBy', 'name')
      .sort({ category: 1, key: 1 });

    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update setting (Admin only)
router.put('/:key', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { value } = req.body;
    
    const setting = await Settings.findOneAndUpdate(
      { key: req.params.key },
      { 
        value, 
        lastModifiedBy: req.user._id,
        updatedAt: new Date()
      },
      { new: true, upsert: true, runValidators: true }
    );

    res.json(setting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
