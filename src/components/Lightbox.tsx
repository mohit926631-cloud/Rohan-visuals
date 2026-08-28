import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MapPin, 
  Info, 
  Maximize2, 
  Minimize2,
  Share2,
  Check
} from 'lucide-react';
import { PhotoItem } from '../types';

interface LightboxProps {
  images: PhotoItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  projectTitle?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  projectTitle,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(true);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setIsZoomed(false);
    setIsLoading(true);
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setIsZoomed(false);
    setIsLoading(true);
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'i' || e.key === 'I') {
        setShowInfo((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        setIsZoomed((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Touch Swipe gestures
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        id="lightbox-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl text-neutral-100 select-none overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Top Control Bar */}
        <div 
          id="lightbox-top-bar"
          className="flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-20"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
              {projectTitle ? `${projectTitle} · ` : ''}
              <span className="text-amber-400 font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="lightbox-toggle-info-btn"
              onClick={() => setShowInfo(!showInfo)}
              className={`p-2 rounded-full border transition-colors ${
                showInfo 
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                  : 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:text-white'
              }`}
              title="Toggle Details (Key: I)"
              aria-label="Toggle Details"
            >
              <Info className="w-4 h-4" />
            </button>

            <button
              id="lightbox-toggle-zoom-btn"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Toggle Zoom / Fit (Key: F)"
              aria-label="Toggle Zoom"
            >
              {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              id="lightbox-share-btn"
              onClick={handleShare}
              className="p-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Share / Copy Link"
              aria-label="Share Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              id="lightbox-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors ml-2"
              title="Close (Key: Esc)"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Stage Image Area */}
        <div 
          id="lightbox-image-stage"
          className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
        >
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              id="lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 border border-neutral-800 text-neutral-300 hover:text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Current Photograph */}
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-neutral-700 border-t-amber-400 rounded-full animate-spin" />
              </div>
            )}

            <motion.img
              key={currentImage.id}
              src={currentImage.url}
              alt={currentImage.title}
              onLoad={() => setIsLoading(false)}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: isLoading ? 0 : 1, scale: isZoomed ? 1.25 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setIsZoomed(!isZoomed)}
              className={`max-w-[92vw] max-h-[72vh] sm:max-h-[78vh] object-contain rounded-sm shadow-2xl transition-transform duration-300 ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
            />
          </div>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              id="lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 border border-neutral-800 text-neutral-300 hover:text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Mobile Swipe Hint on first view */}
          <div className="sm:hidden absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-neutral-500 bg-black/60 px-3 py-1 rounded-full pointer-events-none">
            Swipe left / right to navigate
          </div>
        </div>

        {/* Bottom Details Drawer & Thumbnail Strip */}
        <div 
          id="lightbox-bottom-panel"
          className="flex flex-col bg-gradient-to-t from-black via-black/90 to-transparent pt-4 pb-4 px-4 sm:px-8 z-20 border-t border-neutral-900/60"
        >
          {/* Metadata Bar */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="max-w-4xl mx-auto w-full mb-3 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-serif-custom text-neutral-100 font-medium">
                    {currentImage.title}
                  </h3>
                  {currentImage.caption && (
                    <p className="text-xs text-neutral-400 mt-0.5 max-w-xl">
                      {currentImage.caption}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-[11px] text-neutral-400">
                  {currentImage.location && (
                    <span className="flex items-center gap-1 bg-neutral-900/90 px-2.5 py-1 rounded-full border border-neutral-800">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {currentImage.location}
                    </span>
                  )}
                  {currentImage.cameraInfo && (
                    <span className="flex items-center gap-1 bg-neutral-900/90 px-2.5 py-1 rounded-full border border-neutral-800 font-mono text-[10px]">
                      <Camera className="w-3 h-3 text-neutral-400" />
                      {currentImage.cameraInfo}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div 
              id="lightbox-thumbnail-strip"
              className="flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-3xl mx-auto no-scrollbar"
            >
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  id={`lightbox-thumb-${idx}`}
                  onClick={() => {
                    setIsZoomed(false);
                    setIsLoading(true);
                    onNavigate(idx);
                  }}
                  className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden border transition-all ${
                    idx === currentIndex
                      ? 'border-amber-400 scale-105 opacity-100 ring-2 ring-amber-400/30'
                      : 'border-neutral-800 opacity-40 hover:opacity-80'
                  }`}
                  aria-label={`Thumbnail ${idx + 1}`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
