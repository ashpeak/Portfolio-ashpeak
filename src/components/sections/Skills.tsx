'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { skills, skillCategories } from '@/lib/data/skills'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef  = useRef<HTMLDivElement>(null)
  const overlayRef  = useRef<HTMLDivElement>(null)
  const leaveTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  const handleEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    colorBlend: string
  ) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)

    const overlay  = overlayRef.current
    const section  = sectionRef.current
    if (!overlay || !section) return

    // Card center relative to the SECTION (not the viewport)
    const cardRect    = e.currentTarget.getBoundingClientRect()
    const sectionRect = section.getBoundingClientRect()
    const cx = cardRect.left - sectionRect.left + cardRect.width  / 2
    const cy = cardRect.top  - sectionRect.top  + cardRect.height / 2

    // Extract the 3 colors from the blend string (now simple hex/css colors)
    const colors = colorBlend.split(',').map(c => c.trim())
    
    // Apply a linear gradient from left to right, centered on the card
    const size = 600; // Width of the gradient spread
    overlay.style.backgroundImage =
      `linear-gradient(to right, ${colors[0]} 10%, ${colors[1]} 50%, ${colors[2]} 90%)`
    overlay.style.backgroundSize = `${size}px ${size}px`
    overlay.style.backgroundPosition = `${cx - size / 2}px ${cy - size / 2}px`
    overlay.style.backgroundRepeat = 'no-repeat'

    // Combine the circular spotlight reveal with the repeating dot grid
    const spotlightMask = `radial-gradient(circle 400px at ${cx}px ${cy}px, black 0%, black 15%, transparent 100%)`
    const dotMask = `radial-gradient(circle, black 1.5px, transparent 1.5px)`

    overlay.style.maskImage = `${spotlightMask}, ${dotMask}`
    overlay.style.webkitMaskImage = `${spotlightMask}, ${dotMask}`

    overlay.style.maskSize = `100% 100%, 28px 28px`
    overlay.style.webkitMaskSize = `100% 100%, 28px 28px`

    overlay.style.maskRepeat = `no-repeat, repeat`
    overlay.style.webkitMaskRepeat = `no-repeat, repeat`

    overlay.style.maskComposite = `intersect`
    overlay.style.webkitMaskComposite = `source-in`

    overlay.style.opacity = '1'
  }

  const handleLeave = () => {
    // Small delay prevents flicker when mouse moves between adjacent tiles
    leaveTimer.current = setTimeout(() => {
      if (overlayRef.current) overlayRef.current.style.opacity = '0'
    }, 80)
  }

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        position:   'relative',
        background: '#080808',   // ← solid cover: kills body dot misalignment
        overflow:   'hidden',
        padding:    '96px 0',
      }}
    >
      {/*
        OVERLAY — position absolute so cx/cy are relative to section.
        Combines background gradient + multi-layer dot mask.
      */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position:          'absolute',
          inset:             0,
          opacity:           0,
          transition:        'opacity 450ms ease',
          pointerEvents:     'none',
          zIndex:            0,
        }}
      />

      {/* All content above the overlay */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>

        {/* Label + Title */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ color: '#c8ff00', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: '8px' }}>
            // skills
          </p>
          <h2 style={{ color: '#ededed', fontSize: '40px', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>
            What I Work With.
          </h2>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {skillCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding:      '5px 14px',
                borderRadius: '8px',
                fontSize:     '12px',
                fontFamily:   'monospace',
                cursor:       'pointer',
                border:       activeCategory === cat ? '1px solid #c8ff00' : '1px solid #1e1e1e',
                background:   activeCategory === cat ? 'rgba(200,255,0,0.07)' : 'transparent',
                color:        activeCategory === cat ? '#c8ff00' : '#555',
                transition:   'all 200ms',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
            gap:                 '10px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(skill => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.18 }}
                whileHover={{ y: -4, scale: 1.06 }}
                onMouseEnter={(e) => handleEnter(e, skill.colorBlend)}
                onMouseLeave={handleLeave}
                style={{
                  width:          '96px',
                  height:         '96px',
                  background:     '#0f0f0f',
                  border:         '1px solid #1e1e1e',
                  borderRadius:   '14px',
                  display:        'flex',
                  flexDirection:  'column',
                  alignItems:     'center',
                  justifyContent: 'center',
                  gap:            '8px',
                  cursor:         'default',
                }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${skill.icon}.svg`}
                  alt={skill.name}
                  width={32}
                  height={32}
                  style={{ filter: 'invert(1) brightness(0.7)', width: '32px', height: '32px' }}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#555', textAlign: 'center', padding: '0 4px' }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
