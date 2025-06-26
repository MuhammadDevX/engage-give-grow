
const express = require('express');
const Newsletter = require('../models/Newsletter');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all subscribers (Admin only)
router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { active, page = 1, limit = 10 } = req.query;
    const filter = {};
    
    if (active) filter.isActive = active === 'true';

    const subscribers = await Newsletter.find(filter)
      .sort({ subscriptionDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Newsletter.countDocuments(filter);

    res.json({
      subscribers,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Subscribe to newsletter
router.post('/', async (req, res) => {
  try {
    const { email, name } = req.body;
    
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({ message: 'Email already subscribed' });
      } else {
        existingSubscriber.isActive = true;
        existingSubscriber.subscriptionDate = new Date();
        await existingSubscriber.save();
        return res.json({ message: 'Successfully resubscribed!' });
      }
    }

    const subscriber = new Newsletter({ email, name });
    await subscriber.save();
    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Unsubscribe from newsletter
router.delete('/:email', async (req, res) => {
  try {
    const subscriber = await Newsletter.findOneAndUpdate(
      { email: req.params.email },
      { isActive: false },
      { new: true }
    );
    
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }

    res.json({ message: 'Successfully unsubscribed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
