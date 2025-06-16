
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const sampleMessages: Omit<Message, 'id' | 'timestamp'>[] = [
    { text: "I want to plan a luxury vacation to Japan", isUser: true },
    { text: "✨ Amazing choice! I'll help you discover the perfect Japanese experience. Let me show you some incredible destinations...", isUser: false },
    { text: "What about cherry blossom season?", isUser: true },
    { text: "🌸 Perfect timing! Here are 5 stunning locations for cherry blossom viewing...", isUser: false }
  ];

  useEffect(() => {
    if (currentMessageIndex < sampleMessages.length) {
      const timer = setTimeout(() => {
        const newMessage: Message = {
          id: Date.now(),
          ...sampleMessages[currentMessageIndex],
          timestamp: new Date()
        };

        if (!newMessage.isUser) {
          setIsTyping(true);
          setTimeout(() => {
            setMessages(prev => [...prev, newMessage]);
            setIsTyping(false);
            setCurrentMessageIndex(prev => prev + 1);
          }, 2000);
        } else {
          setMessages(prev => [...prev, newMessage]);
          setCurrentMessageIndex(prev => prev + 1);
        }
      }, currentMessageIndex === 0 ? 1000 : 3000);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  const resetChat = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsTyping(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-pink-500/20 to-blue-500/20 border-b border-white/10 p-4">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-10 h-10 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-white">AI Travel Concierge</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/70">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'
                      : 'bg-white/20 backdrop-blur-sm text-white border border-white/10'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-start"
              >
                <div className="bg-white/20 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: i * 0.2
                        }}
                        className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chat Input */}
        <div className="border-t border-white/10 p-4">
          <div className="flex space-x-2">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button
                onClick={resetChat}
                className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white border-0 rounded-full font-semibold"
              >
                Try It Now
              </Button>
            </motion.div>
          </div>
          <p className="text-xs text-white/50 text-center mt-2">
            Experience AI-powered travel planning
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatInterface;
