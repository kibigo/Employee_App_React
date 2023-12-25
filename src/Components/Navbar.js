import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faInfoCircle, faTools } from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faHome}/> 
                    <a href="/#" className="nav-link">Home</a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    <a href="#" className="nav-link">About</a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTools}/>
                    <a href="#services" className="nav-link">Services</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar