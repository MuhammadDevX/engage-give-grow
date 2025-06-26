
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Globe, BookOpen, Stethoscope, Leaf, ArrowLeft, MapPin, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
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
            <Link to="/programs" className="text-blue-600 font-medium">Programs</Link>
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we're making a difference through targeted initiatives that address education, healthcare, and environmental challenges in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Education Access Program */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-white">
                  <BookOpen className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Education Access</h3>
                  <p className="text-blue-100">Empowering communities through quality education opportunities</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">Active</Badge>
                    <Badge variant="outline">25 Countries</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our education program provides scholarships, builds schools, and trains teachers in underserved communities. We've helped over 15,000 children access quality education.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Africa, Asia, Latin America</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Launched 2016</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2" />
                      <span>15,000+ Children Reached</span>
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare Initiative */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 text-white">
                  <Stethoscope className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Healthcare Initiative</h3>
                  <p className="text-green-100">Delivering essential healthcare to remote communities</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">Active</Badge>
                    <Badge variant="outline">18 Countries</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We provide mobile clinics, medical supplies, and training for community health workers in areas with limited healthcare access.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Sub-Saharan Africa, Southeast Asia</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Launched 2017</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2" />
                      <span>25,000+ Patients Treated</span>
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Protection */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-6 text-white">
                  <Leaf className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Environmental Protection</h3>
                  <p className="text-emerald-100">Supporting sustainable development and conservation</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">Active</Badge>
                    <Badge variant="outline">12 Countries</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our environmental program focuses on reforestation, clean water projects, and renewable energy initiatives to combat climate change.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Amazon, Southeast Asia, East Africa</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Launched 2018</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2" />
                      <span>500,000 Trees Planted</span>
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Program Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Impact Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how our programs are creating lasting change in communities around the world.</p>
          </div>
          
          <div className="space-y-12">
            {/* Education Program Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Education Access Program</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Since 2016, our education initiative has transformed learning opportunities for children in remote areas. We build schools, provide learning materials, train teachers, and offer scholarships to ensure no child is left behind.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">45</div>
                    <div className="text-gray-600">Schools Built</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">320</div>
                    <div className="text-gray-600">Teachers Trained</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2,500</div>
                    <div className="text-gray-600">Scholarships Awarded</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-gray-600">Graduation Rate</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 text-center">
                <BookOpen className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Empowering Through Education</h4>
                <p className="text-gray-600">Building brighter futures, one classroom at a time</p>
              </div>
            </div>

            {/* Healthcare Program Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 text-center order-2 lg:order-1">
                <Stethoscope className="h-24 w-24 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Healthcare for All</h4>
                <p className="text-gray-600">Bringing medical care to those who need it most</p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <Stethoscope className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare Initiative</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our mobile health clinics reach remote villages where medical care is scarce. We provide preventive care, maternal health services, and train community health workers to ensure sustainable healthcare access.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">35</div>
                    <div className="text-gray-600">Mobile Clinics</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">450</div>
                    <div className="text-gray-600">Health Workers Trained</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">25,000</div>
                    <div className="text-gray-600">Patients Treated</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-gray-600">Child Mortality Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">There are many ways you can support our programs and help us create lasting change.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Donate</h3>
                <p className="text-gray-600 mb-4">Your financial support directly funds our programs and helps us reach more communities in need.</p>
                <Button className="w-full">Make a Donation</Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Volunteer</h3>
                <p className="text-gray-600 mb-4">Join our team of dedicated volunteers and contribute your skills to make a direct impact.</p>
                <Button variant="outline" className="w-full">Become a Volunteer</Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partner</h3>
                <p className="text-gray-600 mb-4">Organizations and businesses can partner with us to amplify our impact and reach.</p>
                <Button variant="outline" className="w-full">Explore Partnerships</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create positive change. Every contribution, no matter the size, helps us build a better world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Support Our Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
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

export default Programs;
