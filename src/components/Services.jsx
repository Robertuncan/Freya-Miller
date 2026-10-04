import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';
import Button from './ui/Button.jsx';
import { MessageSquare } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="site-section site-section-alt">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Specialist Services"
            title="End-to-end e-commerce solutions built for growth"
            description="From initial architectural setup to bespoke custom theming and conversion optimization, every service is tailored to deliver speed, security, and measurable sales."
            className="mb-0 md:mb-0"
          />
          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              href={business.ctas.primary.href}
              isExternal={business.ctas.primary.isExternal}
              variant="outline"
              size="md"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Consult On WhatsApp
            </Button>
          </div>
        </div>

        {/* 3 across desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.services.map((service, idx) => (
            <ServiceCard
              key={service.id || idx}
              service={service}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
