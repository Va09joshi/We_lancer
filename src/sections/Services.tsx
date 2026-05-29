"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ToggleRight, Copy, Command } from "lucide-react";

// --- Custom Mockup Components ---

const WebMockup = () => (
  <div className="bg-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(32,41,76,0.06)] w-full max-w-[280px] border border-[#f0f1f5]">
    <div className="flex justify-between items-center mb-4 text-[10px] font-black tracking-widest text-[#979db5]">
      <span>ENVIRONMENT</span>
      <span className="text-[#459af8]">PRODUCTION ▼</span>
    </div>
    <div className="flex justify-between items-center mb-5">
      <span className="text-xs font-semibold text-[#676b89]">EDGE NETWORK</span>
      <ToggleRight size={24} className="text-[#4ade80]" />
    </div>
    <div className="flex gap-2">
      <button className="flex-1 py-2.5 bg-[#20294c] border border-[#20294c] rounded-xl text-xs font-bold text-white shadow-sm transition-transform hover:scale-[1.02]">
        Deploy Web App
      </button>
      <button className="p-2.5 bg-white border border-[#dddfe9] rounded-xl text-[#20294c] shadow-sm flex items-center justify-center hover:bg-[#f0f1f5]">
        <Download size={16} />
      </button>
    </div>
  </div>
);

const AppMockup = () => (
  <div className="bg-white rounded-b-2xl p-5 shadow-[0_8px_24px_rgba(32,41,76,0.06)] w-full max-w-[280px] border-x border-b border-[#f0f1f5]">
    <div className="flex justify-between items-center py-3 border-b border-dashed border-[#f0f1f5]">
      <div className="flex flex-col">
        <span className="text-[10px] font-black tracking-widest text-[#979db5]">BUNDLE ID</span>
        <span className="text-sm font-semibold text-[#20294c]">io.welancer.app</span>
      </div>
      <Copy size={16} className="text-[#a1a1aa] cursor-pointer hover:text-[#459af8]" />
    </div>
    <div className="flex justify-between items-center pt-4 pb-2">
      <div className="flex flex-col">
        <span className="text-[10px] font-black tracking-widest text-[#979db5]">LATEST BUILD</span>
        <span className="text-sm font-semibold text-[#20294c]">v2.4.1 (Stable)</span>
      </div>
      <Copy size={16} className="text-[#a1a1aa] cursor-pointer hover:text-[#459af8]" />
    </div>
  </div>
);

const UIMockup = () => (
  <div className="relative w-full max-w-[320px] flex justify-center items-center">
    <div className="absolute w-px h-8 bg-[#979db5] top-1/2 left-1/2 -translate-x-1/2 mt-6" />
    <div className="bg-[#f0f1f5] p-2 rounded-[20px] flex gap-2 z-10 shadow-[0_4px_12px_rgba(32,41,76,0.04)]">
      <div className="px-4 py-3 bg-[#4ade80] rounded-2xl flex flex-col items-center">
        <span className="text-[10px] font-bold text-white/90">Incoming</span>
        <span className="text-sm font-black text-white">+25,860</span>
      </div>
      <div className="px-4 py-3 bg-[#60a5fa] rounded-2xl flex flex-col items-center shadow-lg transform -translate-y-2">
        <span className="text-[10px] font-bold text-white/90">Engaged</span>
        <span className="text-sm font-black text-white">4,860</span>
      </div>
      <div className="px-4 py-3 bg-[#f87171] rounded-2xl flex flex-col items-center">
        <span className="text-[10px] font-bold text-white/90">Bounced</span>
        <span className="text-sm font-black text-white">-3,969</span>
      </div>
    </div>
    <div className="absolute top-1/2 mt-16 flex gap-6 text-[10px] font-bold text-[#a1a1aa]">
      <span>Feb</span><span>Apr</span><span className="text-[#20294c]">Jun</span><span>Aug</span>
    </div>
  </div>
);

const AIMockup = () => (
  <div className="bg-white rounded-2xl px-5 py-4 shadow-[0_12px_32px_rgba(32,41,76,0.08)] w-full max-w-[340px] border border-[#f0f1f5] flex items-center gap-3">
    <Command size={18} className="text-[#a1a1aa]" />
    <span className="text-sm font-medium text-[#979db5]">E.g. generate a marketing strategy...</span>
  </div>
);


const servicesData = [
  {
    id: 1,
    mockup: <WebMockup />,
    mockupAlign: "items-end pb-8", // push mockup slightly down/up based on reference
    title: "Web Development",
    description: (
      <>
        Architect and deploy <strong>Web Applications</strong> without losing performance or temper.
      </>
    ),
  },
  {
    id: 2,
    mockup: <AppMockup />,
    mockupAlign: "items-start pt-0", 
    title: "Mobile App Development",
    description: (
      <>
        Evict poor UX with fluid <strong>Mobile Apps</strong> crafted for modern devices.
      </>
    ),
  },
  {
    id: 3,
    mockup: <UIMockup />,
    mockupAlign: "items-center",
    title: "Data & Analytics",
    description: (
      <>
        Build high-performance <strong>Analytics Dashboards</strong> that process heavy data without dropping a single frame.
      </>
    ),
  },
  {
    id: 4,
    mockup: <AIMockup />,
    mockupAlign: "items-center",
    title: "AI Integrations",
    description: (
      <>
        Engineer native <strong>AI Prompts & Agents</strong> directly into your software, moving beyond simple API wrappers.
      </>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 md:py-40 bg-[#f8f9fc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Majestic Consistent Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 w-fit mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#f0f1f5] text-[#20294c] text-[10px] font-black uppercase tracking-widest shadow-sm">
              01 / DIGITAL CAPABILITIES
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#20294c] tracking-tighter leading-[0.95]"
          >
            Capabilities engineered <br className="hidden md:block" /> to build the future.
          </motion.h2>
        </div>

        {/* 2x2 Bento Grid - Symmetrical Visual Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
              className="bg-white border border-[#eef0f6] rounded-[32px] p-8 md:p-12 flex flex-col justify-between overflow-hidden min-h-[440px] shadow-[0_15px_50px_rgba(32,41,76,0.02)] hover:shadow-[0_25px_60px_rgba(32,41,76,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              {/* Top Half: UI Mockup */}
              <div className={`flex justify-center flex-1 w-full ${service.mockupAlign} pointer-events-none select-none`}>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                  className="w-full flex justify-center"
                >
                  {service.mockup}
                </motion.div>
              </div>

              {/* Bottom Half: Typography with Left Line */}
              <div className="mt-12 flex">
                {/* Thin accent line */}
                <div className="w-[3px] bg-[#459af8] mr-5 shrink-0 h-auto rounded-full" />
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black text-[#20294c] tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-[#676b89] leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
