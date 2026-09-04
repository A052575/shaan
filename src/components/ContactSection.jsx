import React from 'react';

export default function ContactSection({ 
  formData, 
  setFormData, 
  handleEnquirySubmit, 
  enquirySubmitted 
}) {
  return (
    <section className="w-full px-4 sm:px-6 py-14 flex flex-col gap-8" id="contact">
      <div className="flex flex-col gap-2">
        <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-xs font-bold uppercase tracking-wider text-amber-800 w-fit">
          Store &amp; Orders
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          संपर्क करें <span className="text-amber-600">(Contact &amp; Enquiry)</span>
        </h2>
        <p className="text-sm text-slate-600">
          दुकान पर पधारें या फोन पर अपना आर्डर व पूछताछ दर्ज करें
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Info Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center font-bold shadow-sm">
                <span className="material-symbols-outlined text-[26px]">storefront</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900">Indian Electric & Lighting Hub</span>
                <span className="text-xs text-slate-500 font-medium">इंडियन इलेक्ट्रिक & लाइटिंग हब
 • हंसवर</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="material-symbols-outlined text-amber-600 text-[20px] shrink-0 mt-0.5">location_on</span>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">दुकान का पता:</span>
                  <span>Hanswar New Market (हंसवर न्यू मार्केट, राजा का कोट), Ambedkar Nagar, UP</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="material-symbols-outlined text-amber-600 text-[20px] shrink-0">call</span>
                <div>
                  <span className="font-bold text-slate-900 mr-2">मोबाइल नंबर:</span>
                  <a className="text-amber-600 font-bold hover:underline" href="tel:7905383563">
                    7905383563
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="material-symbols-outlined text-amber-600 text-[20px] shrink-0">schedule</span>
                <div>
                  <span className="font-bold text-slate-900 mr-2">दुकान का समय:</span>
                  <span>प्रतिदिन: 8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              className="flex-1 min-h-[46px] px-5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              href="tel:7905383563"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Now</span>
            </a>
           <a
  href="https://maps.app.goo.gl/QpXxgV8p33hz6nvJA"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 min-h-[46px] px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
>
  <span className="material-symbols-outlined text-[18px]">
    location_on
  </span>
  <span>Get Directions</span>
</a>
          </div>

          <div
            className="w-full h-40 rounded-2xl bg-cover bg-center overflow-hidden border border-slate-200 shadow-inner relative group cursor-pointer"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaEgpuWnp1mgzbEqoa3G82px-18BQPULUw0PxmxTCMjidaxlWFddZ8Eho3Nt0hrsPWC9KCi29nSm2CTdOlYkStedPsYwJV5BUwV_3H5aUfmPb7duwZ0pecBFzAaVNEC1__sjdCCUkIy7lzEYFbIi4LSPPeRgw44iKgI5lNYiIgo6WU4bGDD7AvzXE5Rqr4aWU5uNDhrDJyQoy8kZypE-4G-GC2twbmGVGrufD6a4DxlMp62qnu3K4SNQ')`
            }}
          >
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
              <span className="px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-amber-600">map</span>
                Google Maps पर लोकेशन देखें
              </span>
            </div>
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-slate-900">
              त्वरित पूछताछ / <span className="text-amber-600">Quick Enquiry</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              सामान की जरूरत या रेट जानने के लिए हमें मैसेज भेजें
            </p>
          </div>

          <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-3.5" id="enquiry-form">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700" htmlFor="cust-name">
                आपका नाम (Your Name)
              </label>
              <input
                className="w-full min-h-[44px] px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm"
                id="cust-name"
                placeholder="नाम दर्ज करें (e.g. राहुल वर्मा)"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700" htmlFor="cust-phone">
                मोबाइल नंबर (Phone Number)
              </label>
              <input
                className="w-full min-h-[44px] px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm"
                id="cust-phone"
                pattern="[0-9]{10}"
                placeholder="10 अंकों का फोन नंबर (e.g. 9876543210)"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700" htmlFor="cust-msg">
                सामान का विवरण (Requirement / Message)
              </label>
              <textarea
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm"
                id="cust-msg"
                placeholder="बल्ब, वायर, स्विच या झूमर की जानकारी..."
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              className="min-h-[46px] w-full mt-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Send Enquiry / इन्क्वायरी भेजें</span>
            </button>

            {enquirySubmitted && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium text-center">
                ✓ धन्यवाद! आपकी इन्क्वायरी दर्ज कर ली गई है। हम जल्द ही आपसे <strong className="text-emerald-950">7905383563</strong> से संपर्क करेंगे।
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
