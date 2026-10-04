import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    ...(business.faqs && business.faqs.length > 0 ? [{ label: "FAQ", href: "#faq" }] : []),
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/[0.06] py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-black/[0.04] py-4'
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-[#0F1117] hover:text-[#6D28D9] transition-colors shrink-0"
        >
          {business.name}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525866]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#0F1117] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6D28D9] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href={business.ctas.primary.href}
            isExternal={business.ctas.primary.isExternal}
            size="sm"
            variant="primary"
            icon={<MessageSquare className="w-4 h-4" />}
          >
            {business.ctas.primary.label}
          </Button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            href={business.ctas.primary.href}
            isExternal={business.ctas.primary.isExternal}
            size="sm"
            variant="primary"
            className="sm:hidden text-xs px-3 py-1.5"
          >
            WhatsApp
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0F1117] hover:bg-black/5 rounded-lg focus-visible:outline-2"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="site-container py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#0F1117] hover:text-[#6D28D9] py-2 border-b border-[#F3F4F6] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                href={business.ctas.primary.href}
                isExternal={business.ctas.primary.isExternal}
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                {business.ctas.primary.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
