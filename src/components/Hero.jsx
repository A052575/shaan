import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl mt-4 border border-slate-200/80 shadow-xl bg-slate-900 group" id="home">
      <div className="relative min-h-[500px] md:min-h-[580px] flex items-end w-full">
        {/* Background Image */}
        {/* <img
          alt="Sufiyan Light Shop Showroom in Hanswar"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9K3z47KXdoDXGQx53q1p3SR3hFX4pILmJTubI1DnicHBSeR_ulku5mRXYAQYliyoL_VbWFdB0m8yID7fQYuGw_mJe3D-719j83xQ671HhPqlXoNiuwMuHshAjNSZxlAv1CR_wyjX7BmPY57hqqNmaX-VOSxWGNNo0wXoyaeymnpX2UwBECy3trrk4hyfJSVkGQGcoearDI85wp6Uxdp_Exd4w7viW5SNnFhMDB9bXkkQgg0V6rYRPhw"
        /> */}
            <video
      className="absolute inset-0 w-full h-full object-cover object-center"
      // src="/src/assets/s-Video 2026-09-03 at 7.47.18 PM.mp4"
      src="/src/assets/Modify_this_video_specifically.mp4"
      
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

          {/* Call contact pill */}
          <div className="inline-flex items-center gap-3 p-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md w-fit">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
            </div>
            <div className="pr-2">
              <span className="block text-[11px] text-slate-300 font-medium">कॉल करें</span>
              <span className="text-base font-bold text-white tracking-wider">
                7905383563
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              className="flex-1 sm:flex-none min-h-[48px] px-7 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 shadow-lg glow-btn"
              href="tel:7905383563"
            >
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              <span>Call Now</span>
            </a>
            <a
              className="flex-1 sm:flex-none min-h-[48px] px-7 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-white transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2"
              href="#products"
            >
              <span className="material-symbols-outlined text-[20px] text-amber-300">grid_view</span>
              <span>View Products</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
