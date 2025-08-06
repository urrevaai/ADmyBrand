'use client';

import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI uses advanced language models trained on marketing best practices to generate compelling content that matches your brand voice. Simply provide context and guidelines, and the AI creates high-quality copy for ads, emails, social media, and more."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing tools?",
      answer: "Yes! We offer seamless integrations with popular marketing platforms including HubSpot, Mailchimp, Google Ads, Facebook Ads, Salesforce, and many more. Our API also allows custom integrations with your proprietary systems."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can explore all capabilities and see how ADmyBRAND transforms your marketing before making any commitment."
    },
    {
      question: "How accurate are the AI insights and recommendations?",
      answer: "Our AI insights achieve 95%+ accuracy by analyzing millions of data points from successful campaigns. The system continuously learns and improves, providing increasingly precise recommendations tailored to your specific industry and audience."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 chat support, detailed documentation, video tutorials, webinars, and dedicated account managers for Enterprise plans. Our team is committed to ensuring your success with the platform."
    },
    {
      question: "Is my data secure with ADmyBRAND?",
      answer: "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 certification. Your data is stored securely and never shared with third parties without your explicit consent."
    },
    {
      question: "Can I customize the AI to match my brand voice?",
      answer: "Yes! Our AI can be trained on your existing content to understand and replicate your unique brand voice, tone, and style. This ensures all generated content maintains consistency with your brand identity across all channels."
    },
    {
      question: "What's included in the Enterprise plan?",
      answer: "Enterprise plans include white-label solutions, custom AI training, dedicated infrastructure, advanced security features, SLA guarantees, dedicated account management, priority support, and custom integrations tailored to your specific needs."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get answers to common questions about ADmyBRAND AI Suite and how it can 
            transform your marketing strategy.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;