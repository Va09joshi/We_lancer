import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

export const metadata = {
  title: "Terms & Conditions | we_lancer",
  description: "Terms and conditions for we_lancer digital agency.",
};

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-[#000000] text-white pt-32 pb-20 relative overflow-hidden">
      <Particles quantity={40} color="#0B8F6C" />
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">
          Terms & <span className="text-gradient">Conditions</span>
        </h1>
        
        <div className="glass p-8 md:p-12 rounded-[2.5rem] space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using we_lancer&apos;s services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of we_lancer and its licensors. Our intellectual property may not be used in connection with any product or service without the prior written consent of we_lancer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
            <p>
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Provide accurate and complete information when requested.</li>
              <li>Maintain the security of your account and credentials.</li>
              <li>Not use the service for any illegal or unauthorized purpose.</li>
              <li>Not attempt to interfere with the proper working of the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall we_lancer, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm">Last Updated: April 2026</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
