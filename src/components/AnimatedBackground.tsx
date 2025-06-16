
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        >
          <div
            className={`w-${4 + i * 2} h-${4 + i * 2} ${
              i % 3 === 0
                ? 'bg-gradient-to-r from-pink-400/20 to-purple-400/20'
                : i % 3 === 1
                ? 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'
                : 'bg-gradient-to-r from-green-400/20 to-yellow-400/20'
            } ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'} backdrop-blur-sm`}
          />
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
          </linearGradient>
        </defs>
        
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 200} 0 Q ${i * 200 + 100} 200 ${i * 200 + 200} 400 T ${i * 200 + 600} 800`}
            stroke="url(#line-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 1.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
