import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { apiService } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const PartnersManagement = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingPartner, setEditingPartner] = useState(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        logo: '',
        website: '',
    });

    useEffect(() => {
        fetchPartners();
    }, []);

    const fetchPartners = async () => {
        setLoading(true);
        try {
            const response = await apiService.getPartners();
            setPartners(response.data.partners);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch partners', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingPartner) {
                await apiService.updatePartner(editingPartner._id, formData);
                toast({ title: 'Partner updated successfully!' });
            } else {
                await apiService.createPartner(formData);
                toast({ title: 'Partner created successfully!' });
            }
            setShowForm(false);
            setEditingPartner(null);
            resetForm();
            fetchPartners();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to save partner', variant: 'destructive' });
        }
    };

    const handleEdit = (partner: any) => {
        setEditingPartner(partner);
        setFormData({
            name: partner.name,
            logo: partner.logo,
            website: partner.website,
        });
        setShowForm(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this partner?')) {
            try {
                await apiService.deletePartner(id);
                toast({ title: 'Partner deleted successfully!' });
                fetchPartners();
            } catch (error) {
                toast({ title: 'Error', description: 'Failed to delete partner', variant: 'destructive' });
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            logo: '',
            website: '',
        });
    };

    if (loading) {
        return <div className="p-6">Loading partners...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Partners Management</h2>
                    <p className="text-gray-600">Manage your organization's partners.</p>
                </div>
                <Button onClick={() => { setShowForm(true); setEditingPartner(null); resetForm(); }}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Partner
                </Button>
            </div>

            {showForm && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingPartner ? 'Edit Partner' : 'Create New Partner'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="logo">Logo URL</Label>
                                    <Input
                                        id="logo"
                                        value={formData.logo}
                                        onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="website">Website</Label>
                                <Input
                                    id="website"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">{editingPartner ? 'Update' : 'Create'}</Button>
                                <Button type="button" variant="outline" onClick={() => { setShowForm(false); setEditingPartner(null); resetForm(); }}>Cancel</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Logo</th>
                            <th className="px-4 py-2 border-b">Website</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partners.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4 text-gray-500">No partners found.</td>
                            </tr>
                        ) : (
                            partners.map((partner: any) => (
                                <tr key={partner._id}>
                                    <td className="px-4 py-2 border-b">{partner.name}</td>
                                    <td className="px-4 py-2 border-b">
                                        {partner.logo ? <img src={partner.logo} alt={partner.name} className="h-8 w-8 object-contain" /> : '-'}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {partner.website ? <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{partner.website}</a> : '-'}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        <Button size="sm" variant="outline" className="mr-2" onClick={() => handleEdit(partner)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive" onClick={() => handleDelete(partner._id)}>
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

export default PartnersManagement;
