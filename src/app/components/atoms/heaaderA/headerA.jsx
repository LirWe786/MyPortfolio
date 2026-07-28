import Link from "next/link"
import styles from './headerA.module.css'

const HeaderA = ({id}) => {


    return (
        <div>
            <Link
            className={styles.headerA}
                scroll={true}
                href={`#${id}`}
                replace
            >{id}</Link>
        </div>
    )
};

export default HeaderA;