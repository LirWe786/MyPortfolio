'use client'
import styles from "./home.module.css"
import { motion } from "motion/react";

const HomePage = () => {

    return (
        <motion.div
            id="home"
            className={styles.homePage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >

            <div className={styles.hiDiv}>
                <p
                    className={styles.nameP}
                > &lt;Chin-Giz/&gt; </p>
                <p
                    className={styles.specP}
                >Frontend developer</p>
            </div>
            <div className={styles.photoDiv} >
                <div className={styles.photoCard}>
                    <img
                        src="photo.jpg"
                        alt=""
                        className={styles.photo} />

                </div>
            </div>

        </motion.div>
    )


}

export default HomePage;