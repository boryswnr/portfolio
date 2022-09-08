import React from "react";
import { container } from "./layout.module.css";
import Navbar from "./NavBar";
import ScrollUpBtn from "./ScrollUpButton";

const Layout = ({ children }) => {
    
    return (
        <>
            <Navbar/>
            <div className={container}>
                {children}
            </div>
            <ScrollUpBtn/>
        </>
    )
}

export default Layout
