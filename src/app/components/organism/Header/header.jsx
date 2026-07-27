
import Link from "next/link";

const Header = () => {
    return (
        <header
            
        >
            <Link
                scroll={true}
                href="#home"
                replace
            >home</Link>
            <Link
                scroll={true}
                href="#about"
                replace
            >about</Link>
            <Link
                scroll={true}
                href="#contacs"
                replace
            >contacts</Link>
            <Link
                scroll={true}
                href="#resume"
                replace
            >resume</Link>

        </header>
    )
}

export default Header;