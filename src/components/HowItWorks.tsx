"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const stepsTop = [
    { num: 1, title: 'Consult a Doctor', desc: 'Book instant online consultations with top specialists within minutes.', img: '/images/step1.png', offset: '' },
    { num: 2, title: 'Get a CheckUp', desc: 'Schedule comprehensive health checkups from your home convenience.', img: '/images/step2.png', offset: 'mt-12 lg:mt-32' },
    { num: 3, title: 'Order Medicine', desc: 'Browse thousands of medicines and health products with clinical precision.', img: '/images/step3.png', offset: '' },
    { num: 4, title: 'Fast Delivery', desc: 'Hyper-local system ensures doorstep delivery in as fast as 10-20 minutes.', img: '/images/step4.png', offset: 'mt-12 lg:mt-32' },
  ];

  const stepsBottom = [
    { num: 5, title: 'Seva AI', desc: 'AI-powered health companion available 24/7 for your medical queries.', img: '/images/step5.png' },
    { num: 6, title: 'Home Care', desc: 'Professional nursing and physiotherapy provided at your doorstep.', img: '/images/step6.png' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section className="py-32 overflow-hidden relative bg-[#006D5B]">
      <div className="max-w-screen-2xl mx-auto px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black mb-24 text-center font-headline uppercase tracking-tight text-white"
        >
          How It Works
        </motion.h2>
        
        {/* SVG Path Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-visible"
        >
          <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
            <path d="M150,210 C300,210 300,340 450,340 C600,340 600,210 750,210 C900,210 900,340 1050,340 C1150,340 1150,550 900,600 C750,650 650,750 600,750 C550,750 450,750 300,750" fill="none" stroke="#ffffff" strokeDasharray="12 12" strokeOpacity="0.3" strokeWidth="4"></path>
          </svg>
        </motion.div>

        <div className="relative z-10">
          {/* Top Row: Steps 1-4 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          >
            {stepsTop.map((step) => (
              <motion.div key={step.num} variants={itemVariants} className={`flex flex-col items-center text-center group ${step.offset}`}>
                <div className="relative mb-10 cursor-pointer">
                  <div className="w-56 h-56 bg-white rounded-full shadow-2xl border-4 border-surface-container flex items-center justify-center group-hover:border-primary transition-all duration-500 overflow-hidden ring-8 ring-white/50 group-active:scale-95 group-hover:-translate-y-2">
                    <img alt={step.title} className="w-full h-full object-contain p-4 opacity-90 group-hover:opacity-100 transition-opacity" src={step.img} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg border-4 border-white group-hover:scale-110 transition-transform">{step.num}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-headline text-white">{step.title}</h3>
                <p className="text-base max-w-[280px] font-body leading-relaxed text-white">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Row: Steps 5-6 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row justify-center lg:gap-40 gap-8"
          >
            {stepsBottom.map((step) => (
              <motion.div key={step.num} variants={itemVariants} className="flex flex-col items-center text-center group">
                <div className="relative mb-10 cursor-pointer">
                  <div className="w-56 h-56 bg-white rounded-full shadow-2xl border-4 border-surface-container flex items-center justify-center group-hover:border-primary transition-all duration-500 overflow-hidden ring-8 ring-white/50 group-active:scale-95 group-hover:-translate-y-2">
                    <img alt={step.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src={step.img} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg border-4 border-white group-hover:scale-110 transition-transform">{step.num}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-headline text-white">{step.title}</h3>
                <p className="text-base max-w-[280px] font-body leading-relaxed text-white">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
