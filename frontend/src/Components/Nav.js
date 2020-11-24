import React from 'react';
import './style.css';
import { 
    Link
  } from 'react-router-dom';

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
            <div className="navLinks" >
                {navItems.map((navItem, idx) => {
                    return(
                        <Link to={navItem.link} key={navItem.text + idx} ><button>{navItem.text}</button></Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav;