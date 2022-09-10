import React from "react";
import { dateFrame, title, list } from "./experienceElement.module.css";

const ExperienceElement = ({ elementTitle, children, date }) => {
    
    return (
        <div>
            <h3 className={title}>
                {elementTitle}
            </h3>
            <p className={dateFrame}>
                {date}
            </p>
            <ul className={list}>
                {children}
            </ul>
        </div>
    )
}

export default ExperienceElement;
