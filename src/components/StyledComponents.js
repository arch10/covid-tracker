import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const StyledNav = styled(Navbar)`
    height: 60px;
    width: 100%;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.header};
    @media only screen and (max-width: 600px) {
        height: 52px;
    }
`;

export const Header6 = styled.h5`
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    margin: 0px;
`;
