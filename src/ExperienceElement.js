import React from "react";

const ExperienceElement = ({ elementTitle, children }) => {
    
    return (
        <div>
            <h3>
                {elementTitle}
            </h3>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default ExperienceElement;
