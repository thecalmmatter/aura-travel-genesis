import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500"
          >
            <Compass className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Vistaro
          </span>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {["Features", "How it Works", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white/80 hover:text-white transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
