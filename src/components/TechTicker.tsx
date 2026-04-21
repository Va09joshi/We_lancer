"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tech = [
  { name: "Next.js", id: "nextjs" },
  { name: "React", id: "react" },
  { name: "TypeScript", id: "ts" },
  { name: "Tailwind", id: "tailwind" },
  { name: "Node.js", id: "nodejs" },
  { name: "GraphQL", id: "graphql" },
  { name: "PostgreSQL", id: "postgres" },
  { name: "AWS", id: "aws" },
  { name: "Vercel", id: "vercel" },
  { name: "Firebase", id: "firebase" },
  { name: "Docker", id: "docker" },
  { name: "Framer", id: "framer" },
];

const TechTicker = () => {
  // Triple the array to ensure no gaps in the infinite loop
  const duplicatedTech = [...tech, ...tech, ...tech];

  return (
    <div className="bg-[#000000] border-y border-white/5 py-8 overflow-hidden relative">
      {/* Side Glows */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div 
        animate={{ 
          x: [0, -2500] 
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {duplicatedTech.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="relative w-7 h-7 transition-all duration-300 group-hover:scale-125">
              <Image 
                src={`https://skillicons.dev/icons?i=${item.id}`} 
                alt={item.name} 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-sm font-extrabold tracking-widest text-white/20 group-hover:text-white transition-colors duration-300 uppercase">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTicker;
