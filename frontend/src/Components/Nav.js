import React from "react";
import './PetProfileList.css';

const Nav = () => {
    return (
        <nav>
            <h1>Benji's animal shelter</h1>
            <div className="navLinks">
                <a href="#">About&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="#">Adopt a pet</a>
            </div>
        </nav>
    );
};

export default Nav;