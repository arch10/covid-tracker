import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { StyledNav, Header6, Body2 } from "./StyledComponents";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { connect } from "react-redux";
import styled from "styled-components";
import classNames from "classnames";
import "./components.css";

const StyledLogo = styled(Logo)`
    fill: #2196f3;
    margin-right: 12px;
    cursor: pointer;
    @media only screen and (max-width: 576px) {
        height: 28px;
        width: 28px;
        margin-left: 16px;
    }
`;

const NavHeader = styled(Header6)`
    cursor: pointer;
`;

function Header({ darkMode }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledNav fixed="top">
                <StyledLogo onClick={() => (window.location.href = "/")} />
                <NavHeader onClick={() => (window.location.href = "/")}>
                    Covid Tracker
                </NavHeader>
                <div className="ml-auto desktop">
                    <div
                        onClick={() => {
                            setOpen(false);
                            console.log("Vaccine");
                        }}>
                        <Body2>Vaccine</Body2>
                    </div>
                    <div
                        onClick={() => {
                            setOpen(false);
                            console.log("About");
                        }}>
                        <Body2>About</Body2>
                    </div>
                    <DarkModeSwitch />
                </div>
                <div className="ml-auto mobile">
                    <div
                        className={classNames([
                            "burger",
                            "mobile",
                            { dark: darkMode },
                            { toggle: open }
                        ])}
                        onClick={() => {
                            setOpen((value) => !value);
                        }}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </StyledNav>
            <div
                className={classNames([
                    "mobile",
                    "menu-options",
                    { dark: darkMode },
                    { hide: !open }
                ])}>
                <div
                    onClick={() => {
                        setOpen(false);
                        window.location.href = "/";
                    }}>
                    <Body2>Home</Body2>
                </div>
                <div
                    onClick={() => {
                        setOpen(false);
                        console.log("Vaccine");
                    }}>
                    <Body2>Vaccine</Body2>
                </div>
                <div
                    onClick={() => {
                        setOpen(false);
                        console.log("About");
                    }}>
                    <Body2>About</Body2>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        darkMode: state.preference.darkMode
    };
};

export default connect(mapStateToProps)(Header);
