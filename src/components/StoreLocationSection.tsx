import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  Navigation, 
  MessageCircle, 
  Calendar,
  CreditCard,
  Car
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getStoreStatus, formatWhatsAppUrl } from '../utils/storeStatus';

export const StoreLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [storeStatus, setStoreStatus] = useState(getStoreStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const daysOfWeek = [
    { day: "Monday", hours: "10:30 AM – 10:30 PM", status: "Open" },
    { day: "Tuesday", hours: "10:30 AM – 10:30 PM", status: "Open" },
    { day: "Wednesday", hours: "10:30 AM – 10:30 PM", status: "Open" },
    { day: "Thursday", hours: "10:30 AM – 10:30 PM", status: "Open" },
    { day: "Friday", hours: "10:30 AM – 10:30 PM", status: "Open" },
    { day: "Saturday", hours: "10:30 AM – 10:30 PM", status: "Open" },
    { day: "Sunday", hours: "10:30 AM – 10:30 PM", status: "Open" },
  ];

  let currentDayName = "Monday";
  try {
    currentDayName = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
    }).format(new Date());
  } catch {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    currentDayName = days[new Date().getDay()];
  }

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    BUSINESS_INFO.address.fullAddress
  )}`;

  return (
    <section id="location" className="py-20 relative bg-[#090b10] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Store Location & Directions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Visit Our <span className="gold-gradient-text">Odhav Showroom</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Conveniently located on Viratnagar 100 ft. Road in East Ahmedabad. Step in today for trial rooms, personalized styling, and exclusive in-store deals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Phones, Hours Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Card */}
            <div className="p-5 rounded-2xl bg-[#121622] border border-amber-500/30 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-3.5 h-3.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{storeStatus.statusText}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 font-normal">
                      {storeStatus.currentIndianTime}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{storeStatus.nextEventText}</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Open 7 Days
              </span>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#121622] border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                      Showroom Address
                    </h4>
                    <p className="text-white font-medium text-sm sm:text-base mt-1 leading-snug">
                      {BUSINESS_INFO.address.line1}
                      <br />
                      {BUSINESS_INFO.address.line2}
                      <br />
                      {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
                    </p>
                    <p className="text-xs text-amber-300/90 mt-2 font-medium">
                      Landmark: {BUSINESS_INFO.address.landmark}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy full address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={BUSINESS_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/15"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Driving Route</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-[#121622] border border-white/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Direct Contact Lines</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUSINESS_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all flex flex-col justify-between"
                  >
                    <span className="text-[11px] text-slate-400">{phone.label}</span>
                    <span className="text-sm font-bold text-white mt-1 flex items-center justify-between">
                      <span>{phone.display}</span>
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Parking & Payment info */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Car className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white">Easy Parking</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">Wide 100ft road frontage</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white">All Payments</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">UPI, Cards, Cash</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Schedule */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Map Container */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-[#121622] aspect-[16/10] sm:aspect-[16/11]">
              <iframe
                title="The Baadshah Garment & Accessories Odhav Ahmedabad Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  'The Baadshah Mens Garment Viratnagar Odhav Ahmedabad 382415'
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating overlay chip */}
              <div className="absolute top-3 left-3 bg-[#0d0f17]/90 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-lg pointer-events-none hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs font-bold text-white">The Baadshah Garment & Accessories</p>
                </div>
                <p className="text-[10px] text-slate-300 mt-0.5">Viratnagar 100 ft. Road, Odhav</p>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 rounded-2xl bg-[#121622] border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Showroom Hours
                  </h4>
                </div>
                <span className="text-xs text-amber-300 font-semibold">
                  Open Every Single Day
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {daysOfWeek.map((item) => {
                  const isToday = item.day === currentDayName;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between p-2.5 rounded-lg border transition-colors ${
                        isToday
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-200 font-bold'
                          : 'bg-white/5 border-white/5 text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                        <span>{item.day}</span>
                        {isToday && <span className="text-[10px] text-amber-400">(Today)</span>}
                      </span>
                      <span>{item.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
