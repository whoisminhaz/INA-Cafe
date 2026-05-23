/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Compass, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

export default function FooterExperience() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent("Assalamualaikum Kak Ina, I am visiting soon and want to ask some questions about the daily grilled specials.");
    window.open(`https://api.whatsapp.com/send?phone=60124567890&text=${text}`, '_blank');
  };

  return (
    <footer className="bg-charcoal-smoky border-t border-primary-forest/30 relative overflow-hidden pt-20 pb-12 px-6">
      {/* Absolute gold-leaf visual layout highlights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-forest/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-primary-forest/20 items-start">
          
          {/* Brand/Narrative block (Col width: 4) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="font-serif text-2xl font-semibold tracking-wide text-cream-beige">
              Ina Cafe<span className="text-accent-sunset font-sans inline-block ml-0.5">.</span>
            </h3>
            <span className="text-[10px] uppercase font-mono tracking-widest text-accent-gold block italic">
              Balik Pulau, Penang
            </span>
            <p className="text-cream-beige/60 text-xs leading-relaxed max-w-sm font-sans pt-2">
              A serene, tropical sanctuary nestled deep in the agricultural hills of Penang. Preserving the hand-pounded spices, natural wood smoke, and unpretentious warmth of old Malay village hospitality.
            </p>

            {/* Glowing social links */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#121614] hover:bg-[#cca058] hover:text-[#0c100e] text-cream-beige border border-primary-forest/40 rounded-xl transition duration-300 shadow-md"
                title="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#121614] hover:bg-[#e06d48] hover:text-white text-cream-beige border border-primary-forest/40 rounded-xl transition duration-300 shadow-md"
                title="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links block (Col width: 3) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent-gold">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs">
              <a href="#experience" className="text-cream-beige/65 hover:text-accent-gold transition">
                The Ina Experience
              </a>
              <a href="#menu" className="text-cream-beige/65 hover:text-accent-gold transition">
                Signature Specialty Menu
              </a>
              <a href="#gallery" className="text-cream-beige/65 hover:text-accent-gold transition">
                Framing Balik Pulau
              </a>
              <a href="#social" className="text-cream-beige/65 hover:text-accent-gold transition">
                Creator Social Wall
              </a>
              <a href="#visit" className="text-cream-beige/65 hover:text-accent-gold transition">
                Route Direction Guides
              </a>
            </div>
          </div>

          {/* Opening and Booking block (Col width: 4) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent-gold">
              Kitchen Schedule
            </h4>
            <div className="space-y-2 text-xs text-cream-beige/65">
              <div className="flex justify-between border-b border-primary-forest/10 pb-1.5">
                <span>Tuesday - Sunday:</span>
                <span className="font-mono text-cream-beige">1:00 PM - 9:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-primary-forest/10 pb-1.5">
                <span>Monday:</span>
                <span className="font-serif italic text-accent-sunset">Closed (Resting Day)</span>
              </div>
              <p className="text-[10px] leading-relaxed opacity-50 pt-1 leading-relaxed">
                *Since we select and clean seafood early in the morning, reservations for private fish sizes are highly recommended.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-primary-forest text-accent-gold border border-primary-forest/80 hover:bg-accent-gold hover:text-charcoal-smoky text-[11px] font-bold tracking-widest uppercase py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Phone className="w-4 h-4" /> Reserve Weekend Spot
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright details and anchor scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-wider text-cream-beige/45">
          <div>
            <p>© 2026 Ina Cafe Balik Pulau, Penang. Preserved by Family Traditions.</p>
            <p className="opacity-40 mt-1 uppercase text-[8px] tracking-widest">Winds & waves are our only schedules.</p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 hover:text-accent-gold transition pointer-events-auto group px-3 py-1.5 rounded-lg border border-primary-forest/15 hover:border-primary-forest/60"
            title="Scroll To Top"
          >
            <span>Retrace Journey</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:animate-bounce shrink-0" />
          </button>
        </div>

      </div>
    </footer>
  );
}
