import React from "react";
import { container } from "./layout.module.css";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
    
    return (
        <>
            <Navbar/>
            <div className={container}>
                {children}
            </div>
        </>
    )
}

export default Layout
