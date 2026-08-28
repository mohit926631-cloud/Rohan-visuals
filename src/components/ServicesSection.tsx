import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Check, 
  Clock, 
  ArrowRight, 
  Send,
  HelpCircle
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServicePackage } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section 
      id="services" 
      className="relative py-24 sm:py-32 bg-[#09090b] text-neutral-100 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Photographic Commissions
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-custom font-normal text-white tracking-tight">
            Tailored Visual Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Every commission is approached as a bespoke artistic partnership with transparent deliverables, archival color grading, and dedicated creative direction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              whileHover={{ y: -4 }}
              className="bg-[#0f0f14] rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {service.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif-custom text-white font-normal mt-2">
                      {service.title}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="block text-xs uppercase tracking-wider text-neutral-500">Investment</span>
                    <span className="text-sm sm:text-base font-mono text-amber-300 font-medium">
                      {service.investment}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-xs sm:text-sm text-neutral-300 font-light italic">
                  "{service.tagline}"
                </p>

                {/* Duration & Ideal for */}
                <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80 space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span><strong className="text-neutral-200">Duration:</strong> {service.duration}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-200">Ideal for:</strong> {service.idealFor}</span>
                  </div>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                    What's Included
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="p-0.5 rounded bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="leading-tight font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book CTA */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80">
                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-amber-500 text-neutral-200 hover:text-neutral-950 border border-neutral-700 hover:border-amber-500 font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400 group-hover:text-neutral-950 transition-colors" />
                  Inquire For {service.title}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bespoke Quote Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121218] via-neutral-900 to-[#121218] border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-lg sm:text-xl font-serif-custom text-white">
              Planning a destination wedding or custom multi-city campaign?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              We frequently travel across India and internationally. Bespoke itineraries, analog film coverage, and multi-day packages are customized per client.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Bespoke Project')}
            className="shrink-0 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/10"
          >
            Request Bespoke Quote
          </button>
        </div>
      </div>
    </section>
  );
};
