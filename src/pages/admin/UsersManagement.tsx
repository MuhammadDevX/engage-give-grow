import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { apiService } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
];

const UsersManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'user',
        isActive: true,
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await apiService.getUsers();
            setUsers(response.data.users);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch users', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingUser) {
                await apiService.updateUser(editingUser._id, formData);
                toast({ title: 'User updated successfully!' });
            } else {
                await apiService.createUser(formData);
                toast({ title: 'User created successfully!' });
            }
            setShowForm(false);
            setEditingUser(null);
            resetForm();
            fetchUsers();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to save user', variant: 'destructive' });
        }
    };

    const handleEdit = (user: any) => {
        setEditingUser(user);
        setFormData({
            name: user.name,
            email: user.email,
            role: user.role,
            isActive: user.isActive,
        });
        setShowForm(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to deactivate this user?')) {
            try {
                await apiService.deleteUser(id);
                toast({ title: 'User deactivated successfully!' });
                fetchUsers();
            } catch (error) {
                toast({ title: 'Error', description: 'Failed to deactivate user', variant: 'destructive' });
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            role: 'user',
            isActive: true,
        });
    };

    if (loading) {
        return <div className="p-6">Loading users...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Users Management</h2>
                    <p className="text-gray-600">Manage users and their roles.</p>
                </div>
                <Button onClick={() => { setShowForm(true); setEditingUser(null); resetForm(); }}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add User
                </Button>
            </div>

            {showForm && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingUser ? 'Edit User' : 'Create New User'}</CardTitle>
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
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="role">Role</Label>
                                    <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {roleOptions.map((opt) => (
                                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">{editingUser ? 'Update' : 'Create'}</Button>
                                <Button type="button" variant="outline" onClick={() => { setShowForm(false); setEditingUser(null); resetForm(); }}>Cancel</Button>
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
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Role</th>
                            <th className="px-4 py-2 border-b">Active</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-4 text-gray-500">No users found.</td>
                            </tr>
                        ) : (
                            users.map((user: any) => (
                                <tr key={user._id}>
                                    <td className="px-4 py-2 border-b">{user.name}</td>
                                    <td className="px-4 py-2 border-b">{user.email}</td>
                                    <td className="px-4 py-2 border-b capitalize">{user.role}</td>
                                    <td className="px-4 py-2 border-b">{user.isActive ? 'Yes' : 'No'}</td>
                                    <td className="px-4 py-2 border-b">
                                        <Button size="sm" variant="outline" className="mr-2" onClick={() => handleEdit(user)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive" onClick={() => handleDelete(user._id)}>
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

export default UsersManagement;
