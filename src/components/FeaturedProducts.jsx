import React from 'react';

export default function FeaturedProducts({ featuredProducts }) {
  return (
    <section className="w-full px-4 sm:px-6 py-14 flex flex-col gap-8 rounded-3xl bg-slate-100/80 border border-slate-200/80 my-4" id="featured">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            Top Picks
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Popular Lighting Products
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            बेस्ट क्वालिटी, ब्रांडेड वारंटी और बाजार में सबसे उचित दाम
          </p>
        </div>
        <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-amber-700 font-bold self-start md:self-auto flex items-center gap-2 text-xs shadow-sm">
          <span className="material-symbols-outlined text-[16px] text-amber-500 animate-pulse">bolt</span>
          सर्टिफाइड और 100% टेस्टेड
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredProducts.map((prod, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="relative h-52 bg-slate-100 overflow-hidden">
              <img
                alt={prod.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                src={prod.img}
              />
              
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 border border-slate-200 text-[11px] font-semibold shadow-sm">
                {prod.tag}
              </span>
              <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-amber-500 text-white text-[11px] font-bold shadow-sm">
                {prod.badge}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                  {prod.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {prod.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div>
                  <span className="block text-[10px] text-slate-400 font-medium">दर</span>
                  <span className="text-xs font-bold text-slate-700">
                    {prod.priceTag}
                  </span>
                </div>
                
                <a
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition-all font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95"
                  href="tel:7905383563"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>दाम जानें</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
