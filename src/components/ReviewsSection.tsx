import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink, 
  ShieldCheck, 
  Quote
} from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 relative bg-[#090b10] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Aggregate Rating Card */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Rated <span className="gold-gradient-text">4.9 / 5.0 Stars</span> on Google
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Read what shoppers from Odhav, Viratnagar, Naroda, and across Ahmedabad say about our fitting, quality, and service.
          </p>
        </div>

        {/* Rating Breakdown Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-[#121624] border border-amber-500/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="text-center">
              <span className="text-5xl sm:text-6xl font-black text-amber-400">4.9</span>
              <div className="flex justify-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Outstanding Customer Satisfaction</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Based on <strong className="text-amber-300">{BUSINESS_INFO.totalReviews}+</strong> verified Google & local business ratings.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Genuine Verified Reviewers</span>
              </div>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.googleMapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#121622] border border-white/10 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Header with stars & date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic relative">
                  <Quote className="w-5 h-5 text-amber-400/20 absolute -top-2 -left-1 pointer-events-none" />
                  <span className="relative z-10 pl-3">"{review.review}"</span>
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    {review.verified && (
                      <span title="Verified Buyer">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </span>
                    )}
                  </h4>
                  <p className="text-[11px] text-slate-400">{review.location}</p>
                </div>

                {review.itemPurchased && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium max-w-[130px] truncate text-right">
                    {review.itemPurchased}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
