"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  { id: 1, src: "/images/img-3.jpeg", alt: "Guest House Exterior", span: "row-span-2 col-span-1 md:col-span-2" },
  { id: 2, src: "/images/img-4.jpeg", alt: "Comfortable Seating", span: "col-span-1" },
  { id: 3, src: "/images/img-6.jpeg", alt: "Room Details", span: "col-span-1" },
  { id: 4, src: "/images/img-7.jpeg", alt: "Tranquil Space", span: "col-span-1" },
  { id: 5, src: "/images/img-8.jpeg", alt: "Cozy Bedroom Layout", span: "row-span-2 col-span-1 md:col-span-2" },
  { id: 6, src: "/images/img-9.jpeg", alt: "Elegant Decor", span: "col-span-1" },
  { id: 7, src: "/images/img-10.jpeg", alt: "Double Room Setup", span: "col-span-1 md:col-span-2" },
  { id: 8, src: "/images/img-11.jpeg", alt: "Guest Amenities", span: "col-span-1" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-shukuru-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-shukuru-brown-light text-sm uppercase tracking-[0.3em] font-medium"
          >
            Curated Spaces
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-shukuru-brown-deep"
          >
            The Collection
          </motion.h3>
        </div>

        {/* CSS Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative rounded-sm overflow-hidden group ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-shukuru-brown-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              
              {/* Subtle hover overlay text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-shukuru-cream font-serif italic text-xl tracking-widest drop-shadow-md">
                  View Room
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="#book" 
            className="inline-block border-b border-shukuru-brown-deep text-shukuru-brown-deep pb-1 uppercase tracking-widest text-sm hover:text-shukuru-brown hover:border-shukuru-brown transition-colors duration-300"
          >
            Check Availability
          </Link>
        </div>

      </div>
    </section>
  );
}
