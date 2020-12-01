import styled, { css } from "styled-components";
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
    color: ${({ theme, color }) => color || theme.text};
    font-weight: 400;
    margin: 0px;
`;

export const Header5 = styled.h5`
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: ${({ theme, color }) => color || theme.text};
    font-weight: 600;
    margin: 0px;
`;

export const Header4 = styled.h5`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.1px;
    color: ${({ theme, color }) => color || theme.text};
    font-weight: 400;
    margin: 0px;
`;

export const Body2 = styled.h5`
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    font-weight: 400;
    color: ${({ theme, color }) => color || theme.text};
    text-align: ${({ textAlign }) => textAlign || "left"};
    margin: 0px;
`;

export const Body1 = styled.h5`
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.25px;
    font-weight: 400;
    color: ${({ theme, color }) => color || theme.text};
    text-align: ${({ textAlign }) => textAlign || "left"};
    margin: 0px;
`;

export const Caption = styled.h5`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.75px;
    font-weight: 400;
    color: ${({ theme, color }) => color || theme.text};
    text-align: ${({ textAlign }) => textAlign || "left"};
    margin: 0px;
`;

export const Subtitle2 = styled.h5`
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${({ theme, color }) => color || theme.text};
    text-align: ${({ textAlign }) => textAlign || "left"};
    margin: 0px;
`;

export const WrapperDiv = styled.div`
    display: flex;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    flex-direction: ${({ flexDirection }) => flexDirection};
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin.top || "0"}px ${margin.left || "0"}px
                ${margin.bottom || "0"}px ${margin.left || "0"}px;
        `};
    ${({ padding }) =>
        padding &&
        css`
            padding: ${padding.top || "0"}px ${padding.left || "0"}px
                ${padding.bottom || "0"}px ${padding.left || "0"}px;
        `};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    flex-wrap: wrap;
`;

export const CardWrapper = styled(WrapperDiv)`
    height: 160px;
    width: 260px;
    border-radius: ${({ borderRadius }) => borderRadius};
    cursor: ${({ cursor }) => cursor};
    background-color: ${({ theme }) => theme.cardBg};
    transition: all 0.25s linear;
    box-shadow: 0px 2px ${({ active }) => (active ? "25px" : "5px")} 0px
        ${({ type, active, theme }) =>
            theme.cardColors[active ? type : ""] || "#373737"}bf;
`;

export const SwitchItem = styled.div`
    background-color: ${({ selected, theme, active }) =>
        selected ? theme.cardColors[active] : ""};
    width: 85px;
    padding: 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: ${({ selected, theme, active }) =>
        !selected ? "1px solid " + theme.cardColors[active] : ""};
    ${({ start }) =>
        start &&
        css`
            border-radius: 6px 0px 0px 6px;
            border-width: 1px 0px 1px 1px;
        `}
    ${({ end }) =>
        end &&
        css`
            border-radius: 0px 6px 6px 0px;
            border-width: 1px 1px 1px 0px;
        `};
    & ${Caption} {
        color: ${({ selected, theme }) => (selected ? "#fcfcfc" : theme.text)};
    }
`;
