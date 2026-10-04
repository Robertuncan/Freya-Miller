import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  const { eyebrow, headline, points } = business.whyChooseUs;

  return (
    <section id="why-us" className="site-section site-section-alt border-y border-[#E5E7EB]">
      <div className="site-container">
        <SectionHeading
          eyebrow={eyebrow}
          title={headline}
          description="Built on clear communication, technical precision, and direct accountability for every store delivered."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:border-[#DDD6FE] transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] mb-4 block">
                  {point.number}
                </span>
                <h3 className="text-lg font-bold text-[#0F1117] leading-snug">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm text-[#525866] leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex items-center justify-between text-xs text-[#9CA3AF]">
                <span>Freya Miller</span>
                <span>London SE17</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
