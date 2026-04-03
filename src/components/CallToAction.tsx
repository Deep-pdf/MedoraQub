"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 lg:pl-8 z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight leading-tight uppercase font-headline">
            TALK TO CERTIFIED <span className="text-secondary opacity-80">DOCTORS</span> <span className="text-secondary lowercase font-medium text-3xl md:text-4xl">anytime</span>
          </h2>
          <p className="text-xl text-secondary mb-10 max-w-xl leading-relaxed font-body">
            Get video consultations from top specialists within minutes. High-quality care is just a tap away. Join the waitlist today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-container transition-all shadow-lg active:scale-95 font-headline">Notify Me</button>
            <button className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-low transition-all active:scale-95 font-headline">Learn More</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end lg:col-span-5"
        >
          <div className="absolute inset-0 bg-[#006D5B]/5 rounded-full blur-[100px] -z-10 translate-x-12 translate-y-12"></div>
          <div className="relative w-full max-w-2xl">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] aspect-square bg-primary-container rounded-full -z-10 opacity-10 lg:opacity-20"></div>
            <img alt="Doctor consultation" className="w-full h-auto rounded-2xl object-cover" src="/images/cta.png" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
