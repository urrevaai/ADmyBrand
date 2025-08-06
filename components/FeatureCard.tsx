'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from "lucide-react";
import Card from './Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <Card delay={delay} className="text-center group" hover={true}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
        className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-glow"
      >
        <Icon className="w-10 h-10 text-white relative z-10" />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.8 }}
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              style={{
                left: `${25 + i * 15}%`,
                top: `${25 + i * 15}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.5 }}
        className="text-2xl font-bold text-white mb-6 kinetic-text group-hover:text-blue-300 transition-colors duration-300"
      >
        {title}
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.6, duration: 0.5 }}
        className="text-white/70 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300"
      >
        {description}
      </motion.p>
    </Card>
  );
};

export default FeatureCard;
