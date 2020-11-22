import React from "react";
import "./header.css";
import logo from "../../assets/icons/logo.svg";

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Covid Tracker" className="header__icon" />
            <h3 className="header__title">Covid Tracker</h3>
        </div>
    );
}

export default Header;
