# Ashish Singh — Portfolio Design Plan
> Agent Reference Document · Dark Theme · Bento Grid · Motion Animations

---

## 0. Quick Reference

| Item | Decision |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | `motion` (npm) — Framer Motion's successor |
| Smooth Scroll | `@studio-freight/lenis` |
| Icons | `lucide-react` + inline SVGs for tech logos |
| Display Font | **Syne** (Google Fonts) |
| Body Font | **Figtree** (Google Fonts) |
| Mono Font | **JetBrains Mono** (Google Fonts) |
| Deployment | Vercel |

---

## 1. Design Philosophy

**Aesthetic Direction: "Refined Noir"**

Inspired by heinsoe.com (clean monochrome, strong typography, minimal sidebar layout) and siddz.com (animated roles, numbered experience, featured project cards, clean contact cards). The unique differentiation is:

- **Bento grid layouts** in About and Projects sections
- **Acid Lime** (`#C8FF00`) as a single, sharp accent color against pure-black — unexpected and memorable
- **Editorial typography** with Syne's geometric character for headings
- **Spotlight cursor effect** on bento cards (mouse-follow radial gradient)
- **Magnetic buttons** on CTAs and social links
- **Lenis smooth scroll** for a premium, buttery feel
- No gradients on backgrounds — only sharp mono surfaces with grain texture

**Reference Sites Summary:**
- **heinsoe.com** — Sticky sidebar with photo/nav, pure black bg, big bold headings, scrollable experience + stack
- **siddz.com** — Rotating role titles, contribution heatmap, numbered experience entries with bullet points, featured project screenshots, 3-card contact section

---

## 2. Design System

### 2.1 Color Palette

```css
:root {
  /* Backgrounds — layered dark surfaces */
  --bg-base:       #080808;   /* Page background */
  --bg-surface:    #0f0f0f;   /* Default card */
  --bg-elevated:   #161616;   /* Hovered / raised card */
  --bg-overlay:    #1c1c1c;   /* Dropdown, modal backdrop */

  /* Borders */
  --border:        #1e1e1e;   /* Default card border */
  --border-strong: #2e2e2e;   /* Hover border */
  --border-accent: #c8ff0040; /* Accent glow border on hover */

  /* Text */
  --text-primary:   #ededed;  /* Main body text */
  --text-secondary: #888888;  /* Labels, captions */
  --text-muted:     #484848;  /* Placeholder, decorative numbers */

  /* Accent — Electric Lime */
  --accent:         #c8ff00;
  --accent-dim:     #c8ff0080;
  --accent-glow:    #c8ff0015;

  /* Status */
  --green-dot:      #22c55e;  /* Available/online status */

  /* Noise Texture */
  --noise-opacity: 0.035;     /* Very subtle grain overlay */
}
```

**Why Acid Lime?** Both reference sites use near-monochrome palettes. A single bright accent creates immediate visual hierarchy without destroying the minimal aesthetic. Lime/chartreuse is distinctive in developer portfolios (avoids purple-gradient clichés), reads as "technical + creative", and creates high contrast against `#080808`.

---

### 2.2 Typography

**Fonts to import from Google Fonts:**

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Figtree:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Usage:**

```css
--font-display: 'Syne', sans-serif;    /* Hero name, section titles, card headings */
--font-body:    'Figtree', sans-serif; /* Body text, descriptions, nav links */
--font-mono:    'JetBrains Mono', monospace; /* Tags, chips, code, dates */
```

**Type Scale (Tailwind custom config):**

| Token | Size | Usage |
|---|---|---|
| `text-display` | 96px / 6rem | Hero name |
| `text-h1` | 64px / 4rem | Page-level headings |
| `text-h2` | 40px / 2.5rem | Section headings |
| `text-h3` | 24px / 1.5rem | Card titles |
| `text-h4` | 18px / 1.125rem | Sub-labels |
| `text-body` | 16px / 1rem | Body copy |
| `text-sm` | 14px / 0.875rem | Secondary text |
| `text-xs` | 12px / 0.75rem | Chips, tags, mono |

**Letter spacing:**
- Display/H1: `-0.03em` (tight, editorial)
- H2–H3: `-0.02em`
- Body: `0`
- Chips/mono: `0.05em` (slightly open)

---

### 2.3 Spacing & Layout

```
Container max-width: 1080px (lg breakpoint)
Container padding: 24px (mobile) → 48px (desktop)
Section vertical padding: 96px (desktop) / 64px (tablet) / 48px (mobile)
Bento grid gap: 12px
Card padding: 24px (default) / 32px (large cards)
Border radius: 16px (cards) / 10px (chips) / 8px (buttons)
```

---

### 2.4 Global Effects

#### Noise Grain Texture
Apply to `body` using a CSS pseudo-element:
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: var(--noise-opacity);
  pointer-events: none;
  z-index: 9999;
}
```

#### Dot Grid Background
```css
body {
  background-color: var(--bg-base);
  background-image: radial-gradient(circle, #2a2a2a 1px, transparent 1px);
  background-size: 28px 28px;
}
```

#### Bento Card Hover Glow
```css
.bento-card:hover {
  border-color: var(--border-accent);
  box-shadow: 0 0 0 1px var(--border-accent), 0 0 32px var(--accent-glow);
}
```

#### Spotlight on Bento Cards (JavaScript)
Each bento card listens to `mousemove` and renders a `radial-gradient` spotlight following the cursor:
```js
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
});
// CSS: background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), #c8ff0008, transparent 70%)
```

---

### 2.5 Component Design Tokens

#### Bento Card

```css
.bento-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 300ms ease, box-shadow 300ms ease;
  /* Spotlight bg layer */
  background: radial-gradient(300px at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(200, 255, 0, 0.04), transparent 70%),
    var(--bg-surface);
}
```

#### Chip / Tag

```css
.chip {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--border-strong);
  color: var(--text-secondary);
  background: var(--bg-overlay);
  white-space: nowrap;
}
```

#### Primary Button

```css
.btn-primary {
  background: var(--accent);
  color: #080808;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 10px;
  letter-spacing: 0.01em;
  transition: opacity 150ms, transform 150ms;
}
.btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
```

#### Ghost Button

```css
.btn-ghost {
  border: 1px solid var(--border-strong);
  color: var(--text-primary);
  background: transparent;
  padding: 10px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-family: var(--font-body);
  font-weight: 500;
  transition: border-color 200ms, background 200ms;
}
.btn-ghost:hover {
  border-color: var(--text-secondary);
  background: var(--bg-elevated);
}
```

---

## 3. Page Architecture

### Navigation

**Type:** Fixed top bar, full-width

**Layout:**
```
[Logo: "ak." in Syne Bold]          [Home · About · Projects · Contact]          [Resume ↗]
```

**Behavior:**
- On load: slides down (Y: -20 → 0, opacity 0 → 1, 600ms delay)
- On scroll > 40px: `backdrop-blur(20px)` + `border-bottom: 1px solid var(--border)` fades in
- Active section link: acid lime underline (2px, scaleX animation)
- Logo: slightly left of center on mobile (hamburger menu replaces nav links)

**Mobile:** Hamburger → full-screen overlay menu with stagger-animated links

---

### Section 1 — Hero

**Layout:** Full viewport height (100svh), centered, single column

```
┌──────────────────────────────────────────┐
│                                          │
│   ● Available for opportunities         │  ← small badge, green dot
│                                          │
│   Ashish                                 │  ← Syne 96px, tight tracking
│   Singh.                                 │  ← line 2, accent on "."
│                                          │
│   Full-Stack Developer ·                 │  ← animated role (cycles)
│   Builder · Problem Solver              │
│                                          │
│   I build scalable web products          │  ← 1-2 line bio, Figtree
│   end-to-end — from APIs to UIs.        │
│                                          │
│   [View Projects]    [Resume ↗]          │  ← CTA buttons row
│                                          │
│   ⌾ GitHub   in LinkedIn   ✉ Email      │  ← Social row (icon + label)
│                                          │
│                                          │
│                  ↓                       │  ← scroll indicator (bouncing)
└──────────────────────────────────────────┘
```

**Background Effect:**
- Dot grid (as defined in global effects)
- One very soft radial gradient centered below the name: `radial-gradient(ellipse 800px 600px at 50% 60%, rgba(200,255,0,0.04), transparent)`
- The hero background should NOT distract — just create depth

**Animations (motion):**

```js
// Stagger sequence: 0ms gaps between each element
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}
// Elements order: badge(0) → "Ashish"(1) → "Singh."(2) → roles(3) → bio(4) → CTAs(5) → socials(6)
```

**Role Text Animation:**
Cycle between: `Full-Stack Developer` → `Solo Builder` → `Product Engineer` → `Open Source Contributor`

Implementation: Use `AnimatePresence` + `motion.span` with `y: 20 → 0` enter and `y: -20` exit, every 3 seconds.

---

### Section 2 — About (Bento Grid)

**Section Label:** `// about` in mono, accent color, small — anchored above

**Title:** `Who I Am.` in Syne

**Bento Grid Layout (3 columns × 2 rows on desktop, stacked on mobile):**

```
┌───────────────────────┬───────────┬───────────┐
│                       │           │  ●●●●●    │
│   [Photo]  Ashish     │ 📍 Dadri, │  Open to  │
│   Singh               │ India     │  Work     │
│                       │           │           │
│   Full-stack dev      │           │           │
│   obsessing over      │           │           │
│   detail & craft.     │           │           │
│                       │           │           │
│   card-lg (2×1)       │ card-sm   │ card-sm   │
├───────────┬───────────┴───────────┼───────────┤
│           │                       │ Currently │
│  Music /  │  GitHub Heatmap       │ Building  │
│  Vibe     │  (API or screenshot)  │           │
│           │                       │ startupid │
│  🎵 Loves │                       │ eadb.com  │
│  coding   │   card-md (2×1)       │           │
│  to music │                       │ card-sm   │
│  card-sm  │                       │           │
└───────────┴───────────────────────┴───────────┘
```

**Card Details:**

**Card A — Profile + Bio (large, spans 2 cols × 1 row)**
- Left half: Avatar photo (circle, 80px diameter) with lime border ring
- Right half: Name, title, 2-sentence bio
- Bottom: tiny chip row `["#builder", "#fullstack", "#oss"]`
- Subtle noise texture on card bg

**Card B — Location (small)**
- Large emoji or map icon: `📍`
- `Dadri, Uttar Pradesh` text
- `India` on second line
- Background: faint world map SVG (barely visible, 8% opacity)

**Card C — Open to Work (small)**
- Animated green pulsing dot (CSS ping animation)
- `Available for Opportunities`
- Role interest chips: `[Full-time] [Freelance] [Remote]`
- Click → opens email

**Card D — Currently Building (small, col 3 row 2)**
- Title: `Currently Building`
- Logo + name: `startupideadb.com`
- Short: "Startup ideas aggregation platform"
- `→ Visit` link in accent color

**Card E — GitHub Heatmap (medium, spans 2 cols × 1 row)**
- Title: `GitHub Activity`
- Use `github-calendar` npm package OR embed `https://ghchart.rshah.org/ashpeak` as SVG
- If API fails: show a stylized skeleton with "See full graph →" link to GitHub
- Invert colors to match dark theme

**Card F — Vibe / Music (small)**
- Title: `Vibe Check`  
- "Codes best with music playing 🎵"
- Maybe a fake "Now Playing" Spotify widget style
- Or: interest icons row (music, travel, anime, etc.)

**Bento Animation:**
```js
// Parent uses staggerChildren, children use fadeUp
const bentoContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}
const bentoItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}
```

---

### Section 3 — Tech Stack

**Label:** `// skills`
**Title:** `What I Work With.`

**Layout:**
- Filter tab row at top: `[All] [Languages] [Frontend] [Backend] [Database] [Tools]`
- Grid of icon cards below: 6–8 per row on desktop, 4 on tablet, 3 on mobile

**Category Filter Tabs:**
```css
.filter-tab {
  padding: 6px 16px;
  border-radius: 8px;
  font: 13px/1 var(--font-mono);
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 200ms;
}
.filter-tab.active {
  border-color: var(--accent);
  background: var(--accent-glow);
  color: var(--accent);
}
```

**Skill Card (individual):**
```
┌─────────────┐
│     icon    │  48×48px SVG/PNG
│             │
│  React      │  14px, text-primary, Figtree
└─────────────┘
```
Hover: `scale(1.08)` + lime glow border

**Full Skills List:**

| Category | Skills |
|---|---|
| **Languages** | TypeScript, JavaScript, Java |
| **Frontend** | React, Next.js, Tailwind CSS, shadcn/ui, Vite |
| **Backend** | Node.js, Express.js, Hono, Bun |
| **Database** | PostgreSQL, MongoDB, MySQL, Redis |
| **ORM/State** | Drizzle ORM, Prisma, Zustand |
| **Realtime** | Socket.io, WebSockets |
| **AI/Cloud** | Vertex AI, Gemini, Azure |
| **DevOps** | Docker, Linux, Git, Cloudflare |
| **Tools** | Figma, Postman |

**Filter Animation (motion):**
```js
<AnimatePresence mode="popLayout">
  {filteredSkills.map(skill => (
    <motion.div
      key={skill.name}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    />
  ))}
</AnimatePresence>
```

---

### Section 4 — Experience

**Label:** `// experience`
**Title:** `Where I've Worked.`

**Layout:** Vertical list, numbered (01, 02, 03), left-bordered

**Visual design of each entry:**

```
01                              ← Large muted number (Syne 80px, 6% opacity)
────────────────────────────
Full-Stack Developer            ← Role title, Syne 22px
Fitsheets · ECOM               ← Company + type, Figtree 15px, text-secondary
Jul 2023 — Nov 2023            ← Date, mono font, accent color
────────────────────────────
• Led development team to deliver scalable website
• Built front-end and back-end with Next.js, Node.js,
  Express, MongoDB, Redis
• Implemented secure payment gateway (Easebuzz)
• Integrated analytics and notifications

[Next.js] [Node.js] [MongoDB] [Redis] [Express]  ← chip row
```

**Experience Entries:**

```
01 · Full-Stack Developer · Fitsheets (ECOM) · Jul 2023 — Nov 2023
  — Led dev team for high-quality scalable e-commerce website
  — Full-stack: Next.js, Node.js, Express, MongoDB, Redis
  — Secure payment gateway (Easebuzz), Cloudinary media management
  — Stack: [Next.js][Node.js][Express][MongoDB][Redis][Easebuzz][Twilio]

02 · Full-Stack Developer · Braintube (EDU) · Mar 2022 — Dec 2022
  — Designed and built full-stack ed-tech platform from scratch
  — Features: user auth, course enrollment, note-making, responsive design
  — Stack: [React][Node.js][Express][MongoDB][Redis][Socket.io]

03 · Freelance / Personal Projects · 2023 — Present
  — Building startupideadb.com — startup ideas aggregation platform
  — Solo builder: Next.js frontend, Hono/Node.js backend, PostgreSQL, Vertex AI
  — Stack: [Next.js][Hono][PostgreSQL][Drizzle ORM][Better Auth][Vertex AI]
```

**Interaction:**
- Each entry has a hover state: left border turns accent color, card bg lifts to `--bg-elevated`
- On hover the large background number fades from 6% → 15% opacity
- Entries animate in with `x: -30 → 0, opacity: 0 → 1` stagger on scroll-trigger

**Connecting Line:**
A vertical line (1px, `--border`) runs down the left side of all entries with a progress fill that animates from 0% → 100% as you scroll through the section.

---

### Section 5 — Projects (Bento Grid)

**Label:** `// projects`
**Title:** `Things I've Built.`

**Subtitle:** `Selected work — side projects, products & client work`

**Bento Grid Layout (3 columns desktop):**

```
Row 1:
┌────────────────────────────────┬──────────────┐
│                                │              │
│  startupideadb.com  [featured] │   Blink.ai   │
│  Startup ideas aggregator      │   AI Video   │
│  Next.js · Hono · PostgreSQL   │   Creator    │
│  Vertex AI · Drizzle ORM       │              │
│  [screenshot / preview]        │   card-sm    │
│  card-lg (2 cols × 1 row)      │              │
└────────────────────────────────┴──────────────┘

Row 2:
┌──────────────┬──────────────────────────────┐
│              │                              │
│ TheFitsheets │   MingChat                  │
│ E-Commerce   │   Real-time chat platform   │
│ Platform     │   Next.js · Socket.io       │
│              │   Redis · MongoDB            │
│   card-sm    │   card-lg (2 cols × 1 row)  │
└──────────────┴──────────────────────────────┘

Row 3:
┌──────────────┬──────────────┬──────────────┐
│  EffiTask    │  Braintube   │  View All →  │
│  Task Mgmt  │  Ed-Tech     │              │
│  Postgres   │  Platform    │  (plain text │
│  Drizzle    │  MERN Stack  │   card)      │
│  card-sm    │  card-sm     │  card-sm     │
└──────────────┴──────────────┴──────────────┘
```

**Project Card Structure:**

**Large Card (featured):**
```
[project name]                    [GitHub ↗] [Live ↗]
[1-line description]
[screenshot — blurred 40% when idle, unblurs on hover]
[stack chips row at bottom]
```

**Small Card:**
```
[project name]          [↗]
[2-line description]
[stack chips]
```

**Card "View All →" (Row 3, Col 3):**
Special card: White text on black, no border, just the arrow + "View all projects" centered. On hover: background flips to accent color `#c8ff00`, text turns black. Bold arrow animates to the right.

**All Projects:**

| Project | Description | Stack | Links |
|---|---|---|---|
| startupideadb.com | Startup ideas aggregation platform with AI enrichment | Next.js, Hono, PostgreSQL, Drizzle ORM, Better Auth, Vertex AI | Live |
| Blink.ai | AI-powered video creation using scripts, APIs, cloud editing | React, Node, FFmpeg, Gemini, MongoDB | GitHub |
| TheFitsheets | E-commerce with payments, analytics, notifications | Next.js, Node, Express, MongoDB, Easebuzz, Twilio | GitHub |
| MingChat | Full-featured real-time chat: 1-on-1, groups, admin | Next.js, Node, MongoDB, Redis, Socket.io | GitHub |
| EffiTask | Task management with calendar, analytics, priorities | Vite, Node, Postgres, Drizzle, Socket.io, Clerk | GitHub |
| Braintube | Free courses platform, enrollment, note-making | React, Node, Express, MongoDB, Redis, Socket.io | GitHub |
| Whisper-Vault | Anonymous secret-sharing platform | React, Node, Express, MongoDB | GitHub |
| IMDB Clone | Movie/TV discovery browser | Next.js, Tailwind | GitHub |

**Card Hover Animation:**
```js
whileHover={{ y: -4, transition: { duration: 0.2 } }}
// + border-color → accent (CSS)
// + screenshot blur: 40% → 0% (CSS transition)
```

**3D Tilt Effect** (optional, for featured cards only):
Use `react-parallax-tilt` or manual mouse-track with CSS `perspective(1000px) rotateX() rotateY()` — max 6deg tilt.

---

### Section 6 — Contact

**Label:** `// contact`
**Title:** `Let's Work Together.`

**Subtitle:** Open to full-time roles, freelance contracts & interesting projects.

**Layout (2 columns on desktop):**

```
Left half:
  Big text "Let's build        Right half:
  something great."            ┌────────────────────┐
                               │  ✉ Email           │
  Status pill:                 │  kumarvns130@gmail │
  ● Available · Remote / India │  .com              │
                               │  Quick inquiries   │
  Reply within 24 hours        └────────────────────┘
                               ┌────────────────────┐
                               │  in LinkedIn       │
                               │  /ashpeak          │
                               │  Professional      │
                               └────────────────────┘
                               ┌────────────────────┐
                               │  ✈ Telegram        │
                               │  @AshishDogo       │
                               │  Quick chat        │
                               └────────────────────┘
```

**Contact Card Design:**
Each card:
- Icon (lucide) + platform name (bold, Syne 18px)
- Username/handle
- Short label
- Hover: entire card border becomes accent, subtle background lift
- Click: opens respective link

**Below contact cards:** A minimal contact form
```
Name ________________    Email ________________
Message _______________________________________
_______________________________________
[Send Message →]
```
Form fields:
- Background: `--bg-surface`
- Border: `--border`
- Focus: border-color → `--accent` + subtle glow
- Submit button: Primary style (lime bg, black text)

---

### Section 7 — Footer

**Layout:**
```
────────────────────────────────────────────────
ashish.    ·  Home  About  Projects  Contact    GitHub LinkedIn Email
Built with Next.js & Tailwind · Designed with care                  © 2026 Ashish Singh
```

- Left: Logo
- Center: Sitemap links
- Right: Social icons
- Second row: tech credits + copyright
- Tiny accent text at far bottom: `"Details make the design." — Charles Eames` or similar quote

---

## 4. Global Animations & Motion System

### 4.1 Library Setup

Use `motion` (npm package `motion`, v11.x+) — the new name for Framer Motion. It is lighter, has better performance with the layout animations and WAAPI bridge.

```bash
npm install motion lenis
```

### 4.2 Lenis Smooth Scroll Setup

```tsx
// app/layout.tsx or providers/SmoothScroll.tsx
'use client'
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

### 4.3 Scroll-Triggered Entrance (Reusable)

```tsx
// components/motion/FadeUp.tsx
import { motion, useInView } from 'motion'
import { useRef } from 'react'

export function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
```

### 4.4 Text Reveal (Clip Animation)

For section headings:
```tsx
// Heading text clips upward into view
<motion.h2
  initial={{ clipPath: 'inset(100% 0 0 0)', y: 20 }}
  whileInView={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
  viewport={{ once: true }}
>
  {title}
</motion.h2>
```

### 4.5 Role Cycling (Hero)

```tsx
const roles = ['Full-Stack Developer', 'Solo Builder', 'Product Engineer', 'Open Source Fan']
// Every 3 seconds, swap with AnimatePresence + motion.span
// Enter: y: 24, opacity: 0 → y: 0, opacity: 1
// Exit: y: -24, opacity: 0
```

### 4.6 Magnetic Button Effect

```tsx
// components/MagneticButton.tsx
// Uses mouse proximity to pull the button element by 15-20px
// On hover: translate(deltaX * 0.3, deltaY * 0.3)
// On leave: spring back to original position
// Apply to: CTA buttons, social icon links
```

### 4.7 Custom Cursor

```tsx
// components/Cursor.tsx
// Circle 16px, mix-blend-mode: difference, background: white
// Scales to 48px + blend-mode inverts when hovering links/buttons
// Trail dot: 6px, follows with 100ms delay
```

**Note:** Disable custom cursor on touch devices (`@media (pointer: coarse)`)

### 4.8 Scroll Progress Bar

```tsx
// Thin 2px bar at very top of viewport
// Width = scrollY / (documentHeight - viewportHeight) * 100%
// Color: var(--accent)
// motion.div with scaleX: useMotionValue + useSpring for smooth trailing
```

### 4.9 Page Load Sequence

```
0ms:   Page bg appears (instant)
200ms: Noise texture fades in
400ms: Nav slides down
600ms: Hero badge appears (FadeUp)
720ms: "Ashish" slides up
840ms: "Singh." slides up (with slight accent dot pop)
960ms: Role + bio fade in
1080ms: CTAs fade in
1200ms: Social links stagger in
1400ms: Scroll indicator bounces in
```

### 4.10 Section Transitions (Scroll-Triggered)

Each section uses the same entrance pattern but different axis:
- Sections alternate between `y: 40 → 0` (standard) and `x: -40 → 0` (experience entries)
- Bento grids use `scale: 0.95 → 1.0` + `opacity: 0 → 1`

---

## 5. Component Inventory

Build these components in order:

```
components/
├── layout/
│   ├── Nav.tsx              — Fixed top navigation
│   ├── Footer.tsx           — Site footer
│   └── SmoothScroll.tsx     — Lenis provider
│
├── ui/
│   ├── BentoCard.tsx        — Reusable bento card with spotlight
│   ├── Chip.tsx             — Tech stack chip
│   ├── Badge.tsx            — Status badge (● Available)
│   ├── Button.tsx           — Primary + Ghost variants
│   ├── SectionLabel.tsx     — "// label" mono headers
│   └── SectionTitle.tsx     — Large Syne heading with clip animation
│
├── motion/
│   ├── FadeUp.tsx           — Scroll-triggered fade-up wrapper
│   ├── Cursor.tsx           — Custom cursor
│   ├── ScrollProgress.tsx   — Top progress bar
│   └── MagneticButton.tsx   — Magnetic hover effect
│
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx            — Bento grid
│   ├── Skills.tsx           — Filtered icon grid
│   ├── Experience.tsx       — Timeline entries
│   ├── Projects.tsx         — Bento grid
│   └── Contact.tsx
│
└── icons/
    └── tech/                — SVG icons for each technology
        ├── typescript.svg
        ├── react.svg
        └── ...
```

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|---|---|---|
| Mobile | < 640px | Single column, stacked sections, no custom cursor, hamburger menu |
| Tablet | 640–1024px | 2-column bento grids, nav visible |
| Desktop | > 1024px | Full 3-column bento, 6-column experience, all effects active |

**Bento Grid Responsive:**
```
mobile:  grid-cols-1 (all cards stack)
tablet:  grid-cols-2 (large cards span 2, small cards span 1)
desktop: grid-cols-3 (as designed)
```

**Typography Responsive:**
```
Display: 96px → 72px → 48px (desktop → tablet → mobile)
H1: 64px → 48px → 36px
```

---

## 7. File & Folder Structure

```
ashish-portfolio/
├── app/
│   ├── layout.tsx           — Root layout (fonts, noise, lenis, cursor)
│   ├── page.tsx             — Home page (all sections)
│   ├── globals.css          — CSS variables + global styles
│   └── projects/            — Optional: /projects page for all projects
│       └── page.tsx
│
├── components/              — (see Component Inventory above)
│
├── lib/
│   ├── data.ts              — All content data (projects, experience, skills)
│   ├── utils.ts             — cn() utility, helpers
│   └── hooks/
│       ├── useMousePosition.ts
│       └── useScrollProgress.ts
│
├── public/
│   ├── images/
│   │   ├── avatar.webp       — Profile photo
│   │   └── projects/         — Project screenshots (.webp)
│   └── icons/
│       └── tech/             — Tech stack SVG icons
│
├── tailwind.config.ts       — Extended with custom colors, fonts, spacing
└── next.config.ts
```

**`lib/data.ts` structure:**
```ts
export const personalInfo = { name, title, bio, location, email, github, linkedin }
export const roles = ['Full-Stack Developer', 'Solo Builder', ...]
export const skills = [{ name, icon, category }]
export const experience = [{ id, number, role, company, period, type, bullets, stack }]
export const projects = [{ id, name, desc, stack, github, live, screenshot, featured, size }]
```

---

## 8. Implementation Phases

**Phase 1 — Foundation**
1. Init Next.js 15 with TypeScript + Tailwind v4
2. Install dependencies: `motion`, `lenis`, `lucide-react`
3. Set up `globals.css` with all CSS variables
4. Configure `tailwind.config.ts` with custom tokens
5. Build `layout.tsx`: fonts, noise overlay, smooth scroll provider, cursor
6. Build `Nav.tsx` with scroll behavior
7. Build reusable `ui/` components: BentoCard, Chip, Badge, Button, SectionLabel

**Phase 2 — Sections (in order)**
1. `Hero.tsx` — Stagger animation, role cycling, background glow
2. `About.tsx` — Bento grid with spotlight cards, GitHub heatmap
3. `Skills.tsx` — Filtered icon grid with AnimatePresence
4. `Experience.tsx` — Timeline with scroll-trigger
5. `Projects.tsx` — Bento grid with hover effects
6. `Contact.tsx` — Cards + form
7. `Footer.tsx`

**Phase 3 — Polish**
1. Custom cursor + magnetic buttons
2. Scroll progress bar
3. Section heading clip animations
4. Page load sequence timing
5. Mobile responsive pass
6. Performance audit (image optimization, font preload)
7. Accessibility: focus rings, reduced-motion `prefers-reduced-motion`

**Phase 4 — Content & Deploy**
1. Replace placeholder data in `lib/data.ts`
2. Add real project screenshots
3. Add real profile photo
4. Add resume PDF to `/public/`
5. Deploy to Vercel with custom domain

---

## 9. Reduced Motion Accessibility

Always wrap major animations with:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
And in motion:
```tsx
const shouldReduceMotion = useReducedMotion()
const variants = shouldReduceMotion ? {} : normalVariants
```

---

## 10. Performance Notes

- All images: `.webp` format, served through `next/image`
- Tech stack icons: inline SVGs (no extra network requests)
- Fonts: Google Fonts with `display=swap` + next/font for self-hosting
- Motion: Use `layout` animations only where needed (skill filter)
- Lenis: Runs on `requestAnimationFrame` — no impact on main thread
- GitHub heatmap: Static screenshot fallback if API is unavailable

---

## 11. Personal Content (from ashpeak.vercel.app)

Populate `lib/data.ts` with this base data:

```ts
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
```

---

*Plan authored June 2026 · Ready for agent implementation*
