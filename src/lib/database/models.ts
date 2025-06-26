
import mongoose from 'mongoose';

// User Schema (Admins, Volunteers, Donors)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'volunteer', 'donor'], default: 'donor' },
  phone: String,
  address: String,
  joinDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Program Schema
const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['education', 'healthcare', 'environment'], required: true },
  targetAmount: Number,
  currentAmount: { type: Number, default: 0 },
  beneficiaries: { type: Number, default: 0 },
  location: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['active', 'completed', 'planned'], default: 'active' },
  images: [String],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Donation Schema
const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  paymentMethod: String,
  transactionId: String,
  message: String,
  isAnonymous: { type: Boolean, default: false },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
}, { timestamps: true });

// Impact Schema
const impactSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['lives_impacted', 'countries_served', 'projects_completed', 'funds_raised'], required: true },
  value: { type: Number, required: true },
  unit: String,
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  date: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Content Schema (News, Events, Blog Posts)
const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: String,
  type: { type: String, enum: ['news', 'event', 'blog'], required: true },
  author: String,
  publishDate: { type: Date, default: Date.now },
  eventDate: Date,
  eventLocation: String,
  images: [String],
  tags: [String],
  isPublished: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'in_progress', 'resolved'], default: 'new' },
  response: String,
  respondedBy: String,
  respondedAt: Date
}, { timestamps: true });

// Newsletter Schema
const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  subscriptionDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  preferences: [String]
}, { timestamps: true });

// Partner Schema
const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  website: String,
  logo: String,
  category: { type: String, enum: ['sponsor', 'implementation', 'government', 'ngo'], required: true },
  contactPerson: String,
  contactEmail: String,
  partnershipDate: Date,
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Settings Schema
const settingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: mongoose.Schema.Types.Mixed,
  description: String,
  category: String
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Program = mongoose.models.Program || mongoose.model('Program', programSchema);
export const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema);
export const Impact = mongoose.models.Impact || mongoose.model('Impact', impactSchema);
export const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);
export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema);
export const Partner = mongoose.models.Partner || mongoose.model('Partner', partnerSchema);
export const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema);
