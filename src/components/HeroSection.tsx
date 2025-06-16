
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ChatInterface from './ChatInterface';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: y1 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Your AI Travel
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-pink-400 bg-clip-text text-transparent">
              Concierge
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
          >
            From inspiration to memories - experience travel like{' '}
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text font-semibold">
              never before
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white border-0 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Start Planning
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ✨
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
          >
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                50K+
              </motion.div>
              <div className="text-white/60 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                150+
              </motion.div>
              <div className="text-white/60 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
              >
                24/7
              </motion.div>
              <div className="text-white/60 text-sm">AI Support</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="flex justify-center"
        >
          <ChatInterface />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
