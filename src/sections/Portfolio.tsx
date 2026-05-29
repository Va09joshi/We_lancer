"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PieChart, Code2, CheckCircle2 } from "lucide-react";

// The projects/images data
const projects = [
  {
    title: "E-Commerce Titan",
    category: "Web Application",
    image: "/images/portfolio/tech-1.png",
  },
  {
    title: "HealthSync Mobile",
    category: "Mobile App",
    image: "/images/portfolio/tech-2.png",
  },
  {
    title: "AI Chat Assistant",
    category: "AI Solution",
    image: "/images/portfolio/tech-3.png",
  },
];

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for different collage elements
  const ySlow = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yFast = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="portfolio" ref={containerRef} className="py-32 relative overflow-hidden bg-white">
      
      {/* ── Background Map / Grid Pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#20294c" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
          {/* Abstract map lines */}
          <path d="M 100 100 L 300 200 L 250 400 L 400 500" fill="none" stroke="#20294c" strokeWidth="4" />
          <path d="M 800 100 L 600 300 L 700 600 L 900 800" fill="none" stroke="#20294c" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#20294c] tracking-tighter leading-tight"
          >
            Digital Ecosystems,<br />
            <span className="text-[#a1a1aa]">beautifully arranged.</span>
          </motion.h2>
        </div>

        {/* ── Masonry Collage Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[160px] gap-6">
          
          {/* 1. Large Project Image (Span 8x2) */}
          <motion.div 
            style={{ y: ySlow }}
            className="md:col-span-4 md:row-span-2 relative rounded-[32px] overflow-hidden group shadow-[0_8px_30px_rgba(32,41,76,0.08)] bg-[#f0f1f5] border border-[#dddfe9]"
          >
            <Image 
              src={projects[0].image} 
              alt={projects[0].title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#20294c]/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start gap-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-white tracking-widest">
                {projects[0].category}
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight leading-none">
                {projects[0].title}
              </h3>
            </div>
          </motion.div>

          {/* 2. The Custom "Fintech Matrix" Code Editor Mockup (Span 8x3) */}
          <motion.div 
            style={{ y: yReverse }}
            className="md:col-span-8 md:row-span-3 relative bg-white rounded-[32px] p-8 shadow-[0_12px_40px_rgba(32,41,76,0.06)] border border-[#dddfe9] flex flex-col mt-8 md:mt-0"
          >
            {/* Floating Badge */}
            <div className="absolute -top-6 right-6 md:right-12 bg-white rounded-2xl shadow-[0_12px_30px_rgba(32,41,76,0.12)] border border-[#f0f1f5] p-3 flex items-center gap-4 z-20 transition-transform hover:scale-105 duration-300">
              <div className="w-10 h-10 rounded-full bg-[#375390] text-white font-black text-[12px] flex items-center justify-center shadow-inner">
                WL
              </div>
              <div className="flex flex-col pr-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#979db5]">Active Project</span>
                <span className="text-sm font-black text-[#20294c]">Fintech Matrix</span>
              </div>
            </div>

            {/* Browser Dots */}
            <div className="flex gap-2 mb-8">
              <div className="w-3.5 h-3.5 rounded-full bg-[#c7cbdb]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#c7cbdb]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#c7cbdb]"></div>
            </div>

            {/* Segmented Control */}
            <div className="bg-[#f4f5f8] rounded-full p-2 flex mb-8 w-full">
              <div className="flex-1 bg-[#459af8] text-white text-xs font-bold py-2.5 rounded-full text-center shadow-md cursor-pointer">CODE</div>
              <div className="flex-1 text-[#676b89] text-xs font-bold py-2.5 text-center cursor-pointer hover:text-[#20294c]">DESIGN</div>
              <div className="flex-1 text-[#676b89] text-xs font-bold py-2.5 text-center cursor-pointer hover:text-[#20294c]">LAUNCH</div>
            </div>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6 px-2">
              <div className="w-12 h-12 bg-[#f0f1f5] rounded-2xl flex items-center justify-center text-[#375390]">
                <Code2 size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-black text-[#20294c] tracking-tight">Clean, Performant Architecture</h3>
                <span className="text-[11px] font-mono text-[#459af8] font-bold">98+ LightHouse Score</span>
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 bg-[#f0f1f5] rounded-3xl p-6 md:p-8 flex flex-col font-mono text-[13px] md:text-[14px] leading-[1.8] overflow-hidden">
              <div className="text-[#676b89] mb-4">{"// Initialize we_lancer Engine"}<br/>
                <span className="text-[#20294c] font-bold">import</span> {"{"} build, scale {"}"} <span className="text-[#20294c] font-bold">from</span> <span className="text-[#459af8]">&quot;@we-lancer/core&quot;</span>;
              </div>
              
              <div className="text-[#20294c] mb-4 font-medium">
                <span className="font-bold">const</span> project = build({"{"}<br/>
                <span className="pl-6 block">stack: [<span className="text-[#459af8]">&quot;Next.js&quot;</span>, <span className="text-[#459af8]">&quot;AI Agent&quot;</span>, <span className="text-[#459af8]">&quot;Tailwind&quot;</span>],</span>
                <span className="pl-6 block">lighthouse: <span className="text-[#459af8]">&quot;≥ 98 / 100&quot;</span>,</span>
                <span className="pl-6 block">scaleFactor: <span className="text-[#459af8]">&quot;Infinite&quot;</span></span>
                {"});"}
              </div>

              <div className="text-[#20294c] font-medium">
                <span className="font-bold text-[#459af8]">await</span> project.launch();
              </div>

              <div className="mt-auto pt-6 border-t border-[#dddfe9] flex justify-between items-center text-[11px] text-[#979db5] font-bold">
                <span className="flex items-center gap-1.5 text-[#459af8]"><CheckCircle2 size={14} /> Build pipeline active</span>
                <span>v1.0.0</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Project Image Vertical (Span 4x2) */}
          <motion.div 
            style={{ y: ySlow }}
            className="md:col-span-4 md:row-span-2 relative rounded-[32px] overflow-hidden group shadow-[0_8px_30px_rgba(32,41,76,0.08)] bg-[#f0f1f5] border border-[#dddfe9]"
          >
            <Image 
              src={projects[1].image} 
              alt={projects[1].title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20294c]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
              <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                {projects[1].title}
              </h3>
              <span className="text-xs font-bold uppercase text-[#979db5] tracking-widest">
                {projects[1].category}
              </span>
            </div>
          </motion.div>

          {/* 4. Abstract Feature: Icon for that (Span 4x1) */}
          <motion.div 
            style={{ y: yReverse }}
            className="md:col-span-4 md:row-span-1 bg-[#f8f9fc] rounded-[32px] flex flex-col items-center justify-center border border-[#f0f1f5] shadow-[0_4px_20px_rgba(32,41,76,0.04)]"
          >
            <span className="text-sm font-bold text-[#20294c] mb-4">Precision analytics</span>
            <div className="w-12 h-12 bg-[#20294c] rounded-[14px] flex items-center justify-center shadow-lg">
              <PieChart size={20} className="text-white" />
            </div>
          </motion.div>

          {/* 5. Last Project Image (Span 4x1) */}
          <motion.div 
            style={{ y: yFast }}
            className="md:col-span-4 md:row-span-1 relative rounded-[32px] overflow-hidden group shadow-[0_4px_20px_rgba(32,41,76,0.04)] bg-[#f0f1f5] border border-[#dddfe9]"
          >
            <Image 
              src={projects[2].image} 
              alt={projects[2].title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
             <div className="absolute inset-0 bg-black/40 pointer-events-none transition-opacity group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
               <h3 className="text-xl font-black text-white tracking-tight">
                  {projects[2].title}
                </h3>
            </div>
          </motion.div>

        </div>
        
        {/* Paragraph text acting like the side text in the image */}
        <div className="mt-20 max-w-xl mx-auto text-center relative z-20">
          <div className="w-10 h-10 bg-[#e2e4ec] rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-[#20294c] font-black italic">W</span>
          </div>
          <p className="text-[#676b89] text-lg font-medium leading-relaxed">
            The <span className="text-[#459af8] font-bold">we_lancer</span> engine smartly categorises architecture patterns to appropriate deployments, ensuring high velocity scaling without manual tracking.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
