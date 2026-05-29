"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Particles from "@/components/Particles";

const faqs = [
  {
    question: "Why is we_lancer considered a top freelancer agency?",
    answer: "We combine the agility of top freelancers with the professional project management of a full-scale agency. Our focus on performance, design excellence, and transparent communication sets us apart."
  },
  {
    question: "What services does we_lancer offer?",
    answer: "We specialize in Web Development (Next.js, React), Mobile App Development, AI Automation, UI/UX Design, and Performance Optimization."
  },
  {
    question: "Do you provide AI development services for startups?",
    answer: "Yes, we build custom AI agents, automation workflows, and intelligent interfaces to help startups scale efficiently."
  },
  {
    question: "How do you ensure project quality and security?",
    answer: "We use modern tech stacks, follow strict coding standards, and perform rigorous QA testing. Security best practices are integrated from day one."
  },
  {
    question: "Which industries do you serve?",
    answer: "We serve clients globally across various sectors including SaaS, E-commerce, Fintech, Healthtech, and AI-driven startups."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use tools like Slack, Trello, and weekly sync meetings to ensure you are updated at every stage of the development process."
  },
  {
    question: "How can I get a project estimate or consultation?",
    answer: "Simply fill out our contact form or send us an email. We offer free consultations to discuss your vision and provide a detailed roadmap."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-[#eef0f6] last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-7 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-black transition-colors tracking-tight ${isOpen ? 'text-[#459af8]' : 'text-[#20294c] group-hover:text-[#459af8]'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`transition-colors ${isOpen ? 'text-[#459af8]' : 'text-[#979db5]'}`}
        >
          <ChevronDown size={20} strokeWidth={3} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-7 text-[#676b89] leading-relaxed text-base font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 md:py-40 bg-white relative overflow-hidden">
      <Particles quantity={35} color="#459af8" />
      <div className="max-w-4xl mx-auto relative z-10 px-6">
        
        {/* Monologue Brand Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f9fc] border border-[#f0f1f5] text-[#20294c] text-[10px] font-black uppercase tracking-widest shadow-sm">
              05 / FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#20294c] tracking-tighter leading-[0.95]"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="mb-16 bg-white border border-[#eef0f6] rounded-[2rem] p-8 md:p-12 shadow-[0_15px_50px_rgba(32,41,76,0.02)]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-3 text-sm group"
          >
            More Questions? Contact Us 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
