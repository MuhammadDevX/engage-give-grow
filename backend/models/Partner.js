
const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  website: String,
  logo: String,
  category: { type: String, enum: ['sponsor', 'implementation', 'government', 'ngo', 'corporate', 'foundation'], required: true },
  partnershipType: { type: String, enum: ['financial', 'technical', 'strategic', 'implementation'], required: true },
  contactPerson: String,
  contactEmail: String,
  contactPhone: String,
  partnershipDate: { type: Date, required: true },
  partnershipEndDate: Date,
  contractValue: Number,
  programs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Program' }],
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
  isActive: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Partner', partnerSchema);
