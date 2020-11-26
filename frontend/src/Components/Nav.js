import React from 'react';
import './style.css';
import { 
    NavLink
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
                        <NavLink to={navItem.link} key={navItem.text + idx} ><button>{navItem.text}</button></NavLink>
                        // <NavLink to={navItem.link} key={navItem.text + idx} >{navItem.text}</NavLink>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav;