import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#006d5b] text-white">
      <div className="max-w-screen-2xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:col-span-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-black mb-6 font-headline">MedoraQub</div>
            <p className="text-teal-50/70 text-sm leading-relaxed mb-6 font-body">
              Reimagining pharmaceutical care with clinical precision and instant accessibility.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined cursor-pointer hover:opacity-100 opacity-80 transition-opacity">social_leaderboard</span>
              <span className="material-symbols-outlined cursor-pointer hover:opacity-100 opacity-80 transition-opacity">retweet</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest font-headline">Platform</h4>
            <ul className="space-y-4 font-body">
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">Home</a></li>
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">Shop</a></li>
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">AI Chatbot</a></li>
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">Track order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest font-headline">Company</h4>
            <ul className="space-y-4 font-body">
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">About us</a></li>
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">Parent Company</a></li>
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest font-headline">Support</h4>
            <ul className="space-y-4 font-body">
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">Report Bug</a></li>
              <li><a className="text-teal-50/80 hover:text-white transition-transform duration-200 hover:translate-x-1 inline-block text-sm" href="#">Legal issues</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest font-headline">Stay Updated</h4>
            <div className="flex">
              <input className="bg-white/10 border-none rounded-l-lg px-4 py-2 w-full text-white placeholder-white/40 focus:ring-1 focus:ring-white font-body outline-none" placeholder="Your email" type="email" />
              <button className="bg-white text-primary px-4 py-2 rounded-r-lg font-bold font-headline active:scale-95 transition-transform">Go</button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-teal-50/60 text-xs font-body">© 2024 MedoraQub. All rights reserved. contact@medoraqub.com</p>
          <div className="flex gap-8 text-xs text-teal-50/60 font-body">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
