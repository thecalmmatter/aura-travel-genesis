
import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Briefcase, FileText, Plane, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Compass,
    emoji: '💡',
    title: 'Inspiration Agent',
    description: 'Discover dream destinations tailored to your unique travel style and preferences',
    gradient: 'from-pink-400 to-purple-500'
  },
  {
    icon: Calendar,
    emoji: '📋',
    title: 'Planning Agent',
    description: 'Perfect itineraries & deals crafted with precision and local expertise',
    gradient: 'from-purple-400 to-blue-500'
  },
  {
    icon: Briefcase,
    emoji: '💳',
    title: 'Booking Agent',
    description: 'Seamless reservations across flights, hotels, and experiences worldwide',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: FileText,
    emoji: '🎒',
    title: 'Pre-Trip Agent',
    description: 'Travel preparation made effortless with personalized checklists and tips',
    gradient: 'from-cyan-400 to-green-500'
  },
  {
    icon: Plane,
    emoji: '✈️',
    title: 'In-Trip Agent',
    description: 'Real-time assistance and recommendations throughout your journey',
    gradient: 'from-green-400 to-yellow-500'
  },
  {
    icon: MessageCircle,
    emoji: '📝',
    title: 'Post-Trip Agent',
    description: 'Feedback & learning to make every future trip even more amazing',
    gradient: 'from-yellow-400 to-pink-500'
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Six Specialized Agents,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-pink-400 bg-clip-text text-transparent">
              One Perfect Journey
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Each AI agent is expertly trained to handle specific aspects of your travel experience,
            working together seamlessly to create unforgettable adventures.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-3xl mb-2">{feature.emoji}</div>
                    <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
                
                <motion.div
                  className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
