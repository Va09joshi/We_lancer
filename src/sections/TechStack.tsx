"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  Cloud, 
  Database, 
  Terminal, 
  ShieldCheck 
} from "lucide-react";
import Particles from "@/components/Particles";

const technologies = [
  { name: "React", icon: <Code2 />, color: "#61DAFB" },
  { name: "Next.js", icon: <Layers />, color: "#ffffff" },
  { name: "TypeScript", icon: <Globe />, color: "#3178C6" },
  { name: "Node.js", icon: <Cpu />, color: "#339933" },
  { name: "Python", icon: <Terminal />, color: "#3776AB" },
  { name: "Docker", icon: <Cloud />, color: "#2496ED" },
  { name: "AWS", icon: <ShieldCheck />, color: "#FF9900" },
  { name: "PostgreSQL", icon: <Database />, color: "#4169E1" },
];

const TechCard = ({ tech, index }: { tech: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col items-center justify-center gap-6 p-10 rounded-[2.5rem] bg-[#05110E] border border-white/5 transition-all duration-500 hover:border-cosmos/30 hover:bg-cosmos/5"
    >
      <div 
        style={{ transform: "translateZ(50px)", color: tech.color }}
        className="w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-125"
      >
        {React.cloneElement(tech.icon as React.ReactElement, { size: 56 })}
      </div>
      <span 
        style={{ transform: "translateZ(30px)" }}
        className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors"
      >
        {tech.name}
      </span>
      
      {/* Dynamic Glow */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]"
        style={{ backgroundColor: tech.color }}
      />
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden text-white">
      <Particles quantity={40} color="#0B8F6C" />
      
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-[0.02]">
        <h2 className="text-[40rem] font-black whitespace-nowrap select-none">
          TECH STACK
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmos/10 text-cosmos text-[10px] font-black uppercase tracking-[0.3em] mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cosmos animate-pulse" />
              Technology First
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
              Powered by <br />
              <span className="text-gradient">Modern Tech.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed mb-16">
              We don&apos;t just write code; we architect high-performance digital ecosystems that are built to scale.
            </p>
            
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="flex flex-col gap-2">
                <p className="text-6xl font-black text-white tracking-tighter">500+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-black">Success Projects</p>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block" />
              <div className="flex flex-col gap-2">
                <p className="text-6xl font-black text-cosmos tracking-tighter">200+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-black">Trusted Clients</p>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block" />
              <div className="flex flex-col gap-2">
                <p className="text-6xl font-black text-white tracking-tighter">50+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-black">Core Expertise</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
