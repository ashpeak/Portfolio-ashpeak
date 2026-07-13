export const personalInfo = {
  name: "Ashish Singh",
  initials: "AK",
  handle: "ashpeak",
  title: "Full-Stack Developer",
  bio: "I build scalable web products end-to-end — from clean APIs to polished UIs. Based in India, obsessing over performance, DX, and the details that make software feel right.",
  location: "Dadri, Uttar Pradesh, India",
  email: "kumarvns130@gmail.com",
  github: "https://github.com/ashpeak",
  linkedin: "https://www.linkedin.com/in/ashpeak/",
  instagram: "https://www.instagram.com/_.singhashish/",
  x: "https://x.com/ashishs61",
  resume: "/resume.pdf",
  available: true
}

export const roles = ['Full-Stack Developer', 'Solo Builder', 'Product Engineer', 'Open Source Contributor']



export const experience = [
  {
    id: '01',
    role: 'Freelance Full-Stack Developer',
    company: 'Fitsheets',
    type: 'ECOM',
    period: 'Jul 2023 — Nov 2023',
    bullets: [
      'Led development team to deliver scalable website',
      'Built front-end and back-end with Next.js, Node.js, Express, MongoDB, Redis',
      'Implemented secure payment gateway (Easebuzz)',
      'Integrated analytics and notifications'
    ],
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Easebuzz', 'Twilio']
  },
  {
    id: '02',
    role: 'Freelance Full-Stack Developer',
    company: 'CVTPL',
    type: 'NDA',
    period: 'Jan 2026 — June 2026',
    bullets: [
      'Developed full-stack web applications and architectures.',
      'Specific project details and features are confidential under NDA.',
    ],
    stack: []
  },
  {
    id: '03',
    role: 'Founder / Builder',
    company: 'Shattermoon',
    type: 'Startup',
    period: '2023 — Present',
    bullets: [
      'Building Shattermoon — App & Game Studio',
      'Crafting innovative games and applications that blend artistry and technology',
    ],
    stack: ['Next.js', 'Hono', 'PostgreSQL', 'Drizzle ORM', 'Better Auth', 'Vertex AI']
  }
]

export const projects = [
  {
    id: '0',
    name: 'MeetLog',
    desc: 'AI Meeting Intelligence — convert audio/transcripts to actionable insights',
    stack: ['Next.js 16', 'Express', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'BullMQ', 'Gemini AI'],
    live: 'https://meetlog.ashpeak.me',
    github: 'https://github.com/ashpeak/MeetLog.git',
    featured: true,
  },
  {
    id: '1',
    name: 'TheFitsheets',
    desc: 'Enterprise E-commerce platform with payments, analytics, and notifications',
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS'],
    live: 'https://fitsheets.kubacreatives.in',
    featured: true,
  },
  {
    id: '2',
    name: 'Blink.ai',
    desc: 'AI-powered video creation using scripts, APIs, cloud editing',
    stack: ['React', 'Node.js', 'FFmpeg', 'Gemini AI'],
    live: 'https://blink-ai.vercel.app/',
    github: 'https://github.com/ashpeak/lizard-ai',
    featured: true,
  },
  {
    id: '3',
    name: 'SpunkAI',
    desc: 'Mobile-native AI coach marketplace and assistant app',
    stack: ['React Native', 'Expo', 'Tamagui', 'Node.js', 'Hono', 'Supabase', 'PostgreSQL', 'Vertex AI'],
    github: 'https://github.com/ashpeak/SpunkAI',
    live: '#',
    featured: false,
  },
  {
    id: '4',
    name: 'MingChat',
    desc: 'Real-time chat platform with 1-on-1 and groups',
    stack: ['Next.js', 'Socket.io', 'Redis', 'Express'],
    github: 'https://github.com/ashpeak/chat-arena',
    featured: true,
  },
  {
    id: '5',
    name: 'Braintube',
    desc: 'Full-stack Ed-Tech Platform from scratch',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    live: 'https://braintube.kubacreatives.in/',
    featured: false,
  }
]
