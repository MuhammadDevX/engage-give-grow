
const express = require('express');
const Content = require('../models/Content');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all content
router.get('/', async (req, res) => {
  try {
    const { type, published, featured, page = 1, limit = 10 } = req.query;
    const filter = { isActive: true };
    
    if (type) filter.type = type;
    if (published) filter.isPublished = published === 'true';
    if (featured) filter.isFeatured = featured === 'true';

    const content = await Content.find(filter)
      .populate('author', 'name')
      .sort({ publishDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Content.countDocuments(filter);

    res.json({
      content,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single content
router.get('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id)
      .populate('author', 'name email');
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    // Increment view count
    content.views += 1;
    await content.save();

    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create content (Admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const content = new Content({
      ...req.body,
      author: req.user._id
    });
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update content (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete content (Admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
