import React from "react";
import { Link } from 'gatsby';
import {
    navbar,
    navList,
    navListItem,
    navListLink
} from "./navbar.module.css";

const Navbar = () => {

    return (
        <nav className={navbar}>
            <ul className={navList}>
                <li className={navListItem}>
                    <Link to="/" className={navListLink}>Home</Link>
                <li className={navListItem}>
                    <Link to="/skills" className={navListLink}>Skills</Link>
                </li>
                <li className={navListItem}>
                    <Link to="/projects" className={navListLink}>Projects</Link>
                </li>
                </li>
                <li className={navListItem}>
                    <Link to="/experience" className={navListLink}>Experience</Link>
                </li>
                <li className={navListItem}>
                    <Link to="/education" className={navListLink}>Education</Link>
                </li>
                <li className={navListItem}>
                    <Link to="/contact" className={navListLink}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
