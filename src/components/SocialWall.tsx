/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { socialWallData, SocialPost } from '../data';
import { Instagram, Send, Heart, Flame, MessageCircle, Play, Sparkles } from 'lucide-react';

interface FloatingEmoji {
  id: number;
  char: string;
  left: number;
}

export default function SocialWall() {
  const [posts, setPosts] = useState<SocialPost[]>(socialWallData);
  const [likesCount, setLikesCount] = useState<{ [id: string]: number }>({});
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);
  const [emojiId, setEmojiId] = useState(0);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesCount(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));

    // Trigger floating emojis at mouse click position
    const box = e.currentTarget.getBoundingClientRect();
    const chars = ['❤️', '🔥', '🤤', '✨', '🌿'];
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    
    // Spawn emoji
    const newEmoji: FloatingEmoji = {
      id: emojiId,
      char: randomChar,
      left: Math.random() * 80 + 10 // Percentage inside container
    };

    setFloatingEmojis(prev => [...prev, newEmoji]);
    setEmojiId(prev => prev + 1);

    // Clean up count
    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(em => em.id !== newEmoji.id));
    }, 2000);
  };

  return (
    <section id="social" className="py-24 relative overflow-hidden bg-gradient-to-b from-primary-leaf to-[#080a09] px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-sunset/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Reactions Render Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        {floatingEmojis.map((emoji) => (
          <div
            key={emoji.id}
            className="absolute text-xl md:text-2xl animate-bounce pointer-events-none"
            style={{
              left: `${emoji.left}%`,
              bottom: '15%',
              animation: 'smoke-rise 1.8s ease-out forwards',
            }}
          >
            {emoji.char}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Label block */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <span className="p-2.5 bg-accent-sunset/10 border border-accent-sunset/20 text-accent-sunset rounded-2xl flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider">
              <Instagram className="w-4 h-4" /> #InaCafeBalikPulau
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-cream-beige tracking-tight mb-4">
            Trending on Social Wall
          </h2>
          <p className="text-cream-beige/70 text-xs md:text-sm leading-relaxed">
            See why content creators, travel vloggers, and weekend foodies are filling their feeds with the rich, smoky atmosphere of Penang’s finest hidden gem.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posts.map((post) => {
            const extraLikes = likesCount[post.id] || 0;
            return (
              <div
                key={post.id}
                className="group relative bg-[#0f1110] border border-primary-forest/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-400 hover:border-accent-gold/40 flex flex-col justify-between"
              >
                {/* Visual Thumbnail */}
                <div className="aspect-square w-full relative overflow-hidden bg-black/40">
                  <img
                    src={post.thumbnail}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  {/* Play Indicator Badge for TikTok */}
                  {post.platform === 'tiktok' && (
                    <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded-lg text-[10px] font-mono tracking-widest text-[#00f2fe] flex items-center gap-1">
                      <Play className="w-3 h-3 fill-current" /> REEL
                    </div>
                  )}

                  {/* Reaction Button HUD */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button
                      onClick={(e) => handleLike(post.id, e)}
                      className="p-4 bg-accent-gold hover:bg-cream-beige text-charcoal-smoky rounded-full shadow-2xl hover:scale-110 active:scale-90 transition transform duration-200 pointer-events-auto flex items-center gap-1 font-bold"
                      title="React to this post"
                    >
                      <Sparkles className="w-4 h-4 animate-spin-slow" />
                      <span className="text-xs font-mono">React!</span>
                    </button>
                  </div>
                </div>

                {/* Account details and description summary */}
                <div className="p-5 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-accent-gold">
                        {post.username}
                      </span>
                      <span className="text-[10px] text-cream-beige/40">
                        via {post.platform}
                      </span>
                    </div>

                    <p className="text-cream-beige/70 text-[11px] leading-relaxed line-clamp-3 mb-4 font-sans">
                      {post.caption}
                    </p>
                  </div>

                  {/* Bottom counters */}
                  <div className="flex items-center justify-between pt-3 border-t border-primary-forest/10 text-[10px] text-cream-beige/50 font-mono">
                    <button
                      onClick={(e) => handleLike(post.id, e)}
                      className="flex items-center gap-1.5 hover:text-accent-sunset transition pointer-events-auto"
                    >
                      <Heart className="w-3.5 h-3.5 text-accent-sunset fill-accent-sunset" />
                      <span>{parseInt(post.metrics.likes.replace(/,/g, '')) + extraLikes} Likes</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{post.metrics.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Tag banner */}
        <div className="bg-[#121816] max-w-2xl mx-auto border border-primary-forest/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-cream-beige font-semibold tracking-wide">
              Post Your Ina Cafe Experience!
            </h4>
            <p className="text-xs text-cream-beige/60">
              Tag <span className="text-accent-gold font-mono">@ina_cafe_balikpulau</span> and use the hashtag above to get featured on our wall!
            </p>
          </div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-primary-forest text-accent-gold hover:bg-accent-gold hover:text-charcoal-smoky px-4 py-2.5 rounded-xl border border-primary-forest/70 font-bold transition duration-300 tracking-wide inline-block"
          >
            Visit Instagram Profile
          </a>
        </div>

      </div>
    </section>
  );
}
