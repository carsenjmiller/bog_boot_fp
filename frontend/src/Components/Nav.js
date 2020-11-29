import React from 'react';
import './style.css';
import { 
    NavLink
  } from 'react-router-dom';
  import { faDog } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import myImage from './DogandcatSilhouette.png'

const navItems = [
    {
        link: "/about",
        text: "About"
    },
    {
        link: "/adoptapet",
        text: "Adopt a pet"
    }
]

const Nav = () => {
    return (
        <nav>
            <h1>
                <FontAwesomeIcon icon={faDog} />
                {/* <img src={myImage} alt="Elegant Cat Paw Print Clip Art Dog And Cat Silhouettes - Dog" ></img> */}
                
                &nbsp;&nbsp;Benji's animal shelter</h1>
            <div className="navLinks">
                {navItems.map((navItem, idx) => {
                    return(
                        <NavLink to={navItem.link} key={navItem.text + idx}  ><button id="navBTN">{navItem.text}</button></NavLink>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav;