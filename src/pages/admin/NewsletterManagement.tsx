import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Trash2, Plus } from 'lucide-react';
import { apiService } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const NewsletterManagement = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [addEmail, setAddEmail] = useState('');
    const { toast } = useToast();

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        setLoading(true);
        try {
            const response = await apiService.getNewsletterSubscribers();
            setSubscribers(response.data.subscribers);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch subscribers', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiService.subscribeNewsletter({ email: addEmail });
            toast({ title: 'Subscriber added!' });
            setShowAddForm(false);
            setAddEmail('');
            fetchSubscribers();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to add subscriber', variant: 'destructive' });
        }
    };

    const handleDelete = async (email: string) => {
        if (window.confirm('Are you sure you want to delete this subscriber?')) {
            try {
                await apiService.unsubscribeNewsletter(email);
                toast({ title: 'Subscriber deleted!' });
                fetchSubscribers();
            } catch (error) {
                toast({ title: 'Error', description: 'Failed to delete subscriber', variant: 'destructive' });
            }
        }
    };

    if (loading) {
        return <div className="p-6">Loading newsletter subscribers...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Newsletter Management</h2>
                    <p className="text-gray-600">View, add, and delete newsletter subscribers.</p>
                </div>
                <Button onClick={() => setShowAddForm(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Subscriber
                </Button>
            </div>

            {showAddForm && (
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Add New Subscriber</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleAdd} className="flex gap-4 items-center">
                            <Input
                                placeholder="Email"
                                value={addEmail}
                                onChange={e => setAddEmail(e.target.value)}
                                required
                                className="w-64"
                            />
                            <Button type="submit">Add</Button>
                            <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Active</th>
                            <th className="px-4 py-2 border-b">Subscription Date</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4 text-gray-500">No subscribers found.</td>
                            </tr>
                        ) : (
                            subscribers.map((subscriber: any) => (
                                <tr key={subscriber._id}>
                                    <td className="px-4 py-2 border-b">{subscriber.email}</td>
                                    <td className="px-4 py-2 border-b">{subscriber.isActive ? 'Yes' : 'No'}</td>
                                    <td className="px-4 py-2 border-b">{subscriber.subscriptionDate ? subscriber.subscriptionDate.split('T')[0] : ''}</td>
                                    <td className="px-4 py-2 border-b">
                                        <Button size="sm" variant="destructive" onClick={() => handleDelete(subscriber.email)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewsletterManagement;
