import React from "react";
import Link from "next/link";
import { Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="pt-20 pb-10 px-6"
      style={{ background: "#f0f1f5", borderTop: "1px solid #dddfe9" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black text-gradient mb-6 block"
              style={{ letterSpacing: "-0.03em" }}
            >
              we_lancer
            </Link>
            <p className="text-[#676b89] mb-8 max-w-xs text-sm leading-relaxed">
              Your premium digital partner for building modern web, mobile, and AI solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Va09joshi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#676b89] hover:text-[#459af8] transition-colors"
                style={{ background: "#ffffff", border: "1px solid #c7cbdb", boxShadow: "rgba(32,41,76,0.1) 0px 1px 4px 0px" }}
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.instagram.com/we_lancer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#676b89] hover:text-[#459af8] transition-colors"
                style={{ background: "#ffffff", border: "1px solid #c7cbdb", boxShadow: "rgba(32,41,76,0.1) 0px 1px 4px 0px" }}
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:welancer.offical@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#676b89] hover:text-[#459af8] transition-colors"
                style={{ background: "#ffffff", border: "1px solid #c7cbdb", boxShadow: "rgba(32,41,76,0.1) 0px 1px 4px 0px" }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-[#20294c] mb-6 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Services", "Portfolio", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#676b89] hover:text-[#459af8] text-sm transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black text-[#20294c] mb-6 text-sm uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[#676b89] hover:text-[#459af8] text-sm transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#676b89] hover:text-[#459af8] text-sm transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#676b89] hover:text-[#459af8] text-sm transition-colors font-medium">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-[#20294c] mb-6 text-sm uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#676b89]">
                <Mail size={16} className="text-[#459af8] shrink-0" />
                <span className="text-sm">welancer.offical@gmail.com</span>
              </li>
              <li className="text-[#676b89] text-sm leading-relaxed">
                123 Digital Nomad St,<br />
                Silicon Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid #dddfe9" }}
        >
          <p className="text-sm text-[#979db5]">
            © {new Date().getFullYear()} we_lancer. All rights reserved.
          </p>
          <p className="text-sm text-[#979db5] flex items-center gap-1">
            Made with <span className="text-[#459af8]">♥</span> for the digital age.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
