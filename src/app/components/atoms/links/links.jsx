'use client'

import Link from "next/link"
import styles from './links.module.css'
import { motion } from "motion/react";
import { useState } from "react";

const MotionLink = motion.create(Link)  // ← вверху файла

const Links = ({ txt, link }) => {

  

    return (

        <MotionLink
            whileHover={{
                color: '#CCFF66',
                transition: { duration: 0.1 },
                borderBottom: '1px solid var(--accent)'
            }}
            className={styles.links}
            scroll={true}
            href={`${link}`}
            replace
        >{txt}</MotionLink >

    )
};

export default Links;