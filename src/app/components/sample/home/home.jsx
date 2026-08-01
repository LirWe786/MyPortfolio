'use client'

import styles from "./home.module.css"
import { motion } from "motion/react"
import Aurora from "../../molecules/aurora/Aurora"
import Typewriter from "typewriter-effect"

const HomePage = () => {
    return (
        <motion.div
            id="home"
            className={styles.homePage}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <Aurora
                colorStops={['#3f6212', '#a3e635', '#1a1a1a']}
                blend={0.4}
                speed={0.3}
                className={styles.aurora}
            />

            <div style={{ position: 'relative', zIndex: 1 }} className={styles.homeMain}>
                <motion.div
                    className={styles.hiDiv}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className={styles.nameP}>&lt;Chin-Giz/&gt;</p>
                    
                    <div className={styles.typewriterLine}>
                        <span className={styles.prompt}>$ npx create-</span>
                        <Typewriter
                            options={{
                                strings: ['landing', 'e-commerce', 'telegram-bot', 'dashboard'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 80,
                                cursor: '_',
                                wrapperClassName: styles.typewriterText,
                                cursorClassName: styles.typewriterCursor,
                            }}
                        />
                        <span className={styles.prompt}>--client="you"</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.photoDiv}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className={styles.photoCard}>
                        <img src="photo.jpg" alt="" className={styles.photo} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default HomePage