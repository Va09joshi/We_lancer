"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Target,
  Lightbulb,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const stats = [
  { value: 350, suffix: "+", label: "DELIVERED SYSTEMS" },
  { value: 150, suffix: "+", label: "GLOBAL CLIENTS" },
  { value: 40, suffix: "+", label: "ENGINEERS & DESIGNERS" },
  { value: 98, suffix: "%", label: "SATISFACTION INDEX" },
];

const values = [
  {
    Icon: Zap,
    tag: "01 / VELOCITY",
    title: "Committed Delivery Speed",
    desc: "Strict adherence to agreed milestones. We treat engineering deadlines as professional commitments.",
  },
  {
    Icon: Target,
    tag: "02 / ARCHITECTURE",
    title: "Asymmetric Tailored Fits",
    desc: "We reject template-based engineering. Every layout, route, and data-flow is customized exactly for your goals.",
  },
  {
    Icon: Lightbulb,
    tag: "03 / INTEGRITY",
    title: "Double-Helix Competence",
    desc: "Equal mastery over physical visual taste (design systems) and high-performance system engineering (Edge deployment).",
  },
  {
    Icon: MessageSquare,
    tag: "04 / SYNERGY",
    title: "High-Agency Communication",
    desc: "Direct access to lead builders. Zero telephone game, regular asynchronous updates, and absolute transparency.",
  },
];

function CountUp({ target, suffix, duration = 1.5 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const totalFrames = Math.round(duration * 60);
    const increment = target / totalFrames;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono tracking-tighter">
      {count}{suffix}
    </span>
  );
}

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-[#f8f9fc] relative overflow-hidden">
      {/* Dark Top Half */}
      <div className="bg-[#20294c] pt-32 pb-48 md:pb-64 px-6 relative z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-8 w-fit"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                OPERATIONAL STATEMENT
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter mb-8"
              style={{ letterSpacing: "-0.04em" }}
            >
              Why we are chosen <br />
              to build the exceptional.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium max-w-lg"
            >
              We operate as high-agency execution partners to ship robust digital products that actually convert, perform, and scale.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Floating Overlapping Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-24 md:-mt-40 mb-24">
        {/* Stats Row - Floating Card */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_rgba(32,41,76,0.12)] border border-[#f0f1f5] grid grid-cols-2 lg:grid-cols-4 gap-y-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`text-center lg:text-left ${i !== 0 ? "lg:border-l lg:border-[#dddfe9] lg:pl-10" : ""}`}
            >
              <p
                className="text-4xl md:text-6xl font-black text-[#20294c] mb-3"
                style={{ letterSpacing: "-0.04em" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[9px] font-mono text-[#979db5] tracking-widest font-black uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-24">

        {/* Values Grid + Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Value Bento Panel (Unified professional card container with internal thin border dividers) */}
          <div className="lg:col-span-8 bg-white border border-[#eef0f6] rounded-[32px] shadow-[0_20px_50px_rgba(32,41,76,0.03)] grid grid-cols-1 md:grid-cols-2 overflow-hidden h-fit">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group cursor-pointer p-8 lg:p-10 flex flex-col justify-start transition-all duration-300 hover:bg-[#459af8]/[0.01] ${
                  i === 0 ? "border-b md:border-r border-[#eef0f6]" :
                  i === 1 ? "border-b border-[#eef0f6]" :
                  i === 2 ? "border-b md:border-b-0 md:border-r border-[#eef0f6]" :
                  "border-[#eef0f6]"
                }`}
              >
                {/* Monospace monoline badge index */}
                <span className="font-mono text-[9px] font-black text-[#979db5] tracking-widest mb-5 block">
                  {v.tag}
                </span>

                {/* Blueprint rounded icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 bg-[#f8f9fc] border border-[#f0f1f5] group-hover:bg-[#459af8] group-hover:border-[#459af8] group-hover:shadow-[0_8px_20px_rgba(69,154,248,0.2)]"
                >
                  <v.Icon className="text-[#459af8] group-hover:text-white transition-colors duration-300" size={18} />
                </div>

                <div>
                  <h3
                    className="text-lg font-black text-[#20294c] mb-3 transition-colors duration-300 group-hover:text-[#459af8] tracking-tight"
                  >
                    {v.title}
                  </h3>
                  <p className="text-[#676b89] leading-relaxed text-sm font-medium">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* UI Mockup Highlight Card */}
          <div className="lg:col-span-4 h-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-full flex flex-col bg-white border border-[#f0f1f5] rounded-[24px] shadow-[0_20px_60px_rgba(32,41,76,0.08)] relative overflow-hidden group"
            >
              {/* Browser/App Header */}
              <div className="px-6 py-4 border-b border-[#f0f1f5] flex items-center justify-between bg-[#f8f9fc]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#979db5]">Billing Dashboard</p>
              </div>

              {/* Mockup Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-[#20294c] tracking-tight mb-2">Transparent Financials.</h3>
                  <p className="text-[#676b89] text-sm font-medium">Zero hidden line-items.</p>
                </div>

                {/* Simulated Invoice Items */}
                <div className="space-y-3 mb-8 flex-1">
                  {[
                    { label: "Frontend Architecture", amount: "$4,500" },
                    { label: "Backend API Integration", amount: "$3,200" },
                    { label: "Edge Deployment", amount: "$850" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#f8f9fc] border border-[#f0f1f5] group-hover:border-[#459af8]/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#459af8]" />
                        </div>
                        <span className="text-xs font-bold text-[#20294c]">{item.label}</span>
                      </div>
                      <span className="text-xs font-black text-[#676b89]">{item.amount}</span>
                    </div>
                  ))}
                </div>

                {/* Total & Action */}
                <div className="pt-6 border-t border-[#f0f1f5] flex items-end justify-between mt-auto">
                  <div>
                    <p className="text-[10px] font-black text-[#979db5] uppercase tracking-widest mb-1">Total Milestone</p>
                    <p className="text-xl font-black text-[#20294c]">$8,550</p>
                  </div>
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-full bg-[#20294c] text-white flex items-center justify-center hover:bg-[#459af8] transition-colors hover:scale-110 shadow-lg"
                  >
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Culture / Doodle Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 bg-white rounded-[32px] p-8 md:p-12 border border-[#f0f1f5] shadow-[0_8px_30px_rgba(32,41,76,0.04)] relative overflow-hidden flex flex-col items-center justify-center"
        >
           <div className="relative w-full max-w-4xl aspect-square md:aspect-[4/3]">
             <Image 
               src="/welancer-doodle.png" 
               alt="Welancer Developer Culture Doodle" 
               fill 
               className="object-contain mix-blend-multiply opacity-95" 
               priority
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
