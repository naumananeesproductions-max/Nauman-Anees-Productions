export interface RouteSeoMeta {
  title: string;
  description: string;
  keywords: string;
  serviceName?: string;
}

const DEFAULT_META: RouteSeoMeta = {
  title: 'Nauman Anees Productions | Film, Music & Post-Production Studio Pakistan',
  description:
    'Your One-Stop Media Solution. Carrying forward 60+ years of cinema legacy across film direction, music production, VFX, animation, TV dramas, and talent discovery.',
  keywords:
    'Film Production House in Pakistan, Video Production Company Pakistan, Nauman Anees Productions',
};

const ROUTE_SEO_MAP: Record<string, RouteSeoMeta> = {
  '/': DEFAULT_META,
  '/about': {
    title: 'About Us | Nauman Anees Productions — Building Next-Era Cinema',
    description:
      'Discover how Nauman Anees Productions unites 60+ years of Pakistani filmmaking heritage with modern music production, cinema, VFX, and animation.',
    keywords: 'Film Production House in Pakistan, Nauman Anees Productions, Daniyal Nauman',
  },
  '/legacy': {
    title: 'Three Generations of Cinema Legacy | Nauman Anees Productions',
    description:
      'Explore the three-generation filmmaking heritage of Anees Bhatti, Nauman Anees — The Creative Visionary, and Daniyal Nauman.',
    keywords: 'Nauman Anees, Anees Bhatti, Daniyal Nauman, Pakistani Cinema Legacy',
  },
  '/legacy/anees-bhatti': {
    title: 'Anees Bhatti — Film Director & Family Foundation | Nauman Anees Productions',
    description:
      'Honouring Anees Bhatti, foundational film director and grandfather of Daniyal Nauman, whose craft launched over six decades of family cinema legacy.',
    keywords: 'Anees Bhatti, Film Director Pakistan, Pakistani Cinema Heritage',
  },
  '/legacy/nauman-anees': {
    title: 'Nauman Anees — The Creative Visionary | Director, Editor, VFX & Animator',
    description:
      'An accomplished filmmaker whose creative expertise extended across film direction, professional editing, visual effects, animation and post-production.',
    keywords:
      'Nauman Anees, Film Director Pakistan, Film Editor, VFX Artist, Animator, Post-Production Specialist',
  },
  '/legacy/daniyal-nauman': {
    title: 'Daniyal Nauman — Founder & Creative Director | Nauman Anees Productions',
    description:
      'Honouring the past and creating the future: Daniyal Nauman leads Nauman Anees Productions across film, music, VFX, animation, and artist development.',
    keywords: 'Daniyal Nauman, Nauman Anees Productions, Creative Director Pakistan',
  },
  '/services': {
    title: 'Production & Post-Production Services | Nauman Anees Productions',
    description:
      'Comprehensive film, music video, recording studio, VFX, animation, color grading, TV drama, commercial, and artist booking services in Pakistan.',
    keywords: 'Video Production Company Pakistan, Film Production Pakistan, Post Production Pakistan',
  },
  '/services/music-production': {
    title: 'Music Recording, Mixing & Mastering Studio Pakistan | Nauman Anees Productions',
    description:
      'Professional music recording studio, composition, songwriting, vocal tuning, mixing, and mastering services in Pakistan. Book your session online.',
    keywords: 'Music Recording Studio Pakistan, Mixing and Mastering Pakistan, Song Production',
    serviceName: 'Music Production & Recording Studio',
  },
  '/services/video-production': {
    title: 'Music Video Production Company Pakistan | Nauman Anees Productions',
    description:
      'End-to-end cinema-grade music video production in Pakistan—concept development, direction, lighting, casting, and theatrical finishing.',
    keywords: 'Music Video Production Pakistan, Video Production Company Pakistan',
    serviceName: 'Music Video Production',
  },
  '/services/video-post-production': {
    title: 'Video Editing, Color Grading, VFX & Animation Pakistan | Nauman Anees Productions',
    description:
      'Cinema video editing, color grading, VFX, 2D/3D animation, green screen, compositing, and motion graphics services in Pakistan.',
    keywords:
      'Professional Video Editing Pakistan, Color Grading Services Pakistan, VFX Company Pakistan, Animation Services Pakistan',
    serviceName: 'Video Post-Production, VFX & Animation',
  },
  '/services/tv-commercials': {
    title: 'TV Commercial & Digital Ad Production Pakistan | Nauman Anees Productions',
    description:
      'High-impact TV commercials, brand films, product videos, and corporate advertising production for Pakistani and international brands.',
    keywords: 'TV Commercial Production Pakistan, Brand Commercials Pakistan',
    serviceName: 'TV Commercials & Advertising',
  },
  '/services/tv-dramas': {
    title: 'TV Drama Production House Pakistan | Nauman Anees Productions',
    description:
      'Full-scale television drama production, episodic direction, editing, color grading, and post-production pipelines in Pakistan.',
    keywords: 'TV Drama Production Pakistan, Television Production House Pakistan',
    serviceName: 'TV Drama Production',
  },
  '/services/films': {
    title: 'Film & Short Film Production Pakistan | Nauman Anees Productions',
    description:
      'Feature films and short film production in Pakistan—from screenplay development and set production to VFX and theatrical mastering.',
    keywords: 'Film Production Pakistan, Film Production House in Pakistan',
    serviceName: 'Films & Short Films Production',
  },
  '/portfolio': {
    title: 'Studio Capabilities & Craft Showcase | Nauman Anees Productions',
    description:
      'Explore the filmmaking disciplines, audio sanctuaries, post-production suites, and concert production capabilities of Nauman Anees Productions.',
    keywords: 'Film Studio Pakistan, Post Production Suite Pakistan',
  },
  '/talent': {
    title: 'Join Our Talent Network — Singers, Actors & Models | Nauman Anees Productions',
    description:
      'Dreaming of becoming a singer, actor, model, musician, dancer, writer, director, or content creator? Submit your simple beginner-friendly talent application.',
    keywords: 'Artist Management Pakistan, Talent Application Pakistan, New Singers Actors Models',
  },
  '/events': {
    title: 'Concert & Artist Booking Pakistan & India | Nauman Anees Productions',
    description:
      'Book singers and live performers from Pakistan and India for weddings, corporate galas, private events, and live concerts.',
    keywords: 'Artist Booking Pakistan, Singer Booking Pakistan, Concert and Event Booking Pakistan',
    serviceName: 'Concert & Artist Booking',
  },
  '/book': {
    title: 'Book a Project | Nauman Anees Productions',
    description:
      'Start your music, film, video production, post-production, commercial, or event booking request with Nauman Anees Productions.',
    keywords: 'Book Video Production Pakistan, Book Music Studio Pakistan',
  },
  '/contact': {
    title: 'Contact Us | Nauman Anees Productions',
    description:
      'Reach Nauman Anees Productions directly via official phone, WhatsApp, business email, or our project inquiry form.',
    keywords: 'Contact Nauman Anees Productions, Film Studio Inquiry Pakistan',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Nauman Anees Productions',
    description:
      'Read how Nauman Anees Productions safeguards project inquiries, talent applications, and personal contact records.',
    keywords: 'Privacy Policy Nauman Anees Productions',
  },
};

export function getSeoForPath(pathname: string): RouteSeoMeta {
  const clean = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return (
    ROUTE_SEO_MAP[clean] ?? {
      title: 'Page Not Found | Nauman Anees Productions',
      description: DEFAULT_META.description,
      keywords: DEFAULT_META.keywords,
    }
  );
}

export function applyRouteSeo(pathname: string): void {
  if (typeof document === 'undefined') return;
  const meta = getSeoForPath(pathname);
  document.title = meta.title;

  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector<HTMLMetaElement>(selector);
    if (el) el.content = content;
  };

  setMeta('meta[name="description"]', meta.description);
  setMeta('meta[name="keywords"]', meta.keywords);
  setMeta('meta[property="og:title"]', meta.title);
  setMeta('meta[property="og:description"]', meta.description);
  setMeta('meta[name="twitter:title"]', meta.title);
  setMeta('meta[name="twitter:description"]', meta.description);

  const canonicalUrl = `${window.location.origin}${pathname}`;
  let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.rel = 'canonical';
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.href = canonicalUrl;

  // Dynamic BreadcrumbList + optional Service Schema
  const schemaId = 'nap-route-jsonld';
  let scriptEl = document.getElementById(schemaId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = schemaId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${window.location.origin}/`,
    },
    ...segments.map((seg, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `${window.location.origin}/${segments.slice(0, idx + 1).join('/')}`,
    })),
  ];

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'WebSite',
      name: 'Nauman Anees Productions',
      url: window.location.origin,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  ];

  if (meta.serviceName) {
    graph.push({
      '@type': 'Service',
      name: meta.serviceName,
      provider: {
        '@type': 'Organization',
        name: 'Nauman Anees Productions',
      },
      areaServed: 'Pakistan',
      description: meta.description,
    });
  }

  scriptEl.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}
