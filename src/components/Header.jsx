import React from "react";
import Navbar from "./Navbar";
import "../css/Header.css";

function Header() {
    return (
        <header>
            <div className="logo">My app</div>
            <Navbar />
        </header>
    );
}

export default Header;