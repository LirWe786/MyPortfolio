'use client'
import styles from "./stackCard.module.css"
import { motion } from "motion/react"
import TiltCard from "../tiltCard/tiltCard"

const StackCard = ({ widthImg, txt, children }) => {


    return (
        <TiltCard>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 }
                }}
                className={styles.StackCard}
            >
                <div></div>
                <div
                    style={widthImg}
                    className={styles.imgContainer}
                >
                    {children}
                </div>

                <p
                    className={styles.StackCardP}
                >{txt}</p>
            </motion.div>
        </TiltCard>
    )
}

export default StackCard;