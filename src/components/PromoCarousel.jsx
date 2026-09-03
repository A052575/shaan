import React, { useState, useEffect, useRef, useCallback } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { CAROUSEL_SLIDES, WHATSAPP_CONFIG } from '../data/carouselData';

/**
 * PromoCarousel Component
 * 
 * Clean, readable, and industry-standard architecture:
 * 1. State Management: Tracks current slide index & pause on hover state.
 * 2. Auto-play: Automatically advances slides with standard cleanup in useEffect.
 * 3. Touch support: Simple touch gesture handlers for mobile swipe.
 * 4. Modular JSX: Clean sub-sections (Media, Content, Controls, Dots).
 */
export default function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // References for touch swipe gesture
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Advance to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_SLIDES.length);
  }, []);

  // Go back to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  // Jump directly to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play timer effect (pause on hover / touch)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    
    // Swipe left -> next slide (distance > 50px)
    if (distance > 50) {
      nextSlide();
    } 
    // Swipe right -> prev slide (distance < -50px)
    else if (distance < -50) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentSlide = CAROUSEL_SLIDES[currentIndex];

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
      <div className="relative min-h-[440px] sm:min-h-[480px] md:min-h-[500px] w-full flex items-center">
        {/* Background Slide Images with smooth fade transition */}
        {CAROUSEL_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {/* Lighting Vignette and Readable Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent" />
            </div>
          );
        })}

        {/* Content Overlay */}
        <div className="relative z-20 w-full px-5 py-10 sm:px-10 md:px-14 flex flex-col justify-between h-full">
          <div className="max-w-2xl flex flex-col gap-4 sm:gap-5">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold backdrop-blur-md">
                {currentSlide.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-slate-100 text-xs font-semibold backdrop-blur-md">
                <span className="material-symbols-outlined text-[15px] text-amber-400">verified</span>
                {currentSlide.badge}
              </span>
            </div>

            {/* Slide Title & Subtitle */}
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                {currentSlide.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-amber-400/90 uppercase">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Slide Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
              {currentSlide.description}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={currentSlide.ctaLink}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg glow-btn active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {currentSlide.ctaLink.startsWith('tel') ? 'call' : 'arrow_forward'}
                </span>
                <span>{currentSlide.ctaText}</span>
              </a>

              <a
                href={WHATSAPP_CONFIG.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 border border-emerald-400/40 text-white font-bold text-xs sm:text-sm flex items-center gap-2 backdrop-blur-md transition-all active:scale-95 shadow-md"
              >
                <WhatsAppIcon size={20} className="text-white" />
                <span>WhatsApp चैट करें</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
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

        {/* Navigation Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2.5 px-4">
          {CAROUSEL_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-8 h-2.5 bg-amber-400 shadow-lg shadow-amber-400/50'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            );
          })}
        </div>

        {/* Slide Counter Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 px-3 py-1 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-md text-slate-300 text-xs font-semibold">
          <span className="text-amber-400 font-bold">{currentIndex + 1}</span> / {CAROUSEL_SLIDES.length}
        </div>
      </div>
    </section>
  );
}
