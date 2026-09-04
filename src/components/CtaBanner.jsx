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
            href="https://wa.me/917905383563?text=नमस्ते,%20मुझे%20लाइट%20और%20वायरिंग%20सामान%20की%20जानकारी%20चाहिए।"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.534 1.769.814 2.796.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.385-.45-4.814-1.238l-4.786 1.256 1.278-4.667c-.867-1.488-1.378-3.218-1.378-5.051 0-5.514 4.486-10 10-10s10 4.486 10 10zm-5.021 3.491c-.244-.122-1.442-.712-1.666-.793-.224-.082-.387-.122-.55.122-.163.244-.631.793-.773.956-.143.163-.285.183-.53.061-.244-.122-1.033-.381-1.968-1.214-.727-.649-1.219-1.45-1.361-1.694-.143-.244-.015-.376.107-.497.11-.11.244-.285.367-.428.122-.143.163-.244.244-.407.082-.163.041-.305-.02-.428-.061-.122-.55-1.324-.753-1.813-.198-.477-.399-.412-.55-.42-.143-.008-.305-.01-.468-.01-.163 0-.428.061-.652.305-.224.244-.855.835-.855 2.036 0 1.201.876 2.361.998 2.524.122.163 1.725 2.634 4.179 3.693.584.252 1.04.403 1.396.516.587.186 1.121.16 1.543.097.471-.07 1.442-.59 1.645-1.16.204-.57.204-1.059.143-1.16-.061-.102-.224-.163-.468-.285z" />
            </svg>
            <span>WhatsApp पर पूछें</span>
          </a>
        </div>
      </div>
    </section>
  );
}
