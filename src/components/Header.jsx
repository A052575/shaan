import React from 'react';

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
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-xl transition-all md:hidden"
            id="menu-btn"
          >
            <span className="material-symbols-outlined text-[26px]">
              {isMobileDrawerOpen ? 'close' : 'menu'}
            </span>
          </button>
          
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 rounded-2xl bg-gradient-to-tr from-amber-500/10 to-orange-500/10 border border-amber-200/80 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img
                alt="Sufiyan Light Shop Logo"
                className="h-9 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4sJZsgzJbe70verzWLUSrHZvfiQnRJmaveh4uyVUWJskIjMwvRpqkl5ozWLlL2ussvVJvHsul3Z_IM0TWVV9WLFKKZ2FKk5YR9pIUawl8Z5vvHezydvsLXClVshgkTyK3DE_yL30EkbKsakzfCbrfxar5wCBak72S0CXrkXb0M4AmgbP9cOsRrJN_V1IvabBiSMoBxDCpLfOwqidHzuGBDN5RWNRZA_aISwBNFecU66MVbJqTNKfk7w"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight">
                Sufiyan <span className="text-amber-600">Light Shop</span>
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium mt-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Hanswar New Market
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/90 border border-slate-200 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab === item.path;
            return (
              <a
                key={item.path}
                href={item.href}
                onClick={() => setActiveTab(item.path)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20 scale-105 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden lg:flex items-center gap-2 px-5 h-11 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm glow-btn active:scale-95"
            href="tel:7905383563"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>7905383563</span>
          </a>
          <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">store</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 py-4 shadow-xl transition-all">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.path);
                  setIsMobileDrawerOpen(false);
                }}
                className={`min-h-[44px] px-4 rounded-xl flex items-center text-sm font-semibold transition-all ${
                  activeTab === item.path
                    ? 'bg-amber-500 text-white font-bold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 min-h-[48px] px-4 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow-md active:scale-98"
              href="tel:7905383563"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>📞 7905383563 पर कॉल करें</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
