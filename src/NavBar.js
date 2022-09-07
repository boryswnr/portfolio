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
                </li>
                <li className={navListItem}>
                    <Link to="/education" className={navListLink}>Education</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
