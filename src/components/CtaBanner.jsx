import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_CONFIG } from '../data/carouselData';

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

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 w-full max-w-md pt-2">
          <a
            className="flex-1 min-w-[200px] min-h-[48px] px-6 rounded-2xl bg-slate-900 hover:bg-slate-950 text-white transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95"
            href="tel:7905383563"
          >
            <span className="material-symbols-outlined text-[20px] text-amber-400">call</span>
            <span>Call: 7905383563</span>
          </a>
          <a
            className="flex-1 min-w-[200px] min-h-[48px] px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 border border-emerald-400/40"
            href={WHATSAPP_CONFIG.chatUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} className="text-white" />
            <span>WhatsApp पर पूछें</span>
          </a>
        </div>
      </div>
    </section>
  );
}
