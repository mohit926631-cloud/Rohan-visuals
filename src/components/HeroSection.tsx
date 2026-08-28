import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowDown, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Camera,
  Calendar
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  category: string;
  location: string;
  cameraInfo: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90',
    title: 'The Golden Phere: Udaipur Heritage Vows',
    category: 'Weddings',
    location: 'Jagmandir Island, Udaipur',
    cameraInfo: 'Sony A7R V · 35mm f/1.4 GM · Candlelight'
  },
  {
    id: 'hero-2',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=90',
    title: 'Soul of Bandra: Golden Hour Monologues',
    category: 'Portraits',
    location: 'Ranwar Village, Mumbai',
    cameraInfo: 'Leica M11 · 50mm Summilux · Natural Light'
  },
  {
    id: 'hero-3',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=90',
    title: 'Varanasi: Dawn on the Sacred Ghats',
    category: 'Travel & Documentary',
    location: 'Dashashwamedh Ghat, Kashi',
    cameraInfo: 'Leica M11 · 35mm f/1.4 · Blue Hour'
  },
  {
    id: 'hero-4',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2000&q=90',
    title: 'Neon Monsoon: Queen’s Necklace Nocturne',
    category: 'Editorial',
    location: 'Marine Drive, Mumbai',
    cameraInfo: 'Sony A7R V · 35mm f/1.4 GM · Rain Reflections'
  }
];

interface HeroSectionProps {
  onExploreWork: () => void;
  onReadStories: () => void;
  onBookSession: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onReadStories,
  onBookSession
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-advance hero slides every 7 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black select-none"
    >
      {/* Background Image Carousel with Cross-Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
            />
            {/* Cinematic Gradient Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Spacer */}
      <div className="pt-28" />

      {/* Main Hero Centerpiece */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl space-y-6">
          {/* Tag & Location Stamp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/80 text-[11px] uppercase tracking-widest text-amber-300 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {PROFILE_INFO.tagline}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] uppercase tracking-widest text-neutral-300 border border-neutral-800">
              <MapPin className="w-3 h-3 text-amber-400" />
              {PROFILE_INFO.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 backdrop-blur-md text-[11px] uppercase tracking-widest text-emerald-300 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Accepting 2026/27 Commissions
            </span>
          </motion.div>

          {/* Primary Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-custom font-normal text-white tracking-tight leading-[1.05]">
              Stories told <br />
              <span className="italic font-light text-amber-100/90 font-serif-custom">through light.</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-neutral-300 text-base sm:text-xl font-light max-w-2xl leading-relaxed text-balance"
          >
            Fine art documentary photography rooted in unscripted emotion, rich textures, and the kinetic poetry of human connection.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20 flex items-center gap-2"
            >
              Explore Selected Work
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              id="hero-read-stories-btn"
              onClick={onReadStories}
              className="px-6 py-3.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs font-semibold uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Read Photo Stories
            </button>

            <button
              id="hero-book-session-btn"
              onClick={onBookSession}
              className="px-4 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-amber-300 transition-colors flex items-center gap-1 group"
            >
              Get In Touch
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Floating Slide Info & Carousel Controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 border-t border-neutral-800/80">
          {/* Active Frame Specs */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-amber-400 font-medium">
              <span>Featured Frame · {currentSlide.category}</span>
            </div>
            <h4 className="text-sm sm:text-base font-serif-custom text-white">
              {currentSlide.title}
            </h4>
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Camera className="w-3 h-3 text-neutral-500" />
                {currentSlide.cameraInfo}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[11px]">
                <MapPin className="w-3 h-3 text-neutral-500" />
                {currentSlide.location}
              </span>
            </div>
          </div>

          {/* Slide Switchers & Thumbnail Pills */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Arrows */}
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-neutral-800">
              <button
                id="hero-prev-slide-btn"
                onClick={handlePrevSlide}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-neutral-400">
                0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
              </span>
              <button
                id="hero-next-slide-btn"
                onClick={handleNextSlide}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Slide Thumbnails */}
            <div className="hidden lg:flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  id={`hero-thumb-${idx}`}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentSlideIndex(idx);
                  }}
                  className={`relative w-12 h-10 rounded overflow-hidden border transition-all ${
                    idx === currentSlideIndex
                      ? 'border-amber-400 scale-105 ring-2 ring-amber-400/30'
                      : 'border-neutral-800 opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
