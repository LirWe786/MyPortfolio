'use client'
import styles from "./home.module.css"
import { motion } from "motion/react";

const HomePage = () => {

    return (
        <motion.div
            id="home"
            className={styles.homePage}

        >

            <motion.div
                className={styles.hiDiv}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p
                    className={styles.nameP}
                > &lt;Chin-Giz/&gt; </p>
                <p
                    className={styles.specP}
                >Frontend developer</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={styles.photoDiv} >
                <div className={styles.photoCard}>
                    <img
                        src="photo.jpg"
                        alt=""
                        className={styles.photo} />

                </div>
            </motion.div>

        </motion.div>
    )


}

export default HomePage;