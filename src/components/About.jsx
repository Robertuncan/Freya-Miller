import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { CheckCircle2, MessageSquare } from 'lucide-react';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="site-section bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Studio Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-[#F3F4F8] aspect-[4/3] lg:aspect-[5/6]">
              {!imageError && business.images.about ? (
                <img
                  src={business.images.about}
                  alt="Freya Miller Studio Workspace London"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-[#EDE9FE] to-white text-center">
                  <div className="text-sm font-medium text-[#6D28D9]">
                    Freya Miller Studio · London SE17
                  </div>
                </div>
              )}
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Location Badge Over Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-black/5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#6D28D9]">
                  Studio Location
                </div>
                <div className="text-sm font-medium text-[#0F1117] mt-0.5">
                  Flamingo Court, Crampton St, London SE17
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="eyebrow-text">
              {business.about.eyebrow}
            </span>

            <h2 className="text-[#0F1117] mt-1 text-balance">
              {business.about.headline}
            </h2>

            <div className="mt-6 space-y-4 text-base md:text-lg text-[#525866] leading-relaxed">
              {business.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Highlights list */}
            {business.about.highlights && (
              <div className="mt-8 space-y-4 pt-6 border-t border-[#F3F4F6]">
                {business.about.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#6D28D9] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0F1117] text-base">
                        {item.title}
                      </div>
                      <div className="text-sm text-[#525866] mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action */}
            <div className="mt-10 pt-2">
              <Button
                href={business.ctas.primary.href}
                isExternal={business.ctas.primary.isExternal}
                variant="primary"
                size="md"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
