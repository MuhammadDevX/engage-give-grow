
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, Users, Globe, BookOpen, Stethoscope, Leaf, ArrowLeft, TrendingUp, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impact = () => {
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
            <Link to="/impact" className="text-blue-600 font-medium">Impact</Link>
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Impact</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the measurable difference we're making in communities worldwide through transparent reporting and real stories of change.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These metrics represent real lives changed and communities empowered through our programs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50,247</div>
                <div className="text-gray-600 mb-3">Lives Directly Impacted</div>
                <div className="text-sm text-green-600 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +23% from last year
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25</div>
                <div className="text-gray-600 mb-3">Countries Served</div>
                <div className="text-sm text-green-600 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +4 new countries
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">156</div>
                <div className="text-gray-600 mb-3">Active Projects</div>
                <div className="text-sm text-green-600 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +18% increase
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.8M</div>
                <div className="text-gray-600 mb-3">Funds Raised</div>
                <div className="text-sm text-green-600 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +15% growth
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program-Specific Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Impact Breakdown</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how each of our programs is creating measurable change in different sectors.</p>
          </div>
          
          <div className="space-y-8">
            {/* Education Impact */}
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Education Access</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Transforming educational opportunities in underserved communities through infrastructure, training, and scholarships.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Schools Built</span>
                          <span>45/50</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Teachers Trained</span>
                          <span>320/400</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Scholarships Awarded</span>
                          <span>2,500/3,000</span>
                        </div>
                        <Progress value={83} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">15,247</div>
                        <div className="text-sm text-gray-600">Students Reached</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-sm text-gray-600">Graduation Rate</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">85%</div>
                        <div className="text-sm text-gray-600">Job Placement</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-sm text-gray-600">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare Impact */}
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <Stethoscope className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Healthcare Initiative</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Providing essential healthcare services and medical training to remote and underserved communities.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Mobile Clinics</span>
                          <span>35/40</span>
                        </div>
                        <Progress value={88} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Health Workers Trained</span>
                          <span>450/500</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Medical Supplies Distributed</span>
                          <span>78/100</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">25,000</div>
                        <div className="text-sm text-gray-600">Patients Treated</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">85%</div>
                        <div className="text-sm text-gray-600">Child Mortality ↓</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">92%</div>
                        <div className="text-sm text-gray-600">Vaccination Rate</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">18</div>
                        <div className="text-sm text-gray-600">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <Leaf className="h-8 w-8 text-emerald-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Environmental Protection</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Supporting sustainable development through conservation, reforestation, and clean energy initiatives.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Trees Planted</span>
                          <span>500K/750K</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Clean Water Projects</span>
                          <span>28/35</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Solar Installations</span>
                          <span>15/20</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-emerald-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-600">10,000</div>
                        <div className="text-sm text-gray-600">People w/ Clean Water</div>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-600">250</div>
                        <div className="text-sm text-gray-600">Hectares Protected</div>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-600">60%</div>
                        <div className="text-sm text-gray-600">CO2 Reduction</div>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-600">12</div>
                        <div className="text-sm text-gray-600">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real stories from the communities we serve, showing the human impact behind our numbers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Kenya</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Maria's Education Journey</h3>
                <p className="text-gray-600 mb-4">
                  "Thanks to the scholarship program, I completed my nursing degree and now serve my community as a healthcare provider. I'm the first in my family to attend university."
                </p>
                <div className="text-sm text-blue-600 font-medium">Education Access Program</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Bangladesh</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Village Health Transformation</h3>
                <p className="text-gray-600 mb-4">
                  "Our village now has trained health workers and a mobile clinic visits monthly. Child mortality has dropped by 70% in just two years."
                </p>
                <div className="text-sm text-green-600 font-medium">Healthcare Initiative</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-sm text-gray-600">Peru</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Clean Water Changes Everything</h3>
                <p className="text-gray-600 mb-4">
                  "With clean water in our village, our children no longer get sick from waterborne diseases and can focus on their education instead of walking hours for water."
                </p>
                <div className="text-sm text-emerald-600 font-medium">Environmental Protection</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Transparency</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See exactly how your donations are used to create maximum impact in our programs.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">2024 Fund Allocation</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Program Services</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Fundraising</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <Progress value={8} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Administrative</span>
                      <span className="font-medium">7%</span>
                    </div>
                    <Progress value={7} className="h-3" />
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>85 cents</strong> of every dollar goes directly to program services, exceeding charity watchdog recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Program Investment Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Education Access</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Healthcare Initiative</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Environmental Protection</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <Progress value={20} className="h-3" />
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View Annual Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Impact</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Your support helps us continue creating measurable, lasting change in communities worldwide. Join thousands of others making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Donate Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Subscribe to Updates
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

export default Impact;
