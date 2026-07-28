import Link from "next/link"


const HeaderA = ({id}) => {


    return (
        <div>
            <Link
                scroll={true}
                href={`#${id}`}
                replace
            >{id}</Link>
        </div>
    )
};

export default HeaderA;