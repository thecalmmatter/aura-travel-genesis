
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Airplane, Briefcase, Calendar, Chat, Compass, FileText, Rocket } from 'lucide-react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ChatInterface from '../components/ChatInterface';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <motion.div style={{ opacity }} className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
