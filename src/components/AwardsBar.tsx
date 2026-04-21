"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Star, Trophy } from "lucide-react";

const awards = [
  { icon: <Shield size={24} />, title: "AWS CERTIFIED", subtitle: "PROFESSIONAL" },
  { icon: <Star size={24} />, title: "TOP RATED AGENCY", subtitle: "2023 & 2024" },
  { icon: <Award size={24} />, title: "DIGITAL MARKETING", subtitle: "CERTIFIED" },
  { icon: <Trophy size={24} />, title: "EXCELLENCE AWARD", subtitle: "CERTIFIED PROF." },
];

const AwardsBar = () => {
  return (
    <div className="bg-black border-y border-white/5 py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="text-cosmos-light mb-4 group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-white mb-1 uppercase">
                {award.title}
              </h4>
              <p className="text-[10px] font-medium text-gray-500 tracking-wider uppercase">
                {award.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsBar;
