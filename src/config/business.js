/**
 * Business Configuration for Freya Miller - E-commerce Solutions
 * All business details, typography, colors, copy, and visual assets are defined here.
 */

export const business = {
  name: "Freya Miller",
  shortName: "Freya Miller",
  type: "E-commerce Service",
  tagline: "Grow Your Online Business With Powerful E-commerce Solutions",
  city: "London",
  cityArea: "Crampton Street, London",
  fullAddress: "C/O 2e Accountants Ltd Unit 11, Flamingo Court, 81 Crampton Street, London, England, SE17 3BF",
  phone: "447481799140",
  phoneDisplay: "+44 7481 799140",
  whatsapp: "447481799140",
  whatsappUrl: "https://wa.me/447481799140?text=Hello%20Freya,%20I%20would%20like%20to%20inquire%20about%20e-commerce%20solutions.",
  email: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Unit+11+Flamingo+Court+81+Crampton+Street+London+SE17+3BF",
  openingHours: "Monday – Friday: 09:00 – 18:00 (Consultations by appointment)",

  brand: {
    style: "Minimal",
    primaryColor: "#6D28D9", // Refined Deep Purple
    primaryColorHover: "#5B21B6",
    primaryLight: "#EDE9FE",
    secondaryColor: "#FFFFFF",
    textColor: "#0F1117",
    mutedColor: "#525866",
    canvasColor: "#FBFBFC",
    surfaceAlt: "#F3F4F8",
    borderColor: "#E5E7EB",
  },

  ctas: {
    primary: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447481799140?text=Hello%20Freya,%20I%20would%20like%20to%20inquire%20about%20e-commerce%20solutions.",
      isExternal: true,
    },
    secondary: {
      label: "View Services",
      href: "#services",
      isExternal: false,
    },
    contact: {
      label: "Start a Conversation",
      href: "#contact",
      isExternal: false,
    },
  },

  images: {
    hero: "/src/assets/images/hero_ecommerce_studio_1791009433382.jpg",
    about: "/src/assets/images/about_specialist_studio_1791009447576.jpg",
  },

  hero: {
    eyebrow: "London · E-commerce Specialist",
    headline: "Grow Your Online Business With Powerful E-commerce Solutions",
    description: "Bespoke digital storefronts, Shopify and WooCommerce development, and seamless checkout systems crafted for independent brands and growing retailers.",
    trustMarker: "Based at Crampton Street, London · Client consultations by appointment",
  },

  about: {
    eyebrow: "About the Studio",
    headline: "Thoughtful technical craft for ambitious digital retailers",
    paragraphs: [
      "Freya Miller is an independent London-based e-commerce specialist delivering robust, conversion-focused online stores. Working directly with founders and retail brands, every project is engineered with clean code, intuitive product discovery, and friction-free purchasing.",
      "Rather than relying on bloated pre-made templates, each storefront is tailored to your brand's unique catalog requirements, payment gateways, and operational workflow. From initial architecture to ongoing store maintenance, you work directly with your developer at every step."
    ],
    highlights: [
      {
        title: "Bespoke Architecture",
        desc: "Custom Shopify and WooCommerce builds tailored to your exact product catalog and brand aesthetic."
      },
      {
        title: "Direct Specialist Access",
        desc: "One-on-one communication without agency overhead, project managers, or misaligned priorities."
      },
      {
        title: "Commercial Reliability",
        desc: "High-speed page performance, reliable mobile checkouts, and rigorous payment integrations."
      }
    ]
  },

  services: [
    {
      id: "shopify-woocommerce",
      title: "Shopify & WooCommerce Development",
      category: "Platform Engineering",
      description: "Custom storefront builds, theme customization, and flexible architectures tailored for scale and speed.",
      image: "/src/assets/images/service_store_development_1791009461399.jpg",
      deliverables: ["Custom Liquid & PHP theming", "Multi-currency & localization", "Inventory sync & migrations"]
    },
    {
      id: "ecommerce-design",
      title: "E-commerce Website Design",
      category: "Visual Experience",
      description: "Minimalist, conversion-led digital storefront design that elevates your brand and guides buyers effortlessly.",
      image: "/src/assets/images/service_ecommerce_design_1791009472502.jpg",
      deliverables: ["Mobile-first layout design", "Design systems & style guides", "High-conversion product pages"]
    },
    {
      id: "product-optimization-seo",
      title: "Product Listing & E-commerce SEO",
      category: "Search & Catalog",
      description: "Catalog structuring, rich product data, and search engine optimization to capture high-intent commercial traffic.",
      image: "/src/assets/images/service_seo_optimization_1791009483617.jpg",
      deliverables: ["Schema.org product markup", "Optimized catalog hierarchy", "Site architecture & speed audits"]
    },
    {
      id: "payment-checkout",
      title: "Payment Gateway Integration",
      category: "Transactions",
      description: "Secure, frictionless checkout implementation supporting Apple Pay, Google Pay, Stripe, and Klarna.",
      image: "/src/assets/images/service_payment_checkout_1791009494802.jpg",
      deliverables: ["Stripe & PayPal setup", "One-click express checkouts", "PCI-compliant transaction flows"]
    },
    {
      id: "store-management-maintenance",
      title: "Online Store Management & Maintenance",
      category: "Operations",
      description: "Ongoing technical maintenance, plugin updates, security monitoring, and regular speed enhancements.",
      image: "/src/assets/images/hero_ecommerce_studio_1791009433382.jpg",
      deliverables: ["Security & uptime monitoring", "Core & plugin updates", "Dedicated support availability"]
    },
    {
      id: "ecommerce-marketing",
      title: "E-commerce Marketing & Shopping Cart Development",
      category: "Growth & Retention",
      description: "Cart optimization, abandoned checkout recovery, and strategic marketing integration to maximize customer lifetime value.",
      image: "/src/assets/images/about_specialist_studio_1791009447576.jpg",
      deliverables: ["Cart drawer & upsell flows", "Email & SMS automation links", "Analytics & conversion tracking"]
    }
  ],

  whyChooseUs: {
    eyebrow: "Why Work Together",
    headline: "A focused, reliable partnership for your online store",
    points: [
      {
        number: "01",
        title: "London-Based Specialism",
        description: "Operating from Crampton Street, SE17, offering direct communication, aligned UK time zones, and in-person consultations when needed."
      },
      {
        number: "02",
        title: "Full-Stack E-commerce Capabilities",
        description: "From design and coding to payment gateways, inventory setup, and SEO, every component is coordinated under one disciplined standard."
      },
      {
        number: "03",
        title: "Speed & Conversion-Centric Code",
        description: "Every line of code is written to reduce page load latency and friction during checkout, helping maximize your conversion rates."
      },
      {
        number: "04",
        title: "Direct WhatsApp & Phone Support",
        description: "Direct access to the engineer building your store. Fast responses, clear updates, and no bureaucratic layers."
      }
    ]
  },

  // Testimonials list: only render if real testimonials provided. Per prompt instructions, leave empty if none.
  testimonials: [],

  faqs: [
    {
      question: "Which platform is best for my brand: Shopify or WooCommerce?",
      answer: "It depends on your business model. Shopify offers unmatched hosted stability, rapid setup, and seamless payment processing. WooCommerce provides total control over hosting, data ownership, and bespoke database architectures. During our initial discussion, we evaluate your product catalogue, transaction volume, and operational preferences to recommend the ideal solution."
    },
    {
      question: "Can you redesign or improve my existing online store without losing data?",
      answer: "Yes. Existing products, customer history, order records, and search engine rankings can be preserved through structured migration protocols, URL redirect mapping, and staged development environments."
    },
    {
      question: "How do we get started on an e-commerce project?",
      answer: "Send a direct message on WhatsApp or complete the contact inquiry below with your current store link or project requirements. We will discuss your goals, timeline, and deliverables, followed by a clear, fixed-scope proposal."
    },
    {
      question: "Do you provide ongoing support after the store launches?",
      answer: "Yes. In addition to initial development, ongoing store management and maintenance packages are available to handle plugin updates, security audits, feature additions, and catalog expansion."
    }
  ],

  contact: {
    eyebrow: "Get In Touch",
    headline: "Discuss your e-commerce project",
    subheadline: "Whether launching a new online store or upgrading an existing platform, send a message to explore how we can work together.",
    formFields: {
      namePlaceholder: "Your full name",
      emailPlaceholder: "Your email address",
      phonePlaceholder: "Your phone or WhatsApp number",
      servicePlaceholder: "Select the service you need",
      messagePlaceholder: "Briefly tell us about your brand, store, or project goals...",
      submitLabel: "Send Inquiry"
    }
  },

  footer: {
    copyrightNotice: `© ${new Date().getFullYear()} Freya Miller. All rights reserved.`,
    locationNote: "Independent E-commerce Specialist based in London, UK."
  }
};
