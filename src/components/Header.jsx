import React from 'react';
 import logo from "../assets/main-logo.png";


export default function Header({ 
  isMobileDrawerOpen, 
  setIsMobileDrawerOpen, 
  activeTab, 
  setActiveTab, 
  navItems 
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-header transition-all duration-300">
      <div className="h-20 px-4 sm:px-6 flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
            aria-label="Toggle Navigation Menu"
            className="min-w-[42px] min-h-[42px] flex items-center justify-center text-white hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all md:hidden"
            id="menu-btn"
          >
            <span className="material-symbols-outlined text-[26px]">
              {isMobileDrawerOpen ? "close" : "menu"}
            </span>
          </button>

          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="flex items-center p-1.5 rounded-xl bg-white/10  shadow-[0_5px_16px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:-rotate-1">
              <img
                src={logo}
                className="h-10 w-auto max-w-[125px] object-contain"
                alt="Indian Electric & Lighting Hub"
              />
            </div>
            <span className="text-base sm:text-lg font-extrabold leading-tight text-white whitespace-nowrap">
              Indian{" "}
              <span className="text-amber-400"> Electric & Light Hub</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => {
            const isActive = activeTab === item.path;
            return (
              <a
                key={item.path}
                href={item.href}
                onClick={() => setActiveTab(item.path)}
                className={`relative px-0 py-3 text-[13px] font-bold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-slate-300 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {item.label.split(" (")[0]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:flex items-center gap-2 px-3 h-10 rounded-lg border border-emerald-400/40 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-white font-bold text-xs tracking-wide transition-colors active:scale-95"
            href="https://wa.me/917905383563"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              aria-hidden="true"
              className="h-[18px] w-[18px] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.83c0 2.09.55 4.13 1.59 5.93L.13 24l6.39-1.67a11.83 11.83 0 0 0 5.56 1.42h.01c6.53 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.43Zm-8.44 18.24h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.51-5.23C2.17 6.4 6.61 1.96 12.08 1.96a9.8 9.8 0 0 1 6.98 2.9 9.85 9.85 0 0 1 2.89 7.01c0 5.47-4.45 9.91-9.87 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            className="hidden sm:flex items-center gap-2 px-4 h-10 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide transition-colors active:scale-95"
            href="tel:7905383563"
          >
            <span className="material-symbols-outlined text-[17px]">
              phone_in_talk
            </span>
            <span>Call showroom</span>
          </a>
          <div className="hidden lg:flex h-10 w-10 rounded-lg bg-white/10 border border-white/15 text-amber-300 items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">store</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-white/10 px-4 py-4 shadow-xl transition-all">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.path);
                  setIsMobileDrawerOpen(false);
                }}
                className={`min-h-[44px] px-4 rounded-lg flex items-center text-sm font-semibold transition-all ${
                  activeTab === item.path
                    ? "bg-slate-950 text-white font-bold shadow-sm"
                    : "text-slate-200 hover:bg-white/10 hover:text-amber-300"
                }`}
              >
                {item.label.split(" (")[0]}
              </a>
            ))}
            <a
              className="mt-3 min-h-[48px] px-4 rounded-lg flex items-center justify-center gap-2 border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 font-bold text-sm active:scale-98"
              href="https://wa.me/917905383563"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.83c0 2.09.55 4.13 1.59 5.93L.13 24l6.39-1.67a11.83 11.83 0 0 0 5.56 1.42h.01c6.53 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.43Zm-8.44 18.24h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.51-5.23C2.17 6.4 6.61 1.96 12.08 1.96a9.8 9.8 0 0 1 6.98 2.9 9.85 9.85 0 0 1 2.89 7.01c0 5.47-4.45 9.91-9.87 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              <span>WhatsApp पर चैट करें</span>
            </a>
            <a
              className="mt-3 min-h-[48px] px-4 rounded-lg flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold text-sm shadow-md active:scale-98"
              href="tel:7905383563"
            >
              <span className="material-symbols-outlined text-[20px]">
                call
              </span>
              <span>7905383563 पर कॉल करें</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
