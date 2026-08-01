'use client'

import styles from "./projects.module.css";
import Line from '@/app/components/molecules/line/line';
import works from '@/data/works';
import WorkCard from "../../molecules/workCard/workCard";
import { motion } from "motion/react";

const Projects = () => {



    return (
        <motion.div
            id="projects"
            className={styles.projects}
           
        >

            <Line txt='projects' ></Line>

            <div
                className={styles.projectsMain}
            >
                {works.map((work) => (
                    <WorkCard work={work} key={work.id} />
                ))}
            </div>
        </motion.div>
    )
}


export default Projects;
