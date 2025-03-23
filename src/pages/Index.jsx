import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Include the Navbar */}
      <main className="flex-grow">
        <Hero /> {/* Hero Section */}
        <Features /> {/* Features Section */}
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to revolutionize your crowd management?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Join thousands of venues and event organizers who trust CrowdSafe for their safety needs. Get started today with a free demo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all">
                  Request Demo
                </button>
                <button className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/70 transition-colors">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default Index;