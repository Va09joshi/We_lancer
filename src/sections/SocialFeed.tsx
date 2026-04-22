"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal,
  Instagram,
  MapPin
} from "lucide-react";

const posts = [
  {
    id: 1,
    user: "we_lancer",
    avatar: "/logo.png",
    image: "/post1.png",
    likes: "1,842",
    caption: "Your Software Success Shortcut! 🚀 Pro Development with zero headaches. From lightning builds to zero-bug magic, we've got you covered. #softwaredevelopment #welancer",
    time: "45 MINUTES AGO",
  },
  {
    id: 2,
    user: "we_lancer",
    avatar: "/logo.png",
    image: "/post2.png",
    likes: "1,105",
    caption: "Invest in quality! 💎 Custom websites that are fast, flashy, and client-winning. Ready to make a deal? #webdesign #businessgrowth #simpsons",
    time: "3 HOURS AGO",
  },
  {
    id: 3,
    user: "we_lancer",
    avatar: "/logo.png",
    image: "/post3.png",
    likes: "2,409",
    caption: "Always here for your next big idea. 💬 From wireframes to final launch, our chat support is ready to guide you. Book your free discovery call now! #appdesign #consultation",
    time: "8 HOURS AGO",
  },
];

const SocialFeed = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.a
            href="https://www.instagram.com/we_lancer/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 hover:opacity-80 transition-opacity"
          >
            <Instagram size={20} />
            Connect With Us
          </motion.a>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4">
            Latest from <span className="text-gradient">Our Lab</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto font-medium">
            Follow our journey as we build, launch, and scale digital products for brands worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 max-w-[360px] mx-auto w-full"
            >
              <div className="flex items-center justify-between p-3">
                <a 
                  href="https://www.instagram.com/we_lancer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 relative rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:ring-2 group-hover:ring-pink-500 transition-all">
                    <Image src={post.avatar} alt={post.user} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight group-hover:text-pink-600 transition-colors">{post.user}</p>
                    <div className="flex items-center gap-1 group/loc relative">
                      <p className="text-[10px] text-slate-500 font-medium tracking-tight">Mumbai, India</p>
                      <MapPin size={10} className="text-slate-400 group-hover/loc:text-pink-500 transition-colors" />
                      
                      {/* Stylized Map Preview on Hover */}
                      <div className="absolute top-full left-0 mt-2 w-48 h-32 bg-white rounded-xl shadow-2xl border border-slate-100 opacity-0 scale-95 group-hover/loc:opacity-100 group-hover/loc:scale-100 transition-all duration-300 z-50 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[#E5E3DF]">
                          {/* Minimalist SVG Map Representation */}
                          <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                            <path d="M0 20 L20 40 L40 30 L60 50 L80 40 L100 60" stroke="#000" fill="none" strokeWidth="2" />
                            <path d="M20 0 L40 20 L30 40 L50 60 L40 80 L60 100" stroke="#000" fill="none" strokeWidth="2" />
                          </svg>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 bg-pink-500 rounded-full animate-ping opacity-75" />
                            <MapPin size={16} className="text-pink-600 relative z-10" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/90 backdrop-blur-sm text-[8px] font-bold text-slate-700">
                          VIEW ON GOOGLE MAPS
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Post Image */}
              <div className="relative aspect-square w-full bg-slate-100">
                <Image src={post.image} alt="Post content" fill className="object-cover" />
              </div>

              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <button className="text-slate-900 hover:text-pink-600 transition-colors">
                      <Heart size={20} />
                    </button>
                    <button className="text-slate-900 hover:text-slate-500 transition-colors">
                      <MessageCircle size={20} />
                    </button>
                    <button className="text-slate-900 hover:text-slate-500 transition-colors">
                      <Send size={20} />
                    </button>
                  </div>
                  <button className="text-slate-900 hover:text-slate-500 transition-colors">
                    <Bookmark size={20} />
                  </button>
                </div>

                {/* Likes */}
                <p className="text-xs font-bold text-slate-900 mb-1">{post.likes} likes</p>

                {/* Caption */}
                <div className="text-xs text-slate-800 leading-snug mb-2">
                  <span className="font-bold mr-2">{post.user}</span>
                  {post.caption}
                </div>

                {/* Time */}
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {post.time}
                </p>
              </div>

              {/* Comment Input Simulation */}
              <div className="border-t border-slate-100 p-3 flex items-center justify-between">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="text-xs w-full bg-transparent focus:outline-none text-slate-800"
                />
                <button className="text-sm font-bold text-blue-500 hover:text-blue-700 transition-colors opacity-50">Post</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
