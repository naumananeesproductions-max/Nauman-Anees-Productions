import type {
  DynamicFieldConfig,
  LegacyProfileData,
  SubServiceItem,
  TalentCategoryCard,
} from '../types/studio';
export const STUDIO_ASSETS = {
  logo: '/images/nap-logo.jpg',
  aneesBhatti: '/images/anees-bhatti.png',
  naumanAnees: '/images/nauman-anees.png',
  daniyalNauman: '/images/daniyal-nauman.jpg',
  artistBanner: '/images/concert-artists-banner.jpg',
  heroCinemaStudio: '/images/hero-cinema-studio.jpg',
  musicStudioConsole: '/images/music-studio-console.jpg',
  videoPostVfx: '/images/video-post-vfx.jpg',
  filmDramaProduction: '/images/film-drama-production.jpg',
  talentStageSpotlight: '/images/talent-stage-spotlight.jpg',
} as const;

export const CONTACT_INFO = {
  phoneWhatsapp: '+92 226966886',
  phoneRaw: '+92226966886',
  whatsappDigits: '92226966886',
  email: 'naumananeesproductions@gmail.com',
} as const;

export const EXPERIENCE_COUNTERS = [
  { value: '60+', label: 'Years of Family Industry Legacy' },
  { value: '50+', label: 'Dramas Associated' },
  { value: '200+', label: 'Songs Associated' },
  { value: '10+', label: 'Films Associated' },
] as const;

export const LEGACY_PROFILES: LegacyProfileData[] = [
  {
    slug: 'anees-bhatti',
    route: '/legacy/anees-bhatti',
    name: 'Anees Bhatti',
    titleBadge: 'First Generation',
    role: 'Film Director',
    relationship: 'Grandfather of Daniyal Nauman',
    headline: 'ANEES BHATTI — THE FOUNDATION',
    positioningStatement:
      'A respected film director whose creative craftsmanship helped lay the family foundation across more than six decades of Pakistani cinema.',
    portrait: STUDIO_ASSETS.aneesBhatti,
    portraitAlt: 'Official portrait of film director Anees Bhatti',
    era: 'The Foundational Era of Family Cinema',
    summary:
      'Anees Bhatti established the artistic bedrock of the family’s involvement in Pakistani filmmaking, instilling classical narrative discipline, visual composition, and respect for the director’s craft.',
    sections: [
      {
        heading: 'Biographical Overview & Directing Journey',
        body: [
          'As a film director in Pakistan’s classic and transitional cinema eras, Anees Bhatti approached storytelling with patience, precision, and deep reverence for dramatic performance and camera staging.',
          'Rather than treating filmmaking as isolated technical steps, he nurtured a family studio culture where script discipline, blocking, framing, and emotional rhythm worked in complete harmony.',
        ],
      },
      {
        heading: 'Family Film-Industry Heritage',
        body: [
          'The family’s cumulative 60+ years of association with Pakistani cinema, television, and music production traces directly to Anees Bhatti’s commitment to the craft.',
          'His work ethic and storytelling instincts formed the values passed directly to his son, Nauman Anees, and onward to his grandson, Daniyal Nauman.',
        ],
        highlight:
          'Historical details on this archive page are presented with strict respect for verified family history, without fabricated awards or unverified production credits.',
      },
      {
        heading: 'Influence on Future Generations',
        body: [
          'Every project developed under Nauman Anees Productions today honors Anees Bhatti’s belief that technology should always serve human emotion, cultural authenticity, and memorable cinema.',
        ],
      },
    ],
  },
  {
    slug: 'nauman-anees',
    route: '/legacy/nauman-anees',
    name: 'Nauman Anees',
    titleBadge: 'Second Generation',
    role: 'Film Director · Film Editor · VFX Artist · Animator · Post-Production Specialist · Creative Filmmaker',
    relationship: 'Father of Daniyal Nauman',
    headline: 'NAUMAN ANEES — THE CREATIVE VISIONARY',
    positioningStatement:
      'An accomplished filmmaker whose creative expertise extended across film direction, professional editing, visual effects, animation and post-production.',
    portrait: STUDIO_ASSETS.naumanAnees,
    portraitAlt: 'Official portrait of filmmaker Nauman Anees, Film Director, Editor, VFX Artist, and Animator',
    era: 'THE VISION BEHIND THE FRAME.',
    summary:
      'Nauman Anees bridged classic storytelling with modern visual craft—operating simultaneously as a Film Director, Film Editor, VFX Artist, Animator, Post-Production Specialist, and Creative Filmmaker across television dramas, feature films, and landmark music videos.',
    sections: [
      {
        heading: '01. His Early Journey',
        body: [
          'Raised within a filmmaking household guided by director Anees Bhatti, Nauman Anees developed an early fluency in how narrative cinema is built both on set and in the finishing suite.',
          'His creative journey combined directorial vision with hands-on mastery of picture rhythm, visual effects, and animation.',
        ],
      },
      {
        heading: '02. Film Direction & Film Editing',
        body: [
          'Nauman Anees stood out as a multi-disciplinary creative filmmaker—directing visual narratives while commanding the editing suite with rare precision.',
          'Associated across family industry history with 10+ films, including work connected to Heer Ranjha, he shaped pacing, continuity, and emotional impact from initial camera vision through final cut.',
        ],
      },
      {
        heading: '03. Television Productions',
        body: [
          'He worked on major PTV productions as well as projects associated with leading television networks, entrusted with comprehensive creative and post-production responsibilities on flagship serials.',
          'Across his body of television involvement, family records associate his craft with 50+ dramas.',
        ],
      },
      {
        heading: '04. Music & Music Videos',
        body: [
          'Alongside long-form film and television drama, Nauman Anees was deeply involved in the evolution of Pakistani music visual culture, associated with 200+ songs.',
          'He approached music videos as miniature cinema—uniting musical tempo, lighting design, visual effects, and rhythmic editing.',
        ],
      },
      {
        heading: '05. Green Screen, VFX, Animation & Technical Innovation',
        body: [
          'As a VFX Artist, Animator, and Post-Production Specialist, Nauman Anees embraced emerging digital tools to expand what Pakistani screens could imagine.',
          'Within family history, he is credited with pioneering green-screen techniques in Pakistani music-video production, with "Menu Mar Gaya" by AMZ noted as a signature example of that creative experimentation.',
        ],
        highlight:
          'Historical figures (50+ dramas, 200+ songs, 10+ films) and green-screen pioneer attribution reflect family-supplied historical records preserved faithfully without exaggeration.',
      },
      {
        heading: '06. Post-Production Legacy',
        body: [
          'Whether directing on the studio floor, compositing multi-layer VFX sequences, crafting animation, or supervising complete post-production pipelines, Nauman Anees proved that technical mastery and creative direction belong together.',
        ],
      },
      {
        heading: '07. Notable Work & Creative Footprint',
        body: [
          'His footprint spanned PTV and private-channel television dramas, cinema titles including Heer Ranjha, and over two hundred music productions—establishing the exacting creative standards that inspire the studio bearing his name.',
        ],
      },
      {
        heading: '08. His Influence on Daniyal Nauman',
        body: [
          'For his son Daniyal Nauman, Nauman Anees remains both creative mentor and enduring benchmark: a reminder that a true filmmaker understands every frame—from direction and cinematography to editing, VFX, animation, and sound.',
        ],
      },
    ],
    notableWorks: [
      'Heer Ranjha (film association)',
      'Major PTV & Television Network Productions (50+ dramas associated)',
      '"Menu Mar Gaya" by AMZ (family-credited green-screen music-video work)',
      '200+ Songs & Music Video Productions associated',
    ],
  },
  {
    slug: 'daniyal-nauman',
    route: '/legacy/daniyal-nauman',
    name: 'Daniyal Nauman',
    titleBadge: 'Third Generation',
    role: 'Founder · Creative Producer · Director',
    relationship: 'Founder of Nauman Anees Productions',
    headline: 'DANIYAL NAUMAN — THE NEXT GENERATION',
    positioningStatement:
      'Honouring the past and creating the future—leading Nauman Anees Productions as an integrated, international-grade one-stop media solution in Pakistan.',
    portrait: STUDIO_ASSETS.daniyalNauman,
    portraitAlt: 'Official portrait of Daniyal Nauman, Founder and Creative Director of Nauman Anees Productions',
    era: 'HONOURING THE PAST. CREATING THE FUTURE.',
    summary:
      'Carrying forward the directing heritage of Anees Bhatti and the multi-disciplinary creative vision of Nauman Anees, Daniyal Nauman founded Nauman Anees Productions to unite music production, cinema, post-production, VFX, animation, and artist development under one roof.',
    sections: [
      {
        heading: 'Honouring Three Generations of Craft',
        body: [
          'Growing up surrounded by film sets, editing suites, animation workstations, and recording studios gave Daniyal Nauman a holistic understanding of modern media production.',
          'His mission is to honor the integrity of his grandfather Anees Bhatti and his father Nauman Anees while elevating Pakistani production workflows to international luxury standards.',
        ],
      },
      {
        heading: 'Building the Next Era of Pakistani Cinema',
        body: [
          'Daniyal Nauman leads creative direction across sound, picture, and talent—bringing song production, music video direction, cinematic color grading, compositing, 2D/3D animation, television production, and artist management into one unified studio ecosystem.',
        ],
      },
    ],
    disciplines: [
      'Song Production',
      'Music Recording',
      'Mixing & Mastering',
      'Music Video Production',
      'Video Editing',
      'Color Grading',
      'VFX',
      'Compositing',
      '2D/3D Animation',
      'Green Screen',
      'Film Production',
      'Television Production',
      'Creative Direction',
      'Artist Development',
    ],
  },
];

export const MUSIC_SERVICES: SubServiceItem[] = [
  {
    id: 'music-recording',
    name: 'Music Recording',
    tagline: 'Acoustically tuned vocal & instrument tracking.',
    description:
      'Capture pristine vocal performances and acoustic or electric instrumentation through calibrated signal chains, vintage tube microphones, and attentive studio engineering.',
    benefits: [
      'Acoustically isolated vocal booth and live tracking environment',
      'Experienced recording engineer guiding pitch, takes, and dynamics',
      'High-resolution multitrack capture ready for modern mixing',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Analog-digital recording console and vocal booth at Nauman Anees Productions',
  },
  {
    id: 'music-production',
    name: 'Music Production',
    tagline: 'Full sonic architecture from concept to final arrangement.',
    description:
      'Transform a raw melody, voice memo, or lyric sheet into a radio-ready and cinema-worthy musical production tailored to your vocal tone and genre.',
    benefits: [
      'Custom beat design, live instrumentation, and orchestral layering',
      'Cohesive sonic identity aligned with contemporary Pakistani & global sound',
      'Collaborative creative direction throughout every production milestone',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Music production workstation with warm studio illumination',
  },
  {
    id: 'mixing-mastering',
    name: 'Mixing & Mastering',
    tagline: 'Clarity, depth, headroom, and streaming translation.',
    description:
      'Precision multitrack balancing, analog-style tonal sculpting, spatial depth, and loudness-calibrated mastering for Spotify, YouTube, cinema, and broadcast.',
    benefits: [
      'Balanced low-end punch and shimmering vocal presence',
      'Consistent loudness compliance across streaming platforms and club systems',
      'Delivered with master WAV, instrumental, and performance stems',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Audio mixing console and studio monitors for mastering',
  },
  {
    id: 'composition-arrangement',
    name: 'Composition & Arrangement',
    tagline: 'Original melodies, film scores, and harmonic structure.',
    description:
      'Bespoke musical composition and structural arrangement for singles, film soundtracks, television themes, and brand anthems.',
    benefits: [
      'Original melody creation rooted in Eastern & Western harmonic sensibilities',
      'Dynamic arrangement arcs built to sustain listener engagement',
      'Score adaptation for visual pacing in dramas, films, and commercials',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Studio environment for musical composition and arrangement',
  },
  {
    id: 'songwriting-lyrics',
    name: 'Songwriting & Lyrics',
    tagline: 'Poetic storytelling crafted for memorable hooks.',
    description:
      'Collaborative lyric writing in Urdu, Punjabi, Hindi, or English—shaping resonant themes, rhythmic meter, and unforgettable choruses.',
    benefits: [
      'Tailored lyrical voice matching the artist’s persona and audience',
      'Hook-driven phrasing engineered for vocal delivery',
      'Story alignment for narrative music videos and film OSTs',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Creative songwriting session in luxury music studio',
  },
  {
    id: 'vocal-editing-tuning',
    name: 'Vocal Editing & Tuning',
    tagline: 'Transparent pitch, timing, and breath refinement.',
    description:
      'Surgical vocal comping, timing alignment, de-essing, and natural pitch correction that preserves human emotion and vocal character.',
    benefits: [
      'Natural, artifact-free pitch refinement without robotic coloration',
      'Tight backing-vocal and harmony alignment',
      'Clean breath control and noise removal prior to final mix',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Vocal booth and editing console',
  },
  {
    id: 'audio-post-production',
    name: 'Audio Post-Production',
    tagline: 'Dialogue cleanup, Foley, sound design, and cinema surround.',
    description:
      'Complete audio finishing for films, dramas, commercials, and documentaries—including ADR, ambience layering, Foley, and broadcast loudness compliance.',
    benefits: [
      'Dialogue restoration and crystal-clear speech intelligibility',
      'Atmospheric cinema soundscapes and impact design',
      'Broadcast and theatrical stem deliverables',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Audio post-production suite',
  },
  {
    id: 'complete-song-production',
    name: 'Complete Song Production',
    tagline: 'End-to-end creation from lyrics and studio tracking to master release.',
    description:
      'Our flagship turnkey audio package: songwriting, composition, arrangement, studio vocal recording, tuning, full mixing, and final mastering under unified creative direction.',
    benefits: [
      'Single creative team guiding your song from demo to release master',
      'Seamless alignment if pairing with a Music Video Production package',
      'Transparent milestone scheduling and studio session booking',
    ],
    image: STUDIO_ASSETS.musicStudioConsole,
    imageAlt: 'Complete turnkey music production studio',
  },
];

export const MUSIC_DYNAMIC_FIELDS: DynamicFieldConfig[] = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
  { name: 'artistName', label: 'Artist / Stage Name', type: 'text', placeholder: 'Artist or band name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: true, placeholder: '+92 3XX XXXXXXX' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Pakistan' },
  { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Lahore / Karachi / Islamabad' },
  { name: 'songName', label: 'Song / Project Title', type: 'text', placeholder: 'Working title of your song' },
  {
    name: 'genre',
    label: 'Musical Genre',
    type: 'select',
    options: ['Pop', 'Sufi / Fusion', 'Hip-Hop / Rap', 'Rock / Indie', 'Film OST / Classical', 'R&B / Soul', 'Commercial Jingle', 'Other'],
  },
  { name: 'numberOfTracks', label: 'Number of Tracks / Songs', type: 'number', placeholder: '1' },
  {
    name: 'recordingRequirements',
    label: 'Recording Requirements',
    type: 'textarea',
    placeholder: 'Vocals only, live instruments, number of vocalists, or studio hours needed...',
    relevantServices: ['Music Recording', 'Complete Song Production', 'Audio Post-Production'],
  },
  {
    name: 'mixingRequirements',
    label: 'Mixing Requirements',
    type: 'textarea',
    placeholder: 'Track count, stem format, sonic references, or specific vocal balance notes...',
    relevantServices: ['Mixing & Mastering', 'Music Production', 'Vocal Editing & Tuning', 'Audio Post-Production', 'Complete Song Production'],
  },
  {
    name: 'masteringRequirements',
    label: 'Mastering Requirements',
    type: 'textarea',
    placeholder: 'Target platforms (Spotify, Apple Music, YouTube, Cinema) and deliverables...',
    relevantServices: ['Mixing & Mastering', 'Complete Song Production', 'Audio Post-Production'],
  },
  { name: 'referenceLinks', label: 'Reference Links (Optional)', type: 'url', placeholder: 'https://...' },
  { name: 'preferredDate', label: 'Preferred Studio / Consultation Date', type: 'date' },
  { name: 'deadline', label: 'Target Release / Delivery Deadline', type: 'date' },
  {
    name: 'budget',
    label: 'Estimated Budget',
    type: 'text',
    placeholder: 'e.g., PKR 75,000 or USD 500',
  },
  {
    name: 'additionalInformation',
    label: 'Project Information & Creative Notes',
    type: 'textarea',
    placeholder: 'Share your artistic vision, mood, or any specific expectations...',
  },
];

export const POST_PRODUCTION_SERVICES: SubServiceItem[] = [
  {
    id: 'video-editing',
    name: 'Video Editing',
    tagline: 'Narrative rhythm, continuity, and emotional precision.',
    description:
      'Editorial assembly for music videos, commercials, dramas, films, and digital campaigns—guided by the family editing legacy established by Nauman Anees.',
    benefits: [
      'Story-first pacing and rhythmic music-beat cutting',
      'Multi-camera synchronization and assembly workflows',
      'Clean XML/EDL handoff for grading and sound finishing',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: 'Professional film editing and timeline workstation',
  },
  {
    id: 'color-grading',
    name: 'Cinematic Color Grading',
    tagline: ' calibrated filmic LUTs, skin-tone fidelity, and theatrical mood.',
    description:
      'Shot-by-shot primary balancing and secondary look development on calibrated OLED reference displays to give your footage an unmistakable international cinema signature.',
    benefits: [
      'ACES and Rec.709 / HDR theatrical color pipelines',
      'Consistent exposure and skin-tone balance across cameras',
      'Bespoke show LUTs tailored to narrative emotion',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: 'Cinema color grading monitor and tactile control surface',
  },
  {
    id: 'vfx',
    name: 'Visual Effects (VFX)',
    tagline: 'Seamless digital environments, cleanup, and spectacle.',
    description:
      'Photorealistic set extensions, rig removal, atmospheric simulations, particle effects, and screen replacements built to serve cinematic storytelling.',
    benefits: [
      'Node-based compositing and 3D camera tracking',
      'Invisible cleanup, wire removal, and beauty retouching',
      'Production-supervised VFX planning from script to render',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: 'VFX node compositing monitor in dark suite',
  },
  {
    id: '2d-animation',
    name: '2D Animation',
    tagline: 'Expressive illustrated motion, character rigs, and title sequences.',
    description:
      'Hand-crafted 2D animation, explainer narratives, stylized music-video sequences, and kinetic brand storytelling.',
    benefits: [
      'Original art direction and storyboard development',
      'Smooth vector and frame-by-frame motion craft',
      'Broadcast and social-aspect deliverables',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: '2D and 3D animation finishing environment',
  },
  {
    id: '3d-animation',
    name: '3D Animation',
    tagline: 'Photorealistic 3D product renders, environments, and CGI.',
    description:
      'Three-dimensional modeling, lighting, texturing, and CGI animation for luxury brand commercials, film pre-visualization, and music video worlds.',
    benefits: [
      'Physically based lighting and material realism',
      'Product hero shots impossible with practical rigs alone',
      'High-resolution multi-pass EXR compositing integration',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: '3D animation and CGI rendering workstation',
  },
  {
    id: 'green-screen',
    name: 'Green Screen / Chroma Key',
    tagline: 'Clean key extraction, spill suppression, and edge fidelity.',
    description:
      'Honouring Nauman Anees’s pioneering green-screen legacy in Pakistan—precision chroma keying, hair/motion-blur preservation, and realistic background integration.',
    benefits: [
      'Clean matte extraction for fine hair, smoke, and translucent fabrics',
      'Accurate light-wrap and perspective matching',
      'Complete virtual-environment replacement',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: 'Chroma key and green screen compositing suite',
  },
  {
    id: 'compositing',
    name: 'Compositing',
    tagline: 'Multi-layer visual integration with seamless depth.',
    description:
      'Bringing live-action plates, CGI passes, matte paintings, lens grain, and atmospheric elements together into one believable photographic frame.',
    benefits: [
      'Depth-matched grain, optical aberrations, and atmospheric haze',
      'Multi-pass CG integration and rotoscoping',
      'Frame-accurate QA across 4K and cinema deliverables',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: 'Multi-layer VFX compositing pipeline',
  },
  {
    id: 'motion-graphics',
    name: 'Motion Graphics',
    tagline: 'Broadcast title packages, lower thirds, and kinetic typography.',
    description:
      'Luxury main-on-end film titles, television broadcast graphics, lyric videos, and sleek kinetic branding systems.',
    benefits: [
      'Custom typographic motion systems matching studio branding',
      'Editable broadcast templates and clean alpha deliverables',
      '4K and vertical social aspect adaptations',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: 'Motion graphics design workstation',
  },
  {
    id: 'visual-enhancement',
    name: 'Visual Enhancement',
    tagline: 'Upscaling, stabilization, restoration, and finishing polish.',
    description:
      'Noise reduction, optical stabilization, archival restoration, skin/wardrobe cleanup, and final mastering polish for legacy or challenging shoots.',
    benefits: [
      'Archival film and tape restoration with grain preservation',
      'Artifact and flicker removal under difficult lighting',
      'Consistent master delivery across theatrical and digital formats',
    ],
    image: STUDIO_ASSETS.videoPostVfx,
    imageAlt: 'Digital visual enhancement and finishing monitor',
  },
];

export const POST_PRODUCTION_DYNAMIC_FIELDS: DynamicFieldConfig[] = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: true, placeholder: '+92 3XX XXXXXXX' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Pakistan' },
  { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Lahore' },
  {
    name: 'projectType',
    label: 'Project Type',
    type: 'select',
    options: ['Music Video', 'TV Commercial / Ad', 'TV Drama Episode(s)', 'Feature / Short Film', 'Documentary / Brand Film', 'Social / Digital Content'],
  },
  { name: 'videoDuration', label: 'Expected Final Video Duration', type: 'text', placeholder: 'e.g., 4 minutes / 45 seconds' },
  {
    name: 'footageResolution',
    label: 'Source Footage Resolution',
    type: 'select',
    options: ['4K / UHD', '6K / 8K Cinema RAW', '1080p HD', 'Mixed Formats', 'Not Shot Yet / CGI Only'],
  },
  {
    name: 'frameRate',
    label: 'Frame Rate',
    type: 'select',
    options: ['24 fps (Cinema)', '25 fps (Broadcast PAL)', '30 fps', '50 / 60 fps', 'Mixed / Unknown'],
  },
  { name: 'numberOfClips', label: 'Approximate Number of Clips / Shots', type: 'number', placeholder: 'e.g., 25' },
  {
    name: 'outputFormat',
    label: 'Required Output Format',
    type: 'select',
    options: ['4K ProRes & H.264 Master', 'Cinema DCP / Mastering', 'Broadcast HD / UHD', 'Social Media Pack (16:9 + 9:16)', 'Alpha / EXR Passes'],
  },
  {
    name: 'editingDetails',
    label: 'Editing Requirements',
    type: 'textarea',
    placeholder: 'Cutting style, pacing, multicam sync, or assembly instructions...',
    relevantServices: ['Video Editing', 'Visual Enhancement'],
  },
  {
    name: 'colorGradingReferences',
    label: 'Color Grading Look & References',
    type: 'textarea',
    placeholder: 'Describe desired color palette (film emulation, warm tungsten, moody noir) or paste reference links...',
    relevantServices: ['Cinematic Color Grading', 'Visual Enhancement'],
  },
  {
    name: 'vfxRequirements',
    label: 'VFX / Green Screen / Compositing Requirements',
    type: 'textarea',
    placeholder: 'Shot count, green-screen plates, set extensions, rotoscoping, or cleanup scope...',
    relevantServices: ['Visual Effects (VFX)', 'Green Screen / Chroma Key', 'Compositing', 'Visual Enhancement'],
  },
  {
    name: 'animationRequirements',
    label: 'Animation / Motion Graphics Requirements',
    type: 'textarea',
    placeholder: '2D/3D style, character or product assets, title cards, duration...',
    relevantServices: ['2D Animation', '3D Animation', 'Motion Graphics'],
  },
  { name: 'sourceFootageLink', label: 'Source Footage / Rough Cut Link (Optional)', type: 'url', placeholder: 'https://drive.google.com/...' },
  { name: 'budget', label: 'Estimated Budget', type: 'text', placeholder: 'e.g., PKR 60,000' },
  { name: 'preferredDate', label: 'Preferred Start / Consultation Date', type: 'date' },
  { name: 'deadline', label: 'Delivery Deadline', type: 'date' },
  { name: 'additionalInformation', label: 'Additional Instructions', type: 'textarea', placeholder: 'Any extra technical or creative notes...' },
];

export const TALENT_DISCOVERY_CARDS: TalentCategoryCard[] = [
  {
    id: 'singer',
    cardTitle: 'Become a Singer',
    categoryValue: 'Singers',
    description: 'Vocalists across pop, classical, Sufi, folk, and contemporary genres ready for studio recording and stage.',
  },
  {
    id: 'actor',
    cardTitle: 'Become an Actor',
    categoryValue: 'Actors',
    description: 'Expressive screen performers for feature films, television dramas, commercials, and narrative music videos.',
  },
  {
    id: 'model',
    cardTitle: 'Become a Model',
    categoryValue: 'Models',
    description: 'Editorial, commercial, and music-video talent bringing poised screen presence to visual campaigns.',
  },
  {
    id: 'musician',
    cardTitle: 'Become a Musician',
    categoryValue: 'Musicians',
    description: 'Instrumentalists, session players, composers, and live performers elevating studio and stage productions.',
  },
  {
    id: 'dancer',
    cardTitle: 'Become a Dancer',
    categoryValue: 'Dancers',
    description: 'Choreographers and movement artists for cinema sequences, concerts, and high-energy music videos.',
  },
  {
    id: 'writer',
    cardTitle: 'Become a Writer',
    categoryValue: 'Writers',
    description: 'Screenwriters, drama storytellers, lyricists, and creative concept developers shaping original scripts.',
  },
  {
    id: 'director',
    cardTitle: 'Become a Director',
    categoryValue: 'Directors',
    description: 'Emerging visual storytellers and assistant directors eager to collaborate on sets and creative shoots.',
  },
  {
    id: 'creator',
    cardTitle: 'Join as a Content Creator',
    categoryValue: 'Content Creators',
    description: 'Digital storytellers, presenters, and on-camera personalities building original entertainment formats.',
  },
];

export const TALENT_APPLICATION_CATEGORIES = [
  'Singers',
  'Actors',
  'Models',
  'Musicians',
  'Dancers',
  'Writers',
  'Directors',
  'Content Creators',
  'Other Creative Talent',
] as const;

export const SERVICE_DIRECTORY = [
  {
    title: 'Music Production',
    route: '/services/music-production',
    category: 'Audio & Studio',
    summary: 'Recording, production, mixing & mastering, arrangement, songwriting, vocal tuning, and complete song production.',
    image: STUDIO_ASSETS.musicStudioConsole,
  },
  {
    title: 'Video Production',
    route: '/services/video-production',
    category: 'Flagship Music Videos',
    summary: 'End-to-end Music Video Production from concept, casting, and cinema camera direction to final theatrical delivery.',
    image: STUDIO_ASSETS.heroCinemaStudio,
  },
  {
    title: 'Video Post-Production',
    route: '/services/video-post-production',
    category: 'Editing · Grading · VFX · Animation',
    summary: 'Video editing, cinematic color grading, VFX, 2D & 3D animation, green screen, compositing, and motion graphics.',
    image: STUDIO_ASSETS.videoPostVfx,
  },
  {
    title: 'TV Commercials & Advertising',
    route: '/services/tv-commercials',
    category: 'Brand & Broadcast',
    summary: 'High-impact TVCs, digital campaigns, brand films, and product commercials engineered for audience recall.',
    image: STUDIO_ASSETS.filmDramaProduction,
  },
  {
    title: 'TV Dramas',
    route: '/services/tv-dramas',
    category: 'Television Serials',
    summary: 'Full-scale episodic production, multi-camera directing, post-production, and sound finishing for broadcast dramas.',
    image: STUDIO_ASSETS.filmDramaProduction,
  },
  {
    title: 'Films & Short Films',
    route: '/services/films',
    category: 'Narrative Cinema',
    summary: 'Feature films, festival short films, screenplay-to-screen production, VFX integration, and theatrical mastering.',
    image: STUDIO_ASSETS.heroCinemaStudio,
  },
  {
    title: 'Concerts & Artist Booking',
    route: '/events',
    category: 'Live Entertainment',
    summary: 'Curated artist & singer bookings from Pakistan and India for weddings, corporate galas, and live arena concerts.',
    image: STUDIO_ASSETS.artistBanner,
  },
] as const;

export const PORTFOLIO_DISCIPLINES = [
  {
    id: 'craft-direction',
    title: 'Cinema Direction & Narrative Sets',
    category: 'Film & Drama Production',
    description:
      'From foundational directing principles passed down by Anees Bhatti to modern anamorphic camera packages and full floor lighting rigs.',
    image: STUDIO_ASSETS.filmDramaProduction,
    route: '/services/films',
    ctaLabel: 'Explore Film Production',
  },
  {
    id: 'craft-post',
    title: 'Editorial Finishing, Color & VFX Suites',
    category: 'Post-Production & Animation',
    description:
      'Honouring Nauman Anees’s mastery across film direction, editing, visual effects, green screen, and animation with modern ACES grading pipelines.',
    image: STUDIO_ASSETS.videoPostVfx,
    route: '/services/video-post-production',
    ctaLabel: 'Explore Post-Production',
  },
  {
    id: 'craft-audio',
    title: 'Analog-Digital Music & Mastering Sanctuary',
    category: 'Music Production & OSTs',
    description:
      'Dedicated vocal booths, large-format mixing consoles, and end-to-end song production crafted for artists, dramas, and cinema soundtracks.',
    image: STUDIO_ASSETS.musicStudioConsole,
    route: '/services/music-production',
    ctaLabel: 'Explore Music Studio',
  },
  {
    id: 'craft-live',
    title: 'International Concert & Artist Management',
    category: 'Live Shows & Galas',
    description:
      'Bespoke artist booking bridging performers from Pakistan and India for landmark weddings, corporate showcases, and arena concerts.',
    image: STUDIO_ASSETS.artistBanner,
    route: '/events',
    ctaLabel: 'Explore Artist Booking',
  },
] as const;
