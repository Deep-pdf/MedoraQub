import React from 'react';

export default function Brands() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6">
        <p className="text-center text-outline font-bold text-xs uppercase tracking-[0.2em] mb-12 font-label">Trusted by Global Healthcare Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
          <span className="text-2xl font-black text-primary font-headline">Cetaphil</span>
          <span className="text-2xl font-black text-primary font-headline">Dr. Morepen</span>
          <span className="text-2xl font-black text-primary font-headline">PROTINEX</span>
          <span className="text-2xl font-black text-primary font-headline">Dabur</span>
          <span className="text-2xl font-black text-primary font-headline">Dettol</span>
          <span className="text-2xl font-black text-primary font-headline">Himalaya</span>
        </div>
      </div>
    </section>
  );
}
