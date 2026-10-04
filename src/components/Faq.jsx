import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faqs || business.faqs.length === 0) {
    return null;
  }

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="site-section bg-white border-t border-[#E5E7EB]">
      <div className="site-container max-w-3xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Clear answers before starting your store"
          description="Everything you need to know about platforms, project timelines, and working directly with Freya Miller."
          align="center"
        />

        <div className="mt-10 space-y-4">
          {business.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen ? 'border-[#DDD6FE] bg-[#FDFCFE]' : 'border-[#E5E7EB] bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-2 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-[#0F1117]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6D28D9] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#525866] text-base leading-relaxed border-t border-[#F3F4F6] mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
