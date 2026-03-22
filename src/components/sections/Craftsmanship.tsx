"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Images Grid */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[500px] w-[80%] z-10 rounded-sm overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/img-1.jpeg" 
              alt="Craftsmanship detail" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-16 right-0 h-[350px] w-[50%] z-20 rounded-sm overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image 
              src="/images/img-5.jpeg" 
              alt="Craftsmanship process" 
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
          className="flex flex-col justify-center space-y-8 lg:pl-10"
        >
          <h2 className="text-shukuru-brown-light text-sm uppercase tracking-[0.3em] font-medium">Our Craftsmanship</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-shukuru-brown-deep leading-tight">
            Mastery in Every <span className="italic text-shukuru-brown font-light">Grain</span>
          </h3>
          <div className="space-y-6 text-shukuru-brown-deep/70 font-light leading-relaxed">
            <p>
              At Shukuru, we believe that true luxury lies in the details. Each piece is meticulously handcrafted by artisans who understand the silent language of wood and the vibrant energy of plants.
            </p>
            <p>
              By fusing raw organic elements with refined architectural lines, we create not just plant stands, but statement pieces that breathe life into your interior landscape and stand the test of time.
            </p>
          </div>
          
          <div className="pt-8 text-shukuru-brown-deep font-serif italic text-xl border-l-2 border-shukuru-nude pl-6">
            "We do not merely build stands; we sculpt pedestals for nature to perform."
          </div>
        </motion.div>

      </div>
    </section>
  );
}
