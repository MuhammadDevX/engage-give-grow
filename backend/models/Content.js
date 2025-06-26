
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  type: { type: String, enum: ['news', 'event', 'blog', 'announcement'], required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publishDate: { type: Date, default: Date.now },
  eventDate: Date,
  eventLocation: String,
  eventCapacity: Number,
  eventRegistrations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  images: [String],
  tags: [String],
  category: String,
  isPublished: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  seoTitle: String,
  seoDescription: String,
  readTime: Number,
  views: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);
