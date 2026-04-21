"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Layout, 
  Zap, 
  TrendingUp 
} from "lucide-react";
import Particles from "@/components/Particles";

const services = [
  {
    title: "Web Development",
    description: "Modern, scalable web applications built with Next.js, React, and high-performance technologies.",
    icon: Globe,
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile experiences that engage users on iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "AI Automation",
    description: "Streamline your workflows with custom AI agents and intelligent automation tools.",
    icon: Cpu,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and stunning interfaces designed with user psychology and modern aesthetics.",
    icon: Layout,
  },
  {
    title: "Performance Optimization",
    description: "Boost your search rankings and user retention with lightning-fast load times.",
    icon: Zap,
  },
  {
    title: "Scaling Strategy",
    description: "Data-driven insights and infrastructure scaling to grow your digital presence.",
    icon: TrendingUp,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <Particles quantity={40} color="#0B8F6C" />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-cosmos/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-cosmos-light/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cosmos/10 text-cosmos text-[11px] font-bold uppercase tracking-[0.25em] mb-8 mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-cosmos animate-pulse" />
            WHAT WE DO BEST
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tighter leading-[1.1]">
            Our Core <br />
            <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed mt-8 font-medium">
            Delivering exceptional results through expertise, innovation, and high-performance technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.2)"
              }}
              className="bg-[#FDFBF7] p-12 rounded-[3.5rem] group transition-all duration-500 relative cursor-pointer border border-[#F3EFE9] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
            >
              <div className="w-20 h-20 rounded-[1.8rem] flex items-center justify-center mb-10 bg-white shadow-sm group-hover:bg-cosmos transition-all duration-500 group-hover:rotate-[10deg]">
                <div className="relative z-10 transition-all duration-500 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-cosmos group-hover:text-white transition-colors duration-500" />
                </div>
              </div>
              
              <h3 className="text-2xl font-extrabold mb-5 text-slate-900 tracking-tight group-hover:text-cosmos transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>
              
              {/* Subtle Border Hover Effect */}
              <div className="absolute inset-0 rounded-[3.5rem] border-2 border-transparent group-hover:border-cosmos/10 transition-all duration-500 pointer-events-none" />
              
              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-cosmos scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
