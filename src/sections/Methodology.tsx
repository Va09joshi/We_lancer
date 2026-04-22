"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Lightbulb, 
  Search, 
  Code2, 
  TestTube2, 
  Rocket, 
  Wrench 
} from "lucide-react";
import Particles from "@/components/Particles";

const steps = [
  {
    id: 1,
    title: "Discovery",
    desc: "We dive deep into your business goals and user needs to create a solid foundation.",
    icon: Search,
  },
  {
    id: 2,
    title: "Planning",
    desc: "Architecting the perfect solution with a clear roadmap and strategic milestones.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Development",
    desc: "Clean, scalable code built with modern technologies and industry best practices.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Testing",
    desc: "Rigorous QA and user testing to ensure a bug-free, high-performance product.",
    icon: TestTube2,
  },
  {
    id: 5,
    title: "Launch",
    desc: "Seamless deployment and initial scaling to ensure your product hits the market strong.",
    icon: Rocket,
  },
  {
    id: 6,
    title: "Support",
    desc: "Ongoing maintenance, security updates, and continuous performance optimization.",
    icon: Wrench,
  },
];

const Methodology = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const progressRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="methodology" className="section-padding overflow-hidden relative text-white" style={{ background: 'linear-gradient(135deg, #021a0f 0%, #000000 40%, #031c12 70%, #000000 100%)' }}>
      {/* Visible Grid Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(to right, rgba(11,143,108,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,143,108,0.12) 1px, transparent 1px)`,
             backgroundSize: '60px 60px' 
           }} 
      />
      {/* Grid Radial Fade */}
      <div className="absolute inset-0 z-[2] pointer-events-none" 
           style={{ 
             background: 'radial-gradient(ellipse at center, transparent 30%, #000000 80%)' 
           }} 
      />

      {/* Premium Background Glows */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cosmos rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cosmos rounded-full blur-[180px]"
        />
      </div>

      <Particles quantity={50} color="#0B8F6C" />
      
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden">
        <motion.div style={{ rotate: progressRotate }} className="absolute top-20 left-10 text-cosmos"><Code2 size={300} /></motion.div>
        <motion.div style={{ rotate: -progressRotate }} className="absolute bottom-20 right-10 text-cosmos"><Rocket size={250} /></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cosmos/20 text-cosmos-light text-[9px] font-bold uppercase tracking-[0.3em] mb-6 mx-auto border border-cosmos/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cosmos animate-pulse" />
            Strategic Execution
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.85]">
            Engineered for <br />
            <span className="text-gradient-emerald">Precision.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We architect digital success through a rigorous, multi-stage methodology.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical Zig-Zag Line (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
            {/* Background Path */}
            <path 
              d={steps.map((step, i) => {
                const y = i * (100 / (steps.length - 1));
                const x = i % 2 === 0 ? 35 : 65;
                return `${i === 0 ? 'M' : 'L'} ${x}% ${y}%`;
              }).join(' ')}
              fill="none"
              stroke="rgba(11, 143, 108, 0.1)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* Animated Progress Path */}
            <motion.path 
              d={steps.map((step, i) => {
                const y = i * (100 / (steps.length - 1));
                const x = i % 2 === 0 ? 35 : 65;
                return `${i === 0 ? 'M' : 'L'} ${x}% ${y}%`;
              }).join(' ')}
              fill="none"
              stroke="#0B8F6C"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          
          <div className="space-y-24 md:space-y-48 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="relative group/step"
              >
                {/* Timeline Node (Alternating Sides) */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  style={{ left: index % 2 === 0 ? "35%" : "65%" }}
                  className="absolute top-0 w-12 h-12 bg-[#05110E] border-[4px] border-cosmos/20 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(11,143,108,0.2)] transition-all duration-500 group-hover/step:scale-110 group-hover/step:border-cosmos"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3.5 h-3.5 bg-cosmos rounded-full shadow-[0_0_10px_rgba(11,143,108,0.6)]" 
                  />
                </motion.div>

                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                  {/* Content Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} relative`}
                  >
                    {/* Oversized Background Number - visible */}
                    <div className={`absolute top-[-30%] ${index % 2 === 0 ? 'left-[-5%]' : 'right-[-5%]'} select-none -z-10`}>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[18rem] font-black leading-none text-transparent"
                        style={{ WebkitTextStroke: '2px rgba(11, 143, 108, 0.15)' }}
                      >
                        {step.id}
                      </motion.span>
                    </div>
                    
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} mb-6 relative z-10`}>
                      <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cosmos text-white mb-6 shadow-[0_5px_15px_rgba(11,143,108,0.3)] transition-transform duration-500 group-hover/step:scale-110"
                      >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Stage</span>
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black">{step.id}</span>
                      </motion.div>
                      <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-[0.85] group-hover/step:text-cosmos transition-colors duration-500">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-lg md:text-xl leading-snug font-medium max-w-md mx-auto md:mx-0">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Icon/Visual Side */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 flex justify-center perspective-1000"
                  >
                    <div className="w-36 h-36 md:w-48 md:h-48 bg-[#081814] rounded-[2rem] border border-cosmos/10 flex items-center justify-center relative group shadow-2xl transition-all duration-700 hover:border-cosmos/30 hover:-translate-y-4">
                      {/* Large number behind icon */}
                      <span className="absolute inset-0 flex items-center justify-center text-[8rem] md:text-[10rem] font-black text-cosmos/[0.07] select-none leading-none">
                        {step.id}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-cosmos/20 to-transparent rounded-[2rem]" />
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 p-6 bg-[#0A221C] rounded-[1.5rem] shadow-3xl border border-cosmos/20 group-hover:bg-cosmos group-hover:text-white transition-all duration-500"
                      >
                        <step.icon size={44} className="text-cosmos-light transition-transform duration-500 group-hover:scale-110 group-hover:text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
