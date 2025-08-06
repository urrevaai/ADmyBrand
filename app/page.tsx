'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import PricingCalculator from '@/components/PricingCalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MorphingBlobs from '@/components/MorphingBlobs';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.9, 0.7, 0.5]);

  return (
    <div ref={containerRef} className="relative">
      {/* Dynamic Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0 will-change-transform"
        style={{ y: backgroundY, scale: backgroundScale, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/25 to-indigo-600/30 gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.1),rgba(147,51,234,0.1),rgba(59,130,246,0.1))]" />
      </motion.div>

      {/* Morphing Background Blobs */}
      <MorphingBlobs />

      {/* Content */}
      <div className="relative z-20">
        <Hero />
        <Features />
        <Pricing />
        <PricingCalculator />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}