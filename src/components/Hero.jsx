import React from 'react';
import heroVideo from "../assets/new-hero-video.mp4";
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
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              className="flex-1 sm:flex-none min-h-[48px] px-7 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 shadow-lg glow-btn active:scale-95"
              href="tel:7905383563"
            >
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              <span>Call: 7905383563</span>
            </a>
            <a
              className="flex-1 sm:flex-none min-h-[48px] px-7 rounded-2xl bg-emerald-600 hover:bg-emerald-700 border border-emerald-400/40 text-white transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 active:scale-95 shadow-lg"
              href="https://wa.me/917905383563?text=नमस्ते,%20मुझे%20लाइट%20और%20वायरिंग%20सामान%20की%20जानकारी%20चाहिए।"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.534 1.769.814 2.796.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.385-.45-4.814-1.238l-4.786 1.256 1.278-4.667c-.867-1.488-1.378-3.218-1.378-5.051 0-5.514 4.486-10 10-10s10 4.486 10 10zm-5.021 3.491c-.244-.122-1.442-.712-1.666-.793-.224-.082-.387-.122-.55.122-.163.244-.631.793-.773.956-.143.163-.285.183-.53.061-.244-.122-1.033-.381-1.968-1.214-.727-.649-1.219-1.45-1.361-1.694-.143-.244-.015-.376.107-.497.11-.11.244-.285.367-.428.122-.143.163-.244.244-.407.082-.163.041-.305-.02-.428-.061-.122-.55-1.324-.753-1.813-.198-.477-.399-.412-.55-.42-.143-.008-.305-.01-.468-.01-.163 0-.428.061-.652.305-.224.244-.855.835-.855 2.036 0 1.201.876 2.361.998 2.524.122.163 1.725 2.634 4.179 3.693.584.252 1.04.403 1.396.516.587.186 1.121.16 1.543.097.471-.07 1.442-.59 1.645-1.16.204-.57.204-1.059.143-1.16-.061-.102-.224-.163-.468-.285z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
