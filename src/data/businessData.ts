export interface ProductItem {
  id: string;
  name: string;
  category: 'shirts' | 'trousers' | 'athleisure' | 'ethnic' | 'jackets' | 'accessories';
  categoryLabel: string;
  priceRange: string;
  originalPrice?: string;
  fit: string;
  sizes: string[];
  fabric: string;
  image: string;
  featured?: boolean;
  description: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  itemPurchased?: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  tagline: string;
  occasion: string;
  image: string;
  itemsIncluded: string[];
  styleTip: string;
}

export const BUSINESS_INFO = {
  name: "The Baadshah Garment & Accessories",
  shortName: "The Baadshah",
  tagline: "Dress Like Royalty • The Ultimate Men's Wardrobe Destination",
  establishedYear: 2016,
  rating: 4.9,
  totalReviews: 247,
  googleMapsShareUrl: "https://share.google/a7MgxE53Lcx2SJ6Nd",
  googleMapsEmbedQuery: "The+Baadshah+Garment+%26+Accessories+Viratnagar+Road+Odhav+Ahmedabad",
  address: {
    line1: "B-38, Gokul Park Society, Near Ganeshkunj Society",
    line2: "Behind Ambica Nagar, Viratnagar 100 ft. Road",
    area: "Odhav",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "382415",
    landmark: "Opposite Bapasitaram Madhuli / Near Ganeshkunj Society",
    fullAddress: "B-38, Gokul Park Society, Near Ganeshkunj Society, Behind Ambica Nagar, Viratnagar 100 ft. Road, Odhav, Ahmedabad, Gujarat 382415",
  },
  phones: [
    { display: "+91 98258 53047", raw: "919825853047", isPrimary: true, label: "Main Store Phone & WhatsApp" },
    { display: "+91 72030 60505", raw: "917203060505", isPrimary: false, label: "Support & Alternate Line" },
  ],
  whatsappNumber: "919825853047",
  operatingHours: {
    days: "Monday – Sunday (Open All 7 Days)",
    openTime: "10:30 AM",
    closeTime: "10:30 PM",
    openHour24: 10.5,
    closeHour24: 22.5,
  },
  paymentMethods: ["Google Pay", "PhonePe", "Paytm", "UPI QR Code", "Debit & Credit Cards", "Cash"],
  keyHighlights: [
    { label: "8+ Years of Trust", desc: "Serving Ahmedabad stylish gentlemen since 2016" },
    { label: "4.9★ Customer Rating", desc: "Over 247+ verified real customer Google reviews" },
    { label: "Complete Head-to-Toe", desc: "From formal shirts & denims to perfumes & leather belts" },
    { label: "Wholesale Value", desc: "High boutique quality at direct, honest Ahmedabad prices" },
  ],
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    name: "Luxury Egyptian Cotton Formal Shirt",
    category: "shirts",
    categoryLabel: "Formal Shirts",
    priceRange: "₹899 – ₹1,499",
    originalPrice: "₹1,999",
    fit: "Tailored Slim Fit",
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)", "46 (XXL)"],
    fabric: "100% Breathable Compact Cotton with Wrinkle-Resistant Finish",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Crisp structured collar, pearl-luster buttons, and double-needle stitching engineered for day-long comfort and boardroom authority.",
    highlights: ["Formal & Semi-Formal", "Available in 12+ Executive Colors", "Machine Washable"],
  },
  {
    id: "prod-2",
    name: "Premium Comfort-Stretch Denim Jeans",
    category: "trousers",
    categoryLabel: "Denims & Trousers",
    priceRange: "₹999 – ₹1,899",
    originalPrice: "₹2,499",
    fit: "Tapered / Regular Slim",
    sizes: ["28", "30", "32", "34", "36", "38"],
    fabric: "98% Indigo Ring-Spun Cotton, 2% Elastane Flex",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Hand-whiskered authentic vintage wash with four-way stretch comfort for all-day mobility and indestructible rivets.",
    highlights: ["Shape-Retention Denim", "Deep Heavy-Duty Pockets", "Reinforced Belt Loops"],
  },
  {
    id: "prod-3",
    name: "Athletic Performance Knitted Shorts",
    category: "athleisure",
    categoryLabel: "Athleisure & Shorts",
    priceRange: "₹499 – ₹899",
    originalPrice: "₹1,199",
    fit: "Athletic Mobility Cut",
    sizes: ["M", "L", "XL", "XXL"],
    fabric: "Heavyweight Double-Knit Poly-Cotton with Dry-Wick Tech",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "One of our most popular signature items! Features zippered security side pockets, reinforced drawstring, and high-tenacity breathable knit.",
    highlights: ["Gym & Daily Lounge", "Dual Zip Pockets", "Fade & Shrink Proof"],
  },
  {
    id: "prod-4",
    name: "Royal Festive Embroidered Kurta & Bandhgala Set",
    category: "ethnic",
    categoryLabel: "Ethnic & Festive",
    priceRange: "₹1,499 – ₹3,299",
    originalPrice: "₹4,500",
    fit: "Royal Traditional Fit",
    sizes: ["38", "40", "42", "44", "46"],
    fabric: "Artisan Silk-Cotton Blend with Hand-Detailed Neck Embroidery",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Perfect for Gujarati weddings, Navratri, festive family gatherings, and sangeet celebrations with rich royal tones and intricate craftsmanship.",
    highlights: ["Includes Matching Churidar", "Lightweight Festive Comfort", "Rich Jewel Tones"],
  },
  {
    id: "prod-5",
    name: "Classic Moto Biker Leather Jacket",
    category: "jackets",
    categoryLabel: "Jackets & Outerwear",
    priceRange: "₹1,999 – ₹3,799",
    originalPrice: "₹4,999",
    fit: "Contoured Biker Cut",
    sizes: ["M", "L", "XL", "XXL"],
    fabric: "High-Grade Matte PU Leather with Thermal Quilted Satin Lining",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Stand collar with snap buckle, heavy brass hardware zips, and interior security pocket. A statement outerwear essential.",
    highlights: ["Wind & Chill Resistant", "Heavy-Duty YKK Style Zippers", "Matte Obsidian Finish"],
  },
  {
    id: "prod-6",
    name: "Heavy Drop-Shoulder Oversized Graphic Tee",
    category: "athleisure",
    categoryLabel: "T-Shirts & Streetwear",
    priceRange: "₹449 – ₹799",
    originalPrice: "₹999",
    fit: "Relaxed Boxy Drop-Shoulder",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "240 GSM Bio-Washed Combed Cotton",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Ultra-heavyweight premium streetwear tee with ribbed lycra neck that will never sag, and screen-printed modern minimalism.",
    highlights: ["Heavy 240 GSM", "Zero Shrinkage Guaranteed", "Trendy Streetwear Cut"],
  },
  {
    id: "prod-7",
    name: "Full-Grain Reversible Leather Belt & Wallet Combo",
    category: "accessories",
    categoryLabel: "Accessories",
    priceRange: "₹499 – ₹1,099",
    originalPrice: "₹1,599",
    fit: "Universal Adjustable (28–44 inch)",
    sizes: ["Free Size (Trimmable)"],
    fabric: "100% Genuine Top-Grain Buff Leather with Anti-Tarnish Metal Buckle",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Dual-sided swivel buckle switching instantly between Black and Rich Tan. Packaged with a matching RFID-protected card wallet.",
    highlights: ["2-in-1 Black / Tan Reversible", "Gift Box Ready", "Handcrafted Stitching"],
  },
  {
    id: "prod-8",
    name: "Tailored Smart Chino Trousers",
    category: "trousers",
    categoryLabel: "Denims & Trousers",
    priceRange: "₹899 – ₹1,499",
    originalPrice: "₹1,899",
    fit: "Ankle-Length Slim Chino",
    sizes: ["30", "32", "34", "36", "38"],
    fabric: "Cotton Twill Flex Weave (Khaki, Olive, Navy, Charcoal, Off-White)",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Clean front with flex waistband construction. Transition seamlessly from workplace meetings to weekend cafes.",
    highlights: ["Stretch Waist Comfort", "No-Iron Finish", "Deep Coin & Phone Pockets"],
  },
  {
    id: "prod-9",
    name: "Cuban Collar Resort Print Casual Shirt",
    category: "shirts",
    categoryLabel: "Casual Shirts",
    priceRange: "₹699 – ₹1,199",
    originalPrice: "₹1,499",
    fit: "Relaxed Summer Fit",
    sizes: ["M", "L", "XL", "XXL"],
    fabric: "Silky Modal Viscose Blend with High Breathability",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Effortlessly cool camp collar cut with contemporary geometric and floral prints for vacations, evening outings, and weekend parties.",
    highlights: ["Feather-light Modal Fabric", "Anti-Wrinkle Drape", "Casual Open Collar"],
  },
  {
    id: "prod-10",
    name: "Royal Velvet Nehru / Modi Sleeveless Jacket",
    category: "ethnic",
    categoryLabel: "Ethnic & Festive",
    priceRange: "₹1,199 – ₹2,499",
    originalPrice: "₹3,499",
    fit: "Structured Slim Waistcoat",
    sizes: ["38", "40", "42", "44"],
    fabric: "Micro-Velvet / Jacquard Weave with Antique Brass Buttons",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Layer this over any plain shirt or kurta to immediately elevate your festive look with majestic imperial poise.",
    highlights: ["Mandarin Collar", "Chest Pocket with Inset Trim", "Rich Inner Lining"],
  },
  {
    id: "prod-11",
    name: "Luxury Amber & Oud Men's Eau De Parfum",
    category: "accessories",
    categoryLabel: "Accessories",
    priceRange: "₹599 – ₹999",
    originalPrice: "₹1,399",
    fit: "100ml Glass Decanter Spray",
    sizes: ["100ml"],
    fabric: "Concentrated Long-Lasting 12+ Hour Fragrance",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Warm tobacco, spicy cardamom, amber, and smoked sandalwood notes crafted specifically for men who leave a lasting impression.",
    highlights: ["12+ Hours Longevity", "Non-Staining Formula", "Signature Baadshah Scents"],
  },
  {
    id: "prod-12",
    name: "Pro-Athlete Fleece Track Pants & Joggers",
    category: "athleisure",
    categoryLabel: "Athleisure & Shorts",
    priceRange: "₹699 – ₹1,199",
    originalPrice: "₹1,599",
    fit: "Tapered Ribbed Ankle Jogger",
    sizes: ["M", "L", "XL", "XXL"],
    fabric: "Heavyweight French Terry Cotton",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Constructed with ergonomic knee darts, custom tipped drawcords, and zip pockets that keep your phone secure while cycling or working out.",
    highlights: ["Soft Brushed Interior", "Ribbed Ankle Cuffs", "Water-Repellent Pockets"],
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Jignesh Patel",
    location: "Odhav, Ahmedabad",
    rating: 5,
    date: "1 month ago",
    review: "Best collection of men's garments in Odhav! Found the perfect outfit for my brother's wedding reception at half the price of big mall stores. The fitting advice was 100% on point. Highly recommend!",
    verified: true,
    itemPurchased: "Embroidered Kurta & Nehru Jacket",
  },
  {
    id: "rev-2",
    name: "Rohit Shah",
    location: "Ahmedabad",
    rating: 5,
    date: "2 months ago",
    review: "Great branded t-shirts, track pants, and shorts. The knitted athletic shorts quality is top tier — even after 20 washes it still looks like new. Staff is very polite and patient with trials.",
    verified: true,
    itemPurchased: "Athletic Knitted Shorts & Gym Tees",
  },
  {
    id: "rev-3",
    name: "Hardik Prajapati",
    location: "Viratnagar, Odhav",
    rating: 5,
    date: "3 weeks ago",
    review: "The Baadshah is our family's regular shop on Viratnagar 100ft road. Their jeans and formal shirts fitting is unmatched. You don't even need outside tailoring. Best menswear store in East Ahmedabad.",
    verified: true,
    itemPurchased: "Slim Fit Cotton Shirts & Stretch Denim",
  },
  {
    id: "rev-4",
    name: "Mehul Vaghela",
    location: "Odhav Gam",
    rating: 5,
    date: "3 months ago",
    review: "Superb collection of festive kurtas and leather accessories. The belts and perfumes are long lasting and genuine. Love the royal theme and honest pricing.",
    verified: true,
    itemPurchased: "Festive Kurta & Leather Accessories",
  },
  {
    id: "rev-5",
    name: "Alpesh Desai",
    location: "Naroda, Ahmedabad",
    rating: 5,
    date: "1 month ago",
    review: "5/5 service. They showed me 10 different combinations patiently until I found my perfect match for my office conference. Excellent hospitality and genuine prices.",
    verified: true,
    itemPurchased: "Formal Shirts & Chino Trousers",
  },
  {
    id: "rev-6",
    name: "Chirag Trivedi",
    location: "Ahmedabad",
    rating: 5,
    date: "4 months ago",
    review: "Affordable luxury for men. From formal meetings to party weekends, this store has everything under one roof. No need to wander around CG Road or malls when The Baadshah is right here in Odhav.",
    verified: true,
    itemPurchased: "Casual Printed Shirts & Biker Jacket",
  },
];

export const LOOKBOOK: LookbookItem[] = [
  {
    id: "look-1",
    title: "The Executive Baadshah",
    tagline: "Corporate Authority & Refinement",
    occasion: "Office Meetings, Client Pitches, Formal Dinners",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    itemsIncluded: [
      "Egyptian Cotton Slim Fit Shirt (Ice Blue / White)",
      "Charcoal Micro-Check Tailored Trousers",
      "Reversible Top-Grain Leather Belt (Black side)",
      "Baadshah Amber & Oud Eau De Parfum",
    ],
    styleTip: "Pair with classic oxfords or dark monks. Roll sleeves with a crisp 2-fold master cuff.",
  },
  {
    id: "look-2",
    title: "The Royal Festive Sangeet",
    tagline: "Regal Gujarati Heritage",
    occasion: "Weddings, Reception, Navratri, Diwali Evenings",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    itemsIncluded: [
      "Royal Hand-Embroidered Silk Blend Kurta",
      "Contrast Gold-Threaded Nehru / Modi Jacket",
      "Tailored Cream Cotton Silk Churidar",
      "Handcrafted Mojari Footwear coordination",
    ],
    styleTip: "Keep accessories minimal — let the intricate neck embroidery take center stage.",
  },
  {
    id: "look-3",
    title: "Weekend Urban Rebel",
    tagline: "Effortless Modern Streetwear",
    occasion: "Night Out, Weekend Cafes, Casual Meetups",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    itemsIncluded: [
      "Matte Black Moto Biker Jacket",
      "240 GSM Heavy Drop-Shoulder Oversized Tee",
      "Hand-Distressed Indigo Flex Jeans",
      "Minimalist Leather Wristband & Aviators",
    ],
    styleTip: "Keep the jacket unzipped over the drop-shoulder tee for a sculpted, relaxed silhouette.",
  },
  {
    id: "look-4",
    title: "Active Champion",
    tagline: "High-Performance Everyday Movement",
    occasion: "Gym, Running, Morning Walks, Sunday Chill",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    itemsIncluded: [
      "Double-Knit Zippered Athletic Shorts",
      "Breathable Quick-Dry Raglan Active Tee",
      "Baadshah Cushioned Sports Socks",
      "Sporty Matte Finish Cap",
    ],
    styleTip: "Zip your phone safely into the reinforced pocket before your run or workout.",
  },
];

export const FAQS = [
  {
    q: "What are the exact store timings of The Baadshah?",
    a: "We are open all 7 days a week from 10:30 AM to 10:30 PM. Whether you want to shop on a Sunday morning or after work on a weekday evening, our doors and trial rooms are open for you.",
  },
  {
    q: "Where exactly is the store located on Viratnagar 100 ft. Road?",
    a: "Our showroom is situated at B-38, Gokul Park Society, Near Ganeshkunj Society, Behind Ambica Nagar, on Viratnagar 100 ft. Road in Odhav, Ahmedabad. We are located right opposite Bapasitaram Madhuli. Ample two-wheeler and four-wheeler parking is available right in front of the store.",
  },
  {
    q: "Do you have fitting trials and size alteration assistance?",
    a: "Yes! We have spacious, air-conditioned trial rooms and dedicated styling assistants. If any slight hem adjustment is needed for trousers or shirts, our team assists you promptly so you walk out with a bespoke fit.",
  },
  {
    q: "What sizes are available in your collections?",
    a: "We cater to all body shapes! Shirts & Kurtas range from S (38) up to XXL / 3XL (46). Trousers & Jeans range from waist size 28 up to 40+. If you are looking for specific sizes, you can WhatsApp us before visiting and we will confirm instant availability.",
  },
  {
    q: "Can I order or enquire directly through WhatsApp?",
    a: "Absolutely! You can click the WhatsApp button on any item or click the floating WhatsApp icon (+91 98258 53047). Send us a photo or product name with your size, and we will share available colors, live video/photos, and price details.",
  },
  {
    q: "What payment methods do you accept at the showroom?",
    a: "We accept all digital payment methods including Google Pay, PhonePe, Paytm, BHIM UPI, All Major Credit & Debit Cards (Visa, Mastercard, RuPay), and Cash.",
  },
  {
    q: "Do you provide clothing for special occasions like weddings and festivals?",
    a: "Yes! We maintain an extensive royal ethnic collection of Kurtas, Modi / Nehru Jackets, Indo-Western sets, and coordinating formal accessories for weddings, sangeet, garba, and festive celebrations.",
  },
];
