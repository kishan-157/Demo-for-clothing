import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { formatWhatsAppUrl } from '../utils/storeStatus';

interface FloatingActionsProps {
  onOpenEnquiryModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiryModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = formatWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    'Hello The Baadshah! I am interested in inquiring about menswear stock at your Odhav showroom.'
  );

  return (
    <>
      {/* Mobile Bottom Fixed Bar (Only on phones/small screens) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0f17]/95 backdrop-blur-md border-t border-amber-500/20 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phones[0].raw}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-white hover:text-amber-300 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold transition-all shadow-md shadow-emerald-600/30"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px]">WhatsApp</span>
        </a>

        <a
          href={BUSINESS_INFO.googleMapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-white hover:text-amber-300 transition-colors"
        >
          <MapPin className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-bold">Directions</span>
        </a>

        <button
          onClick={onOpenEnquiryModal}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-amber-400 text-slate-950 font-bold shrink-0"
          title="Quick Outfit Enquiry"
        >
          <Sparkles className="w-4 h-4" />
        </button>
      </div>

      {/* Desktop / Tablet Floating Action Hub (Bottom-Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#121624] text-slate-300 hover:text-white border border-white/10 hover:border-amber-400 transition-all shadow-xl cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Action Pill with pulsating effect */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all transform hover:-translate-y-1 hover:scale-105"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5" />
          <span className="hidden md:inline">WhatsApp Enquiry</span>
        </a>
      </div>
    </>
  );
};
