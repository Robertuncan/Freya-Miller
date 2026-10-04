import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Testimonials Component
 * Rendered ONLY if real testimonials are configured in business.js.
 * Per prompt rules: "If none provided, omit this section entirely — do not replace it with filler."
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="site-section bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What retail founders say about working together"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFC] p-8 rounded-2xl border border-[#E5E7EB] flex flex-col justify-between"
            >
              <blockquote className="text-[#0F1117] text-base leading-relaxed italic">
                "{item.quote}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                <div className="font-semibold text-sm text-[#0F1117]">{item.author}</div>
                <div className="text-xs text-[#525866] mt-0.5">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
