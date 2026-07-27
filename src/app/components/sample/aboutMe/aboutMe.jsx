import styles from "./aboutme.module.css"


const AboutMe = () => {



    return (
        <div
            id='about'
            className={styles.aboutMe}
        >

            <div
                className={styles.aboutLnContainer}
            >
                <p className={styles.lineP} >about me</p>
                <div
                    className={styles.line}
                ></div>
            </div>
            <div className={styles.aboutMain} >
                <div
                    className={styles.aboutStackDiv}
                >

                </div>

                <div
                    className={styles.aboutPContainer}
                >
                    <div className={styles.scndLine}></div>
                    <p
                        className={styles.aboutP}
                    >Hi! I'm Chin-Giz — a frontend developer passionate about building
                        modern, fast, and responsive web interfaces.<br></br>
                        <br></br>
                        I recently completed an intensive training program where I mastered
                        creating pixel-perfect layouts from complex designs. I enjoy turning
                        Figma mockups into clean, reusable code.<br></br>
                        <br></br>
                        I specialize in React, Next.js, and TypeScript, focusing on
                        component-driven development, clean architecture, and performance.
                        I work with Tailwind CSS and Material UI for styling, Zustand for
                        state management, and Motion.dev for animations.<br></br>
                        <br></br>
                        I learn fast, pay attention to details, and strive to grow in
                        commercial development as part of a product team.
                    </p>
                    <div className={styles.scndLine}></div>

                </div>

            </div>

        </div>
    )
}


export default AboutMe