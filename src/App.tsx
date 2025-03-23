import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Fixed typo here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Emergency from './pages/Emergency';
import Events from './pages/Events';
import SignIn from './pages/SignIn'; // Fixed case sensitivity
import SignUp from './pages/SignUp'; // Fixed case sensitivity
import CrowdDensity from './pages/CrowdDensity'; // Import the CrowdDensity page
import { AnimatePresence } from 'framer-motion';

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/events" element={<Events />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/crowd-density" element={<CrowdDensity />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;