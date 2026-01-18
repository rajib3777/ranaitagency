import {
  Code2,
  Palette,
  Megaphone,
  Share2,
  Sparkles,
  Video,
  Film
} from "lucide-react";

export const navItems = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development & UI", href: "/services#web-ui" },
      { label: "Graphics Design", href: "/services#graphics" },
      { label: "Digital Marketing", href: "/services#marketing" },
      { label: "Social Media Marketing", href: "/services#smm" },
      { label: "Ad Creative", href: "/services#ads" },
      { label: "Videography", href: "/services#videography" },
      { label: "Video Editing", href: "/services#editing" }
    ]
  },
  {
    label: "Work",
    href: "/projects",
    dropdown: [
      { label: "Project Showcase", href: "/projects#showcase" },
      { label: "Case Studies", href: "/projects#case-studies" },
      { label: "Client Reviews", href: "/projects#reviews" }
    ]
  },
  {
    label: "Company",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about#about" },
      { label: "Our Process", href: "/about#process" },
      { label: "FAQ", href: "/#faq" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

export const serviceCards = [
  {
    id: "web-ui",
    title: "Web Development & UI Design",
    desc: "Pixel-perfect UI with high-performance code. Premium, scalable and responsive.",
    Icon: Code2,
    accent: "from-violet-500/30 via-blue-500/25 to-pink-500/20"
  },
  {
    id: "graphics",
    title: "Graphics Design",
    desc: "Brand identity, social creatives, banners and production-grade visuals.",
    Icon: Palette,
    accent: "from-pink-500/25 via-violet-500/25 to-blue-500/20"
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    desc: "Growth campaigns, SEO foundations, landing optimization & analytics-ready strategy.",
    Icon: Megaphone,
    accent: "from-blue-500/25 via-cyan-500/20 to-violet-500/25"
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    desc: "Content plan, design, publishing & community growth — consistent premium presence.",
    Icon: Share2,
    accent: "from-cyan-500/22 via-blue-500/25 to-pink-500/22"
  },
  {
    id: "ads",
    title: "Ad Creative",
    desc: "High-converting ad concepts, scripts, visuals and rapid testing variants.",
    Icon: Sparkles,
    accent: "from-violet-500/25 via-pink-500/20 to-orange-500/15"
  },
  {
    id: "videography",
    title: "Videography",
    desc: "Story-driven shoots for brands, products and social content — premium look.",
    Icon: Video,
    accent: "from-blue-500/25 via-violet-500/25 to-cyan-500/20"
  },
  {
    id: "editing",
    title: "Video Editing",
    desc: "Motion-driven edits, reels, ads and brand films with cinematic pacing.",
    Icon: Film,
    accent: "from-pink-500/22 via-blue-500/22 to-violet-500/25"
  }
];

export const projects = Array.from({ length: 12 }).map((_, i) => {
  const idx = i + 1;
  const tags = [
    ["Web", "UI"],
    ["Brand", "Design"],
    ["Marketing", "Landing"],
    ["SMM", "Creative"],
    ["Ads", "Conversion"],
    ["Video", "Editing"]
  ][i % 6];
  return {
    id: `p${idx}`,
    title: [
      "Neon Commerce Platform",
      "Fintech Dashboard UI",
      "Clinic Booking Website",
      "Restaurant Brand Kit",
      "Agency Landing System",
      "Product Launch Campaign",
      "SaaS Growth Landing",
      "Luxury Portfolio Website",
      "Creator Media Pack",
      "Ad Creative Sprint",
      "Corporate Website Revamp",
      "Mobile-First UI System"
    ][i],
    tags,
    image: `/projects/p${idx}.svg`,
    blurb:
      "Premium visuals, fast UI, high-converting layout — built with modern UX and scalable components."
  };
});

export const testimonials = [
  {
    name: "K. Chowdhury",
    role: "Director, Corporate Firm",
    quote:
      "The navbar, spacing, and sections feel extremely premium. It looks like an expensive international agency site.",
    rating: 5
  },

  {
    name: "A. Rahman",
    role: "Founder, eCommerce Brand",
    quote:
      "The website feels premium and converts better. Design + performance — both are top-tier.",
    rating: 5
  },
  {
    name: "S. Hossain",
    role: "Marketing Lead",
    quote:
      "Our ads and creatives finally look like an international brand. Delivery was fast and clean.",
    rating: 5
  },
  {
    name: "N. Karim",
    role: "Startup CEO",
    quote:
      "UI was pixel-perfect and responsive. The team understood modern product design instantly.",
    rating: 5
  },
  {
    name: "T. Hasan",
    role: "Agency Owner",
    quote:
      "Portfolio, sections, animations — everything looks premium. Clients loved the first impression.",
    rating: 5
  },
  {
    name: "M. Islam",
    role: "Operations Manager",
    quote:
      "Smooth communication and outstanding visuals. The site looks expensive in the best way.",
    rating: 5
  },
  {
    name: "R. Ahmed",
    role: "Content Creator",
    quote:
      "Reels edits and creative direction were on-point. The brand vibe is now consistent across platforms.",
    rating: 5
  }
];

export const faqs = [
  {
    q: "How fast can you deliver a premium agency website?",
    a: "Timeline depends on content + approvals, but we structure the build for speed without sacrificing quality."
  },
  {
    q: "Do you support backend integration later?",
    a: "Yes. This frontend is structured to connect APIs/CMS later (auth, blog, projects, contact submissions)."
  },
  {
    q: "What makes your UI look premium?",
    a: "We combine futuristic glass design, strong spacing system, micro-interactions, and conversion-first layouts."
  },
  {
    q: "Can you provide branding & social creatives too?",
    a: "Absolutely — logos, brand kits, ad creatives, social content and video production are part of our services."
  },
  {
    q: "Is the website mobile responsive?",
    a: "Yes — mobile-first components with carefully tuned spacing, typography and interactions."
  },
  {
    q: "Will the 3D remain noticeable?",
    a: "Yes — the hero 3D stays dominant with layered content and a glass navbar on top, as requested."
  },
  {
    q: "Do you offer SEO + performance optimization?",
    a: "We lay the foundation (semantic structure, speed-minded UI, metadata) and can extend to full SEO strategy."
  },
  {
    q: "Can you handle ongoing updates?",
    a: "Yes — we can move projects/blog into a CMS later or provide a maintenance plan."
  }
];
