
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Globe, Target, Shield, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
            <Link to="/about" className="text-blue-600 font-medium">About</Link>
            <Link to="/programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</Link>
            <Link to="/impact" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About HopeForward</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to creating sustainable change in communities worldwide through education, healthcare, and environmental initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                HopeForward exists to empower communities and create lasting positive change through innovative programs that address education, healthcare, and environmental challenges. We believe that sustainable development comes from working hand-in-hand with local communities to build solutions that last.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2015, we have grown from a small team of passionate volunteers to a global organization working in 25 countries. Our approach is rooted in transparency, community partnership, and measurable impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8">
              <div className="text-center">
                <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
                <p className="text-gray-600">Working across continents to create positive change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These principles guide everything we do and help us stay true to our mission.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">We maintain open communication about our finances, operations, and impact to build trust with our supporters and communities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Partnership</h3>
                <p className="text-gray-600">We work with local communities as equal partners, ensuring our programs are culturally appropriate and sustainable.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Impact</h3>
                <p className="text-gray-600">We track and measure our progress to ensure every dollar donated creates meaningful, lasting change in the communities we serve.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the passionate individuals leading our mission to create positive change worldwide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">SE</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Edwards</h3>
                <p className="text-blue-600 mb-3">Executive Director</p>
                <p className="text-gray-600 text-sm">15+ years in international development, former UN program manager with expertise in sustainable community development.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">MR</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Rodriguez</h3>
                <p className="text-green-600 mb-3">Program Director</p>
                <p className="text-gray-600 text-sm">Background in public health and education, leads our field operations across multiple countries with focus on community engagement.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">LC</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Lisa Chen</h3>
                <p className="text-purple-600 mb-3">Finance & Operations</p>
                <p className="text-gray-600 text-sm">CPA with nonprofit expertise, ensures financial transparency and operational efficiency across all our programs and initiatives.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are proud to be recognized by leading organizations for our commitment to transparency and impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GuideStar Gold Seal</h3>
              <p className="text-gray-600 text-sm">Recognized for transparency and accountability</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">BBB Accredited</h3>
              <p className="text-gray-600 text-sm">Better Business Bureau accreditation for ethical practices</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Charity Navigator 4-Star</h3>
              <p className="text-gray-600 text-sm">Highest rating for financial health and accountability</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">UN SDG Partner</h3>
              <p className="text-gray-600 text-sm">Official partner in achieving Sustainable Development Goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to make a difference? Whether through donations, volunteering, or partnerships, there are many ways to support our work.
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
                  <Heart className="h-4 w-4" />
                  <span>info@hopeforward.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
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

export default About;
