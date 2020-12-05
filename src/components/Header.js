import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { StyledNav, Header6, Body2 } from "./StyledComponents";
import { useLocation, NavLink } from "react-router-dom";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Home, PlusSquare, Info } from "react-feather";
import { preferenceActions } from "../redux/actions";
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

function Header({ darkMode, changeTheme }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    return (
        <>
            <StyledNav fixed="top">
                <StyledLogo onClick={() => (window.location.href = "/")} />
                <NavHeader onClick={() => (window.location.href = "/")}>
                    Covid Tracker
                </NavHeader>
                <div className="ml-auto desktop">
                    <NavLink
                        to="/"
                        className={classNames(["nav-link", { dark: darkMode }])}
                        exact>
                        <Home />
                    </NavLink>
                    <NavLink
                        to="/vaccine"
                        className={classNames([
                            "nav-link",
                            { dark: darkMode }
                        ])}>
                        <PlusSquare />
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={classNames([
                            "nav-link",
                            { dark: darkMode }
                        ])}>
                        <Info />
                    </NavLink>

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
                        if (location.pathname !== "/") {
                            window.location.href = "/";
                        }
                    }}>
                    <Body2>Home</Body2>
                </div>
                <div
                    onClick={() => {
                        setOpen(false);
                        if (location.pathname !== "/vaccine") {
                            window.location.href = "/vaccine";
                        }
                    }}>
                    <Body2>Vaccine</Body2>
                </div>
                <div
                    onClick={() => {
                        setOpen(false);
                        if (location.pathname !== "/about") {
                            window.location.href = "/about";
                        }
                    }}>
                    <Body2>About</Body2>
                </div>
                <div
                    onClick={() => {
                        changeTheme();
                    }}>
                    <Body2>{darkMode ? "Light Mode" : "Dark Mode"}</Body2>
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
const actionCreators = {
    changeTheme: preferenceActions.changeTheme
};

export default connect(mapStateToProps, actionCreators)(Header);
