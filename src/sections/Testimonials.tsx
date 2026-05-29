"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <span className="btn-pill inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#459af8] animate-pulse" />
              CLIENT STORIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#20294c] leading-[0.95] mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Trusted by builders <br />
            <span className="text-gradient">around the world.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#676b89] text-lg max-w-lg mx-auto leading-relaxed font-medium"
          >
            Don&apos;t just take our word for it. Here&apos;s what our partners say about working with us.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative"
          style={{
            background: "#f0f1f5",
            borderRadius: "24px",
            padding: "48px 24px",
            boxShadow: "rgba(32, 41, 76, 0.07) 0px 4px 11px 0px, rgba(32, 41, 76, 0.12) 0px 1px 3px 0px",
          }}
        >
          <TestimonialsCarousel />
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { metric: "150+", label: "Global Clients" },
            { metric: "98%", label: "Satisfaction Rate" },
            { metric: "350+", label: "Projects Shipped" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center px-6 py-4 rounded-[12px]"
              style={{
                background: "#ffffff",
                border: "1px solid #dddfe9",
                boxShadow: "rgba(32, 41, 76, 0.07) 0px 4px 11px 0px",
              }}
            >
              <p
                className="text-2xl font-black text-[#20294c]"
                style={{ letterSpacing: "-0.04em" }}
              >
                {item.metric}
              </p>
              <p className="text-[10px] font-mono text-[#979db5] uppercase tracking-widest mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
