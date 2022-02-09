import React from "react";
// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <a className="nav-link active" aria-current="page" href="/main">
                Main
            </a>
            <a className="nav-link" href="/login">
                Login
            </a>
            <a className="nav-link" href="/users">
                Users
            </a>
        </nav>
    );
};

export default NavBar;
