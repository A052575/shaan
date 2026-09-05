import React from 'react';

export default function MobileNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { label: 'Home', path: 'home', icon: 'home', href: '#home' },
    { label: 'Products', path: 'products', icon: 'category', href: '#products' },
    { label: 'Lights', path: 'lighting-showcase', icon: 'light_mode', href: '#lighting-showcase' },
    { label: 'Why Us', path: 'why-us', icon: 'verified', href: '#why-us' },
    { label: 'Contact', path: 'contact', icon: 'call', href: '#contact' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((item) => {
          const isActive = activeTab === item.path;
          return (
            <a
              key={item.path}
              href={item.href}
              onClick={() => setActiveTab(item.path)}
              className={`flex flex-col items-center justify-center min-w-[50px] min-h-[46px] rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-amber-600 font-bold' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >   
              <span className="material-symbols-outlined text-[22px]">
                {item.icon}
              </span>
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
