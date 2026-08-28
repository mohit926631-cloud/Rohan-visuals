import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Mail, 
  Phone, 
  Sparkles,
  Heart
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="site-footer"
      className="bg-[#070709] text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Tier: Brand, Links & Demo Badge */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-display-custom font-bold tracking-[0.2em] text-white uppercase block">
                Rohan Visuals
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-light block">
                Photographer & Visual Storyteller · Mumbai, India
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Documentary wedding cinematography, character portraits, and Himalayan visual essays framed with natural light and timeless restraint.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>18.9220° N, 72.8347° E · Mumbai, India</span>
            </div>
          </div>

          {/* Quick Nav Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('work')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Selected Work & Categories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('stories')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Photo Stories & Field Notes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Commissions & Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Biography & Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Book Session / Inquire
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Demo Badge */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Studio Direct
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-400 font-mono">
              <p>Email: <a href={`mailto:${PROFILE_INFO.email}`} className="text-neutral-300 hover:text-amber-300">{PROFILE_INFO.email}</a></p>
              <p>Phone: <a href={`tel:${PROFILE_INFO.phone}`} className="text-neutral-300 hover:text-amber-300">{PROFILE_INFO.phone}</a></p>
              <p>Studio: Bandra West & Colaba, Mumbai</p>
            </div>

            {/* Sitevia Demo Project Highlight Card */}
            <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Sitevia Demo Project</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                This is a live portfolio demo created by <strong className="text-neutral-200">Sitevia</strong>. Designed to showcase high-performance image-first storytelling for luxury visual artists.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back to top */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-neutral-400 text-center sm:text-left">
            <span>© {currentYear} Rohan Visuals. All photographic rights reserved.</span>
            <span>•</span>
            <span className="text-neutral-400 font-medium">Sitevia Demo Project</span>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-all text-xs uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
