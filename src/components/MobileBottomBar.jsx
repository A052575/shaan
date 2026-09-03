import React from 'react';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-16 inset-x-0 z-40 p-3 md:hidden pointer-events-none">
      <div className="max-w-md mx-auto p-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center gap-2 pointer-events-auto">
        <a
          className="flex-1 min-h-[46px] px-4 rounded-xl bg-amber-500 text-white flex items-center justify-center gap-2 font-bold text-sm shadow-md active:scale-95 transition-transform"
          href="tel:7905383563"
        >
          <span className="material-symbols-outlined text-[18px] animate-bounce">call</span>
          <span>Call: 7905383563</span>
        </a>
        <a
          className="min-w-[46px] min-h-[46px] px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-1 font-semibold text-xs active:scale-95 transition-all"
          href="https://maps.google.com/?q=Hanswar+New+Market"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-amber-600 text-[18px]">directions</span>
          <span>रास्ता</span>
        </a>
      </div>
    </div>
  );
}
