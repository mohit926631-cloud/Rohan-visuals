import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Camera, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Send,
  Eye
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (index: number) => void;
  onNextProject: () => void;
  onPrevProject: () => void;
  onInquire: (projectCategory: string, projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onSelectPhoto,
  onNextProject,
  onPrevProject,
  onInquire,
}) => {
  // Lock background scroll when modal is open
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

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div 
        id="project-modal-backdrop"
        className="fixed inset-0 z-40 overflow-y-auto bg-black/90 backdrop-blur-md flex justify-center"
      >
        <motion.div
          id="project-modal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl min-h-screen bg-[#0d0d11] text-neutral-100 shadow-2xl border-x border-neutral-800/80 my-0 sm:my-6 sm:rounded-xl overflow-hidden"
        >
          {/* Sticky Header Nav */}
          <div 
            id="project-modal-nav"
            className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0d0d11]/90 backdrop-blur-lg border-b border-neutral-800"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                {project.category}
              </span>
              <span className="hidden sm:inline text-xs text-neutral-400 font-mono">
                {project.year} · {project.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="project-prev-btn"
                onClick={onPrevProject}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Previous Project"
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                id="project-next-btn"
                onClick={onNextProject}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Next Project"
                aria-label="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="project-close-btn"
                onClick={onClose}
                className="p-2 ml-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                title="Close (Esc)"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hero Banner Section */}
          <div className="relative h-[48vh] sm:h-[60vh] w-full overflow-hidden bg-neutral-900">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-[#0d0d11]/40 to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif-custom font-normal text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-sm sm:text-lg text-neutral-300 font-light mt-2 max-w-2xl">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Metadata & Curatorial Overview */}
          <div className="px-6 sm:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-800/80">
            {/* Left 2 Cols: Description & Context */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-amber-400 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Curatorial Note & Approach
              </h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base font-light">
                {project.description}
              </p>
            </div>

            {/* Right 1 Col: Specs Sheet */}
            <div className="bg-neutral-900/60 p-5 rounded-lg border border-neutral-800 space-y-3.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-neutral-500">Location</span>
                  <span className="font-medium text-neutral-200">{project.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-neutral-500">Year / Context</span>
                  <span className="font-medium text-neutral-200">{project.year} · {project.clientOrContext}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Camera className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-neutral-500">Optical Rig & Lighting</span>
                  <span className="font-mono text-[11px] text-neutral-300">{project.cameraSpecs}</span>
                </div>
              </div>

              <button
                id="project-inquire-btn"
                onClick={() => {
                  onClose();
                  onInquire(project.category, project.title);
                }}
                className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all font-medium text-xs group"
              >
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                Inquire For Similar Work
              </button>
            </div>
          </div>

          {/* Curated Gallery Series */}
          <div className="px-6 sm:px-12 py-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-custom text-white">
                  Photographic Series
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Click any photograph to launch the full-screen immersive lightbox
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                {project.images.length} Selected Frames
              </span>
            </div>

            {/* Asymmetrical Editorial Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={image.id}
                  id={`project-photo-${index}`}
                  whileHover={{ y: -3 }}
                  onClick={() => onSelectPhoto(index)}
                  className={`group relative overflow-hidden rounded-md cursor-pointer bg-neutral-900 border border-neutral-800 transition-all ${
                    index === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[3/4]'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient & Hover Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-serif-custom text-white font-medium">
                          {image.title}
                        </h4>
                        {image.caption && (
                          <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                            {image.caption}
                          </p>
                        )}
                      </div>
                      <span className="p-2 rounded-full bg-white/10 text-white backdrop-blur-md">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Navigation within Project */}
          <div className="px-6 sm:px-12 py-8 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onPrevProject}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Previous Project
            </button>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
            >
              Return to All Work
            </button>

            <button
              onClick={onNextProject}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-amber-400 transition-colors"
            >
              Next Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
