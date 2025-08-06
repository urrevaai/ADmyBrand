'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ quote, name, role, company, rating, delay = 0 }: TestimonialCardProps) => {
  return (
    <Card delay={delay} className="h-full">
      <div className="flex items-start mb-4">
        <Quote className="w-8 h-8 text-blue-400 mr-3 flex-shrink-0 mt-1" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
      
      <p className="text-white/90 mb-6 leading-relaxed italic">"{quote}"</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-semibold text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-white/70 text-sm">{role}</p>
          <p className="text-blue-400 text-sm">{company}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;