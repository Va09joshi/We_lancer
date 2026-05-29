"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code2,
  TestTube2,
  Rocket,
  Wrench,
  RefreshCw,
} from "lucide-react";

// ... (skipping steps array content) ...
const steps = [
  {
    id: "01",
    title: "Discovery",
    label: "DISCOVERY",
    desc: "We dive deep into your business goals and user needs to create a solid strategic foundation.",
    icon: Search,
    metrics: { time: "Week 1-2", category: "STRATEGY", value: "Foundations" },
  },
  {
    id: "02",
    title: "Planning",
    label: "PLANNING",
    desc: "Architecting the perfect solution — a clear roadmap, precise milestones, zero ambiguity.",
    icon: Lightbulb,
    metrics: { time: "Week 2-3", category: "ARCHITECTURE", value: "Roadmaps" },
  },
  {
    id: "03",
    title: "Development",
    label: "DEVELOPMENT",
    desc: "Clean, scalable code built with modern technologies and industry-proven best practices.",
    icon: Code2,
    metrics: { time: "Week 3-10", category: "ENGINEERING", value: "Scale" },
  },
  {
    id: "04",
    title: "Testing",
    label: "TESTING",
    desc: "Rigorous QA and user testing to guarantee a bug-free, high-performance product.",
    icon: TestTube2,
    metrics: { time: "Week 10-11", category: "QUALITY", value: "Zero Bugs" },
  },
  {
    id: "05",
    title: "Launch",
    label: "LAUNCH",
    desc: "Seamless deployment and global scaling to ensure your product hits the market strong.",
    icon: Rocket,
    metrics: { time: "Week 12", category: "DEPLOYMENT", value: "Go Live" },
  },
  {
    id: "06",
    title: "Support",
    label: "SUPPORT",
    desc: "Ongoing maintenance, security updates, and continuous performance optimisation.",
    icon: Wrench,
    metrics: { time: "Ongoing", category: "MAINTENANCE", value: "100% Uptime" },
  },
];

const Methodology = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setActiveStep(0);
      setIsRefreshing(false);
    }, 500);
  };

  const currentStep = steps[activeStep];
  const Icon = currentStep.icon;

  return (
    <section
      id="methodology"
      className="relative overflow-hidden py-32 bg-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* ── Oversized Background Headline ── */}
        <div className="relative -mb-10 z-0 select-none pointer-events-none">
          <h2
            className="text-5xl md:text-[6rem] lg:text-[8rem] font-black text-[#20294c] tracking-tighter leading-none"
            style={{ opacity: 0.95 }}
          >
            Build, Ship, Scale
          </h2>
        </div>

        {/* ── Interactive Floating Bar ── */}
        <div className="relative z-20 mx-auto max-w-2xl px-4 sm:px-0">
          <motion.div
            layoutId="floating-bar"
            className="flex items-center justify-between rounded-xl px-6 py-4 shadow-xl"
            style={{
              background: "#4b4b57", // Dark graphite like the reference image
              boxShadow: "rgba(32, 41, 76, 0.2) 0px 15px 35px 0px",
            }}
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl font-light text-white leading-none"
              >
                |
              </motion.span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-medium text-white tracking-wide"
                >
                  {currentStep.label}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <button
              onClick={handleRefresh}
              className="text-[#a1a1aa] hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Reset selection"
            >
              <RefreshCw
                size={20}
                className={isRefreshing ? "animate-spin text-white" : ""}
              />
            </button>
          </motion.div>
        </div>

        {/* ── Step Navigation Pills ── */}
        <div className="mt-8 mb-16 relative z-10 flex flex-wrap justify-center gap-3 px-4">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-[#20294c] text-white border-[#20294c] shadow-md"
                    : "bg-white text-[#676b89] border-[#dddfe9] hover:border-[#979db5] hover:bg-[#f0f1f5]"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] ${
                    isActive ? "bg-white/20 text-white" : "bg-[#f0f1f5] text-[#979db5]"
                  }`}
                >
                  {step.id}
                </span>
                {step.label}
              </button>
            );
          })}
        </div>

        {/* ── Detailed Content Card ── */}
        <div className="mx-auto max-w-2xl relative z-10 px-4 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#dddfe9] text-left"
              style={{
                boxShadow: "rgba(32, 41, 76, 0.12) 0px 9px 25px 0px",
              }}
            >
              {/* Card Header Row */}
              <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-[#f0f1f5]">
                <h3 className="text-xl md:text-2xl font-black text-[#20294c] tracking-tight">
                  {currentStep.title}
                </h3>
                <span className="text-sm font-medium text-[#676b89]">
                  {currentStep.metrics.time}
                </span>
              </div>

              {/* Card Body Row */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-8 py-8 gap-6">
                
                {/* Main Content */}
                <div className="flex items-start gap-5 flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(69,154,248,0.1)" }}
                  >
                    <Icon size={24} className="text-[#459af8]" />
                  </div>
                  <div>
                    <p className="text-[#20294c] font-medium leading-relaxed text-base md:text-lg">
                      {currentStep.desc}
                    </p>
                  </div>
                </div>

                {/* Right Metrics / Tag */}
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-[#f0f1f5]">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style={{ background: "#f0f1f5" }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#20294c]">
                      {currentStep.metrics.category}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#676b89] mt-1 hidden md:block">
                    {currentStep.metrics.value}
                  </span>
                </div>
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Methodology;
