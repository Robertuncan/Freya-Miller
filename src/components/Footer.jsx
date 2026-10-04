import React from 'react';
import { business } from '../config/business.js';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F1117] text-white pt-16 pb-12 border-t border-white/10">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white block">
              {business.name}
            </span>
            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              {business.tagline}
            </p>
            <p className="text-xs text-[#6B7280]">
              {business.footer.locationNote}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#D1D5DB]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Work Together
                </a>
              </li>
              {business.faqs && business.faqs.length > 0 && (
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
              )}
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
              Contact Details
            </div>
            <div className="space-y-2.5 text-sm text-[#D1D5DB]">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  WhatsApp: {business.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-white transition-colors"
                >
                  Phone: {business.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <span className="text-xs text-[#9CA3AF] leading-relaxed">
                  {business.fullAddress}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
          <div>
            {business.footer.copyrightNotice}
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#9CA3AF] transition-colors">
              Inquiries
            </a>
            <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#9CA3AF] transition-colors">
              WhatsApp
            </a>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#9CA3AF] transition-colors">
              Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
