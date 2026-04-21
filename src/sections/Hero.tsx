"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Particles from "@/components/Particles";
import MagneticButton from "@/components/MagneticButton";

const Hero = () => {
  const words = ["Web Apps", "Mobile Apps", "AI Solutions"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cosmos/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[180px]"
        />
      </div>

      <Particles quantity={50} color="#FFD700" />
      <Particles quantity={30} color="#0B8F6C" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-cosmos-light text-[9px] font-bold uppercase tracking-[0.2em] mb-6 relative"
          >
            <div className="absolute inset-0 bg-cosmos/20 rounded-full animate-pulse" />
            <Sparkles size={12} className="relative z-10" />
            <span className="relative z-10">Empowering Your Digital Future</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.85]"
          >
            Build. Launch. <br />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <span className="text-white">Scale</span>
              <div className="h-[1.2em] overflow-visible flex items-center justify-center min-w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="text-gradient-yellow drop-shadow-[0_0_20px_rgba(255,193,7,0.3)] block px-4"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-medium"
          >
            Your premium partner for high-performance <span className="text-white">digital ecosystems</span> that scale with your ambitions.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <button className="btn-primary flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 text-sm group">
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="btn-secondary w-full sm:w-auto px-8 py-3 text-sm border border-white/10 hover:border-cosmos/50 transition-colors">
                View Portfolio
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 z-[-1] opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />
    </section>
  );
};

export default Hero;
