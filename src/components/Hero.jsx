import React, { useState } from 'react';
import { MessageSquare, ArrowRight, MapPin, Clock } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Container with Measured Contrast Tonal Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0F1117]">
        <img
          src={business.images.hero}
          alt="Freya Miller E-commerce Studio London"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? 'opacity-40' : 'opacity-20'
          }`}
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Subtle tonal deep purple-to-charcoal scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] via-[#0F1117]/80 to-[#1E1136]/70" />
      </div>

      {/* Content Container */}
      <div className="site-container relative z-10 py-12 md:py-20 text-center flex flex-col items-center">
        {/* Eyebrow Label: City + Business Type (Zero pills, clean typography) */}
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#DDD6FE] mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
          <span>{business.hero.eyebrow}</span>
        </div>

        {/* Large Confident H1 Headline */}
        <h1 className="text-white max-w-4xl text-balance tracking-tight">
          {business.hero.headline}
        </h1>

        {/* Short Supporting Paragraph */}
        <p className="mt-6 text-lg md:text-xl text-[#D1D5DB] max-w-2xl mx-auto leading-relaxed">
          {business.hero.description}
        </p>

        {/* Primary CTA + Secondary CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href={business.ctas.primary.href}
            isExternal={business.ctas.primary.isExternal}
            size="lg"
            variant="primary"
            icon={<MessageSquare className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            {business.ctas.primary.label}
          </Button>

          <Button
            href={business.ctas.secondary.href}
            size="lg"
            variant="secondary"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            {business.ctas.secondary.label}
          </Button>
        </div>

        {/* Quiet Trust Line */}
        {business.hero.trustMarker && (
          <div className="mt-12 pt-8 border-t border-white/10 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs md:text-sm text-[#9CA3AF]">
            <Clock className="w-4 h-4 text-[#A78BFA] shrink-0" />
            <span>{business.hero.trustMarker}</span>
          </div>
        )}
      </div>
    </section>
  );
}
