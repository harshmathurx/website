import React from 'react'
import "./menu.scss";
function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Projects</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
