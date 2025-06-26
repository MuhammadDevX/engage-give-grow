
const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: mongoose.Schema.Types.Mixed,
  description: String,
  category: { type: String, enum: ['general', 'donation', 'email', 'social', 'analytics'], required: true },
  dataType: { type: String, enum: ['string', 'number', 'boolean', 'object', 'array'], required: true },
  isPublic: { type: Boolean, default: false },
  lastModifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
