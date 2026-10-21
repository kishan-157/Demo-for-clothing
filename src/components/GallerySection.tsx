import React, { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  ZoomIn, 
  X, 
  MapPin, 
  ShoppingBag
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'store' | 'apparel' | 'ethnic' | 'accessories';
  categoryLabel: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    url: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
    title: 'Festive Royal Kurta & Indo-Western Couture',
    category: 'ethnic',
    categoryLabel: 'Festive Wear',
  },
  {
    id: 'g-2',
    url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
    title: 'Executive Luxury Cotton Shirts Display',
    category: 'apparel',
    categoryLabel: 'Formal Shirts',
  },
  {
    id: 'g-3',
    url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
    title: 'Premium Hand-Washed Flex Denims & Trousers',
    category: 'apparel',
    categoryLabel: 'Denim Collection',
  },
  {
    id: 'g-4',
    url: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=80',
    title: 'Signature Double-Knit Athletic Shorts with Zip Pockets',
    category: 'apparel',
    categoryLabel: 'Athleisure Speciality',
  },
  {
    id: 'g-5',
    url: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1000&q=80',
    title: 'Genuine Leather Reversible Belts & Wallets',
    category: 'accessories',
    categoryLabel: 'Leather Goods',
  },
  {
    id: 'g-6',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
    title: 'Luxury Amber & Smoky Oud Mens Fragrances',
    category: 'accessories',
    categoryLabel: 'Fragrances',
  },
  {
    id: 'g-7',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    title: 'Tailored Waistcoats & Tuxedo Blazers',
    category: 'ethnic',
    categoryLabel: 'Blazers & Suits',
  },
  {
    id: 'g-8',
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
    title: 'Matte Finish Winter Moto Jackets',
    category: 'apparel',
    categoryLabel: 'Outerwear',
  },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'apparel', label: 'Apparel & Denims' },
    { id: 'ethnic', label: 'Festive & Kurtas' },
    { id: 'accessories', label: 'Accessories & Belts' },
  ];

  const displayedImages = GALLERY_IMAGES.filter(
    (img) => activeFilter === 'all' || img.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 relative bg-[#0b0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Showroom Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The Baadshah <span className="gold-gradient-text">Showroom Gallery</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Take a visual tour of our Odhav store — authentic fabrics, artisanal stitching, and styling arrangements.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-white/10 cursor-pointer shadow-lg hover:border-amber-500/40 transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/30">
                  {img.categoryLabel}
                </span>
              </div>

              {/* Title & Zoom Icon */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                  {img.title}
                </h4>
                <div className="p-2 rounded-lg bg-amber-400 text-slate-950 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0d0f17] border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-[#121622] flex items-center justify-between border-t border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-white">{selectedImage.title}</h3>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold"
              >
                Visit Store
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
