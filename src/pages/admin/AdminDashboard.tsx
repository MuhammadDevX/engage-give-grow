
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Globe, Target, TrendingUp, Mail, MessageSquare } from 'lucide-react';
import { apiService } from '@/services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalUsers: 0,
    activePrograms: 0,
    newsletterSubscribers: 0,
    pendingContacts: 0,
    recentDonations: [],
    recentContacts: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [donations, users, programs, newsletter, contacts] = await Promise.all([
          apiService.getDonations(),
          apiService.getUsers(),
          apiService.getPrograms(),
          apiService.getNewsletterSubscribers(),
          apiService.getContacts()
        ]);

        setStats({
          totalDonations: donations.data.reduce((sum: number, d: any) => sum + d.amount, 0),
          totalUsers: users.data.length,
          activePrograms: programs.data.filter((p: any) => p.status === 'active').length,
          newsletterSubscribers: newsletter.data.length,
          pendingContacts: contacts.data.filter((c: any) => c.status === 'new').length,
          recentDonations: donations.data.slice(0, 5),
          recentContacts: contacts.data.slice(0, 5)
        });
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: 'Total Donations',
      value: `$${stats.totalDonations.toLocaleString()}`,
      icon: Heart,
      color: 'text-red-600 bg-red-100'
    },
    {
      title: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      icon: Users,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      title: 'Active Programs',
      value: stats.activePrograms,
      icon: Target,
      color: 'text-green-600 bg-green-100'
    },
    {
      title: 'Newsletter Subscribers',
      value: stats.newsletterSubscribers.toLocaleString(),
      icon: Mail,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      title: 'Pending Contacts',
      value: stats.pendingContacts,
      icon: MessageSquare,
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600">Monitor your organization's key metrics and activities.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`rounded-full p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentDonations.length > 0 ? (
                stats.recentDonations.map((donation: any, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">{donation.donorName}</p>
                      <p className="text-sm text-gray-500">{new Date(donation.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${donation.amount}</p>
                      <p className={`text-sm ${donation.status === 'completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {donation.status}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No recent donations</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Contact Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentContacts.length > 0 ? (
                stats.recentContacts.map((contact: any, index) => (
                  <div key={index} className="py-2 border-b last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.subject}</p>
                        <p className="text-sm text-gray-500">{new Date(contact.createdAt).toLocaleDateString()}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        contact.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        contact.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {contact.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No recent contacts</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
