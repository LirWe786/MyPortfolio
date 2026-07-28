
import styles from './line.module.css'

const Line = ({ txt }) => {


    return (
        <div

            className={styles.lineSection}
        >
            <p className={styles.lineSectionTxt} >{txt}</p>
            <div
                className={styles.lineSectionLine}
            ></div>
        </div>
    )


}

export default Line;