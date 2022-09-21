import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
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
                    <AniLink
                        fade
                        to="/"
                        className={navListLink + scrolledClass}
                        data-text="Home"
                    >
                        Home
                    </AniLink>
                </li>

                <li className={navListItem}>
                    <AniLink
                        fade
                        to="/skills"
                        className={navListLink + scrolledClass}
                        data-text="Skills"
                    >
                        Skills
                    </AniLink>
                </li>

                <li className={navListItem}>
                    <AniLink
                        fade
                        to="/projects"
                        className={navListLink + scrolledClass}
                        data-text="Projects"
                    >
                        Projects
                    </AniLink>
                </li>

                <li className={navListItem}>
                    <AniLink
                        fade
                        to="/experience"
                        className={navListLink + scrolledClass}
                        data-text="Experience"
                    >
                        Experience
                    </AniLink>
                </li>

                <li className={navListItem}>
                    <AniLink
                        fade
                        to="/education"
                        className={navListLink + scrolledClass}
                        data-text="Education"
                    >
                        Education
                    </AniLink>
                </li>

                <li className={navListItem}>
                    <AniLink
                        fade
                        to="/contact"
                        className={navListLink + scrolledClass}
                        data-text="Contact"
                    >
                        Contact
                    </AniLink>
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
