/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { testimonials } from '../data';
import { Quote, Heart, MapPin, Compass, Sunset, ShieldAlert, Award, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function CampungStory() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay reviews carousel
  useEffect(() => {
    const interval = setInterval(nextReview, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0f1110]">
      
      {/* SECTION 2 — THE INA EXPERIENCE */}
      <section id="experience" className="py-24 relative overflow-hidden px-6 border-b border-primary-forest/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-forest/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Presentation side */}
          <div className="lg:col-span-5 relative" id="experience-images">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-accent-gold/20 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85"
                alt="Teak wood dining table set on mossy forest floor in Penang"
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-smoky via-black/10 to-transparent" />
              
              {/* Floating ambient overlay tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-charcoal-smoky/90 border border-primary-forest/30 p-5 rounded-2xl backdrop-blur-md">
                <span className="text-accent-gold text-[10px] uppercase font-mono tracking-widest block mb-1">Acoustic Serenity</span>
                <p className="text-xs text-cream-beige/80 font-serif italic leading-relaxed">
                  “The river runs so close to your table you can dip your toes into the chilling fresh current while waiting for your meal.”
                </p>
              </div>
            </div>

            {/* Small offset floating card */}
            <div className="absolute -top-6 -right-6 bg-[#16211c] border border-accent-gold/30 p-4 rounded-2xl shadow-xl w-36 text-center animate-float-slow hidden md:block">
              <span className="text-xl inline-block mb-1">🌿</span>
              <p className="text-[10px] uppercase font-mono tracking-widest text-accent-gold font-bold">Nature-First</p>
              <p className="text-[9px] text-cream-beige/60">Zero concrete walls. Raw Penang wilderness.</p>
            </div>
          </div>

          {/* Narrative Text side */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6 text-left" id="experience-text">
            <div>
              <span className="text-accent-gold font-serif italic text-lg tracking-wider block mb-2">More Than just food</span>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-cream-beige tracking-tight leading-tight">
                An escape into the rustic quiet of Penang’s village life.
              </h2>
            </div>

            <p className="text-cream-beige/70 text-sm md:text-base leading-relaxed">
              Ina Cafe is situated far from the neon light towers and chaotic traffic lines of Georgetown. We rest deep in the heart of Balik Pulau—an agricultural sanctuary where mountains smell of clove buds and durian orchards wave under golden sea breezes.
            </p>

            {/* Feature pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-forest/40 border border-primary-forest/60 rounded-xl text-accent-gold shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cream-beige mb-1 font-serif">Deep Jungle Trail</h4>
                  <p className="text-xs text-cream-beige/60 leading-relaxed">A pristine environment surrounded by giant tall palm leaves, clove gardens, and wild forest ferns.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-forest/40 border border-primary-forest/60 rounded-xl text-accent-gold shrink-0">
                  <Sunset className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cream-beige mb-1 font-serif">Sunset Solitude</h4>
                  <p className="text-xs text-cream-beige/60 leading-relaxed">As dusk settles, the trees light up with warm golden lights casting long ambient shadows.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-forest/40 border border-primary-forest/60 rounded-xl text-accent-gold shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cream-beige mb-1 font-serif">Kampung Hospitality</h4>
                  <p className="text-xs text-cream-beige/60 leading-relaxed">Heirloom dishes cooked by real village grandmothers, welcoming you like close returning family.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-forest/40 border border-primary-forest/60 rounded-xl text-accent-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cream-beige mb-1 font-serif">Riverside Relaxation</h4>
                  <p className="text-xs text-cream-beige/60 leading-relaxed">Listen to actual babbling mountain streams running alongside your timber canopy table.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-forest/30 pt-6">
              <blockquote className="text-accent-gold/90 font-serif italic text-base md:text-lg mb-2">
                “Here, time doesn’t tick by minutes. It passes by the speed of falling coconut leaves.”
              </blockquote>
              <span className="text-[10px] uppercase font-mono tracking-widest text-cream-beige/50">- Kak Ina, Founder</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — THE STORY OF INA CAFE */}
      <section id="heritage-story" className="py-24 relative overflow-hidden px-6 bg-gradient-to-b from-[#0f1110] to-[#080a09]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Story (Left) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-left" id="story-narrative">
            <span className="text-accent-gold font-mono uppercase text-[10px] tracking-widest font-bold">Our Heritage & Soul</span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-cream-beige tracking-tight">
              Honoring Three Generations of Authentic Malay Cooking.
            </h2>
            <div className="w-12 h-0.5 bg-accent-gold" />
            
            <p className="text-cream-beige/70 text-sm md:text-base leading-relaxed">
              Ina Cafe did not start in an office. It started over a modest steel basin filled with coconut shells, mangrove coal, and a hand-wound spit. Inspired by her grandmother’s traditional spice mixtures, Kak Ina wanted to create a peaceful sanctuary where the fast-disappearing recipes of old Malay kampungs could be enjoyed exactly as they were a century ago.
            </p>

            <p className="text-cream-beige/70 text-sm leading-relaxed">
              We sourcing all ingredients from nearby Balik Pulau farms. The kaffir lime leaves are plucked from our front bushes, the coconuts climbed and harvested from the palms right above your head, and the sea bass delivered before dawn by fisherman boats docking at the nearby river delta.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-primary-forest/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-sunset" />
                <span className="text-xs font-mono text-cream-beige/80">100% Halal Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-sunset" />
                <span className="text-xs font-mono text-cream-beige/80">No Artificial Flavorings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-sunset" />
                <span className="text-xs font-mono text-cream-beige/80">Mangrove Charcoal Grilled Only</span>
              </div>
            </div>
          </div>

          {/* Visual Portrait (Right) */}
          <div className="lg:col-span-5 order-1 lg:order-2" id="story-portrait">
            <div className="relative">
              {/* Outer decorative gold wire */}
              <div className="absolute -inset-2 border border-dashed border-accent-gold/25 rounded-3xl pointer-events-none" />
              
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85"
                  className="w-full h-full object-cover"
                  alt="Traditional Malay food spread arranged over banana leaves"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Overlay quote */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-serif italic text-cream-beige text-sm md:text-base leading-relaxed block text-center text-shadow-cinematic">
                    “The spices must be hand-pounded. A blender slices the flavor; a stone pestle bruises and coaxes the essential oils out of the lemongrass root.”
                  </span>
                  <span className="text-[10px] block text-center font-mono uppercase text-accent-gold tracking-widest mt-2">
                    - Mak Ina, Grandmother’s Kitchen Rule
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS CAROUSEL */}
      <section className="py-24 relative overflow-hidden bg-[#060807] border-t border-primary-forest/10 px-6">
        {/* Background glow lines */}
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent-sunset/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          <Quote className="w-12 h-12 text-accent-gold/25 mx-auto mb-6 shrink-0" />
          
          <span className="text-xs font-mono tracking-widest uppercase text-accent-gold mb-2 block">Visitor Journeys</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-beige tracking-tight mb-12">
            Words From the Returning Hearts
          </h2>

          {/* Testimonial Active Display box */}
          <div className="relative min-h-[220px] flex items-center justify-center mb-8">
            <div 
              key={testimonials[activeReviewIndex].id}
              className="max-w-4xl mx-auto px-4 animate-fade-in"
            >
              <p className="text-cream-beige/95 font-serif text-lg md:text-2xl italic leading-relaxed text-shadow-subtle mb-6 text-center">
                {testimonials[activeReviewIndex].text}
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonials[activeReviewIndex].avatar}
                  alt={testimonials[activeReviewIndex].name}
                  className="w-10 h-10 rounded-full border border-accent-gold/40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-serif text-cream-beige font-semibold text-sm">
                    {testimonials[activeReviewIndex].name}
                  </h4>
                  <p className="text-[10px] text-accent-gold/80 font-mono">
                    {testimonials[activeReviewIndex].role} • <span className="opacity-60">{testimonials[activeReviewIndex].origin}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-primary-forest/20 border border-primary-forest/50 hover:border-accent-gold text-cream-beige/80 hover:text-accent-gold transition duration-200"
              title="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeReviewIndex ? 'bg-accent-gold w-6' : 'bg-primary-forest/60'
                  }`}
                  title={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-primary-forest/20 border border-primary-forest/50 hover:border-accent-gold text-cream-beige/80 hover:text-accent-gold transition duration-200"
              title="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Google reviews badges integration display */}
          <div className="mt-16 bg-primary-leaf/30 border border-primary-forest/40 max-w-sm mx-auto p-4 rounded-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cream-beige">4.9</span>
              <div>
                <div className="flex text-accent-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[9px] text-cream-beige/50 font-mono">Based on 420+ Google Maps Reviews</span>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/InaCafeBalikPulauPenang" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase font-mono tracking-wider font-bold text-accent-gold bg-primary-forest/50 px-3 py-2 rounded-lg border border-primary-forest/40 hover:bg-accent-gold hover:text-charcoal-smoky transition duration-300"
            >
              View Verified Reviews
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
