
const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  category: { type: String, enum: ['education', 'healthcare', 'environment', 'poverty', 'disaster-relief'], required: true },
  targetAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  beneficiaries: { type: Number, default: 0 },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  status: { type: String, enum: ['active', 'completed', 'planned', 'paused'], default: 'active' },
  images: [String],
  documents: [String],
  tags: [String],
  projectLead: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  partners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Partner' }],
  isActive: { type: Boolean, default: true },
  priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' }
}, { timestamps: true });

module.exports = mongoose.model('Program', programSchema);
