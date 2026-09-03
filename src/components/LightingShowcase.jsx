import React from 'react';

export default function LightingShowcase({ showcases }) {
  return (
    <section className="w-full px-4 sm:px-6 py-14 flex flex-col gap-8 rounded-3xl bg-slate-900 text-white my-4 shadow-xl overflow-hidden relative" id="lighting-showcase">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider w-fit">
          Visual Showcase
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          हर तरह की लाइट उपलब्ध <span className="text-amber-400">(Lighting Showcase)</span>
        </h2>
        <p className="text-sm text-slate-300">
          घर, दुकान, पार्टी और आउटडोर — हर जगह को रोशनी से जगमगाएं
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {showcases.map((sc, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-end p-5 border border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 ${sc.span}`}
          >
            <img
              alt={sc.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={sc.img}
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 rounded-full w-fit backdrop-blur-md">
                {sc.tag}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {sc.title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {sc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
