/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { galleryItems, GalleryItem } from '../data';
import { Maximize2, Compass, Eye, X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

export default function CinematicGallery() {
  const [filter, setFilter] = useState('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Vibe', 'Culinary', 'Escape', 'Nature', 'Heritage'];

  const filteredPhotos = useMemo(() => {
    if (filter === 'All') return galleryItems;
    return galleryItems.filter(item => item.category === filter);
  }, [filter]);

  const activePhotoIndex = useMemo(() => {
    if (!activePhoto) return -1;
    return galleryItems.findIndex(p => p.id === activePhoto.id);
  }, [activePhoto]);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== -1) {
      const nextIdx = (activePhotoIndex + 1) % galleryItems.length;
      setActivePhoto(galleryItems[nextIdx]);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== -1) {
      const prevIdx = (activePhotoIndex - 1 + galleryItems.length) % galleryItems.length;
      setActivePhoto(galleryItems[prevIdx]);
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-gradient-to-b from-primary-leaf to-charcoal-smoky px-6 border-b border-primary-forest/20">
      <div className="max-w-7xl mx-auto z-10 relative">

        {/* Header content */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-gold block mb-2 font-bold">Pinterest Travel Storybook</span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-cream-beige tracking-tight mb-4">
            Framing Balik Pulau
          </h2>
          <div className="w-12 h-0.5 bg-accent-gold/40 mx-auto mb-6" />
          <p className="text-cream-beige/70 text-xs md:text-sm leading-relaxed">
            A photorealistic gallery celebrating the slow, textured details that make Ina Cafe an unforgettable, visual slice of traditional Malaysian paradise.
          </p>
        </div>

        {/* Gallery category tab selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs tracking-wider transition-all duration-300 pointer-events-auto border ${
                filter === cat
                  ? 'bg-primary-forest/80 text-accent-gold border-accent-gold/50 font-semibold'
                  : 'bg-transparent text-cream-beige/50 border-primary-forest/20 hover:border-primary-forest/60 hover:text-cream-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Style Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start" id="gallery-masonry-grid">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-2xl overflow-hidden border border-primary-forest/20 bg-charcoal-smoky cursor-pointer hover:border-accent-gold/50 shadow-xl transition-all duration-400"
            >
              {/* Image box */}
              <div 
                className={`w-full overflow-hidden ${
                  photo.aspect === 'portrait' ? 'aspect-[3/4]' : photo.aspect === 'square' ? 'aspect-[1/1]' : 'aspect-[16/10]'
                }`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition duration-[800ms] group-hover:scale-105 group-hover:brightness-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Dark Hover overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-left">
                <span className="text-[9px] font-mono uppercase tracking-widest text-accent-gold mb-1">
                  {photo.category}
                </span>
                <h4 className="font-serif text-cream-beige font-semibold text-sm leading-tight mb-1">
                  {photo.title}
                </h4>
                <p className="text-cream-beige/70 text-[10px] line-clamp-2 leading-relaxed mb-3">
                  {photo.caption}
                </p>
                <div className="flex items-center gap-1.5 text-accent-gold text-[10px] font-mono tracking-widest font-bold uppercase">
                  <Eye className="w-3.5 h-3.5" /> View Photo Lightbox
                </div>
              </div>

              {/* Top magnifying visual tag */}
              <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-xl border border-primary-forest/20 text-cream-beige/60 opacity-0 group-hover:opacity-100 transition duration-200">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6 backdrop-blur-md animate-fade-in pointer-events-auto"
            onClick={() => setActivePhoto(null)}
          >
            {/* Close Button Trigger */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3 bg-[#131715] hover:bg-accent-sunset text-cream-beige/80 hover:text-white rounded-full border border-primary-forest/40 transition duration-200"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Prev Photo button */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-6 p-4 bg-black/40 hover:bg-primary-forest/80 text-cream-beige hover:text-accent-gold rounded-full transition duration-200 hidden md:block"
              title="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Core Modal Sheet */}
            <div
              className="bg-[#0b0e0c] border border-primary-forest/40 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl transition duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Screen (Left) */}
              <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh] md:max-h-none overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[75vh]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informative Story Side (Right) */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between text-left border-t md:border-t-0 md:border-l border-primary-forest/30 bg-[#0d100e]">
                <div className="space-y-4">
                  <span className="text-xs font-mono tracking-widest text-accent-gold uppercase font-bold px-2.5 py-1 bg-primary-forest/40 border border-[#cca058]/20 rounded-lg inline-block">
                    {activePhoto.category}
                  </span>
                  
                  <h3 className="font-serif text-cream-beige font-semibold text-2xl tracking-tight leading-tight">
                    {activePhoto.title}
                  </h3>
                  
                  <div className="w-8 h-0.5 bg-accent-sunset/60" />

                  <p className="text-cream-beige/80 text-xs md:text-sm leading-relaxed font-sans pt-2">
                    {activePhoto.caption}
                  </p>

                  <p className="text-cream-beige/50 text-[11px] leading-relaxed italic border-l-2 border-primary-forest/80 pl-3">
                    Every image frames actual real-life details from our riverbank cafe, captured by local photographers who support slow-living Malay culture.
                  </p>
                </div>

                {/* Sub-footer detail and share trigger */}
                <div className="pt-6 border-t border-primary-forest/15 mt-6 flex items-center justify-between text-xs text-cream-beige/40">
                  <div className="flex items-center gap-1.5 font-mono uppercase text-[9px] tracking-wider text-[#cca058]">
                    <Compass className="w-3.5 h-3.5" /> Balik Pulau, Penang
                  </div>
                  
                  <button
                    onClick={() => {
                        // Quick mockup clipboard copy
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard! Take your friends on this journey.');
                    }}
                    className="p-1.5 hover:text-accent-sunset transition flex items-center gap-1 font-mono uppercase text-[9px] cursor-pointer"
                    title="Copy webpage share link"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Share
                  </button>
                </div>
              </div>
            </div>

            {/* Right Next Photo button */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-6 p-4 bg-black/40 hover:bg-primary-forest/80 text-cream-beige hover:text-accent-gold rounded-full transition duration-200 hidden md:block"
              title="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
