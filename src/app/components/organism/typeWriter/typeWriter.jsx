'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'

const words = ['landing', 'e-commerce', 'telegram-bot', 'dashboard']

export default function TypewriterMotion() {
  const [displayed, setDisplayed] = useState('')
  
  const indexRef = useRef(0)
  const deletingRef = useRef(false)
  const charRef = useRef(0)

  useEffect(() => {
    const tick = () => {
      const word = words[indexRef.current]
      const isDeleting = deletingRef.current
      
      if (!isDeleting) {
        // Печатаем
        charRef.current += 1
        setDisplayed(word.slice(0, charRef.current))
        
        if (charRef.current >= word.length) {
          deletingRef.current = true
          setTimeout(tick, 1800) // пауза перед удалением
          return
        }
      } else {
        // Удаляем
        charRef.current -= 1
        setDisplayed(word.slice(0, charRef.current))
        
        if (charRef.current <= 0) {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % words.length
        }
      }
      
      setTimeout(tick, isDeleting ? 60 : 120)
    }
    
    const startTimer = setTimeout(tick, 500)
    return () => clearTimeout(startTimer)
  }, []) // пустые скобки — эффект запускается один раз

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '28px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
      <span style={{ color: '#6b7280' }}>$ npx create-</span>
      
      <span style={{ color: '#a3e635', minWidth: '10px' }}>
        {displayed}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse', ease: 'steps(1)' }}
          style={{ color: '#a3e635', marginLeft: '2px' }}
        >
          _
        </motion.span>
      </span>
      
      <span style={{ color: '#6b7280' }}>--client="you"</span>
    </div>
  )
}