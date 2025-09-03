import Features from "./features.jsx";
import NavButton from "./navBtn.jsx";

function Menu( {onCloseClick} ) {
    return(
        <div className="menu">
            <img onClick={onCloseClick} className="close-menu" src="/images/icon-close-menu.svg" alt="close menu" />
            <div className="mobile-features-container">
                <Features />
            </div>
            <NavButton />
        </div>
    )
}

export default Menu;