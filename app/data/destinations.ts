export type Destination = {
  slug: string;
  name: string;
  hindi: string;
  image: string;
  width: number;
  height: number;
  description: string;
};

export const destinations: Destination[] = [
  { slug: "nainital", name: "Nainital", hindi: "झीलों की नगरी", image: "/destinations/nainital.webp", width: 1080, height: 810, description: "Naini Lake and the surrounding Kumaon hills." },
  { slug: "mussoorie", name: "Mussoorie", hindi: "पहाड़ों की रानी", image: "/destinations/mussoorie.webp", width: 950, height: 555, description: "Hill town views across the Himalayan foothills." },
  { slug: "rishikesh", name: "Rishikesh", hindi: "योग और एडवेंचर कैपिटल", image: "/destinations/rishikesh.webp", width: 1200, height: 900, description: "The Ganga, riverside ghats, yoga and adventure." },
  { slug: "haridwar", name: "Haridwar", hindi: "आस्था का मुख्य केंद्र", image: "/destinations/haridwar.webp", width: 900, height: 600, description: "Har Ki Pauri and the Ganga ghats." },
  { slug: "auli", name: "Auli", hindi: "भारत का मिनी स्विट्जरलैंड", image: "/destinations/auli.webp", width: 1000, height: 800, description: "Snow-covered peaks and mountain scenery." },
  { slug: "jim-corbett", name: "Jim Corbett National Park", hindi: "जंगल और वन्यजीवन", image: "/destinations/jim-corbett.webp", width: 1600, height: 775, description: "Forest safari landscapes and wildlife." },
  { slug: "chopta-tungnath", name: "Chopta & Tungnath", hindi: "हिमालयी ट्रेक और मंदिर", image: "/destinations/chopta-tungnath.webp", width: 495, height: 619, description: "The Chopta to Tungnath mountain trail." },
  { slug: "kedarnath-badrinath", name: "Kedarnath & Badrinath", hindi: "चारधाम के पवित्र धाम", image: "/destinations/kedarnath-badrinath.webp", width: 900, height: 515, description: "The Himalayan temples of Kedarnath and Badrinath." },
  { slug: "valley-of-flowers", name: "Valley of Flowers", hindi: "फूलों की मनमोहक घाटी", image: "/destinations/valley-of-flowers.webp", width: 1000, height: 666, description: "Alpine meadows and seasonal wildflowers." },
  { slug: "almora-kausani", name: "Almora & Kausani", hindi: "कुमाऊँ के पर्वतीय नज़ारे", image: "/destinations/almora-kausani.webp", width: 1024, height: 576, description: "Kumaon villages and Himalayan mountain views." },
  { slug: "panch-prayag", name: "Panch Prayag", hindi: "पाँच पवित्र संगम", image: "/destinations/panch-prayag.webp", width: 420, height: 400, description: "A collage of Uttarakhand’s five sacred river confluences." },
  { slug: "alaknanda", name: "Alaknanda River", hindi: "अलकनंदा नदी", image: "/destinations/alaknanda.webp", width: 548, height: 364, description: "The Alaknanda flowing through the Garhwal Himalaya." },
  { slug: "nand-prayag", name: "Nandprayag", hindi: "नंदप्रयाग संगम", image: "/destinations/nand-prayag.webp", width: 699, height: 286, description: "A Himalayan river confluence at Nandprayag." },
  { slug: "vishnu-prayag", name: "Vishnuprayag", hindi: "विष्णुप्रयाग संगम", image: "/destinations/vishnu-prayag.webp", width: 1080, height: 1321, description: "The Alaknanda at Vishnuprayag in the high Himalaya." },
  { slug: "karna-prayag", name: "Karnaprayag", hindi: "कर्णप्रयाग संगम", image: "/destinations/karna-prayag.webp", width: 400, height: 500, description: "River views from the Karnaprayag confluence." },
  { slug: "alaknanda-sangam", name: "Alaknanda Sangam", hindi: "अलकनंदा का संगम", image: "/destinations/alaknanda-sangam.webp", width: 335, height: 597, description: "A view of the Alaknanda meeting another Himalayan river." },
  { slug: "dev-prayag", name: "Devprayag", hindi: "देवप्रयाग संगम", image: "/destinations/dev-prayag.webp", width: 1200, height: 900, description: "The Bhagirathi and Alaknanda meet at Devprayag." },
];

export const featuredDestinations = destinations.slice(0, 10);
