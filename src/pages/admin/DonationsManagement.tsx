import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Edit, Trash2 } from 'lucide-react';
import { apiService } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
    { value: 'refunded', label: 'Refunded' },
];

const DonationsManagement = () => {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingDonation, setEditingDonation] = useState(null);
    const [status, setStatus] = useState('');
    const { toast } = useToast();

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        setLoading(true);
        try {
            const response = await apiService.getDonations();
            setDonations(response.data.donations);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch donations', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (donation: any) => {
        setEditingDonation(donation);
        setStatus(donation.status);
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingDonation) return;
        try {
            await apiService.updateDonation(editingDonation._id, { status });
            toast({ title: 'Donation status updated!' });
            setEditingDonation(null);
            setStatus('');
            fetchDonations();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to update donation', variant: 'destructive' });
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this donation?')) {
            try {
                await apiService.deleteDonation(id);
                toast({ title: 'Donation deleted successfully!' });
                fetchDonations();
            } catch (error) {
                toast({ title: 'Error', description: 'Failed to delete donation', variant: 'destructive' });
            }
        }
    };

    if (loading) {
        return <div className="p-6">Loading donations...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Donations Management</h2>
                    <p className="text-gray-600">View and manage all donations.</p>
                </div>
            </div>

            {editingDonation && (
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Edit Donation Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleUpdate} className="flex items-center gap-4">
                            <Select value={status} onValueChange={setStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {statusOptions.map((opt) => (
                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button type="submit">Update</Button>
                            <Button type="button" variant="outline" onClick={() => setEditingDonation(null)}>Cancel</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Donor</th>
                            <th className="px-4 py-2 border-b">Amount</th>
                            <th className="px-4 py-2 border-b">Program</th>
                            <th className="px-4 py-2 border-b">Status</th>
                            <th className="px-4 py-2 border-b">Date</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">No donations found.</td>
                            </tr>
                        ) : (
                            donations.map((donation: any) => (
                                <tr key={donation._id}>
                                    <td className="px-4 py-2 border-b">{donation.donorName || donation.donorEmail || 'Anonymous'}</td>
                                    <td className="px-4 py-2 border-b">${donation.amount}</td>
                                    <td className="px-4 py-2 border-b">{donation.programId?.title || '-'}</td>
                                    <td className="px-4 py-2 border-b capitalize">{donation.status}</td>
                                    <td className="px-4 py-2 border-b">{donation.createdAt ? donation.createdAt.split('T')[0] : ''}</td>
                                    <td className="px-4 py-2 border-b">
                                        <Button size="sm" variant="outline" onClick={() => handleEdit(donation)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive" onClick={() => handleDelete(donation._id)}>
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

export default DonationsManagement; 