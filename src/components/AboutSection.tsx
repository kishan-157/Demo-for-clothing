import React from 'react';
import { 
  Crown, 
  Sparkles, 
  Check, 
  MapPin, 
  Phone, 
  Calendar, 
  Scissors, 
  TrendingUp,
  ShoppingBag
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#090b10] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Heritage & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The Story Behind <span className="gold-gradient-text">The Baadshah</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Founded in 2016 in Odhav, Ahmedabad with a single bold mission: to give every man the confidence, elegance, and presence of a King — without the exorbitant mall price tags.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80" 
                  alt="Men's Luxury Shirts" 
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 rounded-2xl bg-[#121622] border border-white/10 text-center">
                <span className="text-3xl font-black text-amber-400">8+ Years</span>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">
                  Trusted Menswear in Ahmedabad
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-2xl bg-[#121622] border border-white/10 text-center">
                <span className="text-3xl font-black text-emerald-400">247+</span>
                <p className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">
                  Verified 5-Star Reviews
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80" 
                  alt="Men's Stretch Denim Jeans" 
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              From Classic Everyday Essentials to Royal Festive Celebrations
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Located conveniently on <span className="text-amber-300 font-medium">Viratnagar 100 ft. Road in Odhav</span> (opposite Bapasitaram Madhuli), The Baadshah has become East Ahmedabad’s favorite neighborhood fashion hub. We handpick fabrics directly from premier mills across India to ensure exceptional breathability, color retention, and comfort.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Whether you are preparing for a critical job interview, a weekend getaway, a grueling gym session, or a family wedding reception, our team guides you to the exact silhouette, fabric, and accessories that make you stand out.
            </p>

            {/* In-store experience perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fitting & Trial Rooms</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Spacious, air-conditioned trial spaces with quick sizing assistance.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Weekly Fresh Drops</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Always stocked with viral seasonal trends and fresh colorways.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Wholesale Value</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Direct retail rates that beat high-end mall markups by up to 50%.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Prime Odhav Location</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Easy parking right in front on Viratnagar 100ft road.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
