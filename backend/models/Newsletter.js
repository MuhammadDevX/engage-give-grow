
const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  subscriptionDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  preferences: {
    frequency: { type: String, enum: ['weekly', 'monthly', 'quarterly'], default: 'monthly' },
    topics: [{ type: String, enum: ['programs', 'impact', 'events', 'fundraising', 'volunteer'] }]
  },
  source: { type: String, enum: ['website', 'event', 'referral', 'social'], default: 'website' },
  unsubscribeToken: String,
  lastEmailSent: Date
}, { timestamps: true });

module.exports = mongoose.model('Newsletter', newsletterSchema);
