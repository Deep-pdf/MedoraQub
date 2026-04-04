"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Brands() {
  const images = [7, 8, 9, 10, 11, 12, 13, 14, 15];
  // Duplicate for seamless infinite loop
  const infiniteImages = [...images, ...images];

  return (
    <section className="py-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-outline font-bold text-xs uppercase tracking-[0.2em] font-label"
        >
          Trusted by Global Healthcare Leaders
        </motion.p>
      </div>

      <div className="w-full relative flex group">
        {/* Gradient edge overlays for a fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex flex-nowrap items-center w-max cursor-pointer"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {infiniteImages.map((num, idx) => (
            <div key={`${num}-${idx}`} className="flex-shrink-0 transition-transform duration-300 hover:scale-110 pr-8 sm:pr-12 md:pr-16 lg:pr-24">
              <img 
                src={`/images/Ellipse ${num}.png`} 
                alt={`Partner ${num}`} 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain rounded-full shadow-sm hover:shadow-md transition-shadow" 
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
