import React from "react";
import "./header.css";
import logo from "../../assets/icons/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Moon } from "react-feather";

function Header() {
    return (
        <Navbar bg="light" className="header" fixed="top">
            <Navbar.Brand href="/">
                <img src={logo} className="header__icon" alt="Covid Tracker" />
            </Navbar.Brand>
            <Navbar.Brand href="/" className="header__title">
                Covid Tracker
            </Navbar.Brand>
            <div className="ml-auto nav__options">
                <Nav.Link
                    onClick={() => {
                        console.log("Hello");
                    }}
                    className="nav__icon">
                    <Moon size={28} />
                </Nav.Link>
            </div>
        </Navbar>
    );
}

export default Header;
