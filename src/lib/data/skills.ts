export const skills = [
  // Languages
  { name: 'TypeScript', category: 'Languages', icon: 'typescript',    colorBlend: '#00f2fe, #4facfe, #8e2de2' }, // Cyan -> Blue -> Violet
  { name: 'JavaScript', category: 'Languages', icon: 'javascript',    colorBlend: '#f6d365, #fda085, #f00946' }, // Yellow -> Orange -> Red
  { name: 'Java',       category: 'Languages', icon: 'openjdk',       colorBlend: '#ff0844, #ffb199, #8e2de2' }, // Dark Orange/Red -> Violet

  // Frontend
  { name: 'React',      category: 'Frontend',  icon: 'react',         colorBlend: '#4facfe, #8e2de2, #f093fb' }, // Cyan -> Violet -> Pink
  { name: 'Next.js',    category: 'Frontend',  icon: 'nextdotjs',     colorBlend: '#e0e0e0, #8e2de2, #4facfe' }, // Silver -> Violet -> Blue
  { name: 'Tailwind',   category: 'Frontend',  icon: 'tailwindcss',   colorBlend: '#43e97b, #38f9d7, #4facfe' }, // Green -> Cyan -> Blue
  { name: 'shadcn/ui',  category: 'Frontend',  icon: 'shadcnui',      colorBlend: '#a18cd1, #fbc2eb, #ffb199' }, // Violet -> Pink -> Orange
  { name: 'Vite',       category: 'Frontend',  icon: 'vite',          colorBlend: '#c471f5, #fa71cd, #f6d365' }, // Purple -> Pink -> Yellow

  // Backend
  { name: 'Node.js',    category: 'Backend',   icon: 'nodedotjs',     colorBlend: '#d4fc79, #96e6a1, #00f2fe' }, // Lime -> Green -> Cyan
  { name: 'Express.js', category: 'Backend',   icon: 'express',       colorBlend: '#434343, #8e2de2, #fa71cd' }, // Dark Gray -> Violet -> Pink
  { name: 'Hono',       category: 'Backend',   icon: 'hono',          colorBlend: '#f6d365, #ff0844, #8e2de2' }, // Orange -> Magenta -> Violet
  { name: 'Bun',        category: 'Backend',   icon: 'bun',           colorBlend: '#f6d365, #fda085, #fbc2eb' }, // Yellow -> Peach -> Pink

  // Database
  { name: 'PostgreSQL', category: 'Database',  icon: 'postgresql',    colorBlend: '#00f2fe, #4facfe, #667eea' }, // Cyan -> Blue -> Indigo
  { name: 'MongoDB',    category: 'Database',  icon: 'mongodb',       colorBlend: '#43e97b, #38f9d7, #00f2fe' }, // Green -> Teal -> Cyan
  { name: 'MySQL',      category: 'Database',  icon: 'mysql',         colorBlend: '#fda085, #f6d365, #4facfe' }, // Orange -> Yellow -> Blue
  { name: 'Redis',      category: 'Database',  icon: 'redis',         colorBlend: '#ff0844, #ffb199, #f6d365' }, // Red -> Orange -> Yellow

  // Tools
  { name: 'Drizzle ORM',category: 'Tools',     icon: 'drizzle',       colorBlend: '#f6d365, #d4fc79, #96e6a1' }, // Yellow -> Lime -> Green
  { name: 'Prisma',     category: 'Tools',     icon: 'prisma',        colorBlend: '#38f9d7, #4facfe, #8e2de2' }, // Teal -> Blue -> Violet
  { name: 'Zustand',    category: 'Tools',     icon: 'zustand',       colorBlend: '#f6d365, #fda085, #ff0844' }, // Yellow -> Orange -> Red
  { name: 'Socket.io',  category: 'Tools',     icon: 'socketdotio',   colorBlend: '#e0e0e0, #8e2de2, #fa71cd' }, // Silver -> Violet -> Pink
  { name: 'Vertex AI',  category: 'Tools',     icon: 'googlecloud',   colorBlend: '#4facfe, #8e2de2, #f093fb' }, // Blue -> Violet -> Pink
  { name: 'Gemini',     category: 'Tools',     icon: 'googlegemini',  colorBlend: '#a18cd1, #fa71cd, #00f2fe' }, // Violet -> Pink -> Cyan
  { name: 'Docker',     category: 'Tools',     icon: 'docker',        colorBlend: '#00f2fe, #4facfe, #667eea' }, // Cyan -> Blue -> Indigo
  { name: 'Git',        category: 'Tools',     icon: 'git',           colorBlend: '#ff0844, #fda085, #8e2de2' }, // Red -> Orange -> Violet
]

export const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools']
