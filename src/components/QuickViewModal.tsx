import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Check, 
  Tag, 
  ShieldCheck, 
  Sparkles, 
  Share2, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { ProductItem, BUSINESS_INFO } from '../data/businessData';
import { formatWhatsAppUrl } from '../utils/storeStatus';

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0] || 'Standard';

  const whatsappMessage = `Hello The Baadshah! I saw "${product.name}" on your website. 
• Preferred Size: ${currentSize}
• Price Range: ${product.priceRange}
Is this in stock at your Odhav showroom? Can you share available colors or live photos?`;

  const whatsappUrl = formatWhatsAppUrl(BUSINESS_INFO.whatsappNumber, whatsappMessage);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} - The Baadshah Garment`,
        text: `Check out ${product.name} at The Baadshah Garment & Accessories in Odhav, Ahmedabad!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0f131d] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/90 transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 relative min-h-[260px] md:min-h-full bg-black">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500/90 text-slate-950 uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-black/75 text-amber-300 border border-amber-500/30">
              {product.fit}
            </span>
          </div>
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 overflow-y-auto space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE BAADSHAH SIGNATURE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {product.name}
            </h3>
            
            {/* Price Display */}
            <div className="mt-2 flex items-baseline gap-2.5">
              <span className="text-2xl font-black text-amber-400">
                {product.priceRange}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-500 line-through">
                  MRP {product.originalPrice}
                </span>
              )}
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/30">
                Store Special
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {product.description}
          </p>

          {/* Fabric & Material Details */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Fabric & Craftsmanship:
            </div>
            <div className="text-xs text-slate-200">
              {product.fabric}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Select Size:
              </label>
              <span className="text-[11px] text-amber-400">
                Fitting advice available in-store
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sz) => {
                const isSelected = (selectedSize || product.sizes[0]) === sz;
                return (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-500/20'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/50'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 pt-1">
            {product.highlights.map((hl, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enquire & Order on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between gap-2 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Try at Odhav Showroom</span>
              </span>
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied Link!' : 'Share Product'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
