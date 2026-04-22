"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    text: "we_lancer transformed our vision into a reality. Their attention to detail and performance optimization is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder of Bloom",
    text: "The AI automation they built for us saved us over 20 hours a week. Truly a game-changer for our operations.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Product Lead at Nexus",
    text: "Fast delivery, clean code, and a stunning UI. They are our go-to partner for all things digital.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">Client Success Stories</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] relative shadow-xl shadow-slate-200/40 border border-slate-100"
            >
              <Quote className="absolute top-8 right-10 text-cosmos/5 w-16 h-16" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-cosmos text-cosmos" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-10 leading-relaxed text-lg">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cosmos to-[#043d2c] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-cosmos/20 flex-shrink-0">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
