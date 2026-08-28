import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Camera, 
  Layers, 
  HeartHandshake, 
  Quote,
  Film
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 bg-[#0c0c10] text-neutral-100 border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Film Strip */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                alt="Rohan Visuals Photographer Portrait"
                className="w-full h-full object-cover grayscale contrast-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

              {/* Bottom Portrait Stamp */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block">
                  Behind The Viewfinder
                </span>
                <h3 className="text-xl font-serif-custom text-white font-medium mt-1">
                  Rohan Visuals
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">
                  Mumbai, India · Available for global commissions
                </p>
              </div>
            </div>

            {/* Floating Analog Film Badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-6 bg-neutral-900/90 backdrop-blur-md p-3.5 rounded-xl border border-neutral-700 shadow-xl hidden sm:flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Film className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Mediums</span>
                <span className="text-xs font-semibold text-white">Digital 61MP + 35mm Analog</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Gear */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Biography & Artistic Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-custom font-normal text-white tracking-tight">
                Documenting Life with Empathy, Light & Restraint
              </h2>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
              {PROFILE_INFO.aboutLong.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Philosophy Pull-Quote */}
            <div className="p-6 rounded-xl bg-[#13131a] border border-neutral-800 relative">
              <Quote className="w-6 h-6 text-amber-400/40 mb-2" />
              <p className="font-serif-custom italic text-base sm:text-lg text-neutral-200">
                "{PROFILE_INFO.philosophy}"
              </p>
            </div>

            {/* Numerical Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {PROFILE_INFO.stats.map((stat, sIdx) => (
                <div 
                  key={sIdx}
                  className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 text-center"
                >
                  <span className="block text-2xl sm:text-3xl font-serif-custom font-medium text-amber-400">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Optical Rig & Gear Kit */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-medium flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                Selected Production Kit & Optics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROFILE_INFO.gear.map((g, gIdx) => (
                  <div 
                    key={gIdx} 
                    className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/80 text-xs"
                  >
                    <span className="block font-semibold text-neutral-200">{g.item}</span>
                    <span className="text-neutral-400 text-[11px] font-mono">{g.details}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
