"use client";

import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="location" className="py-24 bg-shukuru-cream border-t border-shukuru-nude/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-shukuru-brown-light text-sm uppercase tracking-[0.3em] font-medium"
          >
            Locate Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-shukuru-brown-deep"
          >
            Live Preview
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-sm overflow-hidden shadow-2xl border border-shukuru-nude/40 relative"
        >
          {/* Google Maps Live Preview Iframe */}
          <iframe 
            src="https://maps.google.com/maps?q=152+Baines+Avenue,+Harare,+Zimbabwe&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-1000"
          >
          </iframe>
        </motion.div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/HdTc2EDawhTkChqA9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3 bg-shukuru-brown-deep text-shukuru-cream uppercase tracking-widest text-xs hover:bg-shukuru-brown transition-colors duration-500 rounded-sm shadow-md"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
