import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business.js';

/**
 * ServiceCard
 * Large image top with smooth tonal zoom, clean unboxed category,
 * strong headline, concise description, and deliverable items.
 */
export default function ServiceCard({ service, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#DDD6FE] hover:-translate-y-1">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E2E8F0]">
        {!imageError && service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-fit object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#EDE9FE] to-[#F5F3FF] p-6 text-center">
            <span className="text-[#6D28D9] font-medium text-sm">
              {service.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Category - Clean unboxed text, no pills */}
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6D28D9] mb-2">
            {service.category}
          </div>

          <h3 className="text-xl font-bold text-[#0F1117] group-hover:text-[#6D28D9] transition-colors duration-200">
            {service.title}
          </h3>

          <p className="mt-3 text-base text-[#525866] leading-relaxed">
            {service.description}
          </p>

          {/* Key Deliverables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <ul className="mt-5 space-y-2 border-t border-[#F3F4F6] pt-4">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="text-sm text-[#525866] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9] shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Action */}
        <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
          <a
            href={business.ctas.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6D28D9] group-hover:text-[#5B21B6] transition-colors"
          >
            <span>Inquire for Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="text-xs text-[#9CA3AF] font-mono tabular-nums">
            0{index + 1}
          </span>
        </div>
      </div>
    </div>
  );
}
