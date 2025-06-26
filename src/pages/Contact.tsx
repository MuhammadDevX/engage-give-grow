
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Mail, Phone, MapPin, Clock, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">HopeForward</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</Link>
            <Link to="/impact" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</Link>
            <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Join Us</Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Donate Now</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions, want to get involved, or need support, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
                <p className="text-blue-600 font-medium">info@hopeforward.org</p>
                <p className="text-gray-500 text-sm">General inquiries</p>
                <p className="text-blue-600 font-medium mt-2">partnerships@hopeforward.org</p>
                <p className="text-gray-500 text-sm">Partnership opportunities</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team during business hours.</p>
                <p className="text-green-600 font-medium">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm">Main office</p>
                <p className="text-green-600 font-medium mt-2">+1 (555) 123-4568</p>
                <p className="text-gray-500 text-sm">Donor services</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-gray-600 mb-4">Stop by our headquarters for an in-person conversation.</p>
                <p className="text-purple-600 font-medium">123 Hope Street</p>
                <p className="text-gray-500 text-sm">New York, NY 10001</p>
                <p className="text-gray-500 text-sm mt-2">United States</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call us directly.
              </p>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..." 
                        rows={5}
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Hours & Info</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      For emergency situations in our program areas, please use our 24/7 emergency hotline: +1 (555) 123-HELP
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">How can I volunteer?</h4>
                      <p className="text-gray-600 text-sm">Visit our volunteer portal on the website or email volunteer@hopeforward.org</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Can I visit project sites?</h4>
                      <p className="text-gray-600 text-sm">We organize donor visits twice yearly. Contact us for more information.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">How are donations used?</h4>
                      <p className="text-gray-600 text-sm">85% goes directly to programs. View our financial transparency report online.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Do you accept in-kind donations?</h4>
                      <p className="text-gray-600 text-sm">Yes, for specific needs. Please contact us to discuss what items we currently need.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Media Inquiries</h3>
                  <p className="text-gray-600 mb-4">
                    For press releases, interviews, or media kits, please contact our communications team.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">media@hopeforward.org</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">+1 (555) 123-MEDIA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Our headquarters is located in the heart of New York City</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-12 text-center">
            <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">HopeForward Headquarters</h3>
            <p className="text-gray-600 mb-4">123 Hope Street, New York, NY 10001</p>
            <p className="text-sm text-gray-500 mb-6">
              Located near Union Square, easily accessible by subway (L, N, Q, R, W, 4, 5, 6 lines)
            </p>
            <Button variant="outline">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to get involved. Join our community of changemakers and start creating impact today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">HopeForward</span>
              </div>
              <p className="text-gray-400 mb-4">Creating lasting impact through community-driven initiatives and sustainable programs.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
                <li><Link to="/impact" className="hover:text-white transition-colors">Impact</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fundraise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@hopeforward.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Hope Street, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HopeForward. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
