import React from 'react';
import { 
  Star, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Award, 
  ShoppingBag,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { formatWhatsAppUrl } from '../utils/storeStatus';

interface HeroProps {
  onOpenEnquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiryModal }) => {
  const whatsappUrl = formatWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    `Hello The Baadshah! I would like to explore your latest collection and visit your showroom in Odhav, Ahmedabad.`
  );

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ahmedabad's Leading Menswear Destination • Est. 2016</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Dress Like <span className="gold-gradient-text">Royalty.</span>
              <br />
              Tailored For The Modern Man.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <span className="text-white font-semibold">{BUSINESS_INFO.name}</span> on Viratnagar 100 ft. Road, Odhav. From boardroom-ready luxury shirts and flex denims to handcrafted festive kurtas and athletic knitted shorts — elevate your wardrobe with imperial flair at honest, wholesale-direct prices.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sharp Tailored Fits</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4.9★ (247+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open All 7 Days</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sizes S to 3XL (28–42)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>In-Store Fitting Trial</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complete Accessories</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 bg-white/5 border border-white/10 hover:border-amber-500/40 hover:text-amber-300 transition-all"
              >
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>View on Maps</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span className="text-slate-400 text-xs">({BUSINESS_INFO.totalReviews}+ Verified Reviews)</span>
              </div>

              <div className="h-4 w-px bg-white/15 hidden sm:block" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">Verified Showroom in Odhav</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black/80 group">
                <img 
                  src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80" 
                  alt="The Baadshah Menswear Collection" 
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-80" />

                {/* Bottom image caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0d0f17]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                        Signature Festive & Formal
                      </p>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        Handcrafted Kurtas & Tailored Suits
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      New Season
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 4.9 Star Google Rating */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#131722]/90 backdrop-blur-md border border-amber-500/40 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-white text-sm">
                      <span>4.9</span>
                      <span className="text-xs text-amber-400">★★★★★</span>
                    </div>
                    <p className="text-[10px] text-slate-300">Google Verified Rating</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Speciality Knitted Shorts & Denims */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#131722]/95 backdrop-blur-md border border-emerald-500/40 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Knitted Shorts & Flex Denim</p>
                    <p className="text-[10px] text-slate-400">Ahmedabad's Best Value Pick</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
