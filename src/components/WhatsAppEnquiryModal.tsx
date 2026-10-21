import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Phone, 
  User, 
  MapPin,
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { formatWhatsAppUrl } from '../utils/storeStatus';

interface WhatsAppEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const WhatsAppEnquiryModal: React.FC<WhatsAppEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialProduct || 'Formal Shirts & Trousers');
  const [size, setSize] = useState('M (40) / 32');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }

    setError('');
    const fullText = `*New Showroom Inquiry - The Baadshah Website*
• *Customer Name:* ${name.trim()}
${phone.trim() ? `• *Contact Phone:* ${phone.trim()}` : ''}
• *Interest Category:* ${category}
• *Preferred Size:* ${size}
${message.trim() ? `• *Notes / Requirements:* ${message.trim()}` : ''}
• *Store Location:* Viratnagar 100 ft. Road, Odhav, Ahmedabad

Please let me know current availability, color options, and pricing!`;

    const whatsappUrl = formatWhatsAppUrl(BUSINESS_INFO.whatsappNumber, fullText);
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      onClose();
    }, 800);
  };

  const categories = [
    'Formal Shirts & Trousers',
    'Denim Jeans & Casuals',
    'Athletic Knitted Shorts & Track Pants',
    'Royal Festive Kurta & Modi Jacket',
    'Leather Jackets & Outerwear',
    'Belts, Wallets & Accessories',
    'Wedding / Family Event Wardrobe',
  ];

  const commonSizes = [
    'S (38) / 30',
    'M (40) / 32',
    'L (42) / 34',
    'XL (44) / 36',
    'XXL (46) / 38',
    '3XL / 40+',
    'Not Sure (Need Sizing Advice)',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0f131d] border border-amber-500/35 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Concierge</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Send an Outfit Enquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Connect directly with our master stylists at the Odhav showroom via WhatsApp.
          </p>
        </div>

        {error && (
          <div className="p-3 mb-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-xs text-rose-300">
            {error}
          </div>
        )}

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Connecting to WhatsApp...</h4>
            <p className="text-xs text-slate-400">Opening conversation with The Baadshah Odhav (+91 98258 53047)</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Your Name <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Patel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10"
                />
              </div>
            </div>

            {/* Phone Number (Optional) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Mobile / WhatsApp Number (Optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="tel"
                  placeholder="e.g. 98250 12345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10"
                />
              </div>
            </div>

            {/* Category of interest */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Category You Are Looking For
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#151a26] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-[#151a26] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Your Preferred Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#151a26] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                {commonSizes.map((s) => (
                  <option key={s} value={s} className="bg-[#151a26] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes / Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Specific Question or Color Preference
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Looking for navy blue kurta for my cousin's wedding, need urgent availability"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Open in WhatsApp & Chat Now</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Sends directly to verified store number (+91 98258 53047). No spam guaranteed.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
