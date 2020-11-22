import React from "react";
import './PetProfileList.css';
import AdoptAPet from "./AdoptAPet";
import About from "./About";
import { BrowserRouter as 
    Link
  } from "react-router-dom";

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
            <h1>Benji's animal shelter</h1>
            <ul className="navLinks">
                <li>
                {navItems.map((navItem, idx) => {
                    return(
                        <Link to={navItem.link} key={navItem.text + idx} >{navItem.text}</Link>
                    )
                })}
                </li>
            </ul>
        </nav>
    );
};

export default Nav;