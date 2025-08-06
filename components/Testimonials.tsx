'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in engagement within the first month.",
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      rating: 5
    },
    {
      quote: "The AI content generation is incredible. It understands our brand voice perfectly and creates compelling copy that converts.",
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "StartupLab",
      rating: 5
    },
    {
      quote: "Customer insights feature helped us understand our audience better than ever before. ROI improved by 250% in just 3 months.",
      name: "Emily Johnson",
      role: "Growth Manager",
      company: "ScaleUp Solutions",
      rating: 5
    },
    {
      quote: "The automation capabilities saved us 20+ hours per week. Now we can focus on strategy while AI handles the execution.",
      name: "David Park",
      role: "Marketing Manager",
      company: "InnovateCorp",
      rating: 5
    },
    {
      quote: "Best marketing tool we've ever used. The analytics are incredibly detailed and the AI recommendations are spot-on.",
      name: "Lisa Thompson",
      role: "CMO",
      company: "GrowthTech",
      rating: 5
    },
    {
      quote: "Implementation was seamless and the results were immediate. Our conversion rates doubled in the first quarter.",
      name: "James Wilson",
      role: "Founder",
      company: "NextGen Media",
      rating: 5
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Marketing Teams
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See what industry leaders are saying about ADmyBRAND AI Suite and how it's 
            transforming their marketing results.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getCurrentTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={`${currentIndex}-${index}`}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={goToPrevious}
              className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-blue-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;