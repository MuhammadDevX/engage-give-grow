import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
console.log("Api base url", API_BASE_URL)
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
  // Authentication
  login: (data: any) => api.post('/auth/login', data),
  register: (data: any) => api.post('/auth/register', data),
  getCurrentUser: () => api.get('/auth/me'),

  // Programs
  getPrograms: (params?: any) => api.get('/programs', { params }),
  getProgram: (id: string) => api.get(`/programs/${id}`),
  createProgram: (data: any) => api.post('/programs', data),
  updateProgram: (id: string, data: any) => api.put(`/programs/${id}`, data),
  deleteProgram: (id: string) => api.delete(`/programs/${id}`),

  // Donations
  getDonations: (params?: any) => api.get('/donations', { params }),
  createDonation: (data: any) => api.post('/donations', data),
  updateDonation: (id: string, data: any) => api.put(`/donations/${id}`, data),
  getDonationStats: () => api.get('/donations/stats'),
  deleteDonation: (id: string) => api.delete(`/donations/${id}`),

  // Impact
  getImpactStats: (params?: any) => api.get('/impact', { params }),
  getImpactStatsAggregated: () => api.get('/impact/stats'),
  createImpact: (data: any) => api.post('/impact', data),
  updateImpact: (id: string, data: any) => api.put(`/impact/${id}`, data),
  deleteImpact: (id: string) => api.delete(`/impact/${id}`),

  // Content
  getContent: (params?: any) => api.get('/content', { params }),
  getContentItem: (id: string) => api.get(`/content/${id}`),
  createContent: (data: any) => api.post('/content', data),
  updateContent: (id: string, data: any) => api.put(`/content/${id}`, data),
  deleteContent: (id: string) => api.delete(`/content/${id}`),

  // Contact
  getContacts: (params?: any) => api.get('/contacts', { params }),
  createContact: (data: any) => api.post('/contacts', data),
  updateContact: (id: string, data: any) => api.put(`/contacts/${id}`, data),
  deleteContact: (id: string) => api.delete(`/contact/${id}`),


  // Newsletter
  getNewsletterSubscribers: (params?: any) => api.get('/newsletter', { params }),
  subscribeNewsletter: (data: any) => api.post('/newsletter', data),
  unsubscribeNewsletter: (email: string) => api.delete(`/newsletter/${email}`),

  // Partners
  getPartners: (params?: any) => api.get('/partners', { params }),
  createPartner: (data: any) => api.post('/partners', data),
  updatePartner: (id: string, data: any) => api.put(`/partners/${id}`, data),
  deletePartner: (id: string) => api.delete(`/partners/${id}`),

  // Users
  getUsers: (params?: any) => api.get('/users', { params }),
  createUser: (data: any) => api.post('/users', data),
  updateUser: (id: string, data: any) => api.put(`/users/${id}`, data),
  deleteUser: (id: string) => api.delete(`/users/${id}`),

  // Settings
  getSettings: (params?: any) => api.get('/settings', { params }),
  updateSetting: (key: string, value: any) => api.put(`/settings/${key}`, { value }),
};

export default api;
