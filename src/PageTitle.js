import React from "react";
import {title, paragraph} from "./pageTitle.module.css"

const Title = ({ children, titleName }) => {
    
    return (
        <div>
            <h3 className={title}>
                {titleName}
            </h3>
            <p className={paragraph}>
                {children}
            </p>
        </div>
    )
}

export default Title;