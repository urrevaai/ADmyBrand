'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Brain, Cpu } from 'lucide-react';
import { useRef } from 'react';
import Button from './Button';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <motion.section 
      ref={ref}
      style={{ y, opacity, scale }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Kinetic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-6 h-6 bg-purple-400 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, 360],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Floating Icons */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 float-complex"
            >
              <Brain className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 float-complex"
              style={{ animationDelay: '2s' }}
            >
              <Zap className="w-8 h-8 text-purple-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 float-complex"
              style={{ animationDelay: '4s' }}
            >
              <Cpu className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full glass-morphism text-white/90 text-sm mb-12 pulse-glow"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="kinetic-text">Introducing Neural Marketing Intelligence</span>
          </motion.div>
          
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight font-display"
            >
              <div className="kinetic-text">Transform Your</div>
              <div className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent gradient-shift text-shimmer">
                  Marketing
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl -z-10"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>
              <div className="kinetic-text">Reality</div>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Experience the convergence of artificial intelligence and creative brilliance. 
            <span className="text-white/90 font-medium"> ADmyBRAND AI Suite</span> transforms 
            marketing into an art form with neural networks, predictive analytics, and 
            morphing content generation.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <Button size="lg" className="group relative overflow-hidden px-12 py-5">
            <span className="relative z-10 text-lg font-semibold flex items-center">
              Start Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
          </Button>
          
          <Button variant="secondary" size="lg" className="group perspective-card px-10 py-5">
            <span className="flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Experience Demo
            </span>
          </Button>
        </motion.div>

        {/* Enhanced Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { number: '2.5M+', label: 'Neural Connections', icon: Brain },
            { number: '99.7%', label: 'Prediction Accuracy', icon: Zap },
            { number: '∞', label: 'Creative Possibilities', icon: Sparkles }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-morphism rounded-3xl p-8 border border-white/20 perspective-card group cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <div className="text-4xl font-bold text-white mb-3 kinetic-text">{stat.number}</div>
              <div className="text-white/70 font-medium">{stat.label}</div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;