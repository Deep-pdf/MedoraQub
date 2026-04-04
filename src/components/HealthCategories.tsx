"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function HealthCategories() {
  const categories = [
    { icon: 'dentistry', title: 'Oral Care' },
    { icon: 'cardiology', title: 'Cardiac Care' },
    { icon: 'healing', title: 'Relief Pain' },
    { icon: 'spa', title: 'Skin Care' },
    { icon: 'elderly', title: 'Elderly Care' },
    { icon: 'pets', title: 'Pet Care' },
    { icon: 'pregnant_woman', title: 'Pregnancy Care' },
    { icon: 'favorite', title: 'Sexual Health' },
    { icon: 'monitor_heart', title: 'Diabetes Care' },
    { icon: 'medical_services', title: 'Menstrual Kit' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-xl mx-auto px-12 md:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl font-black text-primary mb-2 font-headline">Health Categories</h2>
            <p className="text-secondary font-medium font-body">Curated care for every need</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all font-headline">
            View All <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-[#006D5B] px-3 py-6 rounded-2xl hover:translate-y-[-4px] active:scale-95 transition-all duration-300 flex flex-col items-center text-center cursor-pointer shadow-md hover:shadow-lg"
            >
              <div className="w-20 h-16 bg-white rounded-xl flex items-center justify-center text-[#006D5B] mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-xs text-white font-headline">{cat.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
