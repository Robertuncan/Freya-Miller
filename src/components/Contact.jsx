import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Frontend-only inquiry submission state
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="site-section site-section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.headline}
          description={business.contact.subheadline}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 items-start">
          {/* Left Column: Direct Contact Actions & Business Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Action Card: WhatsApp Direct */}
            <div className="bg-[#6D28D9] text-white p-7 rounded-2xl shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct WhatsApp</h3>
                  <p className="text-xs text-[#DDD6FE]">Fastest response for project inquiries</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#EDE9FE] leading-relaxed">
                Connect directly with Freya Miller to discuss store setup, Shopify/WooCommerce questions, or timeline estimates.
              </p>
              <div className="mt-6">
                <Button
                  href={business.whatsappUrl}
                  isExternal={true}
                  variant="white"
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Message on WhatsApp
                </Button>
              </div>
            </div>

            {/* Direct Phone Action Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F5F3FF] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#6D28D9]" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#6D28D9]">
                  Telephone
                </div>
                <a
                  href={`tel:${business.phone}`}
                  className="text-base font-bold text-[#0F1117] hover:text-[#6D28D9] transition-colors block mt-0.5"
                >
                  {business.phoneDisplay}
                </a>
                <p className="text-xs text-[#525866] mt-1">
                  Call for general inquiries or scheduled consultations.
                </p>
              </div>
            </div>

            {/* Physical Location & Directions */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F5F3FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#6D28D9]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#6D28D9]">
                    London Address
                  </div>
                  <p className="text-sm font-medium text-[#0F1117] mt-0.5 leading-snug">
                    {business.fullAddress}
                  </p>
                  <div className="mt-3">
                    <a
                      href={business.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6D28D9] hover:underline"
                    >
                      <span>Open in Google Maps / Directions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              {business.openingHours && (
                <div className="pt-4 border-t border-[#F3F4F6] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F3FF] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#6D28D9]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#6D28D9]">
                      Consultation Hours
                    </div>
                    <p className="text-sm text-[#0F1117] mt-0.5">
                      {business.openingHours}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Usable Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-[#E5E7EB] shadow-sm">
            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#059669]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F1117]">
                  Inquiry Received
                </h3>
                <p className="mt-3 text-base text-[#525866] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have received your project details and will follow up promptly. If your project is time-sensitive, feel free to drop a quick note directly on WhatsApp.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    href={business.whatsappUrl}
                    isExternal={true}
                    variant="primary"
                    size="md"
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Open in WhatsApp
                  </Button>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    variant="secondary"
                    size="md"
                  >
                    Send Another Note
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#0F1117] mb-1">
                  Send a Project Note
                </h3>
                <p className="text-sm text-[#525866] mb-6">
                  Fill in your project requirements below to arrange a consultation.
                </p>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#525866] mb-1.5">
                    Your Name <span className="text-[#6D28D9]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={business.contact.formFields.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-[#FAFAFC] text-[#0F1117] placeholder:text-[#9CA3AF] text-base focus:bg-white focus:border-[#6D28D9] transition-colors"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#525866] mb-1.5">
                      Email Address <span className="text-[#6D28D9]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={business.contact.formFields.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-[#FAFAFC] text-[#0F1117] placeholder:text-[#9CA3AF] text-base focus:bg-white focus:border-[#6D28D9] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#525866] mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={business.contact.formFields.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-[#FAFAFC] text-[#0F1117] placeholder:text-[#9CA3AF] text-base focus:bg-white focus:border-[#6D28D9] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#525866] mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-[#FAFAFC] text-[#0F1117] text-base focus:bg-white focus:border-[#6D28D9] transition-colors"
                  >
                    <option value="">Select a service category...</option>
                    {business.services.map((s, idx) => (
                      <option key={idx} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Full Store Build">Full Custom Store Build</option>
                    <option value="Store Audit / Optimization">Store Audit / Speed & SEO Optimization</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#525866] mb-1.5">
                    Project Details <span className="text-[#6D28D9]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={business.contact.formFields.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-[#FAFAFC] text-[#0F1117] placeholder:text-[#9CA3AF] text-base focus:bg-white focus:border-[#6D28D9] transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {business.contact.formFields.submitLabel}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
