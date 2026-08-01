'use client'

import { useEffect, useRef } from 'react'

export default function Aurora({ 
  colorStops = ['#3f6212', '#a3e635', '#1a1a1a'],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    
    let animationId
    let time = 0
    
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    
    resize()
    window.addEventListener('resize', resize)
    
    const draw = () => {
      time += speed * 0.01
      const w = canvas.width
      const h = canvas.height
      
      ctx.clearRect(0, 0, w, h)
      
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(0, 0, w, 0)
        gradient.addColorStop(0, colorStops[0])
        gradient.addColorStop(0.5, colorStops[1])
        gradient.addColorStop(1, colorStops[2])
        
        ctx.globalCompositeOperation = 'screen'
        ctx.globalAlpha = blend * 0.25
        
        ctx.beginPath()
        const baseY = h * (0.3 + i * 0.15)
        
        for (let x = 0; x <= w; x += 5) {
          const wave1 = Math.sin(x * 0.003 + time + i * 2) * 80 * amplitude
          const wave2 = Math.cos(x * 0.001 - time * 0.5 + i) * 40 * amplitude
          const y = baseY + wave1 + wave2
          
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        
        ctx.lineTo(w, h)
        ctx.lineTo(0, h)
        ctx.closePath()
        ctx.fillStyle = gradient
        ctx.fill()
      }
      
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
      
      animationId = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [colorStops, blend, amplitude, speed])
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display:'block',
      }}
    />
  )
}