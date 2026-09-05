import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import heroVideo from "../assets/new-hero-video.mp4";
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl mt-4 border border-slate-200/80 shadow-xl bg-slate-900 group" id="home">
      <div className="relative min-h-[500px] md:min-h-[580px] flex items-end w-full">
       
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={heroVideo}

          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Soft elegant vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>

        <div className="relative z-10 w-full px-6 py-10 md:px-12 md:py-14 flex flex-col gap-5 md:max-w-3xl">
          {/* Micro Tags */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <span className="material-symbols-outlined text-[15px] text-amber-400">verified</span>
              हंसवर का भरोसेमंद प्रतिष्ठान
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium backdrop-blur-md">
              <span className="material-symbols-outlined text-[15px] text-amber-400">location_on</span>
              📍 हंसवर न्यू मार्केट
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            हर तरह की लाइट और <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              वायरिंग सामान उपलब्ध
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed">
            हमारे यहाँ लाइट और वायरिंग के सभी सामान <strong className="text-amber-300 font-semibold">उचित दाम</strong> पर मिलते हैं। टॉप ब्रांड्स, सुरक्षित केबल्स और आकर्षक डेकोरेटिव झूमर एक ही छत के नीचे।
          </p>

          {/* CTA Buttons */}
        

<div className="grid grid-cols-2 gap-3 pt-2 w-full">

  {/* Call Button */}
  <a
    href="tel:7905383563"
    className="min-h-[48px] px-3 sm:px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg active:scale-95"
  >
    <FiPhoneCall className="text-lg shrink-0" />
    <span>Call: 7905383563</span>
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/917905383563?text=Hello%2C%20I%20need%20information%20about%20lights%20and%20wiring"
    target="_blank"
    rel="noopener noreferrer"
    className="min-h-[48px] px-3 sm:px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg active:scale-95"
  >
    <FaWhatsapp className="text-lg shrink-0" />
    <span>WhatsApp</span>
  </a>

</div>
```

```

        </div>
      </div>
    </section>
  );
}
