/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Car, Navigation, ShieldCheck, Mail, ClipboardCheck, ArrowRight, Music, AlertCircle } from 'lucide-react';

export default function LocationMap() {
  const [liveStatus, setLiveStatus] = useState({
    isOpen: false,
    text: 'Loading current status...',
    color: 'bg-amber-500'
  });

  // Calculate live restaurant opening hours state
  // Open Tue-Sun: 1:00 PM - 9:30 PM (13:00 to 21:30)
  // Closed on Monday
  useEffect(() => {
    const checkLiveHours = () => {
      // Kuala Lumpur / Penang time zone is UTC +8.
      // Let's get the current local date utilizing the client's clock offset
      try {
        const d = new Date();
        // Convert to Malaysia Time (UTC+8)
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const malaysiaTime = new Date(utc + (3600000 * 8));
        
        const day = malaysiaTime.getDay(); // 0: Sun, 1: Mon, 2: Tue, etc.
        const hours = malaysiaTime.getHours();
        const minutes = malaysiaTime.getMinutes();
        const floatTime = hours + minutes / 60;

        // Is Monday? (Day 1)
        if (day === 1) {
          setLiveStatus({
            isOpen: false,
            text: 'Closed today (Mondays are family-resting days)',
            color: 'bg-red-500/80'
          });
        } else {
          // Open between 13.0 and 21.5 (1:00 PM to 9:30 PM)
          if (floatTime >= 13.0 && floatTime <= 21.5) {
            setLiveStatus({
              isOpen: true,
              text: 'Open Now • Fresh charcoal caught grills sizzling',
              color: 'bg-emerald-500'
            });
          } else {
            // Find when it opens relative to now
            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let nextDayStr = 'tomorrow';
            if (day === 0) nextDayStr = 'Tuesday'; // Monday is closed
            
            setLiveStatus({
              isOpen: false,
              text: `Closed now • Kitchen fire lights up ${nextDayStr} at 1:00 PM`,
              color: 'bg-red-500/40 border border-red-500/10'
            });
          }
        }
      } catch (err) {
        setLiveStatus({
          isOpen: true,
          text: 'Open Tue - Sun: 1:00 PM - 9:30 PM',
          color: 'bg-emerald-500'
        });
      }
    };

    checkLiveHours();
    const interval = setInterval(checkLiveHours, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const handleOpenWaze = () => {
    window.open('https://waze.com/ul?q=Ina%20Cafe%20Balik%20Pulau%20Penang', '_blank');
  };

  const handleOpenGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Ina+Cafe+Balik+Pulau+Penang', '_blank');
  };

  return (
    <section id="visit" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080a09] to-charcoal-smoky px-6">
      {/* Absolute design borders and curves */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-forest/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest text-accent-gold uppercase block mb-2 font-bold">Plan Your Scenic Escape</span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-cream-beige tracking-tight mb-4 leading-tight">
            Escape the City To Balik Pulau
          </h2>
          <p className="text-cream-beige/70 text-xs md:text-sm leading-relaxed">
            Located just a 45-minute scenic mountain drive from Georgetown, Penang. The journey winds past lush fruit orchards, old fishing ports, and beautiful colonial vistas.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Map & Directions Box (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0e1110] border border-primary-forest/30 rounded-3xl p-6 shadow-xl relative overflow-hidden" id="visit-map-container">
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent-sunset animate-pulse" />
                  <span className="font-serif text-sm font-semibold text-cream-beige">Jalan Sungai Pinang, Balik Pulau, Penang</span>
                </div>
                {/* Live Status Header badge */}
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold text-cream-beige tracking-wide ${liveStatus.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-white ${liveStatus.isOpen ? 'animate-ping' : ''}`} />
                  <span>{liveStatus.text}</span>
                </div>
              </div>

              {/* Styled Web Map Iframe container */}
              <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-primary-forest/40 relative shadow-inner">
                {/* Realistic representation of map using an iframe centered on Balik Pulau river region */}
                <iframe
                  title="Ina Cafe Location Map"
                  src="https://maps.google.com/maps?q=Ina%20Cafe%20Balik%20Pulau&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Travel Route Options Guides */}
            <div className="mt-6 border-t border-primary-forest/20 pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-gold mb-3 font-semibold">Recommended Travel Routes</h4>
              
              <div className="space-y-3">
                <div className="bg-primary-leaf p-3.5 rounded-xl border border-primary-forest/20 text-left hover:border-accent-gold/30 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-serif font-bold text-cream-beige">The Scenic Ridge Hills Highway</span>
                    <span className="text-[9px] font-mono text-accent-sunset">Pristine Rainforest Views</span>
                  </div>
                  <p className="text-[11px] text-cream-beige/65 leading-relaxed">
                    Exit Georgetown via Paya Terubong Hills. Winding paths past durian trees. It boasts cooler air currents and gorgeous sunset ridges as you land in Balik Pulau.
                  </p>
                </div>

                <div className="bg-primary-leaf p-3.5 rounded-xl border border-primary-forest/20 text-left hover:border-accent-gold/30 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-serif font-bold text-cream-beige">The Southern Coast Scenic Road</span>
                    <span className="text-[9px] font-mono text-accent-sunset font-medium">Ocean View & Rice Paddies</span>
                  </div>
                  <p className="text-[11px] text-cream-beige/65 leading-relaxed">
                    Drive past Bayan Lepas towards Teluk Kumbar. Very flat road tracing the old seaside docks, ending in extensive emerald rice fields alongside our river entrance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Schedule & Parking details (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#111613] border border-primary-forest/30 rounded-3xl p-8 relative" id="visit-details-box">
            <div className="space-y-6 text-left">
              <div>
                <h3 className="font-serif text-cream-beige font-semibold text-xl mb-1">Ina Cafe Experience Guide</h3>
                <p className="text-xs text-cream-beige/50 font-mono uppercase tracking-wide">Useful guidelines for visiting families</p>
              </div>

              {/* Opening Hours HUD grid */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs border-b border-primary-forest/15 pb-2">
                  <span className="text-cream-beige/60">Tuesdays - Sundays</span>
                  <span className="text-cream-beige font-mono font-semibold">1:00 PM - 9:30 PM</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-primary-forest/15 pb-2">
                  <span className="text-[#e2734d]/80 font-serif italic">Mondays</span>
                  <span className="text-accent-sunset font-mono font-semibold">CLOSED (Resting Day)</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-primary-forest/15 pb-2">
                  <span className="text-cream-beige/60">Saturday Durian Specials</span>
                  <span className="text-accent-gold font-mono">1:00 PM onwards</span>
                </div>
              </div>

              {/* Convenience features list */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5 items-start">
                  <div className="p-2 bg-primary-forest/40 border border-[#cca058]/35 rounded-lg text-accent-gold mt-1 shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold text-cream-beige">Complimentary Gated Parking</h5>
                    <p className="text-[11px] text-cream-beige/60 leading-relaxed">We feature a private, secure flat-grass meadow parking lot right behind the wooden cottage fence with 50+ spaces.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2 bg-primary-forest/40 border border-[#cca058]/35 rounded-lg text-accent-gold mt-1 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold text-cream-beige">Primary Reservations Line</h5>
                    <p className="text-[11px] text-cream-beige/60 leading-relaxed">Call or WhatsApp Kak Ina at <strong className="text-accent-gold font-mono">+60 12-456 7890</strong> to arrange custom events or secure river-edge floor pergolas for senior family members.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2 bg-primary-forest/40 border border-[#cca058]/35 rounded-lg text-accent-gold mt-1 shrink-0">
                    <AlertCircle className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold text-cream-beige">Tropical Nature Advice</h5>
                    <p className="text-[11px] text-cream-beige/60 leading-relaxed">Since tables rest directly beside actual outdoor streams, simple organic citronella mosquito coils are set up around every single table for eye-safe protection.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quick Action direction buttons */}
            <div className="mt-8 pt-6 border-t border-primary-forest/20 space-y-3.5">
              <span className="text-[9px] font-mono tracking-widest text-cream-beige/40 uppercase block text-center">Open direction coordinate directly</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleOpenGoogleMaps}
                  className="py-3 px-4 bg-[#1e2a21]/50 hover:bg-[#cca058] hover:text-[#0c100e] text-cream-beige border border-[#cca058]/30 rounded-xl transition duration-300 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" /> Google Maps
                </button>
                <button
                  onClick={handleOpenWaze}
                  className="py-3 px-4 bg-[#1e2a21]/50 hover:bg-[#e06d48] hover:text-white text-cream-beige border border-[#e06d48]/30 rounded-xl transition duration-300 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Car className="w-3.5 h-3.5 shrink-0" /> Open Waze
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
