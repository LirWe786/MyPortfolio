import styles from "./projects.module.css";
import Line from '@/app/components/molecules/line/line';
import works from '@/data/works';
import WorkCard from "../../molecules/workCard/workCard";
const Projects = () => {



    return (
        <div

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
        </div>
    )
}


export default Projects;
