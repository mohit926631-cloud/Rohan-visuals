import { Project, Story, ServicePackage } from '../types';

export const PROFILE_INFO = {
  name: 'Rohan Visuals',
  tagline: 'Photographer & Visual Storyteller',
  location: 'Mumbai, India',
  email: 'hello@rohanvisuals.demo',
  phone: '+91 98901 23456',
  whatsappNumber: '919890123456',
  bioShort: 'Capturing unscripted human intimacy, poetic shadows, and the timeless vibrancy of India and beyond.',
  aboutLong: [
    'Rohan Visuals is a contemporary visual artist and documentary-editorial photographer based in Mumbai, India. Rooted in cinematic realism, his craft moves between intimate quietude and the kinetic pulse of Indian celebrations.',
    'Over eight years of wandering with a camera—from the mist-laden wharves of Sassoon Docks at 4:00 AM to the terracotta corridors of Rajasthani havelis—Rohan approaches every commission with deep emotional empathy and an obsession with natural light.',
    'Rather than orchestrating forced poses, his style relies on keen observational storytelling: lingering glances, the drape of silk in dusk breeze, the quiet anticipation before a ritual, and the raw poetry of everyday spaces.'
  ],
  philosophy: 'To photograph is to hold your breath for a fraction of a second while the universe aligns its shadows, geometry, and soul.',
  gear: [
    { item: 'Bodies', details: 'Sony A7R V & Leica M11 Rangefinder' },
    { item: 'Prime Glass', details: '35mm f/1.4 GM, 50mm f/1.2 GM, 85mm f/1.4 GM, Summilux 50mm' },
    { item: 'Film & Analog', details: 'Contax G2 with Portra 400 & Tri-X 400' },
    { item: 'Lighting', details: 'Profoto B10X Plus & A10 with natural diffusion' }
  ],
  stats: [
    { label: 'Years Behind The Lens', value: '8+' },
    { label: 'Documented Celebrations', value: '140+' },
    { label: 'Destinations Explored', value: '22+' },
    { label: 'Photographic Frames', value: '250k+' }
  ]
};

export const PROJECTS: Project[] = [
  // PORTRAITS
  {
    id: 'soul-of-bandra',
    title: 'Soul of Bandra: Golden Hour Monologues',
    subtitle: 'Intimate character studies framed against vintage Portuguese quarters',
    category: 'portraits',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
    location: 'Bandra West, Mumbai',
    year: '2025',
    clientOrContext: 'Independent Portrait Study',
    description: 'An ongoing character exploration exploring the juxtaposition of fading heritage architecture and modern youth in Bandra. Captured exclusively using 4:30 PM natural sunlight bouncing off aged ochre facades.',
    cameraSpecs: 'Leica M11 · 50mm f/1.4 Summilux · Natural Reflected Sunlight',
    featured: true,
    images: [
      {
        id: 'sob-1',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
        title: 'Gaze into Ochre',
        caption: 'Late afternoon amber glow filtering through colonial wooden shutters.',
        location: 'Ranwar Village, Bandra',
        cameraInfo: '50mm · f/1.4 · 1/800s · ISO 100',
        aspectRatio: 'portrait'
      },
      {
        id: 'sob-2',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85',
        title: 'The Silent Writer',
        caption: 'Quiet contemplation in a secluded seaside verandah.',
        location: 'Carter Road, Bandra',
        cameraInfo: '85mm · f/1.8 · 1/500s · ISO 200',
        aspectRatio: 'portrait'
      },
      {
        id: 'sob-3',
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=85',
        title: 'Wind & Raw Linen',
        caption: 'Natural breeze off the Arabian Sea framing delicate movement.',
        location: 'Bandstand Promenade',
        cameraInfo: '35mm · f/1.4 · 1/1200s · ISO 100',
        aspectRatio: 'portrait'
      },
      {
        id: 'sob-4',
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=85',
        title: 'Shadow Lines',
        caption: 'Geometric shadow cast by antique wrought-iron balconies.',
        location: 'Pali Hill, Mumbai',
        cameraInfo: '50mm · f/2.0 · 1/640s · ISO 160',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: 'shadows-and-silk',
    title: 'Shadows & Silk: Modern Nostalgia',
    subtitle: 'A quiet tribute to monochrome textures and traditional handloom',
    category: 'portraits',
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85',
    location: 'Colaba, South Mumbai',
    year: '2024',
    clientOrContext: 'Creative Portrait Series',
    description: 'Studying the tactile poetry between woven mulberry silk and dramatic chiaroscuro studio lighting. Every curve of the fabric echoes ancestral craftsmanship.',
    cameraSpecs: 'Sony A7R V · 85mm f/1.4 GM · Single Octabox with Honeycomb Grid',
    images: [
      {
        id: 'sas-1',
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85',
        title: 'Chiaroscuro Silhouette',
        caption: 'High-contrast studio lighting highlighting silk folds.',
        location: 'South Mumbai Studio',
        cameraInfo: '85mm · f/2.8 · 1/250s · ISO 100',
        aspectRatio: 'portrait'
      },
      {
        id: 'sas-2',
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=85',
        title: 'Emerald Serenity',
        caption: 'Subtle reflections across textured handwoven organza.',
        location: 'South Mumbai Studio',
        cameraInfo: '50mm · f/1.8 · 1/200s · ISO 100',
        aspectRatio: 'portrait'
      },
      {
        id: 'sas-3',
        url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1600&q=85',
        title: 'Monochrome Dignity',
        caption: 'Rich depth in tonal black and white grading.',
        location: 'South Mumbai Studio',
        cameraInfo: '85mm · f/2.0 · 1/200s · ISO 100',
        aspectRatio: 'portrait'
      }
    ]
  },

  // WEDDINGS
  {
    id: 'royal-courtyard-udaipur',
    title: 'The Royal Courtyard: Udaipur Vows',
    subtitle: 'An intimate sunset wedding over Lake Pichola',
    category: 'weddings',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
    location: 'Udaipur, Rajasthan',
    year: '2025',
    clientOrContext: 'Private Heritage Wedding',
    description: 'Documenting a three-day celebration where centuries-old marble archways and flickering candlelit mashaals framed tender, unscripted vows between two kindred souls.',
    cameraSpecs: 'Sony A7R V (Dual Rig) · 35mm f/1.4 & 85mm f/1.4 GM · Ambient Candlelight & Tungsten',
    featured: true,
    images: [
      {
        id: 'rcu-1',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
        title: 'The Golden Phere',
        caption: 'Sacred embers rising as the couple completes their final circumambulation.',
        location: 'Jagmandir Courtyard, Udaipur',
        cameraInfo: '35mm · f/1.4 · 1/200s · ISO 1600',
        aspectRatio: 'landscape'
      },
      {
        id: 'rcu-2',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
        title: 'Marigold Canopy',
        caption: 'Overhead view of fragrant floral mandap suspended over Lake Pichola.',
        location: 'Lake Palace Ghats',
        cameraInfo: '24mm · f/2.0 · 1/500s · ISO 200',
        aspectRatio: 'landscape'
      },
      {
        id: 'rcu-3',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
        title: 'Veiled Emotions',
        caption: 'The bride sharing a quiet, tearful embrace with her grandmother before the baraat.',
        location: 'Havelis of Udaipur',
        cameraInfo: '85mm · f/1.4 · 1/400s · ISO 800',
        aspectRatio: 'portrait'
      },
      {
        id: 'rcu-4',
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85',
        title: 'Midnight Revelry',
        caption: 'Spontaneous laughter under cascading brass chandeliers.',
        location: 'Zenana Mahal, Udaipur',
        cameraInfo: '35mm · f/1.6 · 1/160s · ISO 3200',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'coastal-vows-alibaug',
    title: 'Salt Spray & Saffron: Alibaug Seaside Union',
    subtitle: 'Minimalist coastal wedding amidst swaying coconut groves',
    category: 'weddings',
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85',
    location: 'Awas Beach, Alibaug',
    year: '2024',
    clientOrContext: 'Intimate Coastal Celebration',
    description: 'Barefoot vows at low tide. We eschewed traditional formal staging to capture the raw organic rhythm of family gathered by the Arabian Sea.',
    cameraSpecs: 'Contax G2 & Sony A7R V · 45mm Planar & 35mm GM · Golden Hour Sea Light',
    images: [
      {
        id: 'cva-1',
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85',
        title: 'Dusk on the Sand',
        caption: 'Barefoot walk along the tideline as the sun sinks into the horizon.',
        location: 'Awas Beach, Alibaug',
        cameraInfo: '35mm · f/1.8 · 1/1000s · ISO 100',
        aspectRatio: 'landscape'
      },
      {
        id: 'cva-2',
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85',
        title: 'Floral Arch & Driftwood',
        caption: 'Earthy coastal floral design blending with native sea grasses.',
        location: 'Private Villa, Alibaug',
        cameraInfo: '50mm · f/2.0 · 1/640s · ISO 100',
        aspectRatio: 'landscape'
      },
      {
        id: 'cva-3',
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=85',
        title: 'Unscripted Joy',
        caption: 'Laughter during the exchange of rings under open skies.',
        location: 'Alibaug Coast',
        cameraInfo: '85mm · f/1.4 · 1/800s · ISO 125',
        aspectRatio: 'portrait'
      }
    ]
  },

  // TRAVEL
  {
    id: 'varanasi-dawn-ghats',
    title: 'Varanasi: Dawn on the Sacred Ghats',
    subtitle: 'Morning mist, rowing oars, and spiritual awakening along the Ganges',
    category: 'travel',
    coverImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=85',
    location: 'Varanasi, Uttar Pradesh',
    year: '2025',
    clientOrContext: 'Documentary Visual Essay',
    description: 'Documenting the hypnotic dawn routine on the ancient ghats of Kashi. The river awakens in shades of lapis lazuli and saffron smoke, defying the passage of centuries.',
    cameraSpecs: 'Leica M11 · 35mm f/1.4 Summilux · Dawn Mist & River Reflections',
    featured: true,
    images: [
      {
        id: 'vdg-1',
        url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=85',
        title: 'The Silent Oarsman',
        caption: 'Gliding past Dashashwamedh Ghat just as the first chant resonates.',
        location: 'Ganges River, Varanasi',
        cameraInfo: '35mm · f/2.0 · 1/320s · ISO 400',
        aspectRatio: 'landscape'
      },
      {
        id: 'vdg-2',
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
        title: 'Devotion in Smoke',
        caption: 'A priest performing the early morning Surya Arghya ritual.',
        location: 'Assi Ghat, Varanasi',
        cameraInfo: '50mm · f/1.4 · 1/500s · ISO 250',
        aspectRatio: 'portrait'
      },
      {
        id: 'vdg-3',
        url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85',
        title: 'Alleyways of Time',
        caption: 'Sunbeams penetrating the narrow stone galis of the old city.',
        location: 'Old City, Varanasi',
        cameraInfo: '28mm · f/2.8 · 1/160s · ISO 800',
        aspectRatio: 'portrait'
      },
      {
        id: 'vdg-4',
        url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85',
        title: 'Flock at Daybreak',
        caption: 'Migratory seagulls taking flight against the crimson sunrise.',
        location: 'Kashi Riverfront',
        cameraInfo: '85mm · f/2.2 · 1/1600s · ISO 200',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'ladakh-silent-highlands',
    title: 'Ladakh: The Silent Highlands',
    subtitle: 'Glacial solitude and monastic shadows at 14,000 feet',
    category: 'travel',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85',
    location: 'Leh & Nubra Valley, Ladakh',
    year: '2024',
    clientOrContext: 'Himalayan Landscape Anthology',
    description: 'A visual meditation on the stark Himalayan desert where clouds sculpt shadows across ancient monasteries perched atop knife-edge ridges.',
    cameraSpecs: 'Sony A7R V · 24-70mm f/2.8 GM II · Polarized Highland Daylight',
    images: [
      {
        id: 'lsh-1',
        url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85',
        title: 'Ridge of Prayer',
        caption: 'Diskit Monastery standing sentinel over the braided Nubra riverbeds.',
        location: 'Nubra Valley, Ladakh',
        cameraInfo: '50mm · f/8.0 · 1/500s · ISO 100',
        aspectRatio: 'landscape'
      },
      {
        id: 'lsh-2',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
        title: 'Tso Moriri Waters',
        caption: 'Crystal reflections of snow-dusted peaks in alpine stillness.',
        location: 'Changthang Plateau',
        cameraInfo: '35mm · f/5.6 · 1/800s · ISO 100',
        aspectRatio: 'landscape'
      },
      {
        id: 'lsh-3',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85',
        title: 'High Altitude Pass',
        caption: 'Prayer flags whipping violently against the mountain gale.',
        location: 'Khardung La, 17,982 ft',
        cameraInfo: '24mm · f/4.0 · 1/2000s · ISO 100',
        aspectRatio: 'landscape'
      }
    ]
  },

  // EDITORIAL
  {
    id: 'neon-monsoon-mumbai',
    title: 'Neon Monsoon: Cyber City Nocturne',
    subtitle: 'Reflections of streetlights on rain-slicked asphalt in South Mumbai',
    category: 'editorial',
    coverImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85',
    location: 'Marine Drive & Fort, Mumbai',
    year: '2025',
    clientOrContext: 'Urban Editorial Series',
    description: 'Exploring the cinematic mood of Mumbai when the heavy July monsoon blankets the city in glowing amber streetlights, taxi taillights, and misty haze.',
    cameraSpecs: 'Sony A7R V · 35mm f/1.4 GM · Available Wet Night Light',
    featured: true,
    images: [
      {
        id: 'nmm-1',
        url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85',
        title: 'Queen’s Necklace in Downpour',
        caption: 'The sweeping curve of Marine Drive glistening under neon lamplight.',
        location: 'Marine Drive, Mumbai',
        cameraInfo: '35mm · f/1.4 · 1/80s · ISO 1600',
        aspectRatio: 'landscape'
      },
      {
        id: 'nmm-2',
        url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1600&q=85',
        title: 'The Yellow Cab Wait',
        caption: 'Premier Padmini silhouette in pouring rain outside Churchgate station.',
        location: 'Fort Precinct, Mumbai',
        cameraInfo: '50mm · f/1.2 · 1/125s · ISO 2000',
        aspectRatio: 'landscape'
      },
      {
        id: 'nmm-3',
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85',
        title: 'Umbrella Solitude',
        caption: 'A pedestrian stepping through cascading puddles on Horniman Circle.',
        location: 'Ballard Estate, Mumbai',
        cameraInfo: '85mm · f/1.4 · 1/160s · ISO 1250',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: 'handloom-heritage-weaves',
    title: 'Chanderi & Indigo: The Artisan Thread',
    subtitle: 'Celebrating slow fashion, natural dyes, and geometric silhouettes',
    category: 'editorial',
    coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
    location: 'Kala Ghoda Art District, Mumbai',
    year: '2024',
    clientOrContext: 'Sustainable Fashion Editorial',
    description: 'An editorial tribute honoring the tactile texture of indigo-dyed khadi and raw silk against the limestone facades of South Mumbai’s heritage quarter.',
    cameraSpecs: 'Leica M11 · 50mm f/1.4 Summilux · Soft Overcast Sky',
    images: [
      {
        id: 'hhw-1',
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
        title: 'The Indigo Drapery',
        caption: 'Fluid drape of natural dyed textile against classical stone arches.',
        location: 'Kala Ghoda, Mumbai',
        cameraInfo: '50mm · f/2.0 · 1/400s · ISO 100',
        aspectRatio: 'portrait'
      },
      {
        id: 'hhw-2',
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=85',
        title: 'Golden Zari Edge',
        caption: 'Intricate gold wire embroidery catching directional studio strobe.',
        location: 'Studio Kala, Mumbai',
        cameraInfo: '85mm · f/2.8 · 1/200s · ISO 100',
        aspectRatio: 'portrait'
      },
      {
        id: 'hhw-3',
        url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=85',
        title: 'Earthy Symmetry',
        caption: 'Minimalist composition balancing warm ochre and deep indigo.',
        location: 'Ballard Bunder, Mumbai',
        cameraInfo: '35mm · f/2.2 · 1/640s · ISO 100',
        aspectRatio: 'landscape'
      }
    ]
  },

  // EVENTS
  {
    id: 'indie-sound-biennale',
    title: 'Sound & Soul: Mumbai Indie Music Nights',
    subtitle: 'Sweat, neon beams, and raw auditory euphoria in warehouse acoustics',
    category: 'events',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    location: 'Lower Parel Mills, Mumbai',
    year: '2025',
    clientOrContext: 'Live Music & Culture Festival',
    description: 'Documenting the visceral energy of Mumbai’s underground indie music scene. Fast shutter captures frozen bass drops, smoke beams, and ecstatic crowd waves.',
    cameraSpecs: 'Sony A7R V · 24mm f/1.4 GM & 85mm f/1.4 GM · Concert Stage Lighting',
    images: [
      {
        id: 'isb-1',
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
        title: 'Stage in Crimson',
        caption: 'Lead guitarist lost in a solo as laser beams cut through stage haze.',
        location: 'The Great Eastern Mills, Mumbai',
        cameraInfo: '24mm · f/1.4 · 1/500s · ISO 3200',
        aspectRatio: 'landscape'
      },
      {
        id: 'isb-2',
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85',
        title: 'Euphoria in the Pit',
        caption: 'Hundreds of raised hands illuminated by cold cyan spotlights.',
        location: 'Lower Parel, Mumbai',
        cameraInfo: '35mm · f/1.8 · 1/400s · ISO 2500',
        aspectRatio: 'landscape'
      },
      {
        id: 'isb-3',
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85',
        title: 'Vinyl & Groove',
        caption: 'DJ spinning analog vinyl at the after-hours warehouse loft.',
        location: 'Mathuradas Mills Compound',
        cameraInfo: '50mm · f/1.4 · 1/250s · ISO 1600',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'kala-ghoda-art-gala',
    title: 'Sculpted Shadows: The Contemporary Art Gala',
    subtitle: 'An evening of installation art, curators, and avant-garde patrons',
    category: 'events',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85',
    location: 'Jehangir Art Gallery & NGMA, Mumbai',
    year: '2024',
    clientOrContext: 'Private Art Fair & Vernissage',
    description: 'Documenting the dialogue between large-scale contemporary sculptures and the quiet, observant patrons wandering through cavernous gallery spaces.',
    cameraSpecs: 'Leica M11 · 35mm f/1.4 Summilux · Ambient Museum Track Lighting',
    images: [
      {
        id: 'kga-1',
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85',
        title: 'The Vernissage Conversation',
        caption: 'Curator explaining a bronze casting to a circle of collectors.',
        location: 'Kala Ghoda Precinct',
        cameraInfo: '35mm · f/2.0 · 1/125s · ISO 800',
        aspectRatio: 'landscape'
      },
      {
        id: 'kga-2',
        url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=85',
        title: 'Abstract Illumination',
        caption: 'A solitary observer reflected in a suspended kinetic light installation.',
        location: 'NGMA Mumbai',
        cameraInfo: '50mm · f/1.4 · 1/200s · ISO 640',
        aspectRatio: 'landscape'
      },
      {
        id: 'kga-3',
        url: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=1600&q=85',
        title: 'Champagne & Canvas',
        caption: 'Candid laughter during the opening toast in the courtyard.',
        location: 'David Sassoon Library Garden',
        cameraInfo: '85mm · f/1.8 · 1/320s · ISO 1000',
        aspectRatio: 'portrait'
      }
    ]
  }
];

export const STORIES: Story[] = [
  {
    id: 'fishermen-sassoon-docks',
    title: "The Fishermen of Sassoon Docks: Mumbai's Blue Hour",
    subtitle: 'A dawn documentary on diesel mist, sea salt, and the Koli seafaring spirit',
    location: 'Colaba, South Mumbai',
    date: 'Autumn 2025',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85',
    summary: 'Before the rest of Mumbai stirs, Sassoon Docks awakens into an intense choreography of wooden trawlers, crushed ice, and generational resilience.',
    quote: 'The ocean does not care about deadlines. It only answers to the tide and the quiet courage of those who set sail before the sun.',
    narrative: [
      'At 3:45 AM, the air around South Mumbai’s oldest wet dock is thick with the scent of diesel fuel, damp teakwood, and the raw salinity of the Arabian Sea.',
      'Generations of the indigenous Koli community have anchored here. As the dark sky begins to shift into bruised indigo, the wooden boats—painted in vibrant cobalt and turmeric yellows—knock gently against the stone piers.',
      'Women with silver ankle chains and crisp cotton saris wield wicker baskets with effortless precision, inspecting the catch with eyes trained by decades of dawn auctions. There is no artificial staging here; only the sublime rhythm of human survival and dignity.',
      'Photographing at Sassoon Docks requires patience and respect. In the deep blue hour, long shadows merge with the steam of roadside chai kettles, turning every candid interaction into a timeless painting.'
    ],
    gallery: [
      {
        id: 'story-sd-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85',
        title: 'Unloading the Trawlers',
        caption: 'Baskets of silver pomfret hauled ashore in the first light of day.',
        location: 'Sassoon Docks Pier 2',
        cameraInfo: '35mm · f/1.8 · 1/160s · ISO 1250'
      },
      {
        id: 'story-sd-2',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
        title: 'Tide Awakening',
        caption: 'Misty horizon as fishing boats return from overnight deep-sea voyages.',
        location: 'Arabian Sea off Mumbai',
        cameraInfo: '50mm · f/2.8 · 1/500s · ISO 200'
      },
      {
        id: 'story-sd-3',
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=85',
        title: 'The Chai Pause',
        caption: 'A boat captain taking his first sip of cutting chai as the sun crests the dockyard cranes.',
        location: 'Colaba Waterfront',
        cameraInfo: '85mm · f/1.4 · 1/320s · ISO 800'
      }
    ]
  },
  {
    id: 'winter-in-spiti',
    title: 'Winter in Spiti: Echoes of the White Valley',
    subtitle: 'Sub-zero stillness, monastic prayer flags, and dramatic mountain textures',
    location: 'Spiti Valley, Himachal Pradesh',
    date: 'Winter Expedition',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
    summary: 'When temperatures plunge to minus twenty degrees, the Middle Land transforms into a stark, crystalline sanctuary of quiet introspection.',
    quote: 'In Spiti, silence is not the absence of sound. It is a presence so profound that you can hear your own thoughts settling like fresh powder.',
    narrative: [
      'Reaching Spiti in mid-January is an exercise in surrender. The roads are carved out of sheer black ice, and the air is so thin and crisp that every breath feels sacred.',
      'Key Monastery rises like a fortress from a frozen hillside, its whitewashed mud walls glistening under the stark alpine sun. Inside the prayer halls, butter lamps cast warm amber glows across sacred thangka tapestries.',
      'My camera batteries had to be kept inside thermal layers next to my chest. The metallic body of the camera was cold enough to bite through light gloves, yet the quality of highland light at 13,000 feet—free of humidity or atmospheric dust—was unlike anything I had ever witnessed.',
      'This photo series is an homage to the resilience of the mountain folk who live in profound harmony with these unforgiving peaks.'
    ],
    gallery: [
      {
        id: 'story-sp-1',
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
        title: 'Key Monastery in Snow',
        caption: 'Centuries-old Tibetan monastery standing resolute amidst snow-swept cliffs.',
        location: 'Key Village, Spiti',
        cameraInfo: '35mm · f/5.6 · 1/1000s · ISO 100'
      },
      {
        id: 'story-sp-2',
        url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=85',
        title: 'The Frozen Riverbed',
        caption: 'Spiti River locked under ribbons of turquoise ice.',
        location: 'Kaza Valley',
        cameraInfo: '24mm · f/8.0 · 1/640s · ISO 100'
      },
      {
        id: 'story-sp-3',
        url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1600&q=85',
        title: 'Red Robe on White',
        caption: 'A young monk traversing the courtyard under a sky of saturated cobalt.',
        location: 'Tabo Monastery',
        cameraInfo: '85mm · f/2.0 · 1/1200s · ISO 100'
      }
    ]
  },
  {
    id: 'rajputana-union-samode',
    title: 'A Royal Rajputana Union: An Intimate Jaipur Palace Celebration',
    subtitle: 'Candlelit corridors, marigold cascades, vintage velvet lehengas, and emotional moments',
    location: 'Samode Palace, Rajasthan',
    date: 'Spring 2025',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
    summary: 'Step behind the sandstone archways of an authentic Rajasthani palace where history and raw modern devotion met in an unforgettable three-day celebration.',
    quote: 'A great wedding photograph does not boast about the grandeur of the venue; it preserves the nervous tremor in a father’s hands as he gives away his child.',
    narrative: [
      'The Sheesh Mahal at Samode is covered in millions of convex glass mirrors, each reflecting a single flicker of candlelight into a thousand tiny stars. When the bride stepped into the hall for her bridal portraits, the atmosphere turned electric.',
      'Rather than relying on intrusive high-powered flashes that destroy the historic ambience, we worked entirely with existing candlelight and small wireless softboxes with warm grids.',
      'From the ecstatic frenzy of the dholak during the sangeet to the hush of the early morning vidai when even the royal peacocks seemed to pause, this story is about authentic human connection wrapped in heritage beauty.'
    ],
    gallery: [
      {
        id: 'story-rj-1',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
        title: 'The Hall of Mirrors',
        caption: 'Bridal portrait reflected across four hundred years of mirrored mosaic.',
        location: 'Samode Sheesh Mahal',
        cameraInfo: '50mm · f/1.4 · 1/200s · ISO 1600'
      },
      {
        id: 'story-rj-2',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
        title: 'The Sacred Fire',
        caption: 'Tender glances as the holy mantras are chanted into the night.',
        location: 'Central Courtyard',
        cameraInfo: '35mm · f/1.4 · 1/160s · ISO 2000'
      },
      {
        id: 'story-rj-3',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
        title: 'The Vidai Whisper',
        caption: 'A quiet, heartfelt tear shared between mother and daughter before departure.',
        location: 'Palace Gateway',
        cameraInfo: '85mm · f/1.4 · 1/400s · ISO 1000'
      }
    ]
  }
];

export const SERVICES: ServicePackage[] = [
  {
    id: 'portrait-sessions',
    title: 'Portrait Sessions',
    tagline: 'Authentic character studies, editorial profiles & creative portfolios',
    category: 'Portraits',
    investment: 'Starting from ₹28,000',
    duration: '2 to 3 Hours on location or studio',
    idealFor: 'Artists, creative directors, actors, entrepreneurs & intimate couples',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Pre-shoot moodboard & wardrobe consultation',
      '25 to 35 masterfully retouched high-resolution digital frames',
      'Full private online gallery with 2-year cloud hosting',
      'Print rights release for editorial and personal publication',
      'Turnaround within 10 business days'
    ]
  },
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    tagline: 'Documentary storytelling for multi-day celebrations & intimate unions',
    category: 'Weddings',
    investment: 'Starting from ₹1,40,000 / Day',
    duration: 'Full-day coverage (Pre-wedding, Rituals, Afterparty)',
    idealFor: 'Couples seeking candid, emotive storytelling free from staged stiffness',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Lead coverage by Rohan with associate documentary second shooter',
      '350+ signature graded high-res photographs per celebration day',
      'Same-week highlight reel preview (40 curated photos)',
      'Handcrafted linen-bound fine art keepsake album (40 pages)',
      'Raw footage & analog 35mm film roll scans included on bespoke USB drive'
    ]
  },
  {
    id: 'brand-photography',
    title: 'Brand Photography',
    tagline: 'Lookbooks, architectural spaces, culinary arts & luxury lifestyle',
    category: 'Brand & Commercial',
    investment: 'Starting from ₹65,000 / Half-day',
    duration: 'Half-day or multi-day campaign production',
    idealFor: 'Design studios, boutique hotels, apparel labels & artisanal brands',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Comprehensive creative direction & lighting setup',
      'Color-calibrated digital assets for web, billboard & social print runs',
      'Commercial usage licensing for digital and global print',
      'Express asset delivery for campaign launches within 7 days',
      'Tethered live monitor preview for on-set creative team review'
    ]
  },
  {
    id: 'event-photography',
    title: 'Event Photography',
    tagline: 'Cultural galas, private soirées, live music & gallery vernissages',
    category: 'Events',
    investment: 'Starting from ₹42,000 / Event',
    duration: 'Up to 6 hours continuous coverage',
    idealFor: 'Art foundations, concert organizers, brand launches & private galas',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Unobtrusive candid coverage of key guests, atmosphere and performances',
      '150 to 250 fully color-corrected high-resolution images',
      'Next-morning social media press preview package (20 frames)',
      'Full private VIP download portal for attendees & media team'
    ]
  }
];
