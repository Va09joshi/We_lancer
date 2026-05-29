"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form Data:", data);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#459af8]/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#459af8]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 items-center">
        
        {/* Left Side: Typography */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f8f9fc] border border-[#f0f1f5]">
               <span className="text-[10px] font-black uppercase tracking-widest text-[#20294c]">Start a project</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-[#20294c] tracking-tighter leading-[1.05]">
              Let&apos;s build <br />
              the <span className="text-[#459af8]">impossible.</span>
            </h2>
            <p className="text-[#676b89] text-lg leading-relaxed mb-10 font-medium">
              We operate exclusively with ambitious brands looking to dominate their market through superior digital engineering.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:welancer.official@gmail.com" className="group flex items-center gap-6 p-4 rounded-2xl bg-[#f8f9fc] border border-[#f0f1f5] hover:border-[#459af8]/20 transition-colors">
                <div className="w-12 h-12 bg-[#459af8]/10 rounded-xl flex items-center justify-center text-[#459af8] group-hover:scale-110 group-hover:bg-[#459af8] group-hover:text-white transition-all">
                  <Send size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Direct Line</p>
                  <p className="font-bold text-[#20294c] tracking-tight">welancer.official@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#eef0f6] p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(32,41,76,0.04)] relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-[#4ade80]/10 text-[#4ade80] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-[#20294c] mb-4">Transmission Received.</h3>
                  <p className="text-[#676b89] font-medium mb-8">
                    Our lead strategists are reviewing your brief. We&apos;ll initiate contact within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-4 bg-[#f8f9fc] border border-[#f0f1f5] text-[#20294c] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#e4e6f1] transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-[#979db5] uppercase tracking-widest mb-2">Full Name</label>
                      <input 
                        {...register("name", { required: true })}
                        className="w-full bg-[#f8f9fc] border border-[#f0f1f5] rounded-xl px-5 py-4 text-[#20294c] font-bold placeholder:text-slate-400 focus:outline-none focus:border-[#459af8] focus:bg-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[#979db5] uppercase tracking-widest mb-2">Email Address</label>
                      <input 
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full bg-[#f8f9fc] border border-[#f0f1f5] rounded-xl px-5 py-4 text-[#20294c] font-bold placeholder:text-slate-400 focus:outline-none focus:border-[#459af8] focus:bg-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-[#979db5] uppercase tracking-widest mb-2">Project Type</label>
                      <select 
                        {...register("projectType")}
                        className="w-full bg-[#f8f9fc] border border-[#f0f1f5] rounded-xl px-5 py-4 text-[#20294c] font-bold focus:outline-none focus:border-[#459af8] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="web" className="bg-white text-[#20294c]">Web Application</option>
                        <option value="app" className="bg-white text-[#20294c]">Mobile Application</option>
                        <option value="ai" className="bg-white text-[#20294c]">AI Integration</option>
                        <option value="design" className="bg-white text-[#20294c]">Design System</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[#979db5] uppercase tracking-widest mb-2">Budget Range</label>
                      <select 
                        {...register("budget")}
                        className="w-full bg-[#f8f9fc] border border-[#f0f1f5] rounded-xl px-5 py-4 text-[#20294c] font-bold focus:outline-none focus:border-[#459af8] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="1-5k" className="bg-white text-[#20294c]">Starter ($1k - $5k)</option>
                        <option value="5-15k" className="bg-white text-[#20294c]">Scale ($5k - $15k)</option>
                        <option value="15k+" className="bg-white text-[#20294c]">Enterprise ($15k+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#979db5] uppercase tracking-widest mb-2">Project Brief</label>
                    <textarea 
                      {...register("message", { required: true })}
                      rows={4}
                      className="w-full bg-[#f8f9fc] border border-[#f0f1f5] rounded-xl px-5 py-4 text-[#20294c] font-bold placeholder:text-slate-400 focus:outline-none focus:border-[#459af8] focus:bg-white transition-all resize-none"
                      placeholder="Give us the high-level details..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 bg-[#459af8] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#3482d8] transition-colors flex items-center justify-center gap-3 group shadow-[0_8px_24px_rgba(69,154,248,0.25)] disabled:opacity-50"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "INITIATE PROJECT"} 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
