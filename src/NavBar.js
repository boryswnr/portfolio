import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import {
    navbar,
    navList,
    navListItem,
    navListLink,
    scrolled,
    hamburger,
    line,
    active,
    open,
} from "./navbar.module.css";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const scrolledClass = " " + (scrollPosition > 0 ? scrolled : "top");
    const activeMenuClass = " " + (isMenuOpen ? active + " " + open : "hidden");

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle("stop-scroll");
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <nav className={navbar + scrolledClass + activeMenuClass}>
            <ul className={navList}>
                <li className={navListItem}>
                    <Link
                        to="/"
                        className={navListLink + scrolledClass}
                        data-text="Home"
                    >
                        Home
                    </Link>
                </li>

                <li className={navListItem}>
                    <Link
                        to="/skills"
                        className={navListLink + scrolledClass}
                        data-text="Skills"
                    >
                        Skills
                    </Link>
                </li>

                <li className={navListItem}>
                    <Link
                        to="/projects"
                        className={navListLink + scrolledClass}
                        data-text="Projects"
                    >
                        Projects
                    </Link>
                </li>

                <li className={navListItem}>
                    <Link
                        to="/experience"
                        className={navListLink + scrolledClass}
                        data-text="Experience"
                    >
                        Experience
                    </Link>
                </li>

                <li className={navListItem}>
                    <Link
                        to="/education"
                        className={navListLink + scrolledClass}
                        data-text="Education"
                    >
                        Education
                    </Link>
                </li>

                <li className={navListItem}>
                    <Link
                        to="/contact"
                        className={navListLink + scrolledClass}
                        data-text="Contact"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <button
                className={hamburger + activeMenuClass}
                onClick={handleMenuClick}
            >
                <span className={line}></span>
                <span className={line}></span>
                <span className={line}></span>
            </button>
        </nav>
    );
};

export default Navbar;
