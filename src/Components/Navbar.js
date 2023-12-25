import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar(){
    const [showNav, setShowNav] = useState(false)

    const toggleNavbar = () => {
        setShowNav(!showNav)
    }

    return(
        <div className="navbar">
            <button className="toggle-btn" onClick={toggleNavbar}>
                <FontAwesomeIcon icon={faBars} size="2x" style={{ color: "#1f513a" }} />

            </button>
            <ul className={`navlinks ${showNav ? 'show' : ''}`}>
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar