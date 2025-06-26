
const mongoose = require('mongoose');

const impactSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['lives_impacted', 'countries_served', 'projects_completed', 'funds_raised', 'volunteers_engaged'], required: true },
  value: { type: Number, required: true },
  unit: { type: String, required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  date: { type: Date, default: Date.now },
  location: String,
  images: [String],
  stories: [{
    title: String,
    content: String,
    author: String,
    images: [String]
  }],
  isActive: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Impact', impactSchema);
