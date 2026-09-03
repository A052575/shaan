import React from 'react';

export default function WhyChooseUs({ features }) {
  const modernFeatures = [
    {
      title: '1. प्रीमियम व ओरिजिनल वायरिंग',
      desc: 'टॉप सर्टिफाइड ब्रांड्स से सीधे मंगाई गई 100% शुद्ध तांबे की सुरक्षित वायरिंग सामग्री।',
      icon: 'verified',
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      title: '2. उचित व पारदर्शी दाम',
      desc: 'हंसवर बाजार में सबसे किफायती थोक व फुटकर रेट, बिना किसी अतिरिक्त या छुपे चार्ज के।',
      icon: 'payments',
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      title: '3. अग्निरोधी व शॉक-प्रूफ सुरक्षा',
      desc: 'शॉर्ट सर्किट और ओवरलोड से बचाने वाले हीट-रेसिस्टेंट केबल्स और मॉडर्न MCB ब्रेकर्स।',
      icon: 'shield',
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      title: '4. वर्षों का भरोसा व संतुष्टि',
      desc: 'सालों की साख, दोस्ताना सलाह और सामान लेने के बाद भी पूरी तकनीकी गाइडेंस की सुविधा।',
      icon: 'handshake',
      iconBg: 'bg-orange-100 text-orange-600',
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-14 flex flex-col gap-8" id="why-us">
      <div className="text-center flex flex-col items-center gap-2 max-w-xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider">
          हमारी विशेषता
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          सुफियान लाइट शॉप <span className="text-amber-600">क्यों चुनें?</span>
        </h2>
        <p className="text-sm text-slate-600">
          विश्वसनीयता, तकनीकी सुरक्षा और उचित दाम — हमारे हर ग्राहक का प्रथम अधिकार
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modernFeatures.map((item, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col gap-3 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-sm ${item.iconBg}`}>
              <span className="material-symbols-outlined text-[26px]">
                {item.icon}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 pt-1">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
