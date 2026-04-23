import React from 'react';

export default function Page() {
  return (
    <>
      {/* Header */}
      {/* Note: we put everything in a fragment in case we want to return it as a page */}
      <div className="flex flex-col min-h-screen">
        {/* The extracted content */}
<header className="top-0 sticky z-50 bg-[#ffffff]/70 backdrop-blur-md shadow-[0px_12px_32px_rgba(0,83,68,0.06)]">
<div className="flex flex-col w-full px-6 py-4 max-w-screen-2xl mx-auto">
<div className="flex items-center justify-between gap-8">
<div className="text-2xl font-black tracking-tighter text-[#005344] font-headline" >MedoraQub</div>
<nav className="hidden lg:flex items-center gap-6">
<a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="/">Home</a>
<a className="text-[#005344] border-b-2 border-[#005344] pb-1 font-bold font-headline text-sm tracking-tight" href="/store">Shop</a>
<a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#" >Doctors</a>
<a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#" >Brands</a>
<a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#" >Lab</a>
<a className="text-slate-600 hover:text-[#006d5b] transition-all duration-300 font-headline text-sm font-semibold tracking-tight" href="#" >Baby Care</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm scale-95 active:scale-90 transition-transform font-headline" >Search Now</button>
<div className="flex gap-4 text-primary">
<span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-2 rounded-lg transition-all" data-icon="person" >person</span>
<span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-2 rounded-lg transition-all" data-icon="shopping_cart" >shopping_cart</span>
</div>
</div>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8">
{/* Seasonal Promo Banner */}
<section className="mb-12 relative overflow-hidden rounded-2xl h-64 md:h-80 shadow-lg group flex items-center bg-surface-container-low">
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 to-transparent z-10"></div>
<img alt="Professional medical healthcare products banner" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" data-alt="High-quality professional medical banner with healthcare products like medicine bottles and first-aid kit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAenIBfFGYRlYaDk9bLgt73jOX7cUNilSOeZdRSfXjicPvU6A4uLOvA-jaSANfpCRWbMqMVZGZPdRgkb9LLUVH-xdk1gazpRYOV65UXWsyYa9LGMftVLeJZ4QCtmie1blYGQd-AhgGmQ8omRe1sPgPI-wghW3TT-uOmRSM3T8iFllwi2cW-6dyDuPlP_OF42CkWsXiTRbcBtrn7-tNPeI7rlWqGetsEzKj83b7E85XUeVVmibGBxvM83eHQKjBsvb-SX5oxAqAuMPg" />
<div className="relative z-20 p-8 md:p-12 max-w-xl text-white">
<span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full mb-4 tracking-wide uppercase shadow-sm" >Summer Wellness</span>
<h1 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4 text-white" >Revitalize Your Daily Routine</h1>
<p className="font-body text-lg text-white/90 mb-6 max-w-md" >Up to 30% off premium vitamins and organic supplements.</p>
<button className="bg-surface-container-lowest text-primary font-bold px-8 py-3 rounded-full hover:bg-surface-container-low transition-colors shadow-md active:scale-95 transform" >Shop the Sale</button>
</div>
</section>
<div className="flex flex-col lg:flex-row gap-8">
{/* Sidebar Filters */}
<aside className="w-full lg:w-64 flex-shrink-0 space-y-8 sticky top-24 h-fit">
<div>
<h3 className="font-headline text-lg font-bold text-on-surface mb-4 pb-2 border-b-2 border-surface-container" >Categories</h3>
<ul className="space-y-3 font-body text-sm">
<li className="" >
<a className="flex items-center justify-between text-primary font-semibold hover:text-primary-container transition-colors p-2 rounded-lg bg-surface-container-lowest shadow-sm" href="#" >
                                Vitamins &amp; Supplements
                                <span className="material-symbols-outlined text-[18px]" >chevron_right</span>
</a>
</li>
<li className="" >
<a className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-lowest" href="#" >
                                Personal Care
                            </a>
</li>
<li className="" >
<a className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-lowest" href="#" >
                                OTC Medicine
                            </a>
</li>
<li className="" >
<a className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-lowest" href="#" >
                                Baby Care
                            </a>
</li>
<li className="" >
<a className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-lowest" href="#" >
                                Sports Nutrition
                            </a>
</li>
<li className="" >
<a className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-lowest" href="#" >
                                First Aid
                            </a>
</li>
</ul>
</div>
<div>
<h3 className="font-headline text-lg font-bold text-on-surface mb-4 pb-2 border-b-2 border-surface-container" >Health Goals</h3>
<div className="space-y-2 font-body text-sm">
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-lowest cursor-pointer" >
<input className="w-4 h-4 text-primary bg-surface-container-lowest border-outline rounded focus:ring-primary" type="checkbox"/>
<span className="text-on-surface-variant" >Immunity Support</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-lowest cursor-pointer" >
<input className="w-4 h-4 text-primary bg-surface-container-lowest border-outline rounded focus:ring-primary" type="checkbox"/>
<span className="text-on-surface-variant" >Bone &amp; Joint Health</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-lowest cursor-pointer" >
<input className="w-4 h-4 text-primary bg-surface-container-lowest border-outline rounded focus:ring-primary" type="checkbox"/>
<span className="text-on-surface-variant" >Digestive Health</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-lowest cursor-pointer" >
<input className="w-4 h-4 text-primary bg-surface-container-lowest border-outline rounded focus:ring-primary" type="checkbox"/>
<span className="text-on-surface-variant" >Energy &amp; Vitality</span>
</label>
</div>
</div>
<div>
<h3 className="font-headline text-lg font-bold text-on-surface mb-4 pb-2 border-b-2 border-surface-container" >Price Range</h3>
<div className="px-2">
<input className="w-full accent-primary h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range"/>
<div className="flex justify-between text-xs text-outline mt-2 font-body">
<span className="" >$0</span>
<span className="" >$200+</span>
</div>
</div>
</div>
</aside>
{/* Product Grid Area */}
<div className="flex-1 space-y-16">
{/* Category Section 1: Vitamins & Supplements */}
<section>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
<h2 className="font-headline text-2xl font-extrabold tracking-tight text-on-surface" >Vitamins &amp; Supplements</h2>
<div className="flex items-center gap-2">
<span className="font-body text-sm text-on-surface-variant" >Sort by:</span>
<select className="text-sm font-body bg-surface-container-lowest border-outline-variant/50 rounded-lg focus:ring-primary focus:border-primary py-1.5 pl-3 pr-8 shadow-sm">
<option>Relevance</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Customer Rating</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm" >Best Seller</div>
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Vitamin C Product" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="amber glass supplement bottle on white clinical background soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN2-A3peojeqQ6LkjY5nLGuawMQsRCBititMIMAZseMfbFlDxJ1JcVYEN82O_EwIbm88dyOdquz54bgDhs-lFrlU-nPqmq0kL8XTulmi2fIH_psJKVFwpa6Fbb-ef9uJosX3pt7G7nGX8uXS-Kbh1Jo6_Dk59ysRKNE2AXELou6GCQPcy24eWa6OgXKijZ_eXV5gbgQ0A5INEL6t3yP6_y3k75wvAyYuCQqWdZv16Bl4s69mirAdG-bsOJw5lVrbUuGu7WF1x798I" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.8</span>
<span className="font-body text-xs text-outline" >(124)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Immunity</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Premium Vitamin C 1000mg with Rose Hips</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >60 Capsules</p>
<div className="mt-auto flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline text-lg font-extrabold text-on-surface" >$24.99</span>
<span className="font-body text-xs text-outline line-through" >$29.99</span>
</div>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add_shopping_cart</span>
</button>
</div>
</div>
</article>
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Omega 3 Product" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="clear fish oil softgels spilling from white premium bottle clean aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvoVQhLRB_mppJ8qXWc7bZmZ00r-tbl5vvsh7PN0H11YHwTMndZrOMB2xR_ZSIg-qwpEvGCq8RARQFHjRxwju2hdI56L7yf3-fNeMilqdoS7lOesRHa732f5QAM2wv2-mTePN7N7O4arQbXOmkVufA3qXvqI8FGgw4UAa2jyEKPCrTmOvrvNjTun5Vkv0Q3tCx0SoIQB44AhIHqxEM7BjmXp3DsstxmpE4oMwpk4udHobEIHDZIq3-Dz3FmcFJFSbIqcIsT9gRRz8" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.6</span>
<span className="font-body text-xs text-outline" >(89)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Heart Health</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Wild Caught Alaskan Omega-3 Fish Oil</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >120 Softgels</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$32.50</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
{/* Reminders Card injected into feed */}
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Multivitamin Product" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="sleek white minimalist supplement container on marble surface soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcIIOpKeiqUinV9cXRATnaPrVdU1lpnZz6leofg5teKvmBrYNHC2j82x8ikFKOnrFc2LZDhvE_IT5-C1x6VreyG0yfNCDwfNc60UwC6gnvwoTZxaEbu2m9CsB8nDnvkMHt97zN-XSEY3v1iJ0tuzGSOcil6qL0wipvHmyknjftaJYY4WKLmQe1UD5dt0Y8YtheeJyceaT9xHufZWSYefuRyzPNhusv82_DQw46o7N6qD7CqLmLgRASWTvmQnWccqpTN3vc-2ZL5ZU" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.9</span>
<span className="font-body text-xs text-outline" >(210)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Daily Wellness</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Complete Daily Multivitamin for Adults</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >90 Tablets</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$18.99</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
<article className="bg-secondary-container/50 rounded-2xl p-6 flex flex-col justify-center border border-secondary/20 shadow-sm col-span-1 sm:col-span-2 lg:col-span-1">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary bg-surface-container-lowest p-2 rounded-full shadow-sm">lightbulb</span>
<h3 className="font-headline font-bold text-on-secondary-container">Health Tip</h3>
</div>
<p className="font-body text-sm text-on-secondary-container/80 mb-4">Don't forget your daily Vitamin D! It's crucial for bone health and immune function, especially during winter months.</p>
<a className="text-secondary font-bold text-sm hover:underline font-headline flex items-center gap-1" href="#">Shop Vitamin D <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</article></div>
</section>
{/* Banner Injection */}
<section className="w-full bg-gradient-to-r from-tertiary-container to-tertiary rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
<div className="z-10 text-center md:text-left mb-6 md:mb-0">
<h2 className="font-headline text-3xl md:text-4xl font-extrabold mb-2 tracking-tight" >Winter Wellness Sale</h2>
<p className="font-body text-lg text-white/90" >Up to <span className="font-bold text-2xl text-[#ffd1c7]" >40% Off</span> select cold &amp; flu essentials.</p>
</div>
<button className="z-10 bg-white text-tertiary font-bold px-8 py-3 rounded-full hover:bg-surface-container-lowest transition-colors shadow-md active:scale-95 transform whitespace-nowrap" >Shop Deals Now</button>
</section>
{/* Category Section 2: OTC Medicine (Masonry Style) */}
<section>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
<h2 className="font-headline text-2xl font-extrabold tracking-tight text-on-surface" >OTC Medicine</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{/* Product 1 */}
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm" >Fast Acting</div>
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Pain Relief" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="white pill bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdvOHpa_Q2r_1XLRN6fB0ZgXroHTlCIV48pRUeWKEO9IJpSW7AD2qwkeI6jgWcCEihYdNo0OezIz33BiXmPJllhI-9bB9t5o6Baojj58lUgflLul6jJR5DgZNnekdyzDWzGhuA3CIkDKF0YuBIVA1pJP0M1pfZhXIyRi0E2sdWpoaNedPheqNvkBlC8KXQ6N6-1Ifmn8xAh5C0vzqGOunZHQBLyma3KKvP4CZuLX_qMaqlwgqB-uu8T3s38r4iW_rElsgwMBlU40g" />
</div>
<div className="p-4 flex flex-col flex-1">
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Pain Relief</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >Extra Strength Acetaminophen 500mg</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >100 Caplets</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$11.49</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
{/* Product 2 (Taller) */}
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Allergy Meds" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="allergy medicine box" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiGxNuAju4_YE1iNjYWuMweNTqGgVsYXHhAJxY772z6oTrSjOB7WZ5AVRxYpeQ6QxfQMWm_-_f44awe3ztIyL35D9jRWx9vA-qxEo7RnjofTEuSuZNUfmngTO0HXZYMrXQUKx2ftemX5PI9VYS1h5IYDPYOknd0UVJNsiC94z1g_T-DtUTSxy4zFvNNjrFkzgTGjyNoeqa8CjBYJCwxxPwMuVrKdvHqqLXhV2SfzKFnFg7KgSebBwjWeAxA00xptbGtz0jmQEoltU" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.7</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Allergy</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >24-Hour Non-Drowsy Allergy Relief</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >Loratadine 10mg, 30 Tablets</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$16.99</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article><article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Headache Relief" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="box of headache relief pills" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdvOHpa_Q2r_1XLRN6fB0ZgXroHTlCIV48pRUeWKEO9IJpSW7AD2qwkeI6jgWcCEihYdNo0OezIz33BiXmPJllhI-9bB9t5o6Baojj58lUgflLul6jJR5DgZNnekdyzDWzGhuA3CIkDKF0YuBIVA1pJP0M1pfZhXIyRi0E2sdWpoaNedPheqNvkBlC8KXQ6N6-1Ifmn8xAh5C0vzqGOunZHQBLyma3KKvP4CZuLX_qMaqlwgqB-uu8T3s38r4iW_rElsgwMBlU40g" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.9</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Pain Relief</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >Double Action Headache Relief</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >50 Tablets</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$14.25</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
{/* Reminders Card injected into masonry feed */}
{/* Product 3 */}
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm" >New Arrival</div>
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Cold Syrup" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="cough syrup bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyW4BaCW0Q_xpFMsPxqDPGqDIhDV1oHmRfuYagnHFNk8X-qIWCSCl8lMLULhZP3T-Bz8ic0zQl8z0IXfI5GJ6Ik1PrE3p7p7d0UYlvOStnm4O-TO9lgILSfaUDeHjWXmw6cVdV57iDsn_fNLjaA8gwSe8vMwgCIRgmQR_o_59tgZBaB8Fg5l20Tmq4iCGAcf_smj3Uxcaq0oEsm6H25T8-S6PzNpb69LtDIuTM4oEqzmYYi-wf9Bvb10zJSRrHs5fxcXh2qCZGg34" />
</div>
<div className="p-4 flex flex-col flex-1">
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Cold &amp; Flu</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >Multi-Symptom Nighttime Cold Relief</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >8 Fl Oz</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$9.50</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
{/* Product 4 */}
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Antacid" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="antacid tablets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlpziAnXG6An8vmoE402SKUHFq7XEG_p9S5-umM62O7GKBnR_o_6ikTrJfw-sbEdl7BGB5ZwhzMGmEG8A15LaCnZFhrju9wjgoTd1ZcjScb3l22dukIPvUtUdEqvNx46RbqGljZzUXq8izBRTUv8jQ5ubKN88AhIKo4FS46rE2r4ZlPQHJNPmU1vF6Hp3lQYfG1_5EQmPIBiGqnIYduQVelI3o6U3PaYyBuhoqYsZ-y_VjRcCrC6VPMtXOc4vVwOoxqzKjzlKX1RM" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.5</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Digestive</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >Maximum Strength Antacid Chews</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >Mixed Berry, 72 Count</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$12.99</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Sleep Aid" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="blue sleep medicine bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyW4BaCW0Q_xpFMsPxqDPGqDIhDV1oHmRfuYagnHFNk8X-qIWCSCl8lMLULhZP3T-Bz8ic0zQl8z0IXfI5GJ6Ik1PrE3p7p7d0UYlvOStnm4O-TO9lgILSfaUDeHjWXmw6cVdV57iDsn_fNLjaA8gwSe8vMwgCIRgmQR_o_59tgZBaB8Fg5l20Tmq4iCGAcf_smj3Uxcaq0oEsm6H25T8-S6PzNpb69LtDIuTM4oEqzmYYi-wf9Bvb10zJSRrHs5fxcXh2qCZGg34" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.8</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Sleep Aid</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >Deep Sleep Melatonin 5mg</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >60 Gummies</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$13.99</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article><article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Fiber Supplement" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="orange fiber supplement jar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN2-A3peojeqQ6LkjY5nLGuawMQsRCBititMIMAZseMfbFlDxJ1JcVYEN82O_EwIbm88dyOdquz54bgDhs-lFrlU-nPqmq0kL8XTulmi2fIH_psJKVFwpa6Fbb-ef9uJosX3pt7G7nGX8uXS-Kbh1Jo6_Dk59ysRKNE2AXELou6GCQPcy24eWa6OgXKijZ_eXV5gbgQ0A5INEL6t3yP6_y3k75wvAyYuCQqWdZv16Bl4s69mirAdG-bsOJw5lVrbUuGu7WF1x798I" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.4</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Digestive</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >Daily Fiber Powder</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >72 Servings</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$22.50</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article><article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm" >Essential</div>
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="First Aid Cream" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="tube of antiseptic cream" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9t1U-P1b3T__JZCYoM_zcdfLVcGm0tAbiZ0UQNX23z41P-skxsJu4v2cg4_a3tT2c4etmWdtoMZN0NSBbVcg4wRLdewe8CM7femW1DC1W3-WnSpbp-cd0wK3oMBsvMJyXyu5Ob353DhGK4cot37DuoAtvx3dI5ty9dA79R5YTfA5OnChxXln-jPFj7q1RM2fQ7LAjZRRx8TJEt9FTK3lEAlQZlmajahX3Uk8ew4nz30W0ycJDNsMZY6swtie0FF5iCOp2gmoBnE" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.9</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >First Aid</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight" >Triple Antibiotic Ointment</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >1 oz Tube</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$8.75</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article></div>
</section>
{/* Promo Poster 2 */}
<section className="mb-12 relative overflow-hidden rounded-2xl h-48 shadow-lg group flex items-center bg-primary-container">
<div className="absolute inset-0 bg-gradient-to-r from-[#006d5b] to-[#005344] z-10"></div>
<div className="absolute right-0 top-0 h-full w-1/2 opacity-20 z-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9df3dc 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
<div className="relative z-20 w-full px-8 md:px-16 flex flex-col md:flex-row items-center justify-between text-white">
<div className="text-center md:text-left mb-6 md:mb-0">
<h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tighter leading-tight mb-2 text-white" >Buy 1 Get 1 50% Off</h2>
<p className="font-body text-lg text-white/90" >Mix &amp; match on all store brand supplements.</p>
</div>
<button className="bg-[#9df3dc] text-[#005344] font-bold px-8 py-3 rounded-full hover:bg-white transition-colors shadow-md active:scale-95 transform whitespace-nowrap" >View Eligible Items</button>
</div>
</section>
{/* Category Section 3: Personal Care */}
<section>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
<h2 className="font-headline text-2xl font-extrabold tracking-tight text-on-surface" >Personal Care</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm" >New</div>
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Personal Care Product 1" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="amber glass supplement bottle on white clinical background soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7lZDbix-rw4Z6jUNF0tvwx10jP98S2EojckeA_lPWUAWHRgvmshUeq0hQT3riFmtpPl23MXdWIVgG1MEaiG-pR0s5L1994NoQ-6GD_7JqAP8ccWsCfhmvekL0OSo7drFNS1nk87AttvgksuD8ydiCTtZXomqElqVdmFo7Fw9L5lx4tRKSNEiy8D9pmBMwz27F2drNQT1kde6283_oOMPlG7qi8NHAM4l6yqzXnexKa8oQ7Dw1ER_SCCjjCUpergpywilbiVasoWM" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.7</span>
<span className="font-body text-xs text-outline" >(88)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Skincare</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Hydrating Facial Cleanser with Ceramides</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >250 ml</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$15.99</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Personal Care Product 2" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="clear fish oil softgels spilling from white premium bottle clean aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3niYCVAKu6TJEedpGC3OHSyz1OcGLamSWeB4VIN9JebT-hLaSbJzJn3EI3I3qOB-2gZMI-_vaqgZBSlYgJEiQfdOX_t6qrlMtuhGCAa3pCpjECM0bYephqZO14o211AXoY13arB-Hj-u70ioPcWNTg9J8di4aV6dXIeFwd-AriObjHCBzJEtrjAbKHeDEduz66Cp7PRfT-wjFXxf8OpisnY-T01aXlX4zYlO2lZXfzWpIZ-0SZgR4yb6OqA0Iim63ctpWDKzFSgA" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.5</span>
<span className="font-body text-xs text-outline" >(112)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Body Care</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Organic Lavender Body Wash</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >500 ml</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$12.50</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm" >Best Seller</div>
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Personal Care Product 3" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="sleek white minimalist supplement container on marble surface soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9t1U-P1b3T__JZCYoM_zcdfLVcGm0tAbiZ0UQNX23z41P-skxsJu4v2cg4_a3tT2c4etmWdtoMZN0NSBbVcg4wRLdewe8CM7femW1DC1W3-WnSpbp-cd0wK3oMBsvMJyXyu5Ob353DhGK4cot37DuoAtvx3dI5ty9dA79R5YTfA5OnChxXln-jPFj7q1RM2fQ7LAjZRRx8TJEt9FTK3lEAlQZlmajahX3Uk8ew4nz30W0ycJDNsMZY6swtie0FF5iCOp2gmoBnE" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.9</span>
<span className="font-body text-xs text-outline" >(340)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Soothing</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Pure Aloe Vera Healing Gel</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >200 ml</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$8.99</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
{/* Reminders Card */}
<article className="bg-[#ffdad3]/50 rounded-2xl p-6 flex flex-col justify-center border border-[#93000a]/10 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-[#93000a] bg-white p-2 rounded-full shadow-sm" >water_drop</span>
<h3 className="font-headline font-bold text-[#93000a]" >Skincare Tip</h3>
</div>
<p className="font-body text-sm text-[#93000a]/80 mb-4" >Hydration starts from within, but locking it in with a good moisturizer right after a shower is key!</p>
<a className="text-[#93000a] font-bold text-sm hover:underline font-headline flex items-center gap-1" href="#" >Shop Moisturizers <span className="material-symbols-outlined text-[16px]" >arrow_forward</span></a>
</article>
</div>
</section>
{/* Category Section 4: Baby Care */}
<section>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
<h2 className="font-headline text-2xl font-extrabold tracking-tight text-on-surface" >Baby Care</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm" >Best Seller</div>
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Baby Care Product 1" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="amber glass supplement bottle on white clinical background soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJF7U5sqoqFBXU6jY-AYPEuAvU0kYp3H7f88g3ekCZPYCnId4cBXohIZKkbiZZyZlFJwp2I3hjeHKW9wLNKmt7IxbbHmCS56lU24s-d2A6un7MYarfAv7hCBm6mwhkLsiNDXL6c0qGNx0OupTtUgeHEWtu9OSvTLKpU1B-qKb6xY5az_oetKCpyv_yZrYj7a687oQxrdbthvHEYhXfTneemwSe6CnqvJx1uHrneIoeL-MIqzd7HyaQQmlQyHYJT9cXGBl4wDcvreY" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.9</span>
<span className="font-body text-xs text-outline" >(450)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Bath</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Tear-Free Gentle Baby Shampoo</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >400 ml</p>
<div className="mt-auto flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline text-lg font-extrabold text-on-surface" >$9.99</span>
</div>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add_shopping_cart</span>
</button>
</div>
</div>
</article>
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Baby Care Product 2" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="clear fish oil softgels spilling from white premium bottle clean aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmLQSkCCPGmOAKqPgdAD9zNPHpo5FkLBi8HDELDVaqMcUhyiPkK9pJVJ1dCMeWxjvJ-eWqYzOGLoEvDIVL8Uymw9pTqPRpeBTmoV2J52KCVpGE9Yd3uX7d46vojwrndcW3GN4VDb2I8Un1TfxMM7AvmebOYpr442PlRhBoymqo8ae-O8p9_cVXS1pOUBmB8JAZ5StFsukyNzWix5pqX2nORaSoe6hPoz3ijmUH52EfLJT2bMrTSPXiwA_qMGI7XXuk9x2oR0CkkI4" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.8</span>
<span className="font-body text-xs text-outline" >(312)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Skin Protect</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Maximum Strength Diaper Rash Cream</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >113 g</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$7.50</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
<article className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group">
<button aria-label="Add to wishlist" className="absolute top-3 right-3 text-outline hover:text-tertiary transition-colors z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm" >
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
<div className="h-48 bg-surface-container-low flex items-center justify-center p-4 overflow-hidden relative">
<img alt="Baby Care Product 3" className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="sleek white minimalist supplement container on marble surface soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQy4O-biaExGIYQ9kQzufL_g-moHOHXv5ntccnNZoidaIgwonkE4bFbf-aIlQYzI3unradN6Gk8OPBAVaiPA0I26prVPQ71RlhOFlkxu-mlWX61HTD1sgachB9dCBw_yFnB219xrLS7xk4OoVakC-fpjgoOa3D6NKEh16e8pk2TTFw61_DURAvLz7LoPGuuoZDSfqD0r21JfdIKH7lfI-GuzhjvGKNDjKnDVVvQZ0FG5U7ULnQnuRyUxbQOMs9HzvK6MZJ7m6VRSg" />
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[#f59e0b] text-[16px] fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label text-sm font-semibold text-on-surface" >4.6</span>
<span className="font-body text-xs text-outline" >(189)</span>
</div>
<span className="font-label text-xs text-primary mb-1 uppercase tracking-wider" >Skin Comfort</span>
<h3 className="font-headline text-base font-bold text-on-surface mb-1 leading-tight line-clamp-2" >Talc-Free Organic Baby Powder</h3>
<p className="font-body text-xs text-on-surface-variant mb-4" >250 g</p>
<div className="mt-auto flex items-center justify-between">
<span className="font-headline text-lg font-extrabold text-on-surface" >$6.99</span>
<button aria-label="Add to cart" className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm active:scale-95 transform" >
<span className="material-symbols-outlined" >add</span>
</button>
</div>
</div>
</article>
{/* Reminders Card */}
<article className="bg-[#c8eade]/50 rounded-2xl p-6 flex flex-col justify-center border border-[#005344]/10 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-[#005344] bg-white p-2 rounded-full shadow-sm" >child_care</span>
<h3 className="font-headline font-bold text-[#005344]" >Parenting Tip</h3>
</div>
<p className="font-body text-sm text-[#005344]/80 mb-4" >Keep a travel-sized diaper rash cream in your go-bag for emergencies on the move.</p>
</article>
</div>
</section>
</div>
</div>
</main>
{/* Footer */}
<footer className="full-width rounded-none mt-20 border-t border-teal-800 dark:border-emerald-900 flat bg-teal-900 dark:bg-emerald-950">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
<div className="col-span-2 md:col-span-1">
<span className="text-xl font-bold text-white mb-4 block font-plus-jakarta-sans" >Emerald Clinical</span>
<p className="font-plus-jakarta-sans text-sm leading-relaxed text-teal-200/80 mb-6 max-w-xs" >The Clinical Concierge. Redefining digital healthcare with precision and elegance.</p>
</div>
<div>
<h4 className="text-white font-bold mb-4 font-plus-jakarta-sans tracking-tight" >Explore</h4>
<ul className="space-y-3 font-plus-jakarta-sans text-sm leading-relaxed cursor-pointer opacity-90 hover:opacity-100">
<li className="" ><a className="text-teal-200/80 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-block" href="#" >About Us</a></li>
<li className="" ><a className="text-teal-200/80 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-block" href="#" >Contact Us</a></li>
<li className="" ><a className="text-teal-200/80 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-block" href="#" >Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4 font-plus-jakarta-sans tracking-tight" >Services</h4>
<ul className="space-y-3 font-plus-jakarta-sans text-sm leading-relaxed cursor-pointer opacity-90 hover:opacity-100">
<li className="" ><a className="text-teal-200/80 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-block" href="#" >Terms &amp; Conditions</a></li>
<li className="" ><a className="text-teal-200/80 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-block" href="#" >Return Policy</a></li>
<li className="" ><a className="text-teal-200/80 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-block" href="#" >Doctor Consultations</a></li>
<li className="" ><a className="text-teal-200/80 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-block" href="#" >Lab Tests</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-white font-bold mb-4 font-plus-jakarta-sans tracking-tight" >Stay Updated</h4>
<p className="font-plus-jakarta-sans text-sm leading-relaxed text-teal-200/80 mb-4" >Subscribe for wellness tips and exclusive offers.</p>
<div className="flex">
<input className="bg-emerald-900/50 border-teal-800 text-white placeholder:text-teal-400/50 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-teal-400 text-sm" placeholder="Email address" type="email"/>
<button className="bg-teal-700 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md transition-colors" >
<span className="material-symbols-outlined text-[20px]" >arrow_forward</span>
</button>
</div>
</div>
</div>
</footer>
      </div>
    </>
  );
}
