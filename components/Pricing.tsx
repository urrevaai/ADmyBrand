'use client';

import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import PricingCalculator from './PricingCalculator';

const Pricing = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'AI Content Generation',
        'Basic Analytics',
        'Email Marketing',
        '5 Campaign Templates',
        'Standard Support'
      ]
    },
    {
      title: 'Professional',
      price: '$99',
      period: '/month',
      features: [
        'Everything in Starter',
        'Advanced AI Features',
        'Multi-channel Campaigns',
        'Custom Templates',
        'A/B Testing',
        'Priority Support'
      ],
      popular: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Professional',
        'White-label Solution',
        'Custom AI Training',
        'Dedicated Account Manager',
        'API Access',
        '24/7 Phone Support'
      ]
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
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Select the perfect plan for your business needs. All plans include our core AI features 
            with scalable options as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;