'use client'
import { hover } from "motion";
import { useRef, useEffect } from "react";
import HeaderA from "../../atoms/heaaderA/headerA";

import Link from "next/link";

const Header = () => {

    const ref = useRef(null)



    useEffect(() => {
        return hover(ref.current, () => {
            console.log("on hover start")
            return () => console.log("on hover end")
        })
    }, [])

    return (
        <header

        >
            <HeaderA id='home' > </HeaderA>
            <HeaderA id='about' > </HeaderA>
            <HeaderA id='projects'> </HeaderA>
            <HeaderA id='contact' > </HeaderA>

        </header>
    )
}

export default Header;