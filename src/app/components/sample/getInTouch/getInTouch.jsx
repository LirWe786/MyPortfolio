'use client'
import styles from './getInTouch.module.css';
import Line from '@/app/components/molecules/line/line';
import Links from '../../atoms/links/links';
import mediaData from '@/data/media';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const GetInTouch = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);





    return (
        <div
            id='contact'
            className={styles.getInTouch}
        >
            <Line txt='contact'></Line>
            <div
                className={styles.getInTouchMain}
            >

                <motion.div
                    className={styles.emailContainer}
                    ref={ref}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
                    transition={{ duration: 0.8 }}
                >
                    <span

                        className={styles.dollarSym}
                    >$ </span>
                    <motion.a
                        initial={{ textShadow: 'none' }}
                        whileHover={{
                            textShadow: '0 5px 15px #B7FF3E',
                            transition: { duration: 0.2 }
                        }}
                        className={styles.emailLink}
                        href="malito:primak2020@gmail.com">primak2020@gmail.com</motion.a>
                    <motion.span
                        animate={{ opacity: 0 }}
                        initial={{ opacity: 0.5 }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: 'miror',
                            ease: 'steps(1)'

                        }}
                        className={styles.underscores}
                    >_</motion.span>
                </motion.div>
                <div
                    className={styles.mediaLinkContainer}
                >
                    {mediaData.map((media) => {
                       
                        return (

                            < Links
                             

                                txt={media.name} link={media.link} key={media.id} />
                        )
                    })}
                </div>

            </div>
        </div >
    )
}

export default GetInTouch;