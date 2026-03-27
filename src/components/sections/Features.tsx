"use client";

import { motion } from "framer-motion";
import { Wifi, Sparkles, MapPin, Coffee, Car, ShieldCheck } from "lucide-react";

const features = [
  { id: 1, title: "High-Speed WiFi", icon: Wifi, desc: "Stay connected with complimentary high-speed internet throughout the property." },
  { id: 2, title: "Daily Housekeeping", icon: Sparkles, desc: "Enjoy a pristine space every day with our dedicated cleaning staff." },
  { id: 3, title: "Central Location", icon: MapPin, desc: "Conveniently located in the city center, close to key attractions." },
  { id: 4, title: "Premium Amenities", icon: Coffee, desc: "In-room tea and coffee stations to start your morning right." },
  { id: 5, title: "Secure Parking", icon: Car, desc: "Safe, gated, and secure parking available for all our guests." },
  { id: 6, title: "24/7 Security", icon: ShieldCheck, desc: "Peace of mind with round-the-clock security and surveillance." },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-shukuru-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-shukuru-brown-light text-sm uppercase tracking-[0.3em] font-medium"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-shukuru-brown-deep"
          >
            Guest House Features
          </motion.h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-shukuru-nude/20 group"
              >
                <div className="w-14 h-14 bg-shukuru-nude/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-shukuru-brown-deep transition-colors duration-500">
                  <Icon className="w-6 h-6 text-shukuru-brown-deep group-hover:text-shukuru-cream transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif text-shukuru-brown-deep mb-3">{feature.title}</h4>
                <p className="text-shukuru-brown-deep/70 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
