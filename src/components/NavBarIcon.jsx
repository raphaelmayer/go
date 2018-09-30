import React from "react";
import "./css/NavBarIcon.css";

const NavBarIcon = ({ onClick, showMobileNav }) => {

    return (
        <svg height="24" width="26" className={ showMobileNav ? "nav-icon nav-icon-active" : "nav-icon" } onClick={ onClick } >
            <line className="line-1" x1="0" y1="3" x2="26" y2="3" />
            <line className="line-2" x1="0" y1="12" x2="26" y2="12" />
            <line className="line-3" x1="0" y1="21" x2="26" y2="21" />
        </svg>
    );
}

export default NavBarIcon;