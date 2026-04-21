"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Particles from "@/components/Particles";

const projects = [
  {
    title: "E-Commerce Titan",
    category: "Web Application",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/images/portfolio/tech-1.png",
  },
  {
    title: "HealthSync Mobile",
    category: "Mobile App",
    tech: ["React Native", "Firebase"],
    image: "/images/portfolio/tech-2.png",
  },
  {
    title: "AI Chat Assistant",
    category: "AI Solution",
    tech: ["OpenAI", "Python"],
    image: "/images/portfolio/tech-3.png",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Performance Tool",
    tech: ["React", "D3.js", "Tailwind"],
    image: "/images/portfolio/tech-4.png",
  },
];

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section id="portfolio" ref={containerRef} className="h-[200vh] bg-black relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <Particles quantity={40} color="#0B8F6C" />
        
        {/* Header Content */}
        <div className="max-w-7xl mx-auto px-6 w-full mb-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmos/10 text-cosmos text-[9px] font-black uppercase tracking-[0.3em] mb-2"
          >
            <span className="w-1 h-1 rounded-full bg-cosmos animate-pulse" />
            Portfolio Reel
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Selected <span className="text-gradient">Impact.</span>
          </h2>
        </div>

        {/* Horizontal Moving Container */}
        <motion.div style={{ x }} className="flex gap-4 px-6 md:px-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[60vw] md:w-[24vw] h-[35vh] md:h-[40vh] group"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Project Info Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-cosmos text-[8px] font-black uppercase tracking-[0.4em]">
                      {project.category}
                    </span>
                    <span className="text-white/20 text-3xl font-black italic">0{index + 1}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tighter group-hover:text-cosmos transition-colors duration-500">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 2).map((t: string) => (
                        <span key={t} className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-bold text-gray-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black rounded-full font-black text-[8px] uppercase tracking-[0.3em]"
                    >
                      View <ArrowUpRight size={12} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Final "View All" Slide */}
          <div className="flex-shrink-0 w-[60vw] md:w-[18vw] h-[35vh] md:h-[40vh] flex flex-col items-center justify-center bg-[#05110E] rounded-[2rem] border border-cosmos/20 p-8 text-center">
            <h4 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter italic leading-tight">
              Build your <br /> <span className="text-gradient">Vision.</span>
            </h4>
            <button className="px-4 py-2 bg-cosmos text-white rounded-full font-black text-[8px] uppercase tracking-[0.3em]">View All</button>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-cosmos origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
