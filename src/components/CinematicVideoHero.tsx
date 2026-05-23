/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageSquare, Utensils, Compass, Sprout } from 'lucide-react';

const BURNING_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    mood: 'Peaceful riverside dining'
  },
  {
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80',
    mood: 'Sizzling wood charcoal gills'
  },
  {
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1920&q=80',
    mood: 'Generous traditional Malay spreads'
  },
  {
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80',
    mood: 'Penang hill sunlight layers'
  }
];

export default function CinematicVideoHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Transition background slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BURNING_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveWhatsApp = () => {
    const text = encodeURIComponent("Salam! I saw the beautiful Ina Cafe website and would like to reserve a table beside the river please.");
    window.open(`https://api.whatsapp.com/send?phone=60124567890&text=${text}`, '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal-smoky">
      {/* Cinematic Slideshow backdrops */}
      <div className="absolute inset-0 z-0">
        {BURNING_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              idx === activeSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Direct slow-pan scale zoom on active image */}
            <img
              src={slide.image}
              alt={slide.mood}
              className={`w-full h-full object-cover select-none pointer-events-none ${
                idx === activeSlide ? 'animate-pan-slow' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Absolute dark vignette frame shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-smoky via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* RISING SMOKE SIMULATOR (SVG filtered organic smoke elements) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-[-10%] bg-gradient-to-t from-accent-gold/15 to-transparent rounded-full blur-2xl animate-smoke-rise"
            style={{
              left: `${15 + i * 15 + Math.random() * 8}%`,
              width: `${120 + Math.random() * 180}px`,
              height: `${140 + Math.random() * 200}px`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${10 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Floating amber embers particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={`ember-${i}`}
            className="absolute bg-accent-sunset rounded-full animate-float-slow opacity-60"
            style={{
              bottom: `${10 + Math.random() * 20}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              boxShadow: '0 0 10px #e06d48, 0 0 4px #cca058',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Main Dramatic Presentation content */}
      <div className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center">
        
        {/* Traditional village crest badge tag */}
        <div className="flex items-center gap-2 px-4 py-2 bg-primary-leaf/80 rounded-full border border-accent-gold/30 mb-8 animate-fade-in text-xs tracking-[0.2em] font-mono text-accent-gold uppercase select-none shadow-xl">
          <Sprout className="w-3.5 h-3.5 text-accent-gold animate-pulse" />
          <span>Balik Pulau Penang Heritage</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-semibold text-cream-beige tracking-tight mb-6 leading-[1.1] text-shadow-cinematic">
          Authentic Kampung Flavors <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-sunset via-accent-gold to-cream-beige italic font-medium">
            Hidden in Balik Pulau
          </span>
        </h1>

        {/* Subhead narrative describing the vibe */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-cream-beige/85 max-w-2xl leading-relaxed mb-10 text-shadow-subtle">
          Experience the warmth of traditional Malay cooking, riverside serenity, and unforgettable charcoal-grilled flavors surrounded by the natural, untouched beauty of Penang.
        </p>

        {/* Glow CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto pb-4">
          <button
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto bg-[#cca058] hover:bg-[#be9348] text-[#0a1712] font-semibold text-xs tracking-wider uppercase px-8 py-4.5 rounded-xl transition duration-300 transform hover:-translate-y-0.5 shadow-lg active:translate-y-0 glow-gold flex items-center justify-center gap-2 hover:shadow-accent-gold/25 cursor-pointer"
          >
            <Utensils className="w-4 h-4" /> Explore Menu
          </button>
          
          <button
            onClick={handleReserveWhatsApp}
            className="w-full sm:w-auto bg-transparent hover:bg-cream-beige/5 text-cream-beige font-semibold text-xs tracking-wider uppercase px-8 py-4.5 rounded-xl border border-cream-beige/30 transition duration-300 backdrop-blur-md hover:border-accent-gold flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-accent-sunset" /> Reserve via WhatsApp
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className="w-full sm:w-auto bg-[#e06d48] hover:bg-[#cf5e38] text-white font-semibold text-xs tracking-wider uppercase px-8 py-4.5 rounded-xl transition duration-300 transform hover:-translate-y-0.5 shadow-lg active:translate-y-0 glow-sunset flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" /> Discover Serenity
          </button>
        </div>

        {/* Live Status counter */}
        <div className="mt-8 flex items-center gap-2.5 bg-black/65 border border-primary-forest/30 px-4 py-2 rounded-xl backdrop-blur-md text-[10px] font-mono tracking-widest text-[#cca058]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span>KITCHEN FIRE ACTIVE TODAY: 1:00 PM - 9:30 PM</span>
        </div>
      </div>

      {/* Bottom sliding anchor indicator */}
      <button 
        onClick={() => scrollToSection('experience')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-cream-beige/50 hover:text-accent-gold flex flex-col items-center gap-1.5 transition duration-300 pointer-events-auto"
        title="Scroll Down"
      >
        <span className="text-[9px] tracking-widest font-mono uppercase opacity-75">Begin Your Journey</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>

      {/* Soft color bar details */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-forest via-accent-sunset to-accent-gold z-20" />
    </section>
  );
}
