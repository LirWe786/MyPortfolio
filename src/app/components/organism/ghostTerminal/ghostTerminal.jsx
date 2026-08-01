'use client'

import styles from './ghostTerminal.module.css'

const lines = [
  '> npm install skills',
  '> compiling experience...',
  '> git commit -m "about me"',
  '> loading creativity...',
  '> optimizing performance...',
  '> import { passion } from life',
  '// TODO: never stop learning',
  '$ cat skills.json',
  '$ node about.js',
  '> building future...',
  '$ npx create-landing',
  '> [====================] 100%',
  '> ready to work',
  '// const skills = [...]',
  '> npm run dev',
  '> watching for changes...',
]

// Дублируем строки для бесконечной прокрутки
const doubled = [...lines, ...lines]

const columns = [
  { left: '5%', duration: 45, delay: 0, opacity: 0.065 },
  { left: '30%', duration: 60, delay: -15, opacity: 0.055 },
  { left: '55%', duration: 50, delay: -8, opacity: 0.03 },
  { left: '78%', duration: 55, delay: -22, opacity: 0.04 },
]

export default function GhostTerminal() {
  return (
    <div className={styles.ghost}>
      {columns.map((col, i) => (
        <div
          key={i}
          className={styles.column}
          style={{
            left: col.left,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
          }}
        >
          {doubled.map((line, j) => (
            <span
              key={j}
              className={styles.line}
              style={{ opacity: col.opacity }}
            >
              {line}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}