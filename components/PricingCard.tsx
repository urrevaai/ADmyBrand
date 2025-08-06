'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Button from './Button';
import Card from './Card';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

const PricingCard = ({ title, price, period, features, popular = false, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.4 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </motion.div>
      )}
      
      <Card delay={delay} className={`text-center h-full ${popular ? 'border-blue-500/40 bg-white/15' : ''}`}>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-white/70 ml-2">{period}</span>
        </div>

        <ul className="space-y-4 mb-8 text-left">
          {features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 + index * 0.1, duration: 0.4 }}
              className="flex items-center text-white/80"
            >
              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <Button 
          variant={popular ? 'primary' : 'secondary'} 
          className="w-full"
        >
          Get Started
        </Button>
      </Card>
    </motion.div>
  );
};

export default PricingCard;