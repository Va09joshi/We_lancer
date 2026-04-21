"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-cosmos' : 'text-slate-900 group-hover:text-cosmos'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`transition-colors ${isOpen ? 'text-cosmos' : 'text-slate-400'}`}
        >
          <ChevronDown size={24} />
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
            <div className="pb-8 text-slate-500 leading-relaxed text-lg">
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
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <Particles quantity={30} color="#0B8F6C" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <div className="w-20 h-1.5 bg-cosmos/10 mx-auto rounded-full mt-6">
            <div className="w-1/2 h-full bg-cosmos rounded-full" />
          </div>
        </div>

        <div className="mb-16">
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
            className="btn-primary inline-flex items-center gap-2"
          >
            More Questions? Contact Us <ChevronDown size={18} className="-rotate-90" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
