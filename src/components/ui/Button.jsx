import React from 'react';

/**
 * Universal Button / Link Component
 * Adheres to 8px border-radius, single-line control, and accessible focus states.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  onClick,
  type = 'button',
  icon,
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const sizeClasses = {
    sm: "text-sm px-4 py-2 rounded-lg gap-2",
    md: "text-base px-5 py-2.5 rounded-lg gap-2.5",
    lg: "text-base md:text-lg px-7 py-3.5 rounded-lg gap-3",
  }[size] || "text-base px-5 py-2.5 rounded-lg gap-2";

  const variantClasses = {
    primary: "bg-[#6D28D9] text-white hover:bg-[#5B21B6] active:translate-y-0.5 shadow-sm hover:shadow-md",
    secondary: "bg-white text-[#0F1117] border border-[#E5E7EB] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] active:translate-y-0.5 shadow-sm",
    outline: "bg-transparent text-[#6D28D9] border border-[#6D28D9] hover:bg-[#F5F3FF] active:translate-y-0.5",
    white: "bg-white text-[#6D28D9] hover:bg-[#F8FAFC] active:translate-y-0.5 shadow-md font-semibold",
    text: "bg-transparent text-[#6D28D9] hover:text-[#5B21B6] underline-offset-4 hover:underline px-0 py-0",
  }[variant] || "";

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
