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

const ContentManagement = () => {
    const [contentList, setContentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingContent, setEditingContent] = useState(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        title: '',
        body: '',
        type: '',
        isPublished: false,
        isFeatured: false,
        publishDate: '',
    });

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        setLoading(true);
        try {
            const response = await apiService.getContent();
            setContentList(response.data.content);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch content', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingContent) {
                await apiService.updateContent(editingContent._id, formData);
                toast({ title: 'Content updated successfully!' });
            } else {
                await apiService.createContent(formData);
                toast({ title: 'Content created successfully!' });
            }
            setShowForm(false);
            setEditingContent(null);
            resetForm();
            fetchContent();
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to save content', variant: 'destructive' });
        }
    };

    const handleEdit = (content: any) => {
        setEditingContent(content);
        setFormData({
            title: content.title,
            body: content.body,
            type: content.type,
            isPublished: content.isPublished || false,
            isFeatured: content.isFeatured || false,
            publishDate: content.publishDate ? content.publishDate.split('T')[0] : '',
        });
        setShowForm(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this content?')) {
            try {
                await apiService.deleteContent(id);
                toast({ title: 'Content deleted successfully!' });
                fetchContent();
            } catch (error) {
                toast({ title: 'Error', description: 'Failed to delete content', variant: 'destructive' });
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            body: '',
            type: '',
            isPublished: false,
            isFeatured: false,
            publishDate: '',
        });
    };

    if (loading) {
        return <div className="p-6">Loading content...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Content Management</h2>
                    <p className="text-gray-600">Manage your organization's content.</p>
                </div>
                <Button onClick={() => { setShowForm(true); setEditingContent(null); resetForm(); }}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Content
                </Button>
            </div>

            {showForm && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingContent ? 'Edit Content' : 'Create New Content'}</CardTitle>
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
                                    <Label htmlFor="type">Type</Label>
                                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="article">Article</SelectItem>
                                            <SelectItem value="blog">Blog</SelectItem>
                                            <SelectItem value="news">News</SelectItem>
                                            <SelectItem value="event">Event</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="body">Body</Label>
                                <Textarea
                                    id="body"
                                    value={formData.body}
                                    onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center mt-6">
                                    <input
                                        id="isPublished"
                                        type="checkbox"
                                        checked={formData.isPublished}
                                        onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                                        className="mr-2"
                                    />
                                    <Label htmlFor="isPublished">Published</Label>
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
                                <div>
                                    <Label htmlFor="publishDate">Publish Date</Label>
                                    <Input
                                        id="publishDate"
                                        type="date"
                                        value={formData.publishDate}
                                        onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">{editingContent ? 'Update' : 'Create'}</Button>
                                <Button type="button" variant="outline" onClick={() => { setShowForm(false); setEditingContent(null); resetForm(); }}>Cancel</Button>
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
                            <th className="px-4 py-2 border-b">Type</th>
                            <th className="px-4 py-2 border-b">Published</th>
                            <th className="px-4 py-2 border-b">Featured</th>
                            <th className="px-4 py-2 border-b">Publish Date</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentList.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">No content found.</td>
                            </tr>
                        ) : (
                            contentList.map((content: any) => (
                                <tr key={content._id}>
                                    <td className="px-4 py-2 border-b">{content.title}</td>
                                    <td className="px-4 py-2 border-b capitalize">{content.type}</td>
                                    <td className="px-4 py-2 border-b">{content.isPublished ? 'Yes' : 'No'}</td>
                                    <td className="px-4 py-2 border-b">{content.isFeatured ? 'Yes' : 'No'}</td>
                                    <td className="px-4 py-2 border-b">{content.publishDate ? content.publishDate.split('T')[0] : ''}</td>
                                    <td className="px-4 py-2 border-b">
                                        <Button size="sm" variant="outline" className="mr-2" onClick={() => handleEdit(content)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive" onClick={() => handleDelete(content._id)}>
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

export default ContentManagement; 