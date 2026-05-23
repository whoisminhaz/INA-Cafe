/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { menuItems, menuCategories, MenuItem } from '../data';
import { Flame, Star, Sparkles, MessageSquare, Plus, Minus, Search, ShoppingCart, Send, Info, CheckCircle } from 'lucide-react';

interface DigitalMenuProps {
  onPreOrderSelect?: (items: { item: MenuItem; count: number }[]) => void;
}

export default function DigitalMenu({ onPreOrderSelect }: DigitalMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({});
  const [accentEffect, setAccentEffect] = useState<string | null>(null);

  // Filter and search computation
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.malayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Preoder Cart Calculations
  const cartItems = useMemo(() => {
    return (Object.entries(selectedItems) as [string, number][])
      .filter(([_, count]) => count > 0)
      .map(([id, count]) => {
        const item = menuItems.find(m => m.id === id);
        return item ? { item, count } : null;
      })
      .filter((entry): entry is { item: MenuItem; count: number } => entry !== null);
  }, [selectedItems]);

  const cartTotalVal = useMemo(() => {
    return cartItems.reduce((acc, current) => {
      const numericPrice = parseFloat(current.item.price.replace(/[^\d.]/g, ''));
      return acc + (numericPrice * current.count);
    }, 0);
  }, [cartItems]);

  const updateQuantity = (id: string, delta: number) => {
    setSelectedItems(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  // Generate WhatsApp prefilled message URL
  const handleWhatsAppSend = () => {
    if (cartItems.length === 0) return;

    const messageHeader = `*Ina Cafe Pen-order Booking Inquiry*\n\nSalam Ina Cafe, I would like to reserve a table and pre-order the following kampung dishes:\n\n`;
    const messageBody = cartItems.map(item => {
      return `• *${item.item.name}* (x${item.count}) - ${item.item.price}`;
    }).join('\n');
    
    const messageFooter = `\n\n*Total Estimated:* RM ${cartTotalVal.toFixed(2)}\n\nPlease advise table availability on date: _____, time: ____ for ____ pax.\n\nThank you! Source: Cinematic Web App`;
    
    const encodedText = encodeURIComponent(messageHeader + messageBody + messageFooter);
    const whatsappLink = `https://api.whatsapp.com/send?phone=60124567890&text=${encodedText}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="menu" className="py-24 relative overflow-hidden bg-gradient-to-b from-charcoal-smoky to-primary-leaf">
      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-forest/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Subheader */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-gold font-serif italic text-lg tracking-wider block mb-2">Selera Warisan Balik Pulau</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-cream-beige tracking-tight mb-4">
            Our Kitchen Specialties
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-sunset to-accent-gold mx-auto mb-6" />
          <p className="text-cream-beige/70 text-sm md:text-base leading-relaxed">
            Every dish is cooked over smoldering dark wood embers, utilizing traditional stone pestles to prepare custom chilli pastes handed down through generations.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-12 bg-charcoal-smoky/40 border border-primary-forest/30 p-4 rounded-2xl backdrop-blur-md">
          {/* Categories Slider */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none snap-x snap-mandatory">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setAccentEffect(category.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap snap-align-start transition-all duration-300 pointer-events-auto shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-accent-gold text-charcoal-smoky shadow-lg shadow-accent-gold/10 font-semibold'
                    : 'bg-primary-forest/20 text-cream-beige/60 hover:text-cream-beige hover:bg-primary-forest/40 border border-primary-forest/10'
                }`}
              >
                <span>{category.name}</span>
                <span className="block text-[8px] opacity-75 font-normal tracking-wider">{category.malayName}</span>
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-beige/40" />
            <input
              type="text"
              placeholder="Search dishes, spices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary-leaf/80 text-cream-beige pl-10 pr-4 py-2.5 rounded-xl border border-primary-forest/40 focus:outline-none focus:border-accent-gold/70 text-xs transition duration-300"
            />
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => {
            const qtyInCart = selectedItems[dish.id] || 0;
            return (
              <div
                key={dish.id}
                id={`dish-card-${dish.id}`}
                className="group relative bg-[#0f1311] border border-primary-forest/30 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-gold/50 flex flex-col justify-between glow-gold"
              >
                {/* Image wrap with slow hover pan */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:rotate-1"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Backdrop overlay layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    {dish.chefRec && (
                      <span className="bg-accent-sunset text-cream-beige font-mono uppercase text-[9px] font-semibold tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-white text-white" /> Chef’s Tip
                      </span>
                    )}
                    {dish.bestseller && (
                      <span className="bg-accent-gold text-[#0a1712] font-mono uppercase text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 fill-current" /> Bestseller
                      </span>
                    )}
                  </div>

                  {/* Price overlay */}
                  <div className="absolute bottom-4 right-4 bg-charcoal-smoky/90 border border-primary-forest/30 text-accent-gold font-serif font-medium text-sm px-3 py-1 rounded-lg backdrop-blur-md">
                    {dish.price}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-1.5">
                      <h3 className="font-serif text-lg font-medium text-cream-beige group-hover:text-accent-gold transition-colors duration-300 leading-tight">
                        {dish.name}
                      </h3>
                    </div>
                    
                    {/* Secondary traditional Malay title */}
                    <span className="text-[10px] uppercase font-mono tracking-widest text-accent-gold/70 block mb-3 italic">
                      {dish.malayName}
                    </span>

                    <p className="text-cream-beige/65 text-xs leading-relaxed mb-4 font-sans line-clamp-3">
                      {dish.description}
                    </p>

                    {/* Spicy indicator */}
                    {dish.spiceLevel > 0 && (
                      <div className="flex items-center gap-1 mb-4 bg-primary-forest/20 py-1 px-2.5 rounded-lg w-fit border border-primary-forest/10">
                        <span className="text-[9px] text-cream-beige/50 font-mono mr-1 uppercase">Spiciness:</span>
                        {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                          <Flame key={i} className="w-3.5 h-3.5 text-accent-sunset fill-accent-sunset animate-pulse" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Add to bucket interactions */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary-forest/20 mt-4">
                    <span className="text-[10px] text-cream-beige/40 italic font-mono max-w-[60%] line-clamp-1">
                      {dish.tagline}
                    </span>
                    
                    {qtyInCart > 0 ? (
                      <div className="flex items-center gap-2 bg-primary-forest/50 border border-accent-gold/40 rounded-xl p-1 animate-pulse-subtle">
                        <button
                          onClick={() => updateQuantity(dish.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-cream-beige hover:text-accent-sunset transition rounded-lg hover:bg-charcoal-smoky/40"
                          title="Reduce"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs text-accent-gold px-1.5 font-bold min-w-[14px] text-center">
                          {qtyInCart}
                        </span>
                        <button
                          onClick={() => updateQuantity(dish.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-cream-beige hover:text-accent-gold transition rounded-lg hover:bg-charcoal-smoky/40"
                          title="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => updateQuantity(dish.id, 1)}
                        className="text-xs bg-primary-forest/40 border border-primary-forest/80 text-cream-beige hover:bg-accent-gold hover:text-charcoal-smoky px-3.5 py-1.5 rounded-xl transition duration-300 flex items-center gap-1.5 group-hover:border-accent-gold/60"
                      >
                        <Plus className="w-3 h-3" /> Pre-order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 border border-dashed border-primary-forest/30 rounded-2xl max-w-md mx-auto mt-6">
            <Info className="w-8 h-8 mx-auto text-accent-gold/50 mb-3" />
            <p className="text-sm text-cream-beige/60">No delicacies found matching your search. Try resetting filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-xs text-accent-sunset mt-2 underline"
            >
              Reset view
            </button>
          </div>
        )}

        {/* Dynamic Pre-order Drawer/Tray */}
        {cartItems.length > 0 && (
          <div className="mt-12 bg-gradient-to-tr from-primary-forest/90 to-charcoal-smoky border border-accent-gold/40 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-lg animate-fade-in-up glow-gold">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-accent-gold/10 border border-accent-gold/30 rounded-xl relative">
                <ShoppingCart className="w-6 h-6 text-accent-gold animate-bounce" />
                <span className="absolute -top-1.5 -right-1.5 bg-accent-sunset text-cream-beige text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartItems.reduce((acc, c) => acc + c.count, 0)}
                </span>
              </div>
              <div>
                <h4 className="font-serif text-cream-beige font-semibold tracking-wide">
                  Your Pre-Order Table Selection
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-cream-beige/65 mt-0.5">
                  <span>Selected {cartItems.length} unique specialties</span>
                  <span className="text-cream-beige/30">•</span>
                  <span className="text-accent-gold font-semibold">Total Estimated: RM {cartTotalVal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Selected summary badges */}
            <div className="flex flex-wrap gap-2 max-w-md justify-center md:justify-start">
              {cartItems.slice(0, 4).map((item) => (
                <span key={item.item.id} className="text-[10px] bg-primary-leaf/80 px-2.5 py-1 rounded-lg border border-primary-forest/50 text-cream-beige/80">
                  {item.item.name} <strong className="text-accent-gold ml-1">x{item.count}</strong>
                </span>
              ))}
              {cartItems.length > 4 && (
                <span className="text-[10px] bg-primary-forest/50 px-2.5 py-1 rounded-lg text-accent-gold">
                  +{cartItems.length - 4} more
                </span>
              )}
            </div>

            {/* CTAs */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedItems({})}
                className="text-xs text-cream-beige/40 hover:text-cream-beige px-4 py-2 hover:bg-red-500/10 rounded-xl transition"
              >
                Clear list
              </button>
              <button
                onClick={handleWhatsAppSend}
                className="bg-accent-sunset hover:bg-[#d95c34] text-cream-beige text-xs font-semibold px-5 py-3 rounded-xl transition shadow-lg flex items-center gap-2 duration-300 active:scale-95"
              >
                <Send className="w-4 h-4" /> Instantly Order via WhatsApp
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
