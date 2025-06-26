
import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    toast({
      title: 'Error',
      description: message,
      variant: 'destructive',
    });
    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // Programs
  getPrograms: () => api.get('/programs'),
  getProgram: (id: string) => api.get(`/programs/${id}`),
  createProgram: (data: any) => api.post('/programs', data),
  updateProgram: (id: string, data: any) => api.put(`/programs/${id}`, data),
  deleteProgram: (id: string) => api.delete(`/programs/${id}`),

  // Donations
  getDonations: () => api.get('/donations'),
  createDonation: (data: any) => api.post('/donations', data),
  updateDonation: (id: string, data: any) => api.put(`/donations/${id}`, data),

  // Impact
  getImpactStats: () => api.get('/impact'),
  createImpact: (data: any) => api.post('/impact', data),
  updateImpact: (id: string, data: any) => api.put(`/impact/${id}`, data),

  // Content
  getContent: (type?: string) => api.get(`/content${type ? `?type=${type}` : ''}`),
  createContent: (data: any) => api.post('/content', data),
  updateContent: (id: string, data: any) => api.put(`/content/${id}`, data),
  deleteContent: (id: string) => api.delete(`/content/${id}`),

  // Contact
  getContacts: () => api.get('/contacts'),
  createContact: (data: any) => api.post('/contacts', data),
  updateContact: (id: string, data: any) => api.put(`/contacts/${id}`, data),

  // Newsletter
  getNewsletterSubscribers: () => api.get('/newsletter'),
  subscribeNewsletter: (data: any) => api.post('/newsletter', data),
  unsubscribeNewsletter: (email: string) => api.delete(`/newsletter/${email}`),

  // Partners
  getPartners: () => api.get('/partners'),
  createPartner: (data: any) => api.post('/partners', data),
  updatePartner: (id: string, data: any) => api.put(`/partners/${id}`, data),
  deletePartner: (id: string) => api.delete(`/partners/${id}`),

  // Users
  getUsers: () => api.get('/users'),
  createUser: (data: any) => api.post('/users', data),
  updateUser: (id: string, data: any) => api.put(`/users/${id}`, data),
  deleteUser: (id: string) => api.delete(`/users/${id}`),

  // Settings
  getSettings: () => api.get('/settings'),
  updateSetting: (key: string, value: any) => api.put(`/settings/${key}`, { value }),
};

export default api;
