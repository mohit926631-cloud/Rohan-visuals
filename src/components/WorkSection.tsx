import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Camera, 
  ArrowUpRight, 
  LayoutGrid, 
  Columns3,
  SlidersHorizontal,
  Eye
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [layoutMode, setLayoutMode] = useState<'editorial' | 'curated'>('editorial');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'travel', label: 'Travel' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'events', label: 'Events' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryCount = (catId: ProjectCategory) => {
    if (catId === 'all') return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === catId).length;
  };

  return (
    <section 
      id="work" 
      className="relative py-24 sm:py-32 bg-[#09090b] text-neutral-100 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Selected Body of Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-custom font-normal text-white tracking-tight">
              Curated Photographic Archives
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light">
              Explorations across intimate wedding documentation, character portraiture, editorial haute couture, and Himalayan travels.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-neutral-900/80 p-1 rounded-lg border border-neutral-800">
            <button
              id="view-editorial-btn"
              onClick={() => setLayoutMode('editorial')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                layoutMode === 'editorial'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Editorial Asymmetric View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Editorial Flow
            </button>
            <button
              id="view-curated-btn"
              onClick={() => setLayoutMode('curated')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                layoutMode === 'curated'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Curated Filmstrip Grid"
            >
              <Columns3 className="w-3.5 h-3.5" />
              Filmstrip
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div 
          id="work-category-filters"
          className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-neutral-950 font-semibold shadow-lg shadow-white/10'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/80'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-neutral-900 text-white' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Display Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${layoutMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="pt-4"
          >
            {layoutMode === 'editorial' ? (
              /* Asymmetric Editorial Magazine Composition */
              <div className="space-y-12 sm:space-y-16">
                {filteredProjects.map((project, index) => {
                  const isEven = index % 2 === 0;
                  const isFeatured = project.featured;

                  return (
                    <motion.div
                      key={project.id}
                      id={`project-card-${project.id}`}
                      whileHover={{ y: -4 }}
                      onClick={() => onSelectProject(project)}
                      className="group cursor-pointer bg-[#0e0e12] rounded-2xl border border-neutral-800/80 overflow-hidden hover:border-amber-500/40 transition-all duration-500 shadow-2xl"
                    >
                      <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-12' : 'lg:grid-cols-2'} gap-0 items-stretch`}>
                        {/* Image Canvas */}
                        <div className={`relative overflow-hidden ${
                          isFeatured 
                            ? isEven ? 'lg:col-span-7 aspect-[16/10]' : 'lg:col-span-7 lg:order-2 aspect-[16/10]' 
                            : 'aspect-[4/3] sm:aspect-[16/10]'
                        } bg-neutral-950`}>
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                          
                          {/* Floating Top Badge */}
                          <div className="absolute top-4 left-4 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-widest text-amber-400 border border-amber-500/30 font-medium">
                              {project.category}
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase font-mono text-neutral-300">
                              {project.images.length} Frames
                            </span>
                          </div>

                          {/* Quick View Button on Mobile/Desktop */}
                          <div className="absolute bottom-4 right-4 p-3 rounded-full bg-amber-500 text-neutral-950 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform translate-y-2 group-hover:translate-y-0">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Text & Metadata Details */}
                        <div className={`p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${
                          isFeatured && !isEven ? 'lg:col-span-5 lg:order-1' : isFeatured ? 'lg:col-span-5' : ''
                        } space-y-6 bg-gradient-to-br from-[#0e0e12] to-[#121218]`}>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                              <span>{project.year}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-amber-400" />
                                {project.location}
                              </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-custom font-normal text-white group-hover:text-amber-200 transition-colors leading-tight">
                              {project.title}
                            </h3>

                            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {/* Optical Info & Action */}
                          <div className="pt-6 border-t border-neutral-800/80 space-y-4">
                            <div className="flex items-center gap-2 text-xs text-neutral-400">
                              <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span className="font-mono text-[11px] truncate">{project.cameraSpecs}</span>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                              <span className="text-xs uppercase tracking-widest text-neutral-400 group-hover:text-amber-400 transition-colors flex items-center gap-1.5 font-medium">
                                Open Immersive Gallery
                                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                              <span className="text-xs text-neutral-500 font-mono">
                                Vol. 0{index + 1}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              /* Filmstrip Multi-Card Composition */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    id={`project-grid-${project.id}`}
                    whileHover={{ y: -6 }}
                    onClick={() => onSelectProject(project)}
                    className="group cursor-pointer bg-[#0e0e12] rounded-xl border border-neutral-800 overflow-hidden hover:border-amber-500/40 transition-all shadow-xl flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-widest text-amber-400 border border-amber-500/30">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-amber-400" />
                            {project.location}
                          </span>
                          <span>{project.year}</span>
                        </div>

                        <h4 className="text-xl font-serif-custom text-white group-hover:text-amber-200 transition-colors">
                          {project.title}
                        </h4>

                        <p className="text-xs text-neutral-400 line-clamp-2 font-light">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                        <span className="text-[11px] font-mono text-neutral-400">
                          {project.images.length} Photographs
                        </span>
                        <span className="text-amber-400 font-medium flex items-center gap-1 uppercase tracking-wider text-[10px]">
                          View <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
