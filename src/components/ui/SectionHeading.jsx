import React from 'react';

/**
 * Reusable Section Heading
 * Consistent eyebrow, H2 title, and supporting description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className="eyebrow-text">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-[#0F1117] mt-1 text-balance">
          {title}
        </h2>
      )}
      {description && (
        <p className={`mt-4 text-[#525866] text-lg leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
