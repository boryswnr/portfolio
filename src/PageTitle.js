import React from "react";

const Title = ({ children, titleName }) => {
    
    return (
        <div>
            <h1>
                {titleName}
            </h1>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Title;