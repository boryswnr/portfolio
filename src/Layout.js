import React from "react";
import { container, footer } from "./layout.module.css";
import Navbar from "./NavBar";
import ScrollUpBtn from "./ScrollUpButton";

const Layout = ({ children }) => {
    
    return (
        <>
            <Navbar/>
            <div className={container}>
                {children}
            </div>
            <ScrollUpBtn />
            <footer className={footer}>
                &#169;BorysWnr 2022
            </footer>
        </>
    )
}

export default Layout
