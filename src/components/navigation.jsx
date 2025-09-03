import Menu from "./menu.jsx";
import Features from "./features.jsx";
import NavButton from "./navBtn.jsx";
import { useState } from "react";

function Navigation() {

    const[isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <nav>
                <div className="logo-features-container">
                    <img className="logo" src="/images/logo.svg" alt="logo" />
                    <div className="features-container">
                        <Features />
                    </div>
                </div>
                <img onClick={handleClick} className="open-menu" src="/images/icon-menu.svg" alt="open menu" />
                <div className="btn-in-nav">
                    <NavButton />
                </div>
            </nav>
            {isOpen && <Menu onCloseClick={handleClick} />}
        </>
    )
}

export default Navigation;