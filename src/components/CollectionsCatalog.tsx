import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  Eye, 
  Sparkles, 
  ShoppingBag, 
  ChevronRight,
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { PRODUCTS, ProductItem, BUSINESS_INFO } from '../data/businessData';
import { QuickViewModal } from './QuickViewModal';
import { formatWhatsAppUrl } from '../utils/storeStatus';

export const CollectionsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'shirts', label: 'Shirts' },
    { id: 'trousers', label: 'Denims & Trousers' },
    { id: 'athleisure', label: 'Athleisure & Shorts' },
    { id: 'ethnic', label: 'Ethnic Kurtas & Jackets' },
    { id: 'jackets', label: 'Jackets & Outerwear' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fit.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="collections" className="py-20 relative bg-[#0b0e16]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Explore In-Store Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Curated <span className="gold-gradient-text">Baadshah Collections</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl text-sm sm:text-base">
              Hand-selected fabrics, precision fits, and contemporary designs. Every piece can be tried and tailored in our Odhav showroom.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search shirts, shorts, kurtas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>
            Showing <strong className="text-white">{filteredProducts.length}</strong> items in Odhav showroom
          </span>
          <span className="text-amber-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for In-Store Trial</span>
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white/5 border border-white/10 p-8">
            <p className="text-lg font-bold text-white">No items found matching "{searchQuery}"</p>
            <p className="text-sm text-slate-400 mt-1">Try another keyword or select a different category.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const itemWhatsAppUrl = formatWhatsAppUrl(
                BUSINESS_INFO.whatsappNumber,
                `Hello The Baadshah! I would like to check availability for: "${product.name}" (${product.priceRange}) at your Odhav showroom. Do you have sizes available?`
              );

              return (
                <div
                  key={product.id}
                  className="group relative rounded-2xl bg-[#121622] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
                >
                  {/* Image Container with Badges & Hover Overlay */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                        {product.categoryLabel}
                      </span>
                      {product.featured && (
                        <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Fit Tag */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#0f121a]/85 backdrop-blur-md text-slate-300 border border-white/10">
                        {product.fit}
                      </span>
                    </div>

                    {/* Hover Quick Action Buttons */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="p-3 rounded-full bg-white text-slate-950 hover:bg-amber-400 transition-colors shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                        title="Quick View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <a
                        href={itemWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-400 transition-colors shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                    <div>
                      <h3 
                        onClick={() => setQuickViewProduct(product)}
                        className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {product.fabric}
                      </p>
                    </div>

                    {/* Available Sizes preview */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] uppercase text-slate-400 font-semibold">Sizes:</span>
                      {product.sizes.slice(0, 4).map((s, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-slate-300 text-[10px] border border-white/5">
                          {s}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="text-[10px] text-amber-400">+{product.sizes.length - 4}</span>
                      )}
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                      <div>
                        <div className="text-base font-black text-amber-400">
                          {product.priceRange}
                        </div>
                        {product.originalPrice && (
                          <div className="text-[11px] text-slate-400 line-through">
                            MRP {product.originalPrice}
                          </div>
                        )}
                      </div>

                      <a
                        href={itemWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Enquire</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
