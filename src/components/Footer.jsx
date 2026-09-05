import React from 'react';
import logo from "../assets/main-logo.png";

export default function Footer() {
  return (
    <footer className="mt-14 bg-slate-900 text-slate-300 p-8 sm:p-12 rounded-t-3xl border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3.5 max-w-md">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-xl bg-white/10 border border-white/20">
              <img
                src={logo}
                className="h-12 w-auto object-contain"
                alt="indian Electric & Light Hub"
              />
            </div>
            <span className="text-xl font-extrabold text-white">
              Indian <span className="text-amber-400">Electric & Lighting Hub</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Your trusted community electricals &amp; architectural lighting
            store in Hanswar. Top brands, certified wires, and modern decorative
            fixtures.
          </p>
          <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
            <span className="material-symbols-outlined text-amber-400 text-[18px]">
              location_on
            </span>
            <span>Hanswar New Market, Ambedkar Nagar, UP</span>
          </div>
          <a
            className="inline-flex items-center gap-1 text-amber-400 hover:underline font-semibold text-xs transition-colors"
            href="https://maps.google.com/?q=Hanswar+New+Market"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px]">
              directions
            </span>
            <span>Google Maps पर देखें</span>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400 text-[18px]">
              schedule
            </span>
            <span>Business Hours (दुकान का समय)</span>
          </span>
          <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-slate-400">
            <li className="flex justify-between gap-6">
              <span>Monday - Saturday:</span>
              <span className="text-amber-300 font-semibold">
                08:00 AM - 09:00 PM
              </span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Sunday:</span>
              <span className="text-amber-300 font-semibold">
                08:00 AM - 09:00 PM
              </span>
            </li>
          </ul>
          <div className="mt-2">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md active:scale-95 transition-all"
              href="tel:7905383563"
            >
              <span className="material-symbols-outlined text-[16px]">
                phone_in_talk
              </span>
              <span>Call 7905383563</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-5 border-t border-slate-800 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} Sufiyan Light Shop, Hanswar New Market. All
        rights reserved.
      </div>
    </footer>
  );
}
