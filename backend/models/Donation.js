
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  donorPhone: String,
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer', 'cash'], required: true },
  transactionId: String,
  message: String,
  isAnonymous: { type: Boolean, default: false },
  isRecurring: { type: Boolean, default: false },
  recurringFrequency: { type: String, enum: ['monthly', 'quarterly', 'yearly'] },
  status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
  donorAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  taxDeductible: { type: Boolean, default: true },
  receiptSent: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
