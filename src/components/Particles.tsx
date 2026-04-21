"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const Particles = ({ quantity = 40, color = "#0B8F6C" }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: quantity }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [quantity]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            opacity: 0, 
            x: `${p.x}vw`, 
            y: `${p.y}vh` 
          }}
          animate={{
            opacity: [0, 0.4, 0],
            x: [`${p.x}vw`, `${p.x + (Math.random() * 20 - 10)}vw`],
            y: [`${p.y}vh`, `${p.y + (Math.random() * 20 - 10)}vh`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: color,
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
