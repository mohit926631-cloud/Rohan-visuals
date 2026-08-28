import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  Clock, 
  Quote, 
  ArrowLeft, 
  ArrowRight, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import { Story } from '../types';

interface StoryModalProps {
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (index: number) => void;
  onNextStory: () => void;
  onPrevStory: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  story,
  isOpen,
  onClose,
  onSelectPhoto,
  onNextStory,
  onPrevStory,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !story) return null;

  return (
    <AnimatePresence>
      <div 
        id="story-modal-backdrop"
        className="fixed inset-0 z-40 overflow-y-auto bg-black/90 backdrop-blur-md flex justify-center"
      >
        <motion.div
          id="story-modal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl min-h-screen bg-[#0d0d11] text-neutral-100 shadow-2xl border-x border-neutral-800 my-0 sm:my-6 sm:rounded-xl overflow-hidden"
        >
          {/* Header Bar */}
          <div 
            id="story-modal-nav"
            className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0d0d11]/90 backdrop-blur-lg border-b border-neutral-800"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Photo Essay
              </span>
              <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                {story.date}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="story-prev-btn"
                onClick={onPrevStory}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Previous Story"
                aria-label="Previous Story"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                id="story-next-btn"
                onClick={onNextStory}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Next Story"
                aria-label="Next Story"
              >
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="story-close-btn"
                onClick={onClose}
                className="p-2 ml-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                title="Close (Esc)"
                aria-label="Close Story Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Large Hero Banner */}
          <div className="relative h-[50vh] sm:h-[65vh] w-full bg-neutral-900">
            <img
              src={story.coverImage}
              alt={story.title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-[#0d0d11]/30 to-transparent" />

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 max-w-3xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-amber-300 mb-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {story.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {story.readTime}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif-custom font-normal text-white leading-tight">
                {story.title}
              </h1>
              <p className="text-sm sm:text-lg text-neutral-300 font-light mt-3">
                {story.subtitle}
              </p>
            </div>
          </div>

          {/* Narrative Content Body */}
          <div className="px-6 sm:px-14 py-10 max-w-3xl mx-auto">
            {/* Pull quote if available */}
            {story.quote && (
              <div className="relative my-8 p-6 sm:p-8 bg-neutral-900/60 rounded-xl border border-neutral-800">
                <Quote className="w-8 h-8 text-amber-400/40 mb-3" />
                <p className="font-serif-custom italic text-lg sm:text-2xl text-neutral-200 leading-snug">
                  "{story.quote}"
                </p>
                <div className="text-right text-xs uppercase tracking-widest text-neutral-400 mt-3">
                  — Rohan Visuals Field Notes
                </div>
              </div>
            )}

            {/* Paragraphs */}
            <div className="space-y-6 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
              {story.narrative.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Photo Gallery for Story */}
          <div className="px-6 sm:px-14 py-10 bg-neutral-950 border-t border-neutral-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-custom text-white">
                  Visual Chronicles
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Click any frame to view in full resolution
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                {story.gallery.length} Frames
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {story.gallery.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  id={`story-photo-${index}`}
                  whileHover={{ y: -4 }}
                  onClick={() => onSelectPhoto(index)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="text-sm font-serif-custom text-white font-medium">
                      {photo.title}
                    </h4>
                    {photo.caption && (
                      <p className="text-[11px] text-neutral-300 mt-0.5 line-clamp-1">
                        {photo.caption}
                      </p>
                    )}
                    <span className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white backdrop-blur-sm">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Story Footer Nav */}
          <div className="px-6 sm:px-14 py-6 bg-neutral-950 border-t border-neutral-800/80 flex items-center justify-between">
            <button
              onClick={onPrevStory}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Previous Story
            </button>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
            >
              Close Story
            </button>

            <button
              onClick={onNextStory}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-amber-400 transition-colors"
            >
              Next Story <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
