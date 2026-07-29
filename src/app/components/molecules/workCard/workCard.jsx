'use client'

import styles from './workCard.module.css';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { animate } from 'motion';


const WorkCard = ({ work }) => {


    const ref = useRef(null);
    const isInView = useInView(ref)

    const CardVariants = {
        initial: {
            borderBottomColor: '#5C8A1F',
            backgroundColor: 'none',


        },
        hover: {
            borderBottomColor: '#B7FF3E',
            y: -2,
            transition: { duration: 0.2 }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
        }
    };
    const tagVariants = {
        initial: {
            color: '#5C5C5C',
        },
        hover: {
            color: '#B7FF3E',
            transition: { duration: 0.2 }
        }
    }



    return (
        <motion.div
            ref={ref}
            variants={CardVariants}
            initial='initial'
            whileHover='hover'
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 100 }}
            className={styles.workCard}
        >

            <h3
                className={styles.workName}
            >{work.name}</h3>
            <div
                className={styles.workTagsContainer}
            >

                {work.tags.map(tag => (
                    <motion.span
                        variants={tagVariants}
                        className={styles.workTag}
                        key={tag}
                    > {tag}</motion.span>
                ))}
            </div>

            <motion.a
                whileHover={{
                    color: '#CCFF66',
                    scale: 1.05,
                    transition: 0.2,
                    textDecoration: 'underline'
                }}
                whileTap={{
                    scale: 0.98
                }}

                href={`${work.link}`}
                className={styles.workLink}
            >&rarr; details</motion.a>



        </motion.div>
    )
}


export default WorkCard;


// &bull;