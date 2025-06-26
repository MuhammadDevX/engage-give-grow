import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProgramsManagement from "./pages/admin/ProgramsManagement";
import ContactsManagement from "./pages/admin/ContactsManagement";
import ImpactManagement from "./pages/admin/ImpactManagement";
import ContentManagement from "./pages/admin/ContentManagement";
import DonationsManagement from "./pages/admin/DonationsManagement";
import UsersManagement from "./pages/admin/UsersManagement";
import NewsletterManagement from "./pages/admin/NewsletterManagement";
import PartnersManagement from "./pages/admin/PartnersManagement";
import SettingsManagement from "./pages/admin/SettingsManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="programs" element={<ProgramsManagement />} />
            <Route path="contacts" element={<ContactsManagement />} />
            <Route path="impact" element={<ImpactManagement />} />
            <Route path="content" element={<ContentManagement />} />
            <Route path="donations" element={<DonationsManagement />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="newsletter" element={<NewsletterManagement />} />
            <Route path="partners" element={<PartnersManagement />} />
            <Route path="settings" element={<SettingsManagement />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
