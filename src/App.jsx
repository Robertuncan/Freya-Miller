import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-[#0F1117] selection:bg-[#DDD6FE] selection:text-[#5B21B6]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
