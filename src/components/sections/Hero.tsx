"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-shukuru-cream">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-shukuru-nude/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[60%] bg-shukuru-beige/40 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative mt-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-shukuru-brown-light text-sm uppercase tracking-[0.3em] font-medium"
            >
              152 Baines Avenue
            </motion.h2>
            <h1 className="text-5xl md:text-7xl font-serif text-shukuru-brown-deep leading-[1.1]">
              A Sanctuary <br />
              <span className="italic font-light text-shukuru-brown">of Comfort.</span>
            </h1>
          </div>
          
          <div className="text-lg text-shukuru-brown-deep/70 max-w-md font-light leading-relaxed space-y-2">
            <p>Experience tranquility and top-tier hospitality at Shukuru Guest House.</p>
            <p className="font-medium text-shukuru-brown-deep">Double Rooms starting from <span className="text-2xl">$30</span> / night</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-4 flex items-center space-x-6"
          >
            <Link 
              href="#rooms" 
              className="px-8 py-4 bg-shukuru-brown-deep text-shukuru-cream uppercase tracking-widest text-xs hover:bg-shukuru-brown transition-colors duration-500 rounded-sm shadow-lg"
            >
              Book Your Stay
            </Link>
            <Link 
              href="#amenities" 
              className="px-8 py-4 border border-shukuru-brown-deep/20 text-shukuru-brown-deep uppercase tracking-widest text-xs hover:border-shukuru-brown-deep transition-colors duration-500 rounded-sm"
            >
              Discover Amenities
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[300px] w-full max-w-md mx-auto lg:h-[450px] lg:ml-auto object-cover rounded-2xl overflow-hidden shadow-2xl shadow-shukuru-brown-deep/10"
        >
          <div className="absolute inset-0 bg-shukuru-brown-deep/10 mix-blend-overlay z-10" />
          <Image 
            src="/images/img-10.jpeg" 
            alt="Luxury Bedroom at Shukuru Guest House" 
            fill 
            className="object-cover object-center transform hover:scale-105 transition-transform duration-[2s] ease-out"
            priority
          />
        </motion.div>
        
      </div>
    </section>
  );
}
