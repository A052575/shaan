import React from 'react';

export default function CtaBanner() {
  return (
    <section className="w-full px-4 sm:px-6 py-6">
      <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl shadow-amber-500/20 flex flex-col items-center text-center gap-5">
        <div className="relative z-10 flex flex-col gap-2 max-w-xl">
          <span className="inline-block mx-auto px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs uppercase tracking-widest font-extrabold text-white">
            ✨ हार्दिक स्वागत
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            एक बार सेवा का मौका जरूर दें
          </h2>
          <p className="text-sm sm:text-base text-amber-50 font-normal">
            बेहतरीन लाइट और वायरिंग सामान के लिए आज ही संपर्क करें। आपके घर और दुकान की रोशनी का पूरा समाधान।
          </p>
        </div>

        <div className="relative z-10 w-full max-w-sm pt-1">
          <a
            className="w-full min-h-[50px] rounded-2xl bg-slate-900 hover:bg-slate-950 text-white transition-all duration-300 text-base font-bold flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 active:scale-95"
            href="tel:7905383563"
          >
            <span className="material-symbols-outlined text-[22px] text-amber-400">call</span>
            <span>📞 7905383563 पर कॉल करें</span>
          </a>
        </div>
      </div>
    </section>
  );
}
