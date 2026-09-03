import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import LightingShowcase from './components/LightingShowcase';
import TrustSection from './components/TrustSection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';

export default function App() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
  };

  const navItems = [
    { label: 'Home', path: 'home', href: 'home' },
    { label: 'About', path: 'about', href: '#about' },
    { label: 'Products (हमारे प्रोडक्ट्स)', path: 'products', href: 'products' },
    { label: 'Lighting Showcase (लाइट्स)', path: 'lighting-showcase', href: 'lighting-showcase' },
    { label: 'Why Us (खासियत)', path: 'why-us', href: 'why-us' },
    { label: 'Contact (संपर्क)', path: 'contact', href: 'contact' },
  ];

  const categories = [
    { name: 'LED Bulbs', hindi: 'एलईडी बल्ब', icon: 'lightbulb' },
    { name: 'Ceiling Lights', hindi: 'सीलिंग लाइट्स', icon: 'flare' },
    { name: 'Panel Lights', hindi: 'पैनल लाइट्स', icon: 'grid_goldenratio' },
    { name: 'Decorative Lights', hindi: 'झूमर व लाइट्स', icon: 'wb_twilight' },
    { name: 'Tube Lights', hindi: 'ट्यूबलाइट्स', icon: 'horizontal_rule' },
    { name: 'Modular Switches', hindi: 'मॉड्यूलर स्विच', icon: 'toggle_on' },
    { name: 'Sockets & Plates', hindi: 'सॉकेट और प्लेट्स', icon: 'power' },
    { name: 'Electrical Wires', hindi: 'कंडक्टर व कॉपर तार', icon: 'cable' },
    { name: 'Heavy Cables', hindi: 'हैवी केबल्स', icon: 'electrical_services' },
    { name: 'Accessories', hindi: 'वायरिंग एक्सेसरीज', icon: 'build' },
  ];

  const featuredProducts = [
    {
      title: 'Aura Warm LED Filament Bulb 9W',
      desc: 'एम्बिएंट विंटेज वॉर्म लाइट, बेडरूम, डाइनिंग व कैफे डेकोरेशन के लिए सर्वश्रेष्ठ।',
      tag: '✨ Energy Efficient',
      badge: '2700K Warm Glow',
      priceTag: 'उचित बाजार भाव',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjlZRvmeY4giSmmQyazD9mDjS072kR8pobRqoDxnikgwAZqAxQrcFFLBDXjN8O6fk96H--BLW1NtibU2-Yz-ssze5UlAn4HGrne-RdHfZ_6T3SXcFVUfGahiKE4Z056ji-fI8OXJqcnXA6ILArp1CND8AJKA2kBKrpbo5C9eT4NGf4qxHgz9p83LhHtR58j8Jq-punIUVW42lA9M3P_W7r4-a50WYZ74ms7XpP57WN_uDn-i71RlemAQ'
    },
    {
      title: 'Slimline Flush Ceiling Panel 18W',
      desc: 'हाई ल्यूमेंस, आंखों के लिए सुगम डिफ्यूज्ड लाइट, ऑफिस और मॉडर्न ड्राइंग रूम हेतु।',
      tag: '🏢 Indoor Ambient',
      badge: '18W Cool Day',
      priceTag: 'थोक व फुटकर रेट',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-0Mh9SW4im0ZwYZaWlB6i1wVQFbZlNgnwwes2__I9QPN1qOcPfUH8I4_cvXE3kc7scp4TYXhee9b7sFoZXf93vHODxkDP27WyU3lvX_o9iqIxwdiFOEkvZ9S1AvQ2pQ-4OZXZCgf6VASwO1g96k8BWcrbRud0dln4T0zT6KzphySTQgDgJJyxLpc4M0bMqcVRYQ2ENNgR0UAuoThSouHa-L9nSCTCh1gIXZtCFb3hrUzJNiMC3hjKww'
    },
    {
      title: 'Modern Geometric Chandelier',
      desc: 'प्रीमियम मेटल डिजाइन, घर के हॉल और लिविंग एरिया को दे शाही व आधुनिक लुक।',
      tag: '✨ Decorative',
      badge: 'Gold Finish',
      priceTag: 'बेस्ट डिस्काउंट',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3cAeBFtfwrKE1yiSeSxuhrVvc6TmnVXu92mUrDHn8iAetAyHPB0EcBWG3eWjbfmLOQckeiiuwwEyBuR-CLESpm2RWc6JBrbdaC4HwZIP-KpbiT9x0An1ItYXmzIo9q7Pj6u_kp_XzXc9vjf_MnyS50yVucVYpSjtJluKTY24Er_fm4jtsr75dsYkNXzBe2Npfms13y1mSH8Nv4qpIgt2qtBOHOvxG0wS93ui18WU-0wX6i91-hpPr3A'
    },
    {
      title: 'Copper Wiring Coil (90m Roll)',
      desc: 'फायर-रेसिस्टेंट, हीट प्रूफ व 100% शुद्ध कॉपर वायर जो पूरे घर को रखे शॉर्ट सर्किट से महफूज।',
      tag: '🛡️ Safety Certified',
      badge: '100% Pure Copper',
      priceTag: 'ओरिजिनल ब्रांड',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrkLFDuXTVof0WzeNgY-QGKWAg4A3Kcvg8yf3PcfXFGC2oCTnGg3Ko8TWSZhb9wCa51OR-jdWtgWXxueM6iBa3oA-Hn6XzaV1JR5u2m9QjRLmT9vqNhhyfHVdB3iJXxtmD3BMs1FD3XlD9ibf0lvOLgTol1a9AOPJoGEu8o8R_DYssxGnGYUrJw8rMGQQst8bfjNN5EYE3Ap-rwn45qaY2Fh6wo0oMRoLotY7h8WYzIzTlBCjKFfz-mg'
    }
  ];

  const showcases = [
    {
      title: 'Home Lighting (घरों के लिए आधुनिक लाइटिंग)',
      desc: 'कंसील्ड लाइट्स, कोव लाइटिंग व ड्राइंग रूम के लिए खूबसूरत वॉर्म लाइट्स।',
      tag: 'Home Ambience',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDhC4Oppbt_eGJxQ8748gyGwHcsB-f4Zc-npBTC7aNYpBqyJZRNfJp5KAOKuIA86n_zPH3b6PvuO5fDvA6PlBTlwZVzGtIzK9Q_hgHdsZGl-IMUQ5RbhRYvbVyNpMyx-jFNvRaghfuFwk65dIVEeY5ld8TKYR3hqJ_cjmVfBNDxPdAXXKLPGVldmVPVf6UHYGx7OeIxalAJb_AmowLXLWXWRTu5V7yMGIWKqP90hyTNZKlD8Y45eIyHw',
      span: ''
    },
    {
      title: 'Shop & Commercial (दुकानों के लिए ब्राइट पैनल)',
      desc: 'दुकानों और शोरूम्स में ग्राहकों को आकर्षित करने वाली सुपर-ब्राइट लाइटें।',
      tag: 'Commercial & Showrooms',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpLqS-nxC7H53zzhGy3uVCBkDDF0GG5oV9hfUir4fdjv8kMV9M08-eAYDawo2cqBiOmdY2xNwdhLPgnXvRWuA1VrGDTHdfdSSEtdPlwRTlQdBVNaMzBLWFRmf1I39fPiMpoYf3nl5bQGxSF8I0jFQcSCbAiqTGXiZReEQpbF1-0vfXxPS8_Nd3g7XOxKkT8QrwFQUIXoaebrH6GtMdjnZQ3utjAQNvvFzwAHyNXyG6IQEaQGLzw_VEcg',
      span: ''
    },
    {
      title: 'Decorative & Festive (त्योहारों की सजावट)',
      desc: 'शादी, उत्सव और त्योहारों के लिए फैंसी लड़ी, पिक्सेल लाइट्स और रोप लाइट्स।',
      tag: 'Festive & Occasions',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ71uJmlaY_l-8mCY1eRRRWeqRLszChprobpPUa1Vxsoa66gA5KDCU0TVyYOs9Ei6x10KDlkDFfCN0aP20dSDHrLkh3HF0cWKKRGJ44EUD5x4fdvLk4AKC97zUDI51swH3_Fr-NSdjAlWlkXlp1GV7vUgcnIcbrjtMlNzXBRoSv-jTYfdiHdO3R25N6vqcEBYI-HedCIuWBHg_pTyM0ac7bpvdvzELhFieC2SmjjMrUbPeB8PrrrGsEw',
      span: ''
    },
    {
      title: 'Outdoor & Waterproof (वाटरप्रूफ गार्डन लाइट्स)',
      desc: 'बारिश और धूप से सुरक्षित फ्लड लाइट्स, गेट लाइट्स और सोलर स्ट्रीट लाइट्स।',
      tag: 'Weatherproof',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATeMwz2LwMNGKBD9a7yzM-eFC9Hz-JeZJqc0rOSrOU7nx24h5MgwW86N9Ku7xDMCop4k6WWb8fl783C2zQt5V_ym0jRnAyIsWhK9F1fY8mrpkFjyAcwLUKMNDTOpxsiq1NjHtTajnOavTVkA2BM9knf4uE3_0hC1svLjdy62CJ6fG25nre6uCmgv33iHLHTJMwvzMRHlEvizwnQcfo3gv05f9FeSXsz4wtE8Lhv51Pv__dbPkCF0TBNA',
      span: ''
    },
    {
      title: 'Heavy Industrial Wiring (मजबूत और टिकाऊ समाधान)',
      desc: 'फ्लोर मील्स, ट्यूबवेल, वर्कशॉप और भारी मोटरों के लिए हैवी गेज आर्मर्ड केबल्स।',
      tag: 'Industrial Strength',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCibq-_tRTssxnHvIMM4xV0h0WWVDaVnQ2EMTMTiUA6eoOUgJ0wUnblSa_qthvx2QxpJu0gs3T3IqkPa62eUKVZrQ6dEZVb02j6Ny9XbgZDpqKoofWHlgh3BIOaBNXGqdt_QEuh2nQke26MvdM55zcCqpBBNb4ELg5qwYXnMuuztDjJWzoWOvMYVezESHrTrM5ndDai8brEWVo4ig7ScqFIyJFUomOKJNM5CHhtO36znRVhYkBInFiR5Q',
      span: 'sm:col-span-2 lg:col-span-2'
    }
  ];

  return (
    <div className="bg-mesh min-h-screen flex flex-col antialiased">
      <Header
        isMobileDrawerOpen={isMobileDrawerOpen}
        setIsMobileDrawerOpen={setIsMobileDrawerOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navItems={navItems}
      />

      <main className="flex-1 flex flex-col relative w-full pt-20 pb-20 max-w-7xl mx-auto px-3 sm:px-6">
        <Hero />
        <Categories categories={categories} />
        <FeaturedProducts featuredProducts={featuredProducts} />
        <WhyChooseUs />
        <LightingShowcase showcases={showcases} />
        <TrustSection />
        <CtaBanner />
        <ContactSection
          formData={formData}
          setFormData={setFormData}
          handleEnquirySubmit={handleEnquirySubmit}
          enquirySubmitted={enquirySubmitted}
        />
        <MobileBottomBar />
        <Footer />
      </main>

      <MobileNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
