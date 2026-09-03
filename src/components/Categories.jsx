import React from 'react';

export default function Categories({ categories }) {
  return (
    <section className="w-full px-4 sm:px-6 py-14 flex flex-col gap-8" id="products">
      <div className="flex flex-col gap-2 text-center items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
          <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse"></span>
          <span className="text-xs uppercase tracking-wider font-bold">All Electricals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          हमारे प्रोडक्ट्स <span className="text-amber-600">(Product Categories)</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl">
          Browse Our Electrical &amp; Lighting Range — सभी आधुनिक व सुरक्षित उत्पाद
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col items-center text-center gap-3 hover:-translate-y-1.5 active:scale-98"
            href="#featured"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner">
              <span className="material-symbols-outlined text-[28px]">
                {cat.icon}
              </span>
            </div>
            
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-amber-600 transition-colors truncate">
                {cat.name}
              </span>
              <span className="text-xs text-slate-500 font-medium mt-0.5">
                {cat.hindi}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
