/**
 * Carousel Slides Data
 * Industry-standard separated data source for easy maintainability.
 */
export const CAROUSEL_SLIDES = [
  {
    id: 'chandeliers',
    tag: '✨ Trending Collection',
    badge: 'Upto 25% Off',
    title: 'शाही लुक वाले मॉडर्न झूमर व सीलिंग लाइट्स',
    subtitle: 'Designer Chandeliers & Luxury Living Room Fixtures',
    description: 'लिविंग रूम और हॉल को दीजिए एक आलीशान और रोशन अहसास। आकर्षक क्रिस्टल और मेटालिक फिनिश में उपलब्ध।',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'कॉल करके रेट जानें',
    ctaLink: 'tel:7905383563',
  },
  {
    id: 'copper-wires',
    tag: '⚡ 100% Pure Copper',
    badge: 'Fire-Resistant ISI Certified',
    title: 'अग्निरोधी और टिकाऊ हाउस वायरिंग केबल्स',
    subtitle: 'Heavy-Duty Safe Wires & Cables for Home & Industry',
    description: 'शॉर्ट सर्किट और ओवरलोड से अपने घर और परिवार को सुरक्षित रखें। 100% शुद्ध कॉपर वायर उचित थोक भाव में।',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'थोक दरें जानें',
    ctaLink: 'tel:7905383563',
  },
  {
    id: 'led-panels',
    tag: '💡 Smart & Energy Saver',
    badge: '85% Energy Saving',
    title: 'हाई ल्यूमेंस एलईडी पैनल व कंसील्ड लाइट्स',
    subtitle: 'Ultra Slim Recessed Downlights & Warm Ambient Bulbs',
    description: 'कम बिजली खर्च में तेज व आंखों को सुकून देने वाली नेचुरल रोशनी। 1 से 2 साल की वारंटी के साथ उपलब्ध।',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'ऑर्डर बुक करें',
    ctaLink: 'tel:7905383563',
  },
  {
    id: 'modular-switches',
    tag: '🔘 Modern Interiors',
    badge: 'Smooth Click & Shock Proof',
    title: 'प्रीमियम मॉड्यूलर स्विच और सॉकेट्स',
    subtitle: 'Elegant Switches, Plates & Smart Regulators',
    description: 'दीवारों की सुंदरता बढ़ाने वाले ग्लॉसी व मैट फिनिश मॉड्यूलर बोर्ड और शॉक-प्रूफ सेफ्टी सॉकेट्स।',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'वैरायटी देखें',
    ctaLink: '#products',
  },
  {
    id: 'festive-lights',
    tag: '🎉 Festive & Outdoor',
    badge: 'Waterproof & Durable',
    title: 'शादी, त्योहार व आउटडोर वाटरप्रूफ लाइट्स',
    subtitle: 'RGB Pixel Strips, Rope Lights & Garden Flood Lights',
    description: 'घर, दुकान या मैरिज हॉल की शानदार सजावट के लिए वेदरप्रूफ और वाइब्रेंट कलरफुल डेकोरेटिव लाइट्स।',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'डेकोरेशन लाइट्स देखें',
    ctaLink: '#lighting-showcase',
  }
];

export const WHATSAPP_CONFIG = {
  phoneNumber: '917905383563',
  defaultMessage: 'नमस्ते, मुझे लाइट और वायरिंग सामान की जानकारी चाहिए।',
  get chatUrl() {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
  }
};
