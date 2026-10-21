import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  MessageCircle, 
  ArrowRight, 
  Crown,
  Layers
} from 'lucide-react';
import { LOOKBOOK, BUSINESS_INFO } from '../data/businessData';
import { formatWhatsAppUrl } from '../utils/storeStatus';

export const LookbookSection: React.FC = () => {
  const [activeLookId, setActiveLookId] = useState<string>(LOOKBOOK[0].id);

  const activeLook = LOOKBOOK.find((l) => l.id === activeLookId) || LOOKBOOK[0];

  const lookWhatsAppUrl = formatWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    `Hello The Baadshah! I would love to try the "${activeLook.title}" outfit bundle at your Odhav store. Can you help me coordinate this look in my size?`
  );

  return (
    <section id="lookbook" className="py-20 relative bg-[#090b10] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Styling Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The Baadshah <span className="gold-gradient-text">Royal Lookbook</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Don't just buy clothes — command presence. Explore complete head-to-toe coordinated outfits styled by our in-house fashion consultants.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {LOOKBOOK.map((look) => {
            const isSelected = look.id === activeLookId;
            return (
              <button
                key={look.id}
                onClick={() => setActiveLookId(look.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {look.title}
              </button>
            );
          })}
        </div>

        {/* Active Look Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#10141f] border border-amber-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-black border border-white/10 shadow-xl group">
            <img 
              src={activeLook.image} 
              alt={activeLook.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Occasion</span>
              <p className="text-xs sm:text-sm font-semibold text-white">{activeLook.occasion}</p>
            </div>
          </div>

          {/* Look Details & Composition */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeLook.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeLook.title}
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Complete coordinated ensemble ready for trial in our Odhav showroom.
              </p>
            </div>

            {/* Items Included Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Items in this look:</span>
              </h4>
              <div className="space-y-2.5">
                {activeLook.itemsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-200">
                    <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylist Pro Tip */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Baadshah Stylist Secret:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 italic">
                "{activeLook.styleTip}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={lookWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire This Full Look on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 text-slate-200 text-sm font-semibold transition-all"
              >
                <span>Visit Showroom to Try</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
