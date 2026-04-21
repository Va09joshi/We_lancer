"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "rgba(255, 215, 0, 0.3)" : "rgba(11, 143, 108, 0.2)",
          borderColor: isPointer ? "#FFD700" : "#0B8F6C",
        }}
        className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300"
      >
        <div className={`w-1 h-1 rounded-full ${isPointer ? 'bg-yellow-500' : 'bg-cosmos'}`} />
        
        {/* Connection/Pulse rings */}
        {isPointer && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-yellow-500"
          />
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
