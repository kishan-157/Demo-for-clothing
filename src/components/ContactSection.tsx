import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Share2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { formatWhatsAppUrl } from '../utils/storeStatus';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState('Festive / Wedding Outfit Trial');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFeedback('Please enter your name.');
      return;
    }

    const formattedMessage = `Hello The Baadshah! My name is ${name.trim()}${
      contact ? ` (${contact.trim()})` : ''
    }.
I am writing regarding: *${topic}*.
${message ? `Note: ${message.trim()}` : ''}
Could you please share details, sizes, and showroom availability in Odhav?`;

    const url = formatWhatsAppUrl(BUSINESS_INFO.whatsappNumber, formattedMessage);
    setFeedback('Success! Redirecting you to WhatsApp now...');
    setTimeout(() => {
      window.open(url, '_blank');
      setFeedback(null);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#0b0e16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Connect With <span className="gold-gradient-text">The Baadshah Team</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Have questions about sizes, bulk festive orders, or want us to reserve a trial outfit for you? We reply promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12281d] to-[#0f1b16] border border-emerald-500/30 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Instant WhatsApp Chat</h4>
                  <p className="text-xs text-emerald-300">Fastest response for photos & sizing</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Chat with our store manager at <strong className="text-white">+91 98258 53047</strong>. Send us reference images or ask for available stock in real time.
              </p>
              <a
                href={formatWhatsAppUrl(
                  BUSINESS_INFO.whatsappNumber,
                  'Hello The Baadshah! I would like to chat about your collection in Odhav.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 98258 53047)</span>
              </a>
            </div>

            {/* Direct Phone Lines Card */}
            <div className="p-6 rounded-2xl bg-[#121622] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Direct Phone Call</h4>
                  <p className="text-xs text-slate-400">Speak directly to store staff</p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                {BUSINESS_INFO.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.raw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/40 text-slate-200 text-xs sm:text-sm transition-all"
                  >
                    <div>
                      <span className="font-bold text-white">{p.display}</span>
                      <span className="block text-[11px] text-slate-400">{p.label}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 text-xs font-bold">
                      Call
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Address & Timings Card */}
            <div className="p-6 rounded-2xl bg-[#121622] border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-white block text-sm mb-0.5">{BUSINESS_INFO.name}</strong>
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.area}, Ahmedabad - {BUSINESS_INFO.address.pincode}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open Monday – Sunday: 10:30 AM to 10:30 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Enquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#121624] border border-amber-500/25 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Send a Showroom Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Fill in your details and we'll instantly connect via WhatsApp to share options and prices.
              </p>
            </div>

            {feedback && (
              <div className="p-3 mb-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{feedback}</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kishan Ladani"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    WhatsApp or Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 98258 53047"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  What are you looking for?
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#171c2b] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Festive / Wedding Outfit Trial">Festive / Wedding Outfit Trial (Kurtas & Modi Jackets)</option>
                  <option value="Formal Shirts & Corporate Wear">Formal Shirts & Corporate Trousers</option>
                  <option value="Casual Denims & Streetwear Tees">Casual Denims & Streetwear Tees</option>
                  <option value="Athletic Knitted Shorts & Track Pants">Athletic Knitted Shorts & Track Pants</option>
                  <option value="Leather Belts, Wallets & Accessories">Leather Belts, Wallets & Accessories</option>
                  <option value="Size Consultation & In-Store Alteration">Size Consultation & In-Store Alteration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Message / Outfit Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what size or style you prefer..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send WhatsApp Enquiry</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
