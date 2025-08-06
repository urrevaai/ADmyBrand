'use client';

import { motion } from 'framer-motion';
import { Brain, Target, Zap, BarChart3, Users, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create compelling marketing content in seconds with our advanced AI writing assistant powered by the latest language models.'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Reach your ideal customers with precision targeting algorithms that analyze behavior patterns and preferences.'
    },
    {
      icon: Zap,
      title: 'Automated Campaigns',
      description: 'Set up and run marketing campaigns on autopilot with intelligent optimization and real-time adjustments.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into campaign performance with comprehensive analytics and actionable recommendations.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Understand your audience better with AI-powered customer segmentation and behavioral analysis.'
    },
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'Safeguard your brand reputation with AI monitoring and automated response systems across all channels.'
    }
  ];

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
            Powerful{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the advanced AI capabilities that will transform your marketing strategy 
            and drive unprecedented results for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;