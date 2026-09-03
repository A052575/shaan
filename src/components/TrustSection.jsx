import React from 'react';

export default function TrustSection() {
  const promises = [
    { title: 'Quality Products', subtitle: '100% ओरिजिनल व ब्रांडेड सामान', icon: 'verified', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { title: 'Reasonable Prices', subtitle: 'हंसवर में सबसे वाजिब थोक दरें', icon: 'savings', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { title: 'Safe Wiring', subtitle: 'शॉर्ट सर्किट व अग्निरोधी सुरक्षा', icon: 'security', color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { title: 'Customer First', subtitle: 'हंसवर का भरोसेमंद प्रतिष्ठान', icon: 'thumb_up', color: 'text-orange-600 bg-orange-50 border-orange-200' },
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-10" id="about">
      <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col text-center items-center gap-1.5">
          <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-1 shadow-sm">
            <span className="material-symbols-outlined text-[24px]">verified_user</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            आपकी जरूरत, <span className="text-amber-600">हमारी जिम्मेदारी</span>
          </h2>
          <p className="text-sm text-slate-600 max-w-md">
            सच्चाई, शुद्धता और तकनीकी सुरक्षा — हमारे 4 प्रमुख वादे
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {promises.map((promise, idx) => (
            <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/80 transition-all group">
              <div className={`p-2 rounded-xl border shrink-0 ${promise.color}`}>
                <span className="material-symbols-outlined text-[20px]">{promise.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{promise.title}</span>
                <span className="text-xs text-slate-500 mt-0.5">{promise.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
