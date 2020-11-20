import React from "react";

const navItems = [
    {
        link: "#",
        text: ""
    },
    {
        link: "#",
        text: ""
    }
];
const Nav = () => {
    return (
        <nav>
            <h1>Benji's animal shelter</h1>
            {navItems.map((navItem, idx) => {
                return (
                    <a key={navItem.text + idx} href={navItem.link}>
                        {navItem.text}
                    </a>
                );
            })};
        </nav>
    );
};

export default Nav;