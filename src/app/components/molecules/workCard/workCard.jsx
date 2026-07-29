'use client'
import { motion } from 'motion/react'
import styles from './workCard.module.css'

const WorkCard = ({ work }) => {

    return (
        <motion.div
            whileHover={{
                borderBottomColor: '#B7FF3E',
                y: -2,
                transition: { duration: 0.2 }
            }}
            className={styles.workCard}
        >

            <h3
                className={styles.workName}
            >{work.name}</h3>
            <div
                className={styles.workTagsContainer}
            >

                {work.tags.map(tag => (
                    <span
                        className={styles.workTag}
                        key={tag}
                    > {tag}</span>
                ))}
            </div>
            <motion.a
            whileHover={{
                color:'#CCFF66',
                scale:1.05,
                transition:0.2
            }}
            
                href={`${work.link}`}
                className={styles.workLink}
            > &rarr; details</motion.a>

        </motion.div>
    )
}


export default WorkCard;


// &bull;