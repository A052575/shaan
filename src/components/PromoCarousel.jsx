import React, { useState, useEffect, useRef, useCallback } from 'react';

const slides = [
  {
    id: 1,
    tag: '✨ Trending Collection',
    badge: 'Upto 25% Off',
    title: 'शाही लुक वाले मॉडर्न झूमर व सीलिंग लाइट्स',
    subtitle: 'Designer Chandeliers & Luxury Living Room Fixtures',
    description: 'लिविंग रूम और हॉल को दीजिए एक आलीशान और रोशन अहसास। आकर्षक क्रिस्टल और मेटालिक फिनिश में उपलब्ध।',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'कॉल करके रेट जानें',
    ctaLink: 'tel:7905383563',
    themeColor: 'from-amber-500/20 via-slate-900/80 to-slate-950',
    accent: 'amber'
  },
  {
    id: 2,
    tag: '⚡ 100% Pure Copper',
    badge: 'Fire-Resistant ISI Certified',
    title: 'अग्निरोधी और टिकाऊ हाउस वायरिंग केबल्स',
    subtitle: 'Heavy-Duty Safe Wires & Cables for Home & Industry',
    description: 'शॉर्ट सर्किट और ओवरलोड से अपने घर और परिवार को सुरक्षित रखें। 100% शुद्ध कॉपर वायर उचित थोक भाव में।',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'थोक दरें जानें',
    ctaLink: 'tel:7905383563',
    themeColor: 'from-blue-600/20 via-slate-900/80 to-slate-950',
    accent: 'blue'
  },
  {
    id: 3,
    tag: '💡 Smart & Energy Saver',
    badge: '85% Energy Saving',
    title: 'हाई ल्यूमेंस एलईडी पैनल व कंसील्ड लाइट्स',
    subtitle: 'Ultra Slim Recessed Downlights & Warm Ambient Bulbs',
    description: 'कम बिजली खर्च में तेज व आंखों को सुकून देने वाली नेचुरल रोशनी। 1 से 2 साल की वारंटी के साथ उपलब्ध।',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'ऑर्डर बुक करें',
    ctaLink: 'tel:7905383563',
    themeColor: 'from-emerald-600/20 via-slate-900/80 to-slate-950',
    accent: 'emerald'
  },
  {
    id: 4,
    tag: '🔘 Modern Interiors',
    badge: 'Smooth Click & Shock Proof',
    title: 'प्रीमियम मॉड्यूलर स्विच और सॉकेट्स',
    subtitle: 'Elegant Switches, Plates & Smart Regulators',
    description: 'दीवारों की सुंदरता बढ़ाने वाले ग्लॉसी व मैट फिनिश मॉड्यूलर बोर्ड और शॉक-प्रूफ सेफ्टी सॉकेट्स।',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'वैरायटी देखें',
    ctaLink: '#products',
    themeColor: 'from-purple-600/20 via-slate-900/80 to-slate-950',
    accent: 'purple'
  },
  {
    id: 5,
    tag: '🎉 Festive & Outdoor',
    badge: 'Waterproof & Durable',
    title: 'शादी, त्योहार व आउटडोर वाटरप्रूफ लाइट्स',
    subtitle: 'RGB Pixel Strips, Rope Lights & Garden Flood Lights',
    description: 'घर, दुकान या मैरिज हॉल की शानदार सजावट के लिए वेदरप्रूफ और वाइब्रेंट कलरफुल डेकोरेटिव लाइट्स।',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'डेकोरेशन लाइट्स देखें',
    ctaLink: '#lighting-showcase',
    themeColor: 'from-pink-600/20 via-slate-900/80 to-slate-950',
    accent: 'pink'
  }
];

export default function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayTimer = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (!isPaused) {
      autoPlayTimer.current = setInterval(() => {
        nextSlide();
      }, 4500);
    }
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const current = slides[currentIndex];

  return (
    <section
      className="w-full my-6 rounded-3xl overflow-hidden relative shadow-2xl border border-slate-800 bg-slate-950 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="विशेष ऑफर्स व लाइटिंग कैरोसेल"
    >
      {/* Background Slides Stack */}
      <div className="relative min-h-[440px] sm:min-h-[480px] md:min-h-[500px] w-full flex items-center">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${isActive ? 'scale-105' : 'scale-100'
                  }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {/* Dynamic Theme Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent" />
            </div>
          );
        })}

        {/* Content Layer */}
        <div className="relative z-20 w-full px-5 py-10 sm:px-10 md:px-14 flex flex-col justify-between h-full">
          <div className="max-w-2xl flex flex-col gap-4 sm:gap-5">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold backdrop-blur-md animate-fadeIn">
                {current.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-100 text-xs font-semibold backdrop-blur-md">
                <span className="material-symbols-outlined text-[15px] text-amber-400">verified</span>
                {current.badge}
              </span>
            </div>

            {/* Slide Headings */}
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                {current.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-amber-400/90 uppercase">
                {current.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={current.ctaLink}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg glow-btn active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {current.ctaLink.startsWith('tel') ? 'call' : 'arrow_forward'}
                </span>
                <span>{current.ctaText}</span>
              </a>

             
            </div>
          </div>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-90"
        >
          <span className="material-symbols-outlined text-2xl">chevron_left</span>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-90"
        >
          <span className="material-symbols-outlined text-2xl">chevron_right</span>
        </button>

        {/* Bottom Navigation & Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2.5 px-4">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${isActive
                    ? 'w-8 h-2.5 bg-amber-400 shadow-lg shadow-amber-400/50'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
                  }`}
              />
            );
          })}
        </div>

        {/* Slide Counter Indicator */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 px-3 py-1 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-md text-slate-300 text-xs font-semibold">
          <span className="text-amber-400 font-bold">{currentIndex + 1}</span> / {slides.length}
        </div>
      </div>
    </section>
  );
}
