import React from "react";
import Link from "next/link";
import { Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gradient mb-6 block">
              we_lancer
            </Link>
            <p className="text-gray-400 mb-8 max-w-xs">
              Your premium digital partner for building modern web, mobile, and AI solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Va09joshi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cosmos/20 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.instagram.com/we_lancer/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cosmos/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:welancer.offical@gmail.com" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cosmos/20 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-gray-400 hover:text-cosmos-light">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-cosmos-light">Portfolio</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-cosmos-light">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-cosmos-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-gray-400 hover:text-cosmos-light">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-cosmos-light">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cosmos-light">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-cosmos-light" />
                <span>welancer.offical@gmail.com</span>
              </li>
              <li className="text-gray-400">
                123 Digital Nomad St,<br />
                Silicon Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} we_lancer. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> for the digital age.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
