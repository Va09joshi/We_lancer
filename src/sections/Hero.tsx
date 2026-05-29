"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const words = ["Web Apps", "Mobile Apps", "AI Agents"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [words.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 22 },
    },
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#ffffff] pt-28 pb-16">
      {/* Whisper Gray subtle grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(32,41,76,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,41,76,0.04) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Soft light gradient radial bleed */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 20%, rgba(69,154,248,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* ── Left Column 60% ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Category pill tag */}
            <motion.div variants={itemVariants} className="mb-8 w-fit">
              <span className="btn-pill inline-flex items-center gap-2">
                <Sparkles size={12} className="text-[#459af8]" />
                Partner for Build, Launch, Scale
              </span>
            </motion.div>

            {/* Inline Image Typography Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-[#20294c] mb-8 leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              We craft{" "}
              <span
                className="inline-block align-middle mx-2 sm:mx-3 rounded-full overflow-hidden border border-[#c7cbdb] relative shadow-[rgba(32,41,76,0.1)_0px_1px_4px_0px]"
                style={{ width: "clamp(48px,5vw,80px)", height: "clamp(28px,3vw,44px)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                  alt="premium graphic"
                  fill
                  className="object-cover"
                  priority
                />
              </span>
              ambitious
              <br />
              <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>digital</span>
                <span
                  className="inline-block align-middle rounded-full overflow-hidden border border-[#c7cbdb] relative shadow-[rgba(32,41,76,0.1)_0px_1px_4px_0px]"
                  style={{ width: "clamp(48px,5vw,80px)", height: "clamp(28px,3vw,44px)" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                    alt="design layout"
                    fill
                    className="object-cover"
                    priority
                  />
                </span>
                <span className="text-gradient">ecosystems.</span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-[#676b89] text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium"
            >
              Building premium, custom-tailored{" "}
              <span className="text-[#20294c] font-semibold">{words[index]}</span>{" "}
              that combine precise visual architecture with lightning-fast engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center gap-3 text-sm group text-center"
              >
                Initiate Project Brief
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-secondary text-sm text-center">
                Review Works
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Column 40% — Hero Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.35 }}
            className="lg:col-span-5 relative w-full aspect-square"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image 
                src="/images/portfolio/flutter-hero.png" 
                alt="Welancer App Development Illustration" 
                fill 
                className="object-contain mix-blend-multiply opacity-95 drop-shadow-[0_20px_40px_rgba(69,154,248,0.15)]" 
                priority 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
