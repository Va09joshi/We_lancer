"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import Particles from "@/components/Particles";

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
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-black">
      <Particles quantity={40} color="#0B8F6C" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Build Something <span className="text-gradient">Epic</span></h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Fill out the form and our team will get back to you within 24 hours.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cosmos/10 rounded-full flex items-center justify-center text-cosmos-light">
                <Send size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-medium">welancer.offical@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-cosmos/20 text-cosmos-light rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-400 mb-8">Thank you for reaching out. We&apos;ll be in touch soon.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="btn-secondary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cosmos-light transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-1">Required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cosmos-light transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1">Invalid email</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                  <select 
                    {...register("projectType")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cosmos-light transition-colors"
                  >
                    <option value="web" className="bg-black">Web Development</option>
                    <option value="app" className="bg-black">App Development</option>
                    <option value="ai" className="bg-black">AI Solutions</option>
                    <option value="design" className="bg-black">UI/UX Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range</label>
                  <select 
                    {...register("budget")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cosmos-light transition-colors"
                  >
                    <option value="1-5k" className="bg-black">$1,000 - $5,000</option>
                    <option value="5-15k" className="bg-black">$5,000 - $15,000</option>
                    <option value="15k+" className="bg-black">$15,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea 
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cosmos-light transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
