"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden pt-32" style={{backgroundImage: 'linear-gradient(rgba(247, 250, 247, 0.6) 0%, rgba(247, 250, 247, 0.6) 60%, rgb(247, 250, 247) 100%), url("/images/hero_bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="z-10 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-bold text-xs mb-6 font-label">
            <span className="material-symbols-outlined text-sm mr-2">bolt</span> INSTANT PHARMACY
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter leading-tight font-headline"
          >
            INSTANT CARE <br/>DELIVERED
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-secondary mb-10 max-w-lg mx-auto lg:mx-0 font-body"
          >
            Get medicines at your doorstep in just 20 minutes. Healthcare that moves at the speed of your life.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <div className="relative flex-grow max-w-md">
              <input className="w-full bg-white/80 backdrop-blur shadow-sm border-none focus:ring-2 focus:ring-primary h-14 px-6 rounded-full font-body outline-none" placeholder="Enter your email" type="email" />
              <button className="absolute right-2 top-2 bg-primary text-white px-6 py-2 rounded-full h-10 font-bold hover:bg-primary-container transition-colors font-headline active:scale-95">Notify Me</button>
            </div>
          </motion.div>
          <p className="text-xs text-outline mt-4 font-medium italic font-body">Available in select cities. Coming soon to yours.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-primary-fixed/20 rounded-full blur-[120px] -z-10"></div>
          <img alt="Telemedicine illustration" className="w-full max-w-xl h-auto rounded-2xl" src="/images/hero_illustration.jpg" />
        </motion.div>
      </div>

      {/* Integrated Search Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="max-w-screen-xl mx-auto px-6 w-full flex flex-col items-center gap-8 relative z-10 pt-16"
      >
        <div className="w-full lg:w-[60%] relative">
          <div className="relative flex items-center bg-white rounded-xl shadow-lg border border-outline-variant/30 overflow-hidden">
            <span className="absolute left-4 material-symbols-outlined text-on-surface">search</span>
            <input className="w-full bg-transparent border-none outline-none h-14 pl-12 pr-28 text-base font-medium focus:ring-0 font-body" placeholder="which medicine do you want?" type="text" />
            <button className="absolute right-2 bg-[#005344] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary-container active:scale-95 transition-all font-headline">
              Search
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <button className="w-full flex items-center justify-center gap-2 bg-white text-[#006d5b] border-2 border-[#006d5b] h-12 px-6 rounded-lg font-bold hover:bg-surface-container-low active:scale-95 transition-all text-sm shadow-md font-headline">
            <span className="material-symbols-outlined text-xl">upload</span> 
            Upload Prescription
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-12">
          <button className="bg-[#006d5b] text-white px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg font-headline">
            Shop by Category
          </button>
        </div>
      </motion.div>
    </section>
  );
}
