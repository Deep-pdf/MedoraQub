import React from 'react';

export default function Header() {
  return (
    <header className="top-0 sticky z-50 bg-[#ffffff]/70 backdrop-blur-md shadow-[0px_12px_32px_rgba(0,83,68,0.06)]">
      <div className="flex flex-col w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          <div className="text-2xl font-black tracking-tighter text-[#005344] font-headline">MedoraQub</div>
          <nav className="hidden lg:flex items-center gap-6">
            <a className="text-[#005344] border-b-2 border-[#005344] pb-1 font-bold font-headline text-sm tracking-tight" href="/">Home</a>
            <a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="/store">Shop</a>
            <a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#">Doctors</a>
            <a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#">Brands</a>
            <a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#">Lab</a>
            <a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#">Baby Care</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm scale-95 active:scale-90 transition-transform font-headline">Search Now</button>
            <div className="flex gap-4 text-primary">
              <span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-2 rounded-lg transition-all">person</span>
              <span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-2 rounded-lg transition-all">shopping_cart</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
