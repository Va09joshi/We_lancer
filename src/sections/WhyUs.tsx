"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Lightbulb, 
  MessageSquare, 
  DollarSign, 
  CheckCircle2 
} from "lucide-react";
import Particles from "@/components/Particles";

const stats = [
  { value: "350+", label: "Projects Successfully Delivered" },
  { value: "150+", label: "Global Clients" },
  { value: "40+", label: "Skilled Freelancers" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

const values = [
  {
    icon: <Zap className="text-cosmos-light" />,
    title: "Fast & Reliable Delivery",
    desc: "We respect deadlines like professionals. Get your projects delivered on time without compromising quality."
  },
  {
    icon: <Target className="text-cosmos-light" />,
    title: "Tailored Solutions",
    desc: "Every business is unique — we craft solutions specifically designed for your goals and audience."
  },
  {
    icon: <Lightbulb className="text-cosmos-light" />,
    title: "Creative + Technical Expertise",
    desc: "From UI/UX design to full-stack development, we blend creativity with technology seamlessly."
  },
  {
    icon: <MessageSquare className="text-cosmos-light" />,
    title: "Transparent Communication",
    desc: "Stay updated at every step with clear communication and zero confusion."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-[#000000] relative overflow-hidden">
      <Particles quantity={50} color="#0B8F6C" />
      {/* Fading Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(to bottom, transparent, #000000), linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)`,
             backgroundSize: '100% 100%, 40px 40px, 40px 40px' 
           }} 
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cosmos/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cosmos-light/5 rounded-full blur-[100px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cosmos/30 text-cosmos-light text-[10px] font-bold uppercase tracking-[0.2em] mb-6 mx-auto"
          >
            WHY US
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight"
          >
            Why <span className="text-gradient">we_lancer</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            We don&apos;t just build projects — we build digital experiences that convert, scale, and stand out. At we_lancer, we combine creative design, powerful development, and smart strategy to turn your ideas into real, revenue-generating products.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] text-center group hover:bg-white/5 transition-all border-white/5 hover:border-cosmos/20"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:text-cosmos-light transition-colors tracking-tighter">{stat.value}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Value Cards and Feature Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2.5rem] hover:bg-white/5 transition-all group border-white/5 hover:border-cosmos/20"
              >
                <div className="w-16 h-16 bg-cosmos/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cosmos group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base opacity-80">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full glass p-10 md:p-12 rounded-[2.5rem] border-cosmos/20 bg-gradient-to-br from-cosmos/10 to-transparent relative overflow-hidden group shadow-2xl shadow-cosmos/5"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-10 text-cosmos-light group-hover:scale-110 transition-transform">
                  <DollarSign size={32} />
                </div>
                <span className="text-[11px] font-bold text-cosmos-light uppercase tracking-[0.2em] mb-6 block">FEATURE HIGHLIGHT</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight tracking-tighter">Transparent Pricing</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={22} className="text-cosmos-light mt-1 shrink-0" />
                    <p className="text-gray-300 text-base italic leading-relaxed">&quot;No hidden costs. No surprises.&quot;</p>
                  </div>
                </div>
                <p className="text-gray-400 text-base leading-relaxed">
                  Just clear, honest pricing that helps you plan better and grow faster.
                </p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cosmos/20 rounded-full blur-[100px] z-0 opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
