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
  telegram: "https://t.me/AshishDogo",
  resume: "/resume.pdf",
  available: true
}

export const roles = ['Full-Stack Developer', 'Solo Builder', 'Product Engineer', 'Open Source Contributor']

export const skills = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'shadcn/ui', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Hono', category: 'Backend' },
  { name: 'Bun', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Drizzle ORM', category: 'Tools' },
  { name: 'Prisma', category: 'Tools' },
  { name: 'Zustand', category: 'Frontend' },
  { name: 'Socket.io', category: 'Backend' },
  { name: 'Vertex AI', category: 'Tools' },
  { name: 'Gemini', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
]

export const experience = [
  {
    id: '01',
    role: 'Full-Stack Developer',
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
    role: 'Full-Stack Developer',
    company: 'Braintube',
    type: 'EDU',
    period: 'Mar 2022 — Dec 2022',
    bullets: [
      'Designed and built full-stack ed-tech platform from scratch',
      'Features: user auth, course enrollment, note-making, responsive design',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io']
  },
  {
    id: '03',
    role: 'Freelance / Personal Projects',
    company: 'Self',
    type: 'Indie',
    period: '2023 — Present',
    bullets: [
      'Building startupideadb.com — startup ideas aggregation platform',
      'Solo builder: Next.js frontend, Hono/Node.js backend, PostgreSQL, Vertex AI',
    ],
    stack: ['Next.js', 'Hono', 'PostgreSQL', 'Drizzle ORM', 'Better Auth', 'Vertex AI']
  }
]

export const projects = [
  {
    id: '1',
    name: 'startupideadb.com',
    desc: 'Startup ideas aggregation platform with AI enrichment',
    stack: ['Next.js', 'Hono', 'PostgreSQL', 'Vertex AI'],
    live: '#',
    featured: true,
  },
  {
    id: '2',
    name: 'Blink.ai',
    desc: 'AI-powered video creation using scripts, APIs, cloud editing',
    stack: ['React', 'Node', 'FFmpeg', 'Gemini'],
    github: '#',
    featured: false,
  },
  {
    id: '3',
    name: 'TheFitsheets',
    desc: 'E-commerce with payments, analytics, notifications',
    stack: ['Next.js', 'Node', 'MongoDB'],
    github: '#',
    featured: false,
  },
  {
    id: '4',
    name: 'MingChat',
    desc: 'Real-time chat platform with 1-on-1 and groups',
    stack: ['Next.js', 'Socket.io', 'Redis'],
    github: '#',
    featured: true,
  },
  {
    id: '5',
    name: 'EffiTask',
    desc: 'Task management with calendar and priorities',
    stack: ['Vite', 'Postgres', 'Drizzle'],
    github: '#',
    featured: false,
  },
  {
    id: '6',
    name: 'Braintube',
    desc: 'Ed-Tech Platform',
    stack: ['MERN Stack'],
    github: '#',
    featured: false,
  }
]
