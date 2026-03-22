"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BedDouble, Bath, Wifi, Tv, Coffee, Droplets } from "lucide-react";

export function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Images Grid */}
        <div className="relative flex justify-center lg:justify-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[300px] md:h-[400px] w-full max-w-md z-10 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/img-12.jpeg" 
              alt="Guest House Amenities" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-8 lg:pl-10 text-shukuru-brown-deep"
        >
          <div className="space-y-3">
            <h2 className="text-shukuru-brown-light text-sm uppercase tracking-[0.3em] font-medium">Exceptional Comfort</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">
              Double Room <span className="italic text-shukuru-brown font-light">Details</span>
            </h3>
          </div>
          
          <ul className="grid grid-cols-2 gap-y-6 gap-x-4 text-shukuru-brown-deep/80 font-light text-lg">
            <li className="flex items-center space-x-3"><BedDouble className="w-5 h-5 text-shukuru-brown" /> <span>1 Double Bed</span></li>
            <li className="flex items-center space-x-3"><Bath className="w-5 h-5 text-shukuru-brown" /> <span>Private Bath</span></li>
            <li className="flex items-center space-x-3"><Wifi className="w-5 h-5 text-shukuru-brown" /> <span>Free WiFi</span></li>
            <li className="flex items-center space-x-3"><Tv className="w-5 h-5 text-shukuru-brown" /> <span>Flat-screen TV</span></li>
            <li className="flex items-center space-x-3"><Coffee className="w-5 h-5 text-shukuru-brown" /> <span>Tea/Coffee</span></li>
            <li className="flex items-center space-x-3"><Droplets className="w-5 h-5 text-shukuru-brown" /> <span>Free Toiletries</span></li>
          </ul>

          <div className="pt-4 space-y-4 font-light text-sm text-shukuru-brown-deep/70">
            <div className="bg-shukuru-nude/20 p-5 border-l-2 border-shukuru-brown rounded-r-md">
              <strong className="block text-shukuru-brown-deep mb-2 text-base">Booking Policy:</strong>
              <p>Flexible booking with free cancellation limits. A non-refundable <strong className="font-medium">$10 deposit</strong> is required upon booking.</p>
              <p className="mt-2 text-shukuru-brown-light italic">*Breakfast is not included in the standard price.</p>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
