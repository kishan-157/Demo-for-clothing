import React from 'react';
import { 
  ShieldCheck, 
  Crown, 
  Sparkles, 
  Tag, 
  Clock, 
  MapPin, 
  HeartHandshake,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Crown,
      title: "Royal Silhouette & Tailored Fit",
      description: "No generic boxy cuts. Our shirts, kurtas, and trousers are engineered to flatter your build, with staff on hand for instant hem and fitting adjustments.",
      badge: "Signature Cut",
    },
    {
      icon: Layers,
      title: "Handpicked Premium Fabrics",
      description: "From 100% compact Egyptian cotton and 240 GSM bio-washed cotton to durable double-knit activewear and rich festive silks. Tested to never shrink or fade.",
      badge: "Zero Compromise",
    },
    {
      icon: Tag,
      title: "Honest Wholesale-Direct Rates",
      description: "Experience premium boutique luxury at transparent Ahmedabad local prices. Enjoy 40–50% savings compared to high-rent mall stores.",
      badge: "Real Value",
    },
    {
      icon: Sparkles,
      title: "Weekly Fresh Drops & Viral Trends",
      description: "Our inventory rotates every single week with fresh seasonal shades, modern Korean pleats, oversized streetwear tees, and festive wedding arrivals.",
      badge: "Always Fresh",
    },
    {
      icon: HeartHandshake,
      title: "Complete Head-to-Toe Styling",
      description: "Complete your look without running between stores. Match your shirt with genuine leather reversible belts, wallets, caps, socks, and signature perfumes.",
      badge: "All-in-One",
    },
    {
      icon: Clock,
      title: "Open 7 Days • 10:30 AM to 10:30 PM",
      description: "Conveniently open all seven days with hassle-free parking right in front of the showroom on Viratnagar 100 ft. Road in Odhav.",
      badge: "Full Convenience",
    },
  ];

  return (
    <section id="why-us" className="py-20 relative bg-[#0b0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>The Baadshah Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Ahmedabad Gentlemen <span className="gold-gradient-text">Trust Us</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Over 8 years of relentless focus on fabric quality, honest pricing, and genuine customer satisfaction in Odhav.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#121622] border border-white/10 hover:border-amber-500/40 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-amber-300 border border-white/10">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed at Showroom</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Customer Stat Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141824] via-[#1a2030] to-[#141824] border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to Upgrade Your Everyday Style?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Drop by today at Viratnagar 100 ft. Road, Odhav or chat with us for size queries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
            >
              Call Showroom
            </a>
            <a
              href={BUSINESS_INFO.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
