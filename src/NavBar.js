import React, { useEffect, useState } from "react";
import { Link } from 'gatsby';
import {
    navbar,
    navList,
    navListItem,
    navListLink,
    scrolled,
} from "./navbar.module.css";

const Navbar = () => {

     const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    const scrolledClass = ' ' + (scrollPosition > 0 ? scrolled : 'top');

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    return (
        <nav className={navbar + scrolledClass}>
            <ul className={navList}>
                <li className={navListItem}>
                    <Link to="/" className={navListLink + scrolledClass}>Home</Link>
                </li>    

                <li className={navListItem}>
                    <Link to="/skills" className={navListLink + scrolledClass}>Skills</Link>
                </li>

                <li className={navListItem}>
                    <Link to="/projects" className={navListLink + scrolledClass}>Projects</Link>
                </li>

                <li className={navListItem}>
                    <Link to="/experience" className={navListLink + scrolledClass}>Experience</Link>
                </li>

                <li className={navListItem}>
                    <Link to="/education" className={navListLink + scrolledClass}>Education</Link>
                </li>

                <li className={navListItem}>
                    <Link to="/contact" className={navListLink + scrolledClass}>Contact</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
