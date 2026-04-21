"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Shield, Clock } from "lucide-react";
import Particles from "@/components/Particles";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Expert Developers", value: "12" },
  ];

  const strengths = [
    {
      icon: <Rocket className="text-cosmos" />,
      title: "Fast Delivery",
      desc: "We prioritize efficiency without compromising on quality."
    },
    {
      icon: <Shield className="text-cosmos" />,
      title: "Reliable Tech",
      desc: "Using the most stable and modern stacks for your project."
    },
    {
      icon: <Clock className="text-cosmos" />,
      title: "24/7 Support",
      desc: "We&apos;re always here to help you scale and troubleshoot."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <Particles quantity={30} color="#0B8F6C" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
              Why Choose <br />
              <span className="text-gradient">we_lancer</span>?
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-lg">
              We are a team of dedicated creators, developers, and strategists. Our mission is to bridge the gap between complex technology and intuitive user experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-[1.5rem] text-center border border-slate-100 shadow-sm">
                  <p className="text-3xl font-extrabold text-cosmos">{stat.value}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {strengths.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 rounded-[2rem] hover:bg-slate-50 transition-all duration-300 group border border-transparent hover:border-slate-100"
              >
                <div className="w-16 h-16 bg-cosmos/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-cosmos group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{s.title}</h3>
                  <p className="text-slate-500 text-lg">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
