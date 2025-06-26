import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { apiService } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const SettingsManagement = () => {
    const [settings, setSettings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingKey, setEditingKey] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [addForm, setAddForm] = useState({ key: '', value: '', category: '' });
    const { toast } = useToast();

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setLoading(true);
        try {
            const response = await apiService.getSettings();
            setSettings(response.data);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch settings', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (setting: any) => {
        setEditingKey(setting.key);
        setEditValue(setting.value);
    };

    const handleUpdate = async (key: string) => {
        try {
            await apiService.updateSetting(key, editValue);
            toast({ title: 'Setting updated!' });
            setEditingKey(null);
            setEditValue('');
            fetchSettings();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to update setting', variant: 'destructive' });
        }
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiService.updateSetting(addForm.key, { value: addForm.value, category: addForm.category });
            toast({ title: 'Setting added!' });
            setShowAddForm(false);
            setAddForm({ key: '', value: '', category: '' });
            fetchSettings();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to add setting', variant: 'destructive' });
        }
    };

    if (loading) {
        return <div className="p-6">Loading settings...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Settings Management</h2>
                    <p className="text-gray-600">View, add, and edit application settings.</p>
                </div>
                <Button onClick={() => setShowAddForm(true)}>Add Setting</Button>
            </div>

            {showAddForm && (
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Add New Setting</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleAdd} className="flex flex-col md:flex-row gap-4 items-center">
                            <Input
                                placeholder="Key"
                                value={addForm.key}
                                onChange={e => setAddForm({ ...addForm, key: e.target.value })}
                                required
                                className="w-40"
                            />
                            <Input
                                placeholder="Value"
                                value={addForm.value}
                                onChange={e => setAddForm({ ...addForm, value: e.target.value })}
                                required
                                className="w-40"
                            />
                            <Input
                                placeholder="Category"
                                value={addForm.category}
                                onChange={e => setAddForm({ ...addForm, category: e.target.value })}
                                className="w-40"
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
                            <th className="px-4 py-2 border-b">Key</th>
                            <th className="px-4 py-2 border-b">Value</th>
                            <th className="px-4 py-2 border-b">Category</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {settings.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4 text-gray-500">No settings found.</td>
                            </tr>
                        ) : (
                            settings.map((setting: any) => (
                                <tr key={setting.key}>
                                    <td className="px-4 py-2 border-b">{setting.key}</td>
                                    <td className="px-4 py-2 border-b">
                                        {editingKey === setting.key ? (
                                            <Input
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="w-48"
                                            />
                                        ) : (
                                            setting.value
                                        )}
                                    </td>
                                    <td className="px-4 py-2 border-b">{setting.category || '-'}</td>
                                    <td className="px-4 py-2 border-b">
                                        {editingKey === setting.key ? (
                                            <>
                                                <Button size="sm" onClick={() => handleUpdate(setting.key)} className="mr-2">Save</Button>
                                                <Button size="sm" variant="outline" onClick={() => setEditingKey(null)}>Cancel</Button>
                                            </>
                                        ) : (
                                            <Button size="sm" variant="outline" onClick={() => handleEdit(setting)}>
                                                Edit
                                            </Button>
                                        )}
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

export default SettingsManagement;
