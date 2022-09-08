import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";
import "./ScrollUpButton.css";

const ScrollUpBtn = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    return (
        <div>
            <FontAwesomeIcon
                icon={faAngleUp}
                className={"arrow up " + (scrollPosition>0 ? "visible" : "hidden")}
                onClick={() => window.scroll(0,0)}
            />
        </div>
    )
}

export default ScrollUpBtn;
