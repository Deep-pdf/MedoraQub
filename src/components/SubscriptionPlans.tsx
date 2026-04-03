"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SubscriptionPlans() {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      isPopular: false,
      features: ['Standard Delivery', '24/7 Support', 'Prescription Storage'],
      buttonText: 'Current Plan',
      buttonClass: 'border-2 border-primary text-primary hover:bg-surface-container-low',
      boxClass: 'bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col h-full',
      textColor: 'text-on-surface',
      priceColor: 'text-primary',
      iconColor: 'text-primary',
      featureColor: 'text-on-surface-variant',
    },
    {
      name: 'Health Plus',
      price: '₹299',
      period: '/month',
      isPopular: true,
      features: ['Free 10-min Delivery', '20% Off All Medicines', 'Monthly Doctor Consultation', 'Early Access to Sales'],
      buttonText: 'Select Plan',
      buttonClass: 'bg-white text-primary hover:shadow-lg',
      boxClass: 'bg-primary-container p-10 rounded-2xl shadow-xl flex flex-col relative overflow-hidden h-full',
      textColor: 'text-white',
      priceColor: 'text-white',
      iconColor: 'text-white',
      featureColor: 'text-white',
    },
    {
      name: 'Family Care',
      price: '₹699',
      period: '/month',
      isPopular: false,
      features: ['All Pro Benefits', 'Coverage for 4 members', 'Bi-monthly Lab Tests', 'Home Physiotherapy'],
      buttonText: 'Select Plan',
      buttonClass: 'border-2 border-primary text-primary hover:bg-surface-container-low',
      boxClass: 'bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col h-full',
      textColor: 'text-on-surface',
      priceColor: 'text-primary',
      iconColor: 'text-primary',
      featureColor: 'text-on-surface-variant',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-primary mb-4 tracking-tight font-headline">CHOOSE YOUR PLAN</h2>
          <p className="text-secondary max-w-2xl mx-auto font-body">Unlock premium healthcare benefits and prioritized deliveries with our subscription tiers.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`transform ${plan.isPopular ? 'md:scale-105 z-10' : ''}`}
            >
              <div className={plan.boxClass}>
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-label">Most Popular</div>
                )}
                <h3 className={`text-xl font-bold mb-2 font-headline ${plan.textColor}`}>{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className={`text-4xl font-black font-headline ${plan.priceColor}`}>{plan.price}</span>
                  <span className={`ml-2 font-body ${plan.isPopular ? 'text-on-primary-container' : 'text-outline'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow font-body">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className={`flex items-center gap-3 text-sm ${plan.featureColor}`}>
                      <span className={`material-symbols-outlined text-lg ${plan.iconColor}`}>check_circle</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 font-headline ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
