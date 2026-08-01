'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import styles from './aboutTerminal.module.css'

const LINES = [
  { text: 'Hi! I\'m Chin-Giz — a frontend developer passionate about', type: 'text' },
  { text: 'building modern, fast, and responsive web interfaces.', type: 'text' },
  { text: '', type: 'break' },
  { text: '// recently completed intensive training', type: 'comment' },
  { text: '// pixel-perfect layouts from Figma to code', type: 'comment' },
  { text: '', type: 'break' },
  { text: 'Specializing in React, Next.js, TypeScript.', type: 'text', keywords: ['React', 'Next.js', 'TypeScript'] },
  { text: 'Clean architecture. Component-driven. Performance first.', type: 'text' },
  { text: '', type: 'break' },
  { text: '// stack: Tailwind, Material UI, Zustand, Motion.dev', type: 'comment' },
  { text: '// status: available for product teams', type: 'comment' },
]

function renderText(line) {
  if (!line.keywords) return line.text
  
  const parts = []
  let lastIndex = 0
  
  line.keywords.forEach(kw => {
    const idx = line.text.indexOf(kw, lastIndex)
    if (idx !== -1) {
      if (idx > lastIndex) parts.push({ text: line.text.slice(lastIndex, idx), hl: false })
      parts.push({ text: kw, hl: true })
      lastIndex = idx + kw.length
    }
  })
  
  if (lastIndex < line.text.length) parts.push({ text: line.text.slice(lastIndex), hl: false })
  
  return parts.map((p, i) => (
    <span key={i} className={p.hl ? styles.highlight : undefined}>{p.text}</span>
  ))
}

export default function TerminalAbout({ isInView }) {
  const [completedLines, setCompletedLines] = useState([])
  const [currentLineIdx, setCurrentLineIdx] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDone, setIsDone] = useState(false)
  const timers = useRef([])

  useEffect(() => {
    if (!isInView || isDone) return
    
    if (currentLineIdx >= LINES.length) {
      setIsDone(true)
      return
    }

    const line = LINES[currentLineIdx]
    
    if (line.type === 'break') {
      setCompletedLines(prev => [...prev, line])
      setCurrentLineIdx(prev => prev + 1)
      return
    }

    let char = 0
    const type = () => {
      if (char <= line.text.length) {
        setCurrentText(line.text.slice(0, char))
        char++
        const t = setTimeout(type, 30)
        timers.current.push(t)
      } else {
        setCompletedLines(prev => [...prev, line])
        setCurrentText('')
        setCurrentLineIdx(prev => prev + 1)
      }
    }
    
    type()

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [isInView, currentLineIdx, isDone])

  return (
    <div className={styles.terminal}>
      <div className={styles.command}>$ cat about.md</div>
      
      <div className={styles.output}>
        {completedLines.map((line, i) => (
          <div key={i} className={line.type === 'comment' ? styles.comment : styles.text}>
            {line.type === 'break' ? <div className={styles.break} /> : renderText(line)}
          </div>
        ))}
        
        {!isDone && currentLineIdx < LINES.length && LINES[currentLineIdx].type !== 'break' && (
          <div className={LINES[currentLineIdx].type === 'comment' ? styles.comment : styles.text}>
            {renderText({ ...LINES[currentLineIdx], text: currentText })}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse',  }}
              className={styles.cursor}
            >_</motion.span>
          </div>
        )}
        
        {isDone && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse',  }}
            className={styles.cursor}
          >_</motion.span>
        )}
      </div>
    </div>
  )
}