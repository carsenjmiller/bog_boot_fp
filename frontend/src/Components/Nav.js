import React from "react";
import './PetProfileList.css';

const navItems = [
    {
        link: ".Components/About.js",
        text: "About"
    },
    {
        link: "#",
        text: "Adopt a pet"
    }
]

const Nav = () => {
    return (
        <nav>
            <h1>Benji's animal shelter</h1>
            <div className="navLinks">
                {navItems.map((navItem, idx) => {
                    return (
                        <a key={navItem.text + idx} href={navItem.link}>{
                            navItem.text}</a>
                    )
                })}
            </div>
        </nav>
    );
};

export default Nav;