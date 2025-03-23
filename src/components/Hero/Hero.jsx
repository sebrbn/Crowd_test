import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Shield, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-center items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            <span className="mr-1 text-xs">🔒</span> Advanced Safety Technology
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block">The intelligent</span>
            <span className="text-primary">crowd management</span>
            <span className="block">solution</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Revolutionize how you manage crowds and evacuations with our AI-powered platform. Ensure safety, optimize flow, and be prepared for any emergency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/emergency"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all"
            >
              Emergency Mode
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center p-3"
            >
              <div className="mb-2 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Enhanced Safety</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center text-center p-3"
            >
              <div className="mb-2 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Real-time Monitoring</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center text-center p-3"
            >
              <div className="mb-2 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Detailed Analytics</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;