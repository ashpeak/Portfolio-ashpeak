'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TextScramble({ text, className = '', delay = 0, speed = 30 }: TextScrambleProps) {
  const [display, setDisplay] = useState('')
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const timeout = setTimeout(() => {
      let iteration = 0
      const interval = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (i < iteration) return text[i]
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join('')
        )

        iteration += 1 / 3

        if (iteration >= text.length) {
          clearInterval(interval)
          setDisplay(text)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [started, text, delay, speed])

  return (
    <span ref={ref} className={className}>
      {display || text.replace(/./g, '\u00A0')}
    </span>
  )
}
