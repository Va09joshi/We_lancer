"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Briefcase, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Sparkles,
  Clock,
  ArrowRight,
  Code,
  Layout,
  Cpu,
  Palette,
  Globe,
  Award,
  Zap,
  Info
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Profile",
    description: "Who are you?",
    icon: <User size={18} />
  },
  {
    id: 2,
    title: "Expertise",
    description: "What is your craft?",
    icon: <Zap size={18} />
  },
  {
    id: 3,
    title: "Vibe Check",
    description: "Why we_lancer?",
    icon: <Award size={18} />
  }
];

const HireFreelancer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialty: "",
    portfolio: "",
    experience: "",
    bio: "",
    skills: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    const current = formData.skills;
    if (current.includes(skill)) {
      updateFormData('skills', current.filter(s => s !== skill));
    } else {
      updateFormData('skills', [...current, skill]);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-white" id="careers">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 px-6 font-sans">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 font-bold text-[10px] uppercase tracking-[0.35em] mb-6"
          >
            <Sparkles size={11} />
            JOIN OUR ELITE SQUAD
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">
            The Next Chapter <br /><span className="text-blue-600">Starts with You.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium">
            Apply to join our network of world-class freelancers and build meaningful digital products.
          </p>
        </div>

        {/* Recruitment Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
        >
          {/* Header Banner */}
          <div className="h-2.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 w-full" />
          
          <div className="p-1 md:p-3">
            {!isSubmitted && (
              <div className="px-8 pt-10 pb-8">
                <div className="flex items-center justify-between gap-2 max-w-xl mx-auto relative">
                  {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center gap-3 relative z-10">
                      <motion.div 
                        animate={{ 
                          scale: currentStep === step.id ? 1.1 : 1,
                          backgroundColor: currentStep >= step.id ? '#2563eb' : '#f8fafc',
                          color: currentStep >= step.id ? '#ffffff' : '#cbd5e1'
                        }}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold shadow-xl transition-all duration-500 ${
                          currentStep >= step.id ? 'shadow-blue-600/20' : 'shadow-none'
                        }`}
                      >
                        {currentStep > step.id ? <CheckCircle2 size={20} /> : step.icon}
                      </motion.div>
                      <p className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors ${
                        currentStep === step.id ? 'text-blue-600' : 'text-slate-300'
                      }`}>{step.title}</p>
                    </div>
                  ))}
                  {/* Progress Line */}
                  <div className="absolute top-[22px] left-[15%] right-[15%] h-[2px] bg-slate-50 -z-0 rounded-full">
                    <motion.div 
                      className="h-full bg-blue-600" 
                      initial={{ width: "0%" }}
                      animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="px-6 md:px-12 pb-12 pt-4">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <motion.div 
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-28 h-28 bg-blue-600/10 text-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-600/10"
                    >
                      <CheckCircle2 size={56} strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Mission Accepted.</h3>
                    <p className="text-slate-500 mb-12 max-w-md mx-auto text-lg leading-relaxed font-medium">
                      Our strategists are analyzing your profile. We&apos;ll be in touch if your craft matches our elite standards.
                    </p>
                    <button 
                      onClick={() => {setIsSubmitted(false); setCurrentStep(1);}}
                      className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto group"
                    >
                      Send Another Application <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                  >
                    {currentStep === 1 && (
                      <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="group">
                            <label className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 group-focus-within:text-blue-600 transition-colors">
                              Full Legal Name <span className="text-red-500">*</span>
                            </label>
                            <input 
                              required
                              type="text" 
                              placeholder="e.g. Alexander Rivera"
                              value={formData.name}
                              onChange={(e) => updateFormData('name', e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-bold text-base placeholder:text-slate-400 shadow-sm"
                            />
                            <p className="mt-2 text-[10px] text-slate-500 font-medium flex items-center gap-1"><Info size={10} /> Enter your full name as it appears on official documents.</p>
                          </div>
                          <div className="group">
                            <label className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 group-focus-within:text-blue-600 transition-colors">
                              Primary Email Address <span className="text-red-500">*</span>
                            </label>
                            <input 
                              required
                              type="email" 
                              placeholder="hello@talent.com"
                              value={formData.email}
                              onChange={(e) => updateFormData('email', e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-bold text-base placeholder:text-slate-400 shadow-sm"
                            />
                            <p className="mt-2 text-[10px] text-slate-500 font-medium flex items-center gap-1"><Info size={10} /> We will use this address for all partnership communications.</p>
                          </div>
                        </div>
                        <div className="group">
                          <label className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 group-focus-within:text-blue-600 transition-colors">
                            Professional Portfolio / Repository <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600" size={18} />
                            <input 
                              required
                              type="url" 
                              placeholder="https://behance.net/professional"
                              value={formData.portfolio}
                              onChange={(e) => updateFormData('portfolio', e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-bold text-base placeholder:text-slate-400 shadow-sm"
                            />
                          </div>
                          <p className="mt-2 text-[10px] text-slate-500 font-medium flex items-center gap-1"><Info size={10} /> Link to your GitHub, Behance, or professional website.</p>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-12">
                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-6 text-center">Core Competency</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                            {[
                              { id: 'dev', label: 'Dev', icon: <Code size={22} /> },
                              { id: 'design', label: 'Design', icon: <Palette size={22} /> },
                              { id: 'ai', label: 'AI', icon: <Cpu size={22} /> },
                              { id: 'product', label: 'Product', icon: <Layout size={22} /> }
                            ].map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => updateFormData('specialty', item.label)}
                                className={`flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all duration-500 gap-3 group ${
                                  formData.specialty === item.label 
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105' 
                                    : 'bg-slate-50 border-transparent text-slate-500 hover:border-blue-600/30 hover:bg-white hover:text-blue-600 shadow-sm'
                                }`}
                              >
                                {item.icon}
                                <span className="font-black text-[9px] uppercase tracking-widest">{item.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-6 text-center">Technical Proficiency</label>
                          <div className="flex flex-wrap gap-2.5 justify-center">
                            {['React', 'Next.js', 'Node.js', 'Figma', 'Python', 'Web3', 'AI/ML', 'Flutter', 'Go'].map((skill) => (
                              <button
                                key={skill}
                                type="button"
                                onClick={() => toggleSkill(skill)}
                                className={`px-5 py-2 rounded-xl border font-bold text-[10px] uppercase tracking-wider transition-all ${
                                  formData.skills.includes(skill)
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'bg-white border-slate-200 text-slate-500 hover:border-blue-600/30'
                                }`}
                              >
                                {skill}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="group">
                            <label className="block text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Professional Tenure</label>
                            <select 
                              value={formData.experience}
                              onChange={(e) => updateFormData('experience', e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-bold text-base shadow-sm"
                            >
                              <option value="">Select years</option>
                              <option value="1-3">1-3 Years</option>
                              <option value="3-5">3-5 Years</option>
                              <option value="5-8">5-8 Years</option>
                              <option value="8+">8+ Years Senior</option>
                            </select>
                          </div>
                          <div className="group">
                            <label className="block text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Professional Narrative</label>
                            <textarea 
                              rows={3}
                              placeholder="Briefly describe your most impactful technical contribution..."
                              value={formData.bio}
                              onChange={(e) => updateFormData('bio', e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-bold text-base placeholder:text-slate-400 shadow-sm resize-none"
                            />
                          </div>
                        </div>
                        <div className="p-8 bg-blue-600/5 rounded-[2.5rem] border border-blue-600/10 flex items-start gap-5">
                          <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20">
                            <Award size={24} />
                          </div>
                          <div>
                            <p className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1">PRO-MISSION INTEL</p>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                              We prioritize architects who demonstrate extreme ownership and deep technical curiosity. Side projects are highly encouraged.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                      {currentStep > 1 ? (
                        <button 
                          type="button"
                          onClick={prevStep}
                          className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.25em] hover:text-blue-600 transition-all active:scale-95"
                        >
                          <ChevronLeft size={20} />
                          Go Back
                        </button>
                      ) : <div />}
                      
                      {currentStep < steps.length ? (
                        <button 
                          type="button"
                          onClick={nextStep}
                          className="px-12 py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.25em] hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-4 group"
                        >
                          Next Mission
                          <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                      ) : (
                        <button 
                          type="submit"
                          className="px-14 py-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.25em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 hover:scale-105 active:scale-95 flex items-center gap-4 group overflow-hidden relative"
                        >
                          <span className="relative z-10">Deploy Application</span>
                          <Sparkles size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
                          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-800 skew-x-12" />
                        </button>
                      )}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireFreelancer;
