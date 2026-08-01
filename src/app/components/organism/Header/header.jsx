

import Links from "../../atoms/links/links";
import navigations from "@/data/navigation";


const Header = () => {




    return (


        <header

        >
            {navigations.map((link) => (
          
                <Links txt={link.txt } link={link.link} key={link.txt} > </Links>
            ))}
            
       

        </header>
    )
}

export default Header;