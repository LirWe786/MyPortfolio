'use client'
import styles from "./stackCard.module.css"
import { motion } from "motion/react"

const StackCard = ({ widthImg, txt, children }) => {


    return (

        <motion.div
            whileHover={{
                scale: 1.1,
                transition: {  duration: 0.1 }
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
    )
}

export default StackCard;