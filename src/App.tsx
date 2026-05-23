/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import CinematicVideoHero from './components/CinematicVideoHero';
import CampungStory from './components/CampungStory';
import CinematicGallery from './components/CinematicGallery';
import DigitalMenu from './components/DigitalMenu';
import SocialWall from './components/SocialWall';
import LocationMap from './components/LocationMap';
import FooterExperience from './components/FooterExperience';
import { Compass, Menu as MenuIcon, X, Phone, Navigation, Clock, MessageSquare, Heart } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position to trigger header styling shifts
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileBookWhatsApp = () => {
    const text = encodeURIComponent("Assalamualaikum, I saw your mobile page and would like to reserve a cosy table near the river please.");
    window.open(`https://api.whatsapp.com/send?phone=60124567890&text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-charcoal-smoky text-cream-beige overflow-x-hidden selection:bg-accent-gold selection:text-charcoal-smoky font-sans antialiased relative">
      
      {/* 1. STRUETURED RESTAURANT SCHEMA (SEO Rich snippets integration) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Ina Cafe",
          "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200",
          "@id": "https://ais-dev-rbc7szbtyihrkpos56t4r6-791510865334.asia-east1.run.app/#experience",
          "url": "https://ais-dev-rbc7szbtyihrkpos56t4r6-791510865334.asia-east1.run.app/",
          "telephone": "+60124567890",
          "priceRange": "RM10 - RM40",
          "menu": "https://ais-dev-rbc7szbtyihrkpos56t4r6-791510865334.asia-east1.run.app/#menu",
          "servesCuisine": "Authentic Malay Kampung Seafood, Charcoal Grilled Fish, Heritage Halal Dishes",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jalan Sungai Pinang, Balik Pulau",
            "addressLocality": "Balik Pulau, Penang",
            "postalCode": "11000",
            "addressCountry": "MY"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "5.3512391",
            "longitude": "100.2114624"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "13:00",
              "closes": "21:30"
            }
          ]
        })}
      </script>

      {/* 2. TRANSLUCENT FLOATING NAVIGATION HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-charcoal-smoky/90 backdrop-blur-md border-primary-forest/30 py-4 shadow-xl'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start text-left group cursor-pointer"
            title="Ina Cafe Balik Pulau"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-cream-beige uppercase">
              Ina Cafe<span className="text-accent-sunset font-sans inline-block">.</span>
            </span>
            <span className="text-[8px] font-mono tracking-[0.2em] text-[#cca058]/85 uppercase mt-0.5">
              Balik Pulau • Penang
            </span>
          </button>

          {/* Desktop Links HUD */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-medium">
            <button
              onClick={() => scrollToSection('experience')}
              className="text-cream-beige/70 hover:text-accent-gold transition duration-200 cursor-pointer"
            >
              The Experience
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-cream-beige/70 hover:text-accent-gold transition duration-200 cursor-pointer"
            >
              Signature Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-cream-beige/70 hover:text-accent-gold transition duration-200 cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('social')}
              className="text-cream-beige/70 hover:text-accent-gold transition duration-200 cursor-pointer"
            >
              Social Wall
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="text-cream-beige/70 hover:text-accent-gold transition duration-200 cursor-pointer"
            >
              Visit us
            </button>
          </nav>

          {/* Right Header action call */}
          <div className="hidden lg:block">
            <button
              onClick={() => {
                const text = encodeURIComponent("Salam! I would like to lock-in a table booking for this weekend please.");
                window.open(`https://api.whatsapp.com/send?phone=60124567890&text=${text}`, '_blank');
              }}
              className="px-5 py-2.5 bg-primary-forest/80 border border-[#cca058]/40 text-[#cca058] hover:bg-[#cca058] hover:text-[#0c100e] text-xs font-bold tracking-wider uppercase rounded-xl transition duration-300 shadow-md cursor-pointer ml-4"
            >
              WhatsApp Reservation
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#121614] border border-primary-forest/40 rounded-xl text-cream-beige hover:text-accent-gold transition duration-200"
              title="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* 3. MOBILE OVERLAY PANEL NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-8 text-left animate-fade-in lg:hidden">
          <div className="space-y-12">
            <div className="border-b border-primary-forest/20 pb-4">
              <span className="font-serif text-xl font-bold tracking-wider text-cream-beige block">Ina Cafe</span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#cca058] uppercase">Balik Pulau Heritage Residence</span>
            </div>

            <nav className="flex flex-col gap-6 text-lg font-serif tracking-wide">
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-cream-beige/80 hover:text-accent-gold transition"
              >
                The Ina Experience
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-cream-beige/80 hover:text-accent-gold transition"
              >
                Heritage Digital Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-cream-beige/80 hover:text-accent-gold transition"
              >
                Snapshots Gallery
              </button>
              <button
                onClick={() => scrollToSection('social')}
                className="text-left text-cream-beige/80 hover:text-accent-gold transition"
              >
                Social Creator Wall
              </button>
              <button
                onClick={() => scrollToSection('visit')}
                className="text-left text-cream-beige/80 hover:text-accent-gold transition"
              >
                Location & Map Route
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleMobileBookWhatsApp}
              className="w-full bg-[#cca058] text-[#0a1712] py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition shadow-lg text-center"
            >
              Instant Book via WhatsApp
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs text-cream-beige/50"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* 4. PRIMARY MAIN VIEW SECTIONS */}
      <main>
        {/* Fullscreen Moving Slide Showcase */}
        <CinematicVideoHero />

        {/* Narrative, Family Heritage, Testimonials Carousel */}
        <CampungStory />

        {/* Digital Interactive Specialty Menu & Cart inquiries */}
        <DigitalMenu />

        {/* Photorealistic Masonry Pinterest Grid Lightbox */}
        <CinematicGallery />

        {/* Creator social embeds & Interaction logs */}
        <SocialWall />

        {/* Operating status & Maps Iframe HUDs */}
        <LocationMap />
      </main>

      {/* 5. LUXURY FOOTER METRICS AND COPYRIGT */}
      <FooterExperience />

      {/* 6. DYNAMIC STICKY FOOTER ACTION TRAY FOR TIKTOK & SOCIAL USERS (Mobile only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0f1110]/95 backdrop-blur-lg border-t border-primary-forest/40 grid grid-cols-4 px-4 py-2 text-center md:hidden z-30 shadow-2xl safe-bottom">
        
        {/* Experience button */}
        <button
          onClick={() => scrollToSection('experience')}
          className="flex flex-col items-center justify-center p-1 cursor-pointer"
        >
          <Compass className="w-4 h-4 text-cream-beige/60" />
          <span className="text-[9px] font-mono tracking-tight text-cream-beige/50 mt-1 uppercase">Village</span>
        </button>

        {/* Menu shortcut */}
        <button
          onClick={() => scrollToSection('menu')}
          className="flex flex-col items-center justify-center p-1 cursor-pointer"
        >
          <span className="text-sm">🍲</span>
          <span className="text-[9px] font-mono tracking-tight text-cream-beige/50 mt-1 uppercase">Sajiaan</span>
        </button>

        {/* Direct Google navigation */}
        <button
          onClick={() => window.open('https://maps.google.com/?q=Ina+Cafe+Balik+Pulau+Penang', '_blank')}
          className="flex flex-col items-center justify-center p-1 cursor-pointer"
        >
          <Navigation className="w-4 h-4 text-[#e06d48]" />
          <span className="text-[9px] font-mono tracking-tight text-cream-beige/50 mt-1 uppercase">Drive Map</span>
        </button>

        {/* Floating reservation click */}
        <button
          onClick={handleMobileBookWhatsApp}
          className="flex flex-col items-center justify-center p-1 relative cursor-pointer"
        >
          <div className="p-1 px-2.5 bg-[#cca058] rounded-lg relative hover:scale-105 transition-all">
            <MessageSquare className="w-4 h-4 text-[#0c100e]" />
          </div>
          <span className="text-[9px] font-mono tracking-tight text-accent-gold mt-1 uppercase font-bold">Book Slot</span>
        </button>

      </div>

    </div>
  );
}
