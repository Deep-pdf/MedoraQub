"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Brands() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-surface-container-low">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-screen-2xl mx-auto px-6"
      >
        <motion.p variants={itemVariants} className="text-center text-outline font-bold text-xs uppercase tracking-[0.2em] mb-12 font-label">Trusted by Global Healthcare Leaders</motion.p>
        <motion.div variants={containerVariants} className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
          <motion.span variants={itemVariants} className="text-2xl font-black text-primary font-headline">Cetaphil</motion.span>
          <motion.span variants={itemVariants} className="text-2xl font-black text-primary font-headline">Dr. Morepen</motion.span>
          <motion.span variants={itemVariants} className="text-2xl font-black text-primary font-headline">PROTINEX</motion.span>
          <motion.span variants={itemVariants} className="text-2xl font-black text-primary font-headline">Dabur</motion.span>
          <motion.span variants={itemVariants} className="text-2xl font-black text-primary font-headline">Dettol</motion.span>
          <motion.span variants={itemVariants} className="text-2xl font-black text-primary font-headline">Himalaya</motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
