/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  malayName: string;
  description: string;
  price: string;
  category: 'grilled' | 'traditional' | 'seafood' | 'beverages' | 'desserts';
  image: string;
  spiceLevel: 0 | 1 | 2 | 3;
  chefRec: boolean;
  bestseller: boolean;
  tagline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  origin: string;
  stars: number;
  text: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'tiktok';
  username: string;
  thumbnail: string;
  caption: string;
  metrics: { likes: string; views: string };
  videoUrl?: string;
  soundtrack?: string;
}

export const menuCategories = [
  { id: 'all', name: 'All Specialties', malayName: 'Semua Sajian' },
  { id: 'grilled', name: 'Charcoal Grills', malayName: 'Bakar Arang' },
  { id: 'traditional', name: 'Kampung Classics', malayName: 'Lauk Kampung' },
  { id: 'seafood', name: 'Seafood Harvest', malayName: 'Sajian Laut' },
  { id: 'beverages', name: 'Tradisi Drinks', malayName: 'Minuman Segar' },
  { id: 'desserts', name: 'Sweet Delights', malayName: 'Manisan Warisan' },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: 'grilled-fish',
    name: 'Ikan Bakar Tok Ina',
    malayName: 'Ikan Bakar Arang Khas',
    description: 'Fresh local sea bass caught daily, marinated in an heirloom spice paste of fresh turmeric, lemongrass, and local chillies. Flame-grilled slowly over natural mangrove charcoal for a perfect smoky crust. Unbelievably tender inside.',
    price: 'RM 28.00',
    category: 'grilled',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 2,
    chefRec: true,
    bestseller: true,
    tagline: 'Smoky, charred, and beautifully infused with lemongrass essence.'
  },
  {
    id: 'sotong-bakar',
    name: 'Sotong Bakar Sambal Petai',
    malayName: 'Sotong Bakar Sambal',
    description: 'Jumbo succulent squid brushed with a caramelized brown-sugar sambal paste and torched over blazing coconut husks. Served hot with crunchy stink beans (petai) and fresh lime wedges.',
    price: 'RM 32.00',
    category: 'grilled',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 3,
    chefRec: false,
    bestseller: true,
    tagline: 'Bold, sweet, spicy, and blistered by high tropical heat.'
  },
  {
    id: 'ayam-panggang',
    name: 'Ayam Panggang Kasturi',
    malayName: 'Ayam Panggang Kasturi',
    description: 'Half kampung chicken deeply infused with thick coconut nectar and galangal root. Slow-roasted over hickory-charcoal embers while being continually basted with citrusy calamansi juices.',
    price: 'RM 24.00',
    category: 'grilled',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 1,
    chefRec: true,
    bestseller: false,
    tagline: 'A savory-sweet citrus glaze cooked down into tender chicken skin.'
  },
  {
    id: 'nasi-campur',
    name: 'Nasi Set Kampung Balik Pulau',
    malayName: 'Nasi Set Kampung',
    description: 'A comforting traditional spread: fragrant pandan-steamed rice served on authentic wild banana leaves. Accompanied by crisp fresh herbs (ulam-ulaman), pungent sambal belacan, salt fish, and slow-simmered vegetable stew.',
    price: 'RM 14.50',
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 2,
    chefRec: false,
    bestseller: true,
    tagline: 'The ultimate culinary portrait of daily village serenity.'
  },
  {
    id: 'daging-rendang',
    name: 'Rendang Daging Tok Wan',
    malayName: 'Rendang Daging Tradisi',
    description: 'Prime beef shank slow-simmered for six hours in rich toasted grated coconut (kerisik), locally gathered kaffir lime leaves, and wild Penang ginger until meltingly soft and deeply flavorful.',
    price: 'RM 22.00',
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 2,
    chefRec: true,
    bestseller: true,
    tagline: 'A heritage recipe lovingly preserved and passed down through three generations.'
  },
  {
    id: 'pucuk-paku',
    name: 'Tumis Pucuk Paku Kayu',
    malayName: 'Pucuk Paku Stir-Fry',
    description: 'Wild forest fiddlehead ferns harvested early in the morning from Balik Pulau hills. Quick-stirred over a high-heat wok with minced river shrimp, crushed garlic, and aromatic dried anchovy paste.',
    price: 'RM 12.00',
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 1,
    chefRec: false,
    bestseller: false,
    tagline: 'Lively, crisp mountain greens loaded with deep umami.'
  },
  {
    id: 'seafood-prawn',
    name: 'Udang Bakar Serai Murni',
    malayName: 'Udang Galah Bakar',
    description: 'Fresh giant river prawns split-roasted on open wood coals, heavily brushed with a fragrant lemongrass, white pepper, and wild garlic oil. Juicy and bursting with golden head-butter.',
    price: 'RM 38.00',
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 1,
    chefRec: true,
    bestseller: true,
    tagline: 'Colossal river catch direct from local fishermen, blistered over embers.'
  },
  {
    id: 'beverage-coconut',
    name: 'Air Kelapa Muda Gula Melaka',
    malayName: 'Air Kelapa Gula Melaka',
    description: 'Cold, sweet coconut water cracked straight from fresh young coconuts, infused with premium smoked liquid palm sugar syrup and layered with soft coconut flesh ribbons.',
    price: 'RM 8.00',
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1526424382096-74a93e105e9d?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 0,
    chefRec: false,
    bestseller: true,
    tagline: 'Extremely hydrating with a smoky, caramelly hint of palm sugar.'
  },
  {
    id: 'beverage-teh-tarik',
    name: 'Teh Tarik Berbuih Kampung',
    malayName: 'Teh Tarik Warisan',
    description: 'Rich Ceylon black tea double-pulled from high heights until cooled to perfect temperature, boasting a thick crown of velvety foam and an incredibly smooth, bold malty depth.',
    price: 'RM 5.50',
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 0,
    chefRec: false,
    bestseller: false,
    tagline: 'Warm, comforting, and layered with foam like Penang’s clouds.'
  },
  {
    id: 'dessert-sago',
    name: 'Sago Gula Melaka Pandan',
    malayName: 'Sagu Gula Melaka',
    description: 'Chilled sago starch pudding scented with squeeze-extracted wild pandan leaf juice, floating in custom salted coconut milk cream, served with a side bowl of artisanal dark liquid palm sugar.',
    price: 'RM 9.50',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 0,
    chefRec: true,
    bestseller: true,
    tagline: 'An elegant, silky balance of sea salt cream and heavy cane-syrup.'
  },
  {
    id: 'dessert-banana-fritter',
    name: 'Pisang Madu Goreng Crispy',
    malayName: 'Pisang Goreng Rangup',
    description: 'Sweet local honey bananas dipped in an dynamic crispy rice-flour and sesame-seed batter, fried golden-brown. Served hot with a rich sweet soy chili (sambal kicap) dipping syrup.',
    price: 'RM 7.00',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1566817290569-4e01e7e74163?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 1,
    chefRec: false,
    bestseller: false,
    tagline: 'Insanely crunchy outside, hot, sweet, and custardy inside.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Nur Ameera Yusof',
    role: 'Food & Heritage Journalist',
    origin: 'Kuala Lumpur',
    stars: 5,
    text: '“We drove two hours from Georgetown and the moment we turned into this jungle trail, our breath was taken away. Sitting under wood pergolas right beside the slow mountain stream while smelling the rich charcoal and tamarind. The Ikan Bakar is the best I have ever tasted in all of Malaysia. An emotional masterpiece.”',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-2',
    name: 'Marcus Chen',
    role: 'Heritage Travel Guide creator',
    origin: 'Singapore',
    stars: 5,
    text: '“This is the REAL Penang. While Georgetown has the modern hustle, Balik Pulau remains a sanctuary of slow-living hospitality. Ina Cafe feels like visiting an aunt’s house in the deep jungle. Exceptional beef rendang with incredibly buttery texture. Absolute hidden gem!”',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-3',
    name: 'Siti Aminah Ahmad',
    role: 'Local Resident',
    origin: 'Balik Pulau, Penang',
    stars: 5,
    text: '“Orang Balik Pulau sendiri pun beratur makan kat sini! Resipi sambal tumis dan kuah kicap Ina memikat hati betul. My family comes here every Sunday evening to wind down, hear the river current, and feel the cold breeze coming down from the Penang Hills. Fresh, authentic, and generous.”',
    date: '5 days ago',
    avatar: 'https://images.unsplash.com/photo-1534751516642-a131ffd1037f?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-4',
    name: 'Dr. Evelyn Thomas',
    role: 'Tropical Botanical Ethnobotanist',
    origin: 'Melbourne, Australia',
    stars: 5,
    text: '“The location is deeply connected with nature. You are dining surrounded by giant fern trees, banana plantations, and fresh clove trees. Listening to the birds and mountain water while eating flame-touched river seafood is a spiritual food journey. Extremely warm hospitality.”',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=85',
    title: 'Balik Pulau Valley',
    category: 'Vibe',
    caption: 'Lush mountain greenery of Penang hills enclosing the peaceful traditional village landscape.',
    aspect: 'landscape'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=85',
    title: 'Smoky Charcoal Grill',
    category: 'Culinary',
    caption: 'Tender giant river seafood grilled slow over natural mangrove embers.',
    aspect: 'portrait'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85',
    title: 'Riverside Wooden Seating',
    category: 'Escape',
    caption: 'Lush teak wood dining spaces situated right beside the cool flowing river current.',
    aspect: 'square'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85',
    title: 'Tradisi Nasi Set Platter',
    category: 'Heritage',
    caption: 'Steaming hot rice, fresh green herbs, and deep sambal served on rich wild leaves.',
    aspect: 'portrait'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=85',
    title: 'Tropical Bamboo Canopy',
    category: 'Nature',
    caption: 'Tall, rustling green foliage filter gold morning sunlight over outdoor dinings.',
    aspect: 'landscape'
  },
  {
    id: 'gal-6',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=85',
    title: 'Perfect Crispy Crust',
    category: 'Culinary',
    caption: 'Searing turmeric rub caramelized on fresh catch for an incredibly buttery taste.',
    aspect: 'square'
  },
  {
    id: 'gal-7',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85',
    title: 'Warm Sunset Over Village',
    category: 'Vibe',
    caption: 'Dusk hues of golden orange cast beautiful cinematic shadows across wood beams.',
    aspect: 'landscape'
  },
  {
    id: 'gal-8',
    image: 'https://images.unsplash.com/photo-1526424382096-74a93e105e9d?auto=format&fit=crop&w=800&q=85',
    title: 'Cold Coconut Cracked Fresh',
    category: 'Beverage',
    caption: 'Quenching tropical heat with fresh sweet juice and palm sugar syrup drops.',
    aspect: 'portrait'
  }
];

export const socialWallData: SocialPost[] = [
  {
    id: 'soc-1',
    platform: 'tiktok',
    username: '@penangfoodhunter',
    thumbnail: 'https://images.unsplash.com/photo-1534723452202-425a41dfcb6d?auto=format&fit=crop&w=600&q=80',
    caption: '🤯 HIDDEN KAMPUNG GEMS! Wait till you see where this fish is grilled... #penangfoodie #foodblog #malayfood',
    metrics: { likes: '14.2k', views: '185.3k' }
  },
  {
    id: 'soc-2',
    platform: 'instagram',
    username: '@explore.malaysia',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    caption: 'If you want to experience real slow-living in Penang, skip the tourist spots. Balik Pulau is home to Ina Cafe where tables rest on wild moss beside a crystal river. 🌿✨ #tourismmalaysia #balikpulau #traveldiary',
    metrics: { likes: '5,821', views: '32k' }
  },
  {
    id: 'soc-3',
    platform: 'tiktok',
    username: '@klfoodguide',
    thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    caption: 'Ikan Bakar Tok Ina will make you pack your bags and move to Penang immediately. Smoldering hot marinade. 🤤 #balikpulaunature #visitpenang #penangcafe',
    metrics: { likes: '21.5k', views: '400k' }
  },
  {
    id: 'soc-4',
    platform: 'instagram',
    username: '@ina_cafe_balikpulau',
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    caption: 'The weekend embers are heating up! Sit under coconut leaves and discover the comforting peace of traditional charcoal heat. 🛖 #kampungliving #penangfoodies #inacafe',
    metrics: { likes: '1,904', views: '12k' }
  }
];

// Local environment soundscape simulation synthesizer settings
// Generates beautiful natural acoustics using standard Web Audio API oscillators!
export interface SoundscapeChannel {
  id: string;
  name: string;
  description: string;
  type: 'river' | 'crackle' | 'birds';
  active: boolean;
  gain: number;
}
