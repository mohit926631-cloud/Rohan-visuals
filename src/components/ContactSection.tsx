import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Clock,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Weddings',
    preferredDate: '',
    location: '',
    budget: 'Standard Package',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        eventType: prefilledService,
        message: prev.message || `Hi Rohan, I am interested in inquiring about ${prefilledService}.`,
      }));
    }
  }, [prefilledService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Hello Rohan Visuals,`,
      `I would like to enquire about booking your photography services:`,
      `• Name: ${formData.name || 'Interested Client'}`,
      `• Service / Event: ${formData.eventType}`,
      formData.preferredDate ? `• Date: ${formData.preferredDate}` : '',
      formData.location ? `• Location: ${formData.location}` : '',
      formData.email ? `• Email: ${formData.email}` : '',
      formData.message ? `• Note: ${formData.message}` : ''
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const dynamicWhatsAppHref = `https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${generateWhatsAppMessage()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCopySummary = () => {
    const summaryText = `Inquiry for Rohan Visuals:\nName: ${formData.name}\nEmail: ${formData.email}\nEvent: ${formData.eventType}\nDate: ${formData.preferredDate}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 bg-[#09090b] text-neutral-100 border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Methods & Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Direct Inquiries & Commissions
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-custom font-normal text-white tracking-tight">
                Let's Tell Your Story
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                Whether you are planning a destination wedding, an editorial campaign, or an intimate character portrait session in Mumbai, we would love to connect.
              </p>
            </div>

            {/* Quick Action Channels */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp (Interactive Highlight) */}
              <a
                id="contact-channel-whatsapp"
                href={dynamicWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white font-mono">
                      +91 98901 23456
                    </span>
                    <span className="block text-[11px] text-emerald-300/80 font-light mt-0.5">
                      Opens pre-filled enquiry with your details
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Call Direct */}
              <a
                id="contact-channel-phone"
                href={`tel:${PROFILE_INFO.phone}`}
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-neutral-800 text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">
                      Studio Phone / Direct Line
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white font-mono">
                      {PROFILE_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {/* Email */}
              <a
                id="contact-channel-email"
                href={`mailto:${PROFILE_INFO.email}?subject=Photography%20Commission%20Inquiry`}
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-neutral-800 text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">
                      Official Inquiries Email
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white font-mono">
                      {PROFILE_INFO.email}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Studio Location & Response Time */}
            <div className="p-5 rounded-xl bg-[#111116] border border-neutral-800/80 space-y-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Studio Base:</strong> Bandra West / Colaba, Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Response Window:</strong> Within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#101015] p-6 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="inquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="border-b border-neutral-800 pb-4">
                      <h3 className="text-xl sm:text-2xl font-serif-custom text-white">
                        Commission Inquiry Form
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Please provide details about your upcoming celebration or project
                      </p>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ananya Roy"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ananya@example.com"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Event Type & Preferred Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label 
                          htmlFor="eventType" 
                          className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-2"
                        >
                          Event / Project Type *
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        >
                          <option value="Weddings">Wedding Photography (Multi-day / Intimate)</option>
                          <option value="Portrait Sessions">Portrait Sessions (Editorial / Personal)</option>
                          <option value="Brand Photography">Brand & Commercial Lookbook</option>
                          <option value="Event Photography">Event & Cultural Gala</option>
                          <option value="Travel / Documentary">Travel Documentary / Landscape</option>
                          <option value="Other">Other Bespoke Assignment</option>
                        </select>
                      </div>

                      <div>
                        <label 
                          htmlFor="preferredDate" 
                          className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-2"
                        >
                          Preferred Date / Timeline *
                        </label>
                        <input
                          type="text"
                          id="preferredDate"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleChange}
                          placeholder="e.g. November 2026 or Exact Date"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Location & Phone (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label 
                          htmlFor="location" 
                          className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-2"
                        >
                          Location / Venue
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Mumbai, Udaipur, Goa, or International"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="phone" 
                          className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-2"
                        >
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-2"
                      >
                        Tell Us About Your Vision & Story *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the vibe, estimated guest count, unique rituals, or creative references you love..."
                        className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit & WhatsApp Shortcut Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="submit-enquiry-btn"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Enquiry <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <a
                        href={dynamicWhatsAppHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        Send via WhatsApp
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  /* Success Confirmation State */
                  <motion.div
                    key="success-receipt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-serif-custom text-white">
                        Enquiry Received, {formData.name || 'Friend'}!
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                        Thank you for reaching out to Rohan Visuals. We have recorded your inquiry for <span className="text-amber-300 font-medium">{formData.eventType}</span>. We will review our calendar and respond within 24 hours.
                      </p>
                    </div>

                    {/* Summary receipt card */}
                    <div className="bg-neutral-900/80 p-5 rounded-xl border border-neutral-800 text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Service:</span>
                        <span className="text-neutral-200 font-medium">{formData.eventType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Timeline:</span>
                        <span className="text-neutral-200">{formData.preferredDate || 'Flexible'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Contact Email:</span>
                        <span className="text-neutral-200 font-mono">{formData.email}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={dynamicWhatsAppHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Also Chat on WhatsApp
                      </a>

                      <button
                        onClick={handleCopySummary}
                        className="px-5 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                      >
                        {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedSummary ? 'Copied' : 'Copy Details'}
                      </button>

                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            eventType: 'Weddings',
                            preferredDate: '',
                            location: '',
                            budget: 'Standard Package',
                            message: '',
                          });
                        }}
                        className="px-5 py-3 rounded-full text-neutral-400 hover:text-white text-xs uppercase tracking-wider"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
