import React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { StyledNav, Header6 } from "./StyledComponents";
import { DarkModeSwitch } from "./DarkModeSwitch";
import styled from "styled-components";

const StyledLogo = styled(Logo)`
    fill: #2196f3;
    margin-right: 12px;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        height: 28px;
        width: 28px;
    }
`;

const NavHeader = styled(Header6)`
    cursor: pointer;
`;

function Header() {
    return (
        <StyledNav fixed="top">
            <StyledLogo onClick={() => (window.location.href = "/")} />
            <NavHeader onClick={() => (window.location.href = "/")}>
                Covid Tracker
            </NavHeader>
            <div className="ml-auto">
                <DarkModeSwitch />
            </div>
        </StyledNav>
    );
}

export default Header;
