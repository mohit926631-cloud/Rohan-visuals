import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Images 
} from 'lucide-react';
import { STORIES } from '../data/portfolioData';
import { Story } from '../types';

interface StoriesSectionProps {
  onSelectStory: (story: Story) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ onSelectStory }) => {
  return (
    <section 
      id="stories" 
      className="relative py-24 sm:py-32 bg-[#0c0c10] text-neutral-100 border-t border-neutral-900 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Long-Form Photo Essays
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-custom font-normal text-white tracking-tight">
            Visual Stories from the Field
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Deep-dive photographic explorations chronicling human resilience, monastic stillness, and ancestral rituals across the Indian subcontinent.
          </p>
        </div>

        {/* 3 Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STORIES.map((story, index) => (
            <motion.article
              key={story.id}
              id={`story-card-${story.id}`}
              whileHover={{ y: -6 }}
              onClick={() => onSelectStory(story)}
              className="group cursor-pointer bg-[#111116] rounded-2xl border border-neutral-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />

                  {/* Story Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-widest text-amber-300 border border-amber-500/30 font-medium">
                      Essay 0{index + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300">
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {story.location}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      {story.readTime}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase">
                    {story.date}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-serif-custom font-normal text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {story.summary}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-neutral-800/80 mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                  <Images className="w-3.5 h-3.5 text-amber-400" />
                  {story.gallery.length} Frames in Gallery
                </span>

                <button
                  id={`read-story-btn-${story.id}`}
                  className="flex items-center gap-1 text-xs uppercase tracking-widest text-amber-400 font-medium group-hover:text-amber-300 transition-colors"
                >
                  Read Story
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
