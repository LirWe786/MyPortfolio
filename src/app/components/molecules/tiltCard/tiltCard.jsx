'use client'

import { useRef, useState } from 'react'
import styles from './tiltCard.module.css'

export default function TiltCard({ children }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')
  const [glare, setGlare] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    )
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setGlare({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      className={styles.tiltCard}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <div
        className={styles.glare}
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(163, 230, 53, 0.12) 0%, transparent 55%)`,
        }}
      />
      {children}
    </div>
  )
}