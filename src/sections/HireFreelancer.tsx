"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Link as LinkIcon } from "lucide-react";

const HireFreelancer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [portfolio, setPortfolio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(portfolio) setIsSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="careers">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f8f9fc] rounded-[3rem] p-8 md:p-16 border border-[#f0f1f5] text-center shadow-[0_8px_32px_rgba(32,41,76,0.04)]"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10"
            >
              <div className="w-20 h-20 bg-[#4ade80]/10 text-[#4ade80] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-black text-[#20294c] mb-4">Application Received.</h3>
              <p className="text-[#676b89] font-medium max-w-md mx-auto text-lg">
                Our team will review your portfolio and reach out if there&apos;s a match.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e2e4ec] border border-[#d1d5e2] mb-8">
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#20294c]">Join the Network</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#20294c] tracking-tighter mb-6 leading-[1.1]">
                Think you have what it takes? <br/>
                <span className="text-[#459af8]">Drop your portfolio.</span>
              </h2>
              <p className="text-[#676b89] text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12">
                We&apos;re always looking for top-tier engineers and designers. Enter your link below and let your work speak for itself.
              </p>

              <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <LinkIcon size={20} className="text-[#a1a1aa]" />
                  </div>
                  <input
                    type="url"
                    required
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    placeholder="https://github.com/your-profile"
                    className="w-full pl-14 pr-6 py-5 bg-white border border-[#dddfe9] rounded-2xl focus:outline-none focus:border-[#459af8] focus:ring-4 focus:ring-[#459af8]/10 transition-all font-bold text-[#20294c] placeholder:text-[#a1a1aa] shadow-sm text-lg"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-8 py-5 bg-[#459af8] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#3482d8] transition-colors shadow-[0_8px_24px_rgba(69,154,248,0.25)] flex items-center justify-center gap-3 shrink-0"
                >
                  SUBMIT
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HireFreelancer;
