import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Crown,
  Heart
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { formatWhatsAppUrl } from '../utils/storeStatus';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = formatWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    'Hello The Baadshah! I would like to get in touch with your Odhav store.'
  );

  return (
    <footer className="bg-[#07090e] border-t border-white/10 pt-16 pb-24 sm:pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#78540c] p-[1.5px] shadow-lg shadow-amber-500/10">
                <div className="w-full h-full bg-[#0d0f17] rounded-[7px] flex items-center justify-center">
                  <span className="font-regal text-xl font-bold bg-gradient-to-br from-amber-200 to-amber-500 bg-clip-text text-transparent">
                    B
                  </span>
                </div>
              </div>
              <div>
                <span className="font-regal font-black tracking-wider text-lg text-white block">
                  THE BAADSHAH
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase">
                  MENSWEAR & ACCESSORIES • EST. 2016
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Ahmedabad’s premier men’s wardrobe showroom in Odhav. Specializing in tailored shirts, comfort-stretch denims, athletic knitted shorts, festive kurtas, and luxury leather accessories.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>4.9★ Rated on Google (247+ Verified Reviews)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collections" className="hover:text-amber-300 transition-colors">
                  Signature Collections
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-amber-300 transition-colors">
                  Royal Lookbook
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">
                  Google Reviews (4.9★)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Showroom Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  Store & Directions
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Wardrobe Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Menswear Catalog
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Formal & Casual Egyptian Cotton Shirts</li>
              <li>Hand-Whiskered Flex Denim Jeans</li>
              <li>Athletic Knitted Shorts & Gym Joggers</li>
              <li>Handcrafted Silk Festive Kurtas & Modi Jackets</li>
              <li>Biker & Bomber Outerwear Jackets</li>
              <li>Full-Grain Reversible Belts & Wallets</li>
              <li>Amber & Oud Long-Lasting Fragrances</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Showroom Information
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  B-38, Gokul Park Society, Near Ganeshkunj, Viratnagar 100 ft. Rd, Odhav, Ahmedabad 382415
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phones[0].raw}`} className="hover:text-white font-medium">
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open Everyday: 10:30 AM – 10:30 PM</span>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold hover:bg-amber-400/20 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Listing</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment modes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400">
            <span>Accepted Payments:</span>
            {BUSINESS_INFO.paymentMethods.map((pm, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                {pm}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
