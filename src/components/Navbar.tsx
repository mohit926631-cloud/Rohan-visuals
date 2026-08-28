import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const whatsappHref = `https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Rohan, I saw your portfolio and would like to inquire about photography services.'
  )}`;

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-800/80 shadow-2xl'
            : 'py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Photographer Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="text-left group focus:outline-none"
          >
            <span className="block text-lg sm:text-xl font-display-custom font-bold tracking-[0.2em] text-white group-hover:text-amber-400 transition-colors uppercase">
              Rohan Visuals
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-neutral-400 font-light uppercase">
              Mumbai · Visual Storyteller
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all duration-200 ${
                    isActive
                      ? 'text-amber-300 font-semibold bg-amber-500/10'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-whatsapp-quick"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-900/80 hover:bg-emerald-950/60 border border-neutral-800 hover:border-emerald-500/40 text-neutral-300 hover:text-emerald-400 transition-all"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              id="nav-inquire-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/10"
            >
              Book Session
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400"
              aria-label="WhatsApp quick chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-20 bg-neutral-950/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Links List */}
            <div className="space-y-4 my-auto">
              <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold px-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Navigation
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-xl font-serif-custom transition-all flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-neutral-900 text-amber-400 border border-amber-500/20'
                      : 'text-neutral-300 hover:bg-neutral-900/50 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-sans">
                      Active
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${PROFILE_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Call Direct
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-xs text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp
                </a>
              </div>

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3.5 rounded-lg bg-amber-500 text-neutral-950 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                Inquire & Book Session
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
