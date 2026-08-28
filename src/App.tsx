import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { StoriesSection } from './components/StoriesSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { StoryModal } from './components/StoryModal';
import { Lightbox } from './components/Lightbox';
import { PROJECTS, STORIES } from './data/portfolioData';
import { Project, Story, PhotoItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  
  // Lightbox state
  const [lightboxImages, setLightboxImages] = useState<PhotoItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  // Prefilled service for contact form
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Track active section via IntersectionObserver or Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'stories', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPrefilledService(serviceName);
    handleNavigate('contact');
  };

  const handleInquireFromProject = (projectCategory: string, projectTitle: string) => {
    setPrefilledService(`${projectCategory} (${projectTitle})`);
    handleNavigate('contact');
  };

  // Open Project & trigger Lightbox
  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleSelectPhotoInProject = (index: number) => {
    if (!selectedProject) return;
    setLightboxImages(selectedProject.images);
    setLightboxIndex(index);
    setLightboxTitle(selectedProject.title);
    setLightboxOpen(true);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  // Story Interactions
  const handleOpenStory = (story: Story) => {
    setSelectedStory(story);
  };

  const handleSelectPhotoInStory = (index: number) => {
    if (!selectedStory) return;
    setLightboxImages(selectedStory.gallery);
    setLightboxIndex(index);
    setLightboxTitle(selectedStory.title);
    setLightboxOpen(true);
  };

  const handleNextStory = () => {
    if (!selectedStory) return;
    const currentIndex = STORIES.findIndex((s) => s.id === selectedStory.id);
    const nextIndex = (currentIndex + 1) % STORIES.length;
    setSelectedStory(STORIES[nextIndex]);
  };

  const handlePrevStory = () => {
    if (!selectedStory) return;
    const currentIndex = STORIES.findIndex((s) => s.id === selectedStory.id);
    const prevIndex = (currentIndex - 1 + STORIES.length) % STORIES.length;
    setSelectedStory(STORIES[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreWork={() => handleNavigate('work')}
          onReadStories={() => handleNavigate('stories')}
          onBookSession={() => handleNavigate('contact')}
        />

        {/* 2. Work Portfolio Section */}
        <WorkSection onSelectProject={handleOpenProject} />

        {/* 3. Stories / Photo Essays Section */}
        <StoriesSection onSelectStory={handleOpenStory} />

        {/* 4. Services / Commissions Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. About / Bio & Philosophy Section */}
        <AboutSection />

        {/* 6. Contact / Inquiry Section */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectPhoto={handleSelectPhotoInProject}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
        onInquire={handleInquireFromProject}
      />

      <StoryModal
        story={selectedStory}
        isOpen={!!selectedStory}
        onClose={() => setSelectedStory(null)}
        onSelectPhoto={handleSelectPhotoInStory}
        onNextStory={handleNextStory}
        onPrevStory={handlePrevStory}
      />

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        projectTitle={lightboxTitle}
      />
    </div>
  );
}
