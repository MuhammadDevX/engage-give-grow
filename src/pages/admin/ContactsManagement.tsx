
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Mail, Phone, Clock } from 'lucide-react';
import { apiService } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const ContactsManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [response, setResponse] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await apiService.getContacts();
      setContacts(response.data.contacts);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (contactId: string, status: string) => {
    try {
      await apiService.updateContact(contactId, { status });
      toast({ title: 'Status updated successfully!' });
      fetchContacts();
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: 'Failed to update status',
        variant: 'destructive'
      });
    }
  };

  const handleResponse = async (contactId: string) => {
    try {
      await apiService.updateContact(contactId, { 
        response,
        status: 'resolved'
      });
      toast({ title: 'Response sent successfully!' });
      setResponse('');
      setSelectedContact(null);
      fetchContacts();
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: 'Failed to send response',
        variant: 'destructive'
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="p-6">Loading contacts...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Contact Management</h2>
        <p className="text-gray-600">Manage and respond to contact form submissions.</p>
      </div>

      <div className="grid gap-6">
        {contacts.map((contact: any) => (
          <Card key={contact._id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{contact.name}</h3>
                  <p className="text-gray-600">{contact.subject}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusColor(contact.status)}>
                    {contact.status}
                  </Badge>
                  <Badge className={getPriorityColor(contact.priority)}>
                    {contact.priority}
                  </Badge>
                </div>
              </div>

              <div className="flex gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </div>
                {contact.phone && (
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {contact.phone}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {new Date(contact.createdAt).toLocaleDateString()}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">{contact.message}</p>
              </div>

              {contact.response && (
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Response:</h4>
                  <p className="text-blue-800">{contact.response}</p>
                  {contact.respondedAt && (
                    <p className="text-sm text-blue-600 mt-2">
                      Responded on {new Date(contact.respondedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}

              <div className="flex gap-2">
                <Select
                  value={contact.status}
                  onValueChange={(value) => handleStatusUpdate(contact._id, value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>

                {contact.status !== 'resolved' && (
                  <Button
                    variant="outline"
                    onClick={() => setSelectedContact(contact)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Respond
                  </Button>
                )}
              </div>

              {selectedContact?._id === contact._id && (
                <div className="mt-4 p-4 border rounded-lg">
                  <Textarea
                    placeholder="Type your response..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    rows={4}
                  />
                  <div className="flex gap-2 mt-2">
                    <Button onClick={() => handleResponse(contact._id)}>
                      Send Response
                    </Button>
                    <Button variant="outline" onClick={() => { setSelectedContact(null); setResponse(''); }}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactsManagement;
