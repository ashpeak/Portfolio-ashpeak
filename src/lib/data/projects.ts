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
    slug: 'meetlog',
    name: 'MeetLog',
    tagline: 'AI Meeting Intelligence — convert audio/transcripts to actionable insights',
    date: '2026',
    status: 'Completed',
    category: 'Full-Stack, AI/ML',
    role: 'Lead Architect & Full-Stack Developer',
    stack: ['Next.js 16', 'React 19', 'Express', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Better Auth', 'BullMQ', 'AssemblyAI', 'Gemini AI', 'Tailwind CSS v4'],
    githubUrl: 'https://github.com/ashpeak/MeetLog.git',
    liveUrl: 'https://meetlog.ashpeak.me',
    images: [
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292642/portfolio/MeetLog/Screenshot_24-6-2026_143412_meetlog.ashpeak.me_ejjqan.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292642/portfolio/MeetLog/screenshot-1782291931562_mabule.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292642/portfolio/MeetLog/Screenshot_24-6-2026_143718_meetlog.ashpeak.me_sqkfn6.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782293278/portfolio/MeetLog/Screenshot_24-6-2026_145147_meetlog.ashpeak.me_tyfrdg.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782293278/portfolio/MeetLog/screenshot-1782293213012_asm3bg.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782293975/portfolio/MeetLog/screenshot-1782293938601_gseagk.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782293277/portfolio/MeetLog/Screenshot_24-6-2026_145040_meetlog.ashpeak.me_n0shrl.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292641/portfolio/MeetLog/screenshot-1782292091696_athov7.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292642/portfolio/MeetLog/screenshot-1782292126925_pmg693.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292641/portfolio/MeetLog/Screenshot_24-6-2026_143959_meetlog.ashpeak.me_udslsw.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292642/portfolio/MeetLog/Screenshot_24-6-2026_144045_meetlog.ashpeak.me_q2ktou.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782292641/portfolio/MeetLog/Screenshot_24-6-2026_143554_meetlog.ashpeak.me_qkjrsf.jpg'
    ],
    overview: 'MeetLog turns long, messy meetings into a structured artefact you can actually act on. By uploading an audio file or pasting a raw transcript, the system transcribes the audio, extracts decisions, action items, open questions, blockers, and a summary using Google Gemini, and allows you to push the result to Notion or Slack.',
    keyFeatures: [
      { title: 'AI Extraction & Transcription', description: 'Transcribes audio using AssemblyAI and extracts decisions, action items, open questions, blockers, and summaries using Google Gemini (with Vertex AI support).' },
      { title: 'Notion & Slack Integrations', description: 'Connect once to push any completed meeting directly to a Notion database with one click, or send formatted summaries and action items to Slack via webhooks.' },
      { title: 'PDF Exports & Share Links', description: 'Download a styled, single-file PDF of any meeting or generate opt-in public URLs to securely share meeting summaries.' },
      { title: 'Action Item Tracking', description: 'Interactive action items with owners and deadlines that surface in red when overdue, plus single-click completion tracking.' },
      { title: 'Full Transcript Search', description: 'In-page transcript search with prev/next match navigation.' },
      { title: 'Dashboard & Analytics', description: 'Dedicated Dashboard, Action Items, and Analytics pages with TanStack-Query-driven caching, offline-friendly behaviour, and Recharts.' }
    ],
    architecture: 'The application operates as a TypeScript monorepo containing a Next.js 16 App Router frontend and an Express backend powered by Drizzle ORM and PostgreSQL. A BullMQ background worker (backed by Upstash Redis) handles long-running audio transcriptions via AssemblyAI and LLM extraction tasks asynchronously.',
    techDecisions: 'A decoupled monorepo approach allowed independent scaling of the backend API and Next.js frontend. TanStack Query and Zustand were chosen for robust server state management and client state handling. BullMQ was essential for reliably queueing AssemblyAI webhooks and Gemini extraction tasks without holding the HTTP response, while Cloudinary serves as the primary audio storage.'
  },
  {
    slug: 'spunk-ai',
    name: 'SpunkAI',
    tagline: 'Mobile-native AI coach marketplace and assistant app.',
    date: '2024',
    status: 'Completed',
    category: 'React Native, AI/ML',
    role: 'Lead Architect & Mobile Engineer — Designed the mobile application and permission controller',
    stack: ['React Native', 'Expo', 'Tamagui', 'Node.js', 'Hono', 'Supabase', 'PostgreSQL', 'GCP Vertex AI', 'RevenueCat'],
    githubUrl: 'https://github.com/ashpeak/SpunkAI',
    images: [
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056538/portfolio/spunkai/Picture1_de906z.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056227/portfolio/spunkai/Picture3_vknres.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782055139/portfolio/spunkai/Picture4_tg8y52.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782055139/portfolio/spunkai/Picture5_ounwlx.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782055139/portfolio/spunkai/Picture6_vlor8q.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782055139/portfolio/spunkai/Picture7_tz01m3.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056542/portfolio/spunkai/Picture10_xichtx.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056540/portfolio/spunkai/Picture11_jlea1v.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056540/portfolio/spunkai/Picture12_j5hztt.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056538/portfolio/spunkai/Picture2_am5qiz.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056540/portfolio/spunkai/Picture13_w5rdj5.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056544/portfolio/spunkai/Picture8_pcamwl.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056543/portfolio/spunkai/Picture9_szhiuk.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056541/portfolio/spunkai/Picture14_orsve7.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782056539/portfolio/spunkai/Picture15_guzfht.jpg'
    ],
    overview: 'SpunkAI is a mobile-native AI coach marketplace and assistant app that allows users to create, deploy, and monetize specialized AI agents known as "Coaches". Each Coach functions as a personalized digital assistant with a predefined role and structured permissions. To solve privacy concerns, the app implements a permission-based architecture that restricts LLM tool usage to specific authorized mobile actions, enabling safe and autonomous execution in a controlled environment.',
    keyFeatures: [
      { title: 'Intelligent Coach Marketplace', description: 'Allows creators to design specialized AI personas with custom system prompts and monetize them using RevenueCat for entitlement checks.' },
      { title: 'Skill Toggle Architecture', description: 'Dynamically injects system tool definitions into Vertex AI API calls based on Supabase database configurations, strictly adhering to the principle of least privilege.' },
      { title: 'Proactive Action Execution', description: 'Enables AI agents to proactively trigger mobile device actions such as creating reminders, alarms, notes, timers, and calendar events rather than simply responding to chat prompts.' },
      { title: 'Contextual Isolation & RAG', description: 'Supports uploading PDF files or raw text to give each coach isolated knowledge, utilizing Supabase with pgvector for secure localized embeddings.' }
    ],
    architecture: 'SpunkAI is built on a multi-tiered architecture. The frontend is built using React Native with Expo and styled with Tamagui for native fluid UI rendering. The backend is a decoupled Node.js and Hono middleware running as a secure orchestrator. Database configurations and memory context are stored in Supabase (PostgreSQL), utilizing pgvector for RAG vector embeddings, while GCP Vertex AI powers the core agent inference.',
    techDecisions: 'A decoupled React Native storefront with Tamagui was chosen for cross-platform efficiency and fluid design aesthetics. Supabase and pgvector were selected for low-overhead database management and semantic search capabilities. Hono was chosen as the API gateway for its light footprint and speedy middleware validation, ensuring tool invocation checks happen in sub-milliseconds.'
  },
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
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782036927/portfolio/braintube_irhyvt.webp',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782036935/portfolio/Screenshot_21-6-2026_154251_braintube.kubacreatives.in_yk2hm7.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782036932/portfolio/Screenshot_21-6-2026_154320_braintube.kubacreatives.in_nilyq7.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782036928/portfolio/Screenshot_21-6-2026_154336_braintube.kubacreatives.in_yc0yi1.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782036931/portfolio/Screenshot_21-6-2026_154459_braintube.kubacreatives.in_ycsoxg.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782036929/portfolio/Screenshot_21-6-2026_154154_braintube.kubacreatives.in_lczrlz.jpg'
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
    githubUrl: 'https://github.com/ashpeak/lizard-ai',
    liveUrl: 'https://blink-ai.vercel.app/',
    images: [
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299038/portfolio/Blinkai/screenshot-1782298674472_xjkdaz.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782298873/portfolio/Blinkai/screenshot-1782298654471_cbufvf.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299030/portfolio/Blinkai/Screenshot_24-6-2026_162811_localhost_q6ikc4.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299032/portfolio/Blinkai/Screenshot_24-6-2026_162825_localhost_xjcrrg.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782300300/portfolio/Blinkai/screenshot-1782300283073_ahgylo.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299028/portfolio/Blinkai/screenshot-1782298221898_puh7na.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299028/portfolio/Blinkai/screenshot-1782298238946_wldvkn.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299030/portfolio/Blinkai/screenshot-1782297985491_s8oogy.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299034/portfolio/Blinkai/screenshot-1782298742286_lfmdi4.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299029/portfolio/Blinkai/screenshot-1782298013156_hxgoky.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299036/portfolio/Blinkai/screenshot-1782298044716_n3sdey.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299030/portfolio/Blinkai/screenshot-1782298074495_zqez9j.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299033/portfolio/Blinkai/screenshot-1782298199058_m8f2kx.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299028/portfolio/Blinkai/screenshot-1782298261448_vgyfxj.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782299026/portfolio/Blinkai/Screenshot_24-6-2026_162638_localhost_aqaq50.jpg'
    ],
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
    role: 'Lead Developer — Managed and architected the primary frontend and backend services',
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS', 'Easebuzz', 'Cloudinary', 'Twilio', 'Klipfolio'],
    liveUrl: 'https://fitsheets.kubacreatives.in',
    images: [
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041157/portfolio/fitsheets/0C0DDE46-509A-4962-B8EE-A7241E61BBF3_drrh8g.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041169/portfolio/fitsheets/Screenshot_21-6-2026_1619_fitsheets.kubacreatives.in_ru0na3.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041165/portfolio/fitsheets/screenshot-1782037927671_dumfxb.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041165/portfolio/fitsheets/Screenshot_21-6-2026_163753_fitsheets.kubacreatives.in_iwah6v.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041165/portfolio/fitsheets/Screenshot_21-6-2026_163927_fitsheets.kubacreatives.in_wnm5ml.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041163/portfolio/fitsheets/Screenshot_21-6-2026_16421_fitsheets.kubacreatives.in_gkt5aj.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041159/portfolio/fitsheets/Screenshot_21-6-2026_164226_fitsheets.kubacreatives.in_anbxvx.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041158/portfolio/fitsheets/Screenshot_21-6-2026_164311_ilyzqd.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041162/portfolio/fitsheets/Screenshot_21-6-2026_164023_fitsheets.kubacreatives.in_msj7cs.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041159/portfolio/fitsheets/screenshot-1782040532106_drvjar.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041158/portfolio/fitsheets/Screenshot_21-6-2026_164553_fitsheets.kubacreatives.in_kpigvs.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041160/portfolio/fitsheets/Screenshot_21-6-2026_164632_fitsheets.kubacreatives.in_lqnfle.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041157/portfolio/fitsheets/Screenshot_21-6-2026_164658_fitsheets.kubacreatives.in_o3m73r.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041157/portfolio/fitsheets/Screenshot_21-6-2026_16545_fitsheets.kubacreatives.in_hqth1a.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041158/portfolio/fitsheets/Screenshot_21-6-2026_165424_fitsheets.kubacreatives.in_ta8fqr.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782041158/portfolio/fitsheets/Screenshot_21-6-2026_164414_fitsheets.kubacreatives.in_np561a.jpg'
    ],
    overview: 'TheFitsheets is a highly scalable, enterprise-grade e-commerce platform designed to handle massive concurrent traffic spikes and deliver sub-second page loads. Featuring a decoupled architecture, it leverages a high-performance custom storefront, an advanced real-time inventory management system, and a robust administrative suite. The platform incorporates multi-layered caching, intelligent code splitting, and strict secure transaction flows to meet demanding enterprise requirements.',
    keyFeatures: [
      { title: 'Enterprise Scale Architecture', description: 'Built with a decoupled frontend and a dedicated load-balanced API backend to ensure maximum performance and fault tolerance.' },
      { title: 'Performance & Optimization', description: 'Utilizes route-based code splitting, dynamic lazy loading, and React component memoization to minimize client-side bundle sizes and achieve perfect Lighthouse performance scores.' },
      { title: 'Secure Transaction Engine', description: 'Integrates with Easebuzz payment gateway using tamper-proof cryptographic signatures, webhook validation, and tokenized payment states to guarantee financial security.' },
      { title: 'Multi-tiered Caching & Notifications', description: 'Uses Redis for database query caching and session persistence, combined with Twilio for automated SMS/email customer notifications.' }
    ],
    architecture: 'The system is built on a highly performant decoupled architecture. The frontend is a Next.js application optimized with code splitting, dynamic imports, and component memoization. It communicates with a dedicated Node.js and Express backend hosted on AWS EC2 behind an Application Load Balancer (ALB). The backend is optimized for horizontal scalability, leveraging Redis as a high-speed caching layer for hot product catalogs, database queries, and session state, backed by a clusterized MongoDB instance for primary data persistence.',
    techDecisions: 'Decoupling the frontend and backend allowed independent scaling of the user-facing catalog and checkout APIs. AWS Application Load Balancer was selected to automatically distribute incoming traffic across multiple containerized Express servers during high-demand promotional events. Redis integration was crucial to avoid database bottlenecks, keeping response times under 50ms by serving product configurations directly from memory.'
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
    githubUrl: 'https://github.com/ashpeak/chat-arena',
    images: [
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760140/portfolio/chitchat/screenshot-1782759189665_kxrntr.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760124/portfolio/chitchat/screenshot-1782759418270_gjmfn8.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760112/portfolio/chitchat/Screenshot_30-6-2026_02326_localhost_kf1y8f.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760124/portfolio/chitchat/screenshot-1782759250208_t74p50.png',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760111/portfolio/chitchat/Screenshot_30-6-2026_02511_localhost_hxqrlt.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760111/portfolio/chitchat/Screenshot_30-6-2026_02530_localhost_mjnld1.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760113/portfolio/chitchat/Screenshot_30-6-2026_02538_localhost_myu2on.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760120/portfolio/chitchat/Screenshot_30-6-2026_02545_localhost_iz6ak8.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760118/portfolio/chitchat/Screenshot_30-6-2026_02557_localhost_kvw5f3.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760123/portfolio/chitchat/Screenshot_30-6-2026_02631_localhost_p0ek4o.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760111/portfolio/chitchat/Screenshot_30-6-2026_02438_localhost_n7i8lr.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760116/portfolio/chitchat/Screenshot_30-6-2026_03455_localhost_zzukp5.jpg',
      'https://res.cloudinary.com/dhfuu5omv/image/upload/v1782760120/portfolio/chitchat/Screenshot_30-6-2026_03547_localhost_nszxew.jpg'
    ],
    overview: 'MingChat is a highly responsive chat application supporting direct messages, group chats, read receipts, and typing indicators. Designed to mimic the fluid feel of native messaging apps.',
    keyFeatures: [
      { title: 'Real-time Messaging', description: 'Powered by Socket.io with a Redis adapter for multi-instance scaling.' },
      { title: 'Optimistic UI', description: 'Messages appear instantly on the sender\'s screen before server confirmation for a snappy experience.' }
    ],
    architecture: 'The app uses a standard Next.js frontend with a custom Express server to host the Socket.io instance. Redis is used both as a pub/sub mechanism across Node processes and to cache active user sessions.'
  }
]
