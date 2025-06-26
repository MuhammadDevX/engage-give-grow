import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { apiService } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const ImpactManagement = () => {
    const [impacts, setImpacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingImpact, setEditingImpact] = useState(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        value: '',
        date: '',
        isFeatured: false,
    });

    useEffect(() => {
        fetchImpacts();
    }, []);

    const fetchImpacts = async () => {
        setLoading(true);
        try {
            const response = await apiService.getImpactStats();
            setImpacts(response.data.impacts);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch impact records', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingImpact) {
                await apiService.updateImpact(editingImpact._id, { ...formData, value: Number(formData.value) });
                toast({ title: 'Impact record updated successfully!' });
            } else {
                await apiService.createImpact({ ...formData, value: Number(formData.value) });
                toast({ title: 'Impact record created successfully!' });
            }
            setShowForm(false);
            setEditingImpact(null);
            resetForm();
            fetchImpacts();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to save impact record', variant: 'destructive' });
        }
    };

    const handleEdit = (impact: any) => {
        setEditingImpact(impact);
        setFormData({
            title: impact.title,
            description: impact.description,
            category: impact.category,
            value: impact.value.toString(),
            date: impact.date ? impact.date.split('T')[0] : '',
            isFeatured: impact.isFeatured || false,
        });
        setShowForm(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this impact record?')) {
            try {
                await apiService.deleteImpact(id);
                toast({ title: 'Impact record deleted successfully!' });
                fetchImpacts();
            } catch (error) {
                toast({ title: 'Error', description: 'Failed to delete impact record', variant: 'destructive' });
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            category: '',
            value: '',
            date: '',
            isFeatured: false,
        });
    };

    if (loading) {
        return <div className="p-6">Loading impact records...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Impact Management</h2>
                    <p className="text-gray-600">Manage your organization's impact records.</p>
                </div>
                <Button onClick={() => { setShowForm(true); setEditingImpact(null); resetForm(); }}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Impact
                </Button>
            </div>

            {showForm && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingImpact ? 'Edit Impact Record' : 'Create New Impact Record'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="category">Category</Label>
                                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="education">Education</SelectItem>
                                            <SelectItem value="healthcare">Healthcare</SelectItem>
                                            <SelectItem value="environment">Environment</SelectItem>
                                            <SelectItem value="poverty">Poverty</SelectItem>
                                            <SelectItem value="disaster-relief">Disaster Relief</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="value">Value</Label>
                                    <Input
                                        id="value"
                                        type="number"
                                        value={formData.value}
                                        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="date">Date</Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <input
                                        id="isFeatured"
                                        type="checkbox"
                                        checked={formData.isFeatured}
                                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                                        className="mr-2"
                                    />
                                    <Label htmlFor="isFeatured">Featured</Label>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">{editingImpact ? 'Update' : 'Create'}</Button>
                                <Button type="button" variant="outline" onClick={() => { setShowForm(false); setEditingImpact(null); resetForm(); }}>Cancel</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Title</th>
                            <th className="px-4 py-2 border-b">Category</th>
                            <th className="px-4 py-2 border-b">Value</th>
                            <th className="px-4 py-2 border-b">Date</th>
                            <th className="px-4 py-2 border-b">Featured</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {impacts.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">No impact records found.</td>
                            </tr>
                        ) : (
                            impacts.map((impact: any) => (
                                <tr key={impact._id}>
                                    <td className="px-4 py-2 border-b">{impact.title}</td>
                                    <td className="px-4 py-2 border-b capitalize">{impact.category}</td>
                                    <td className="px-4 py-2 border-b">{impact.value}</td>
                                    <td className="px-4 py-2 border-b">{impact.date ? impact.date.split('T')[0] : ''}</td>
                                    <td className="px-4 py-2 border-b">{impact.isFeatured ? 'Yes' : 'No'}</td>
                                    <td className="px-4 py-2 border-b">
                                        <Button size="sm" variant="outline" className="mr-2" onClick={() => handleEdit(impact)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive" onClick={() => handleDelete(impact._id)}>
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

export default ImpactManagement; 