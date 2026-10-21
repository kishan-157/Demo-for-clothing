import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getStoreStatus, formatWhatsAppUrl } from '../utils/storeStatus';

interface NavbarProps {
  onOpenEnquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [storeStatus, setStoreStatus] = useState(getStoreStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Refresh store status every minute
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews (4.9★)', href: '#reviews' },
    { label: 'Store & Map', href: '#location' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappGeneralUrl = formatWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    `Hello The Baadshah! I saw your website and would like to inquire about your menswear collection in your Odhav store.`
  );

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top announcement & quick contact bar */}
      <div className="bg-[#0f121a] border-b border-[#222838] px-4 py-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Live Store status & location */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className={`inline-block w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className={storeStatus.isOpen ? 'text-emerald-400' : 'text-amber-400'}>
                {storeStatus.statusText}
              </span>
              <span className="text-slate-400">({storeStatus.nextEventText})</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Viratnagar 100 ft. Road, Odhav, Ahmedabad
            </span>
          </div>

          {/* Direct call & WhatsApp triggers */}
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors"
              title="Call The Baadshah showroom"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-semibold">{BUSINESS_INFO.phones[0].display}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#090b10]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-3' : 'bg-[#0b0d14]/90 backdrop-blur-sm py-4 border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Crown / Monogram Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#78540c] p-[1.5px] shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/25 transition-all">
              <div className="w-full h-full bg-[#0d0f17] rounded-[7px] flex items-center justify-center">
                <span className="font-regal text-xl font-bold bg-gradient-to-br from-amber-200 to-amber-500 bg-clip-text text-transparent">
                  B
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-regal font-black tracking-wider text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors">
                  THE BAADSHAH
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  EST. 2016
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-widest text-slate-400 uppercase">
                Garment & Accessories • Odhav
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-amber-300 hover:bg-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEnquiryModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-amber-200 border border-amber-500/30 hover:bg-amber-500/10 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Outfit Enquiry</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Store</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-amber-300 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f17] border-b border-amber-500/20 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-amber-300 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 font-semibold text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Quick Outfit / Size Enquiry</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-sm shadow-md"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Store</span>
              </a>
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-400"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
