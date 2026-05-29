"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Code2, Layers, Sparkles } from "lucide-react";

// --- Custom SVG Brand Logos ---

const NextJsLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 16V8l8 8V8" />
  </svg>
);

const ReactLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
  </svg>
);

const TailwindLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 10c2.5-3 5.5-3 7.5 0s5-3 7.5 0" />
    <path d="M4.5 15c2.5-3 5.5-3 7.5 0s5-3 7.5 0" />
  </svg>
);

const NodeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" />
    <path d="M12 6L7 9v6l5 3 5-3V9L12 6z" />
  </svg>
);

const PostgresLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
    <path d="M8 9h8M8 12h8M8 15h8" stroke="#ffffff" strokeLinecap="round" />
  </svg>
);

interface Tech {
  id: string;
  name: string;
  category: string;
  version: string;
  metric: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const technologies: Tech[] = [
  {
    id: "tech-1",
    name: "Next.js",
    category: "FRAMEWORK",
    version: "v14.x",
    metric: "100/100",
    icon: <NextJsLogo className="w-6 h-6" />,
    iconBg: "#E5E7EB", // Light Gray
    iconColor: "#111827", // Dark
  },
  {
    id: "tech-2",
    name: "React Native",
    category: "MOBILE",
    version: "v0.74",
    metric: "60 FPS",
    icon: <ReactLogo className="w-6 h-6" />,
    iconBg: "rgba(97,218,251,0.15)",
    iconColor: "#61DAFB",
  },
  {
    id: "tech-3",
    name: "Tailwind CSS",
    category: "STYLING",
    version: "v3.4",
    metric: "< 10KB",
    icon: <TailwindLogo className="w-6 h-6" />,
    iconBg: "rgba(56,189,248,0.15)",
    iconColor: "#38BDF8",
  },
  {
    id: "tech-4",
    name: "Node.js",
    category: "BACKEND",
    version: "v20 LTS",
    metric: "50ms",
    icon: <NodeLogo className="w-6 h-6" />,
    iconBg: "rgba(51,153,51,0.15)",
    iconColor: "#339933",
  },
  {
    id: "tech-5",
    name: "PostgreSQL",
    category: "DATABASE",
    version: "v16.x",
    metric: "ACID",
    icon: <PostgresLogo className="w-6 h-6" />,
    iconBg: "rgba(65,105,225,0.15)",
    iconColor: "#4169E1",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll-linked parallax effect for the tech cards column
  const columnY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-white"
      aria-labelledby="tech-stack-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
          
          {/* ── Left Column: Parallax Vertical Tech Stack ── */}
          <motion.div 
            style={{ y: columnY }}
            className="w-full lg:w-5/12 relative"
          >
            {/* Subtle background container like the phone shape in the image */}
            <div 
              className="absolute inset-0 bg-[#f0f1f5] rounded-[2rem] -z-10" 
              style={{ transform: "scale(1.05) translateY(-2%)" }}
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-3"
            >
              {technologies.map((tech) => (
                <motion.article
                  key={tech.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#f0f1f5] group hover:border-[#dddfe9] transition-colors"
                  style={{
                    boxShadow: "rgba(32, 41, 76, 0.04) 0px 4px 12px 0px",
                  }}
                >
                  {/* Left: Icon & Name */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 duration-300"
                      style={{ backgroundColor: tech.iconBg, color: tech.iconColor }}
                    >
                      {tech.icon}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-black text-[#20294c] tracking-tight">
                        {tech.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#979db5]">
                        {tech.version}
                      </span>
                    </div>
                  </div>

                  {/* Right: Metric & Tag */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto border-t sm:border-t-0 border-[#f0f1f5] pt-3 sm:pt-0">
                    <span className="text-xl font-black text-[#20294c] tracking-tight">
                      {tech.metric}
                    </span>
                    <div className="px-2 py-1 bg-[#f0f1f5] rounded-md mt-1 border border-[#e2e4ec]">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#20294c] flex items-center gap-1">
                        <Code2 size={10} />
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column: Headline & SEO Content ── */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center pt-8 lg:pt-16">
            
            {/* Header Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
              className="w-16 h-16 rounded-[16px] bg-gradient-to-br from-[#459af8] to-[#375390] flex items-center justify-center mb-10 shadow-[0_8px_24px_rgba(69,154,248,0.3)]"
            >
              <Layers size={32} className="text-white" />
            </motion.div>

            {/* Massive SEO Headline */}
            <motion.h2 
              id="tech-stack-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-7xl font-black text-[#20294c] tracking-tighter leading-[1.02] mb-8"
              style={{ letterSpacing: "-0.04em" }}
            >
              Stop building legacy software manually.
            </motion.h2>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <div className="px-4 py-2 rounded-full border border-[#dddfe9] flex items-center gap-2 bg-white shadow-sm">
                <Sparkles size={14} className="text-[#459af8]" />
                <span className="text-sm font-bold text-[#20294c]">Next-Gen Architecture</span>
              </div>
              <div className="px-4 py-2 rounded-full border border-[#dddfe9] flex items-center gap-2 bg-white shadow-sm">
                <Sparkles size={14} className="text-[#459af8]" />
                <span className="text-sm font-bold text-[#20294c]">Edge Deployed</span>
              </div>
            </motion.div>

            {/* SEO Optimised Paragraph */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-[#676b89] font-medium leading-relaxed max-w-2xl"
            >
              It&apos;s easy to fall behind with outdated stacks, sluggish load times, and poor developer experience. It&apos;s hard to be diligent with performance when you have to scale manually. We deploy a modern frontend and robust enterprise backend ecosystem that automatically scales, categorises, and optimises data. So you can relax and focus on things that are more important than fighting legacy code.
            </motion.p>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
