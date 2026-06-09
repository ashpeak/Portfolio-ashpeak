export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectData {
  slug: string
  name: string
  tagline: string
  date: string
  status: string
  category: string
  role: string
  stack: string[]
  githubUrl?: string
  liveUrl?: string
  images: string[]
  overview: string
  keyFeatures: ProjectFeature[]
  architecture?: string
  techDecisions?: string
}

export const projectsData: ProjectData[] = [
  {
    slug: 'braintube-main',
    name: 'Braintube',
    tagline: 'Empowering individuals with accessible, top-quality education.',
    date: '2023',
    status: 'Completed',
    category: 'Full-Stack',
    role: 'Full-Stack Developer',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'Redis', 'Socket.io'],
    githubUrl: 'https://github.com/ashpeak/Progify',
    liveUrl: 'https://braintube.kubacreatives.in/',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
    ],
    overview: 'Braintube offers free, expert-designed courses across various fields to empower individuals with accessible, top-quality education. Our mission is to make learning engaging, fun, and inclusive, fostering growth for beginners and professionals alike. Join us to enhance your future!',
    keyFeatures: [
      { title: 'Interactive Learning', description: 'Engaging, fun, and inclusive course material.' },
      { title: 'Expert-Designed Courses', description: 'Free, top-quality education across various fields.' }
    ],
    architecture: 'Built entirely on the MERN stack (MongoDB, Express.js, React.js, Node.js). It utilizes Socket.io for real-time features and Redis for caching and fast data retrieval, along with Nodemailer for automated email communications.'
  },
  {
    slug: 'blink-ai',
    name: 'Blink.ai',
    tagline: 'AI-powered video creation using scripts, APIs, cloud editing',
    date: '2023',
    status: 'Completed',
    category: 'AI/ML',
    role: 'Core Developer — Integrated AI models and built the rendering engine using FFmpeg.',
    stack: ['React', 'Node.js', 'FFmpeg', 'Gemini AI'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/projects/blink-ai.webp'],
    overview: 'Blink.ai automates short-form video creation. Users input a topic or a script, and the system generates a voiceover, fetches relevant stock footage, and stitches it all together with animated captions using FFmpeg.',
    keyFeatures: [
      { title: 'Automated Scripting', description: 'Leverages Gemini AI to turn short prompts into engaging 60-second video scripts.' },
      { title: 'Cloud Rendering', description: 'Uses Node.js child processes to run FFmpeg commands to composite video, audio, and subtitles dynamically.' }
    ],
    techDecisions: 'FFmpeg was chosen for its unparalleled control over media manipulation, despite its steep learning curve.'
  },
  {
    slug: 'thefitsheets',
    name: 'TheFitsheets',
    tagline: 'E-commerce platform with payments, analytics, and notifications',
    date: '2023',
    status: 'Completed',
    category: 'Full-Stack',
    role: 'Lead Developer — Managed a small team and architected the primary backend services.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Easebuzz'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/projects/thefitsheets.webp'],
    overview: 'A robust e-commerce platform built from the ground up to handle high volumes of traffic and secure transactions. It includes a custom admin dashboard for inventory and order management.',
    keyFeatures: [
      { title: 'Secure Checkout', description: 'Integrated with Easebuzz payment gateway for seamless and secure transactions.' },
      { title: 'Real-time Analytics', description: 'Custom dashboard showing live sales data using Redis for caching.' },
      { title: 'Notification System', description: 'Automated SMS and email updates using Twilio.' }
    ]
  },
  {
    slug: 'mingchat',
    name: 'MingChat',
    tagline: 'Real-time chat platform with 1-on-1 and groups',
    date: '2023',
    status: 'Completed',
    category: 'Full-Stack',
    role: 'Solo Developer — Built the entire websocket infrastructure and real-time frontend state management.',
    stack: ['Next.js', 'Socket.io', 'Redis', 'Express'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/projects/mingchat.webp'],
    overview: 'MingChat is a highly responsive chat application supporting direct messages, group chats, read receipts, and typing indicators. Designed to mimic the fluid feel of native messaging apps.',
    keyFeatures: [
      { title: 'Real-time Messaging', description: 'Powered by Socket.io with a Redis adapter for multi-instance scaling.' },
      { title: 'Optimistic UI', description: 'Messages appear instantly on the sender\'s screen before server confirmation for a snappy experience.' }
    ],
    architecture: 'The app uses a standard Next.js frontend with a custom Express server to host the Socket.io instance. Redis is used both as a pub/sub mechanism across Node processes and to cache active user sessions.'
  },
  {
    slug: 'effitask',
    name: 'EffiTask',
    tagline: 'Task management with calendar and priorities',
    date: '2024',
    status: 'Completed',
    category: 'Full-Stack',
    role: 'Full-Stack Developer — Implemented the drag-and-drop interface and database schema.',
    stack: ['Vite', 'React', 'PostgreSQL', 'Drizzle'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/projects/effitask.webp'],
    overview: 'A productivity tool that combines a traditional to-do list with a drag-and-drop calendar interface. Designed for people who want to time-block their tasks effectively.',
    keyFeatures: [
      { title: 'Drag & Drop', description: 'Fluid drag-and-drop interface for moving tasks onto specific calendar slots.' },
      { title: 'Priority Matrix', description: 'Automatic sorting of tasks based on urgency and importance.' }
    ],
    architecture: 'Built as a Single Page Application (SPA) using Vite and React, communicating with a lightweight REST API backed by PostgreSQL.'
  },
  {
    slug: 'braintube',
    name: 'Braintube',
    tagline: 'Ed-Tech Platform for interactive learning',
    date: '2022',
    status: 'Completed',
    category: 'Full-Stack',
    role: 'Full-Stack Developer — Built the core course delivery engine and note-taking system.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/projects/braintube.webp'],
    overview: 'An educational platform focused on video-based learning with integrated interactive notes that sync to video timestamps.',
    keyFeatures: [
      { title: 'Timestamped Notes', description: 'Users can take notes that are directly linked to specific moments in the video player.' },
      { title: 'Course Management', description: 'Full CMS for instructors to upload and organize their content.' }
    ]
  },
  {
    slug: 'whisper-vault',
    name: 'Whisper-Vault',
    tagline: 'End-to-end encrypted secret sharing service',
    date: '2023',
    status: 'Completed',
    category: 'Open Source',
    role: 'Solo Developer — Implemented client-side encryption and serverless backend.',
    stack: ['Next.js', 'Web Crypto API', 'Supabase'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/projects/whisper-vault.webp'],
    overview: 'A secure way to share sensitive information like API keys or passwords. The secret is encrypted in the browser, and the server never sees the decryption key.',
    keyFeatures: [
      { title: 'E2E Encryption', description: 'Uses AES-GCM for encryption within the browser before the payload ever hits the network.' },
      { title: 'Burn After Reading', description: 'Secrets are permanently deleted from the database as soon as they are viewed once.' }
    ]
  },
  {
    slug: 'imdb-clone',
    name: 'IMDB Clone',
    tagline: 'Movie discovery app using the TMDB API',
    date: '2022',
    status: 'Completed',
    category: 'Full-Stack',
    role: 'Frontend Developer — Focused on responsive design and API integration.',
    stack: ['React', 'TMDB API', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    images: ['/projects/imdb-clone.webp'],
    overview: 'A visual clone of IMDB built to master React state management and third-party API integration. Features comprehensive search, filtering, and detailed movie pages.',
    keyFeatures: [
      { title: 'Infinite Scroll', description: 'Seamlessly loads more movies as the user scrolls down the page.' },
      { title: 'Dynamic Search', description: 'Debounced search input fetching live results from TMDB.' }
    ]
  }
]
