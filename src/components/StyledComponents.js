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
    flex: ${({ flex }) => flex};
    flex-direction: ${({ flexDirection }) => flexDirection};
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin.top || "0"}px ${margin.right || "0"}px
                ${margin.bottom || "0"}px ${margin.left || "0"}px;
        `};
    ${({ padding }) =>
        padding &&
        css`
            padding: ${padding.top || "0"}px ${padding.right || "0"}px
                ${padding.bottom || "0"}px ${padding.left || "0"}px;
        `};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    flex-wrap: wrap;
    align-self: ${({ alignSelf }) => alignSelf};

    @media only screen and (max-width: 460px) {
        ${({ margin }) =>
            margin &&
            css`
                margin: ${margin.top / 2 || "0"}px ${margin.right / 2 || "0"}px
                    ${margin.bottom / 2 || "0"}px ${margin.left / 2 || "0"}px;
            `};
        ${({ padding }) =>
            padding &&
            css`
                padding: ${padding.top / 2 || "0"}px
                    ${padding.right / 2 || "0"}px ${padding.bottom / 2 || "0"}px
                    ${padding.left / 2 || "0"}px;
            `};
    }
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

export const TableItem = styled.div`
    align-items: flex-end;
    background-color: ${({ theme }) => theme.table.secondary};
    display: flex;
    flex-direction: column;
    padding: 8px 8px 8px 8px;
    border-radius: 6px;
    justify-content: center;
    cursor: pointer;
    height: ${({ last }) => (last ? "44px" : "100%")};
    transition: all 0.25s linear;
    ${({ header, state }) =>
        header &&
        css`
            align-items: flex-start;
            background-color: ${({ theme }) => theme.table.primary};
            height: ${!state ? "44px" : "100%"};
        `};
    ${({ state }) =>
        state &&
        css`
            width: 120px;
        `};

    @media only screen and (min-width: 768px) {
        width: ${({ state }) => (state ? 240 : 120)}px;
        padding-left: ${({ state }) => (state ? 16 : 8)}px;
    }
`;

export const TableRow = styled.tr`
    &:hover ${TableItem} {
        background-color: ${({ theme }) => theme.table.primary};
    }
`;

export const Button = styled.button`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    align-self: ${({ alignSelf }) => alignSelf};
    border-radius: 6px;
    padding: 8px;
    background-color: ${({ theme }) => theme.table.secondary};
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin.top || "0"}px ${margin.right || "0"}px
                ${margin.bottom || "0"}px ${margin.left || "0"}px;
        `};
    border: none;
    outline: none;
    color: ${({ theme, color }) => color || theme.text};
    transition: all 0.25s linear;
    &:hover {
        background-color: ${({ theme }) => theme.table.primary};
    }
`;

export const Divider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &::before,
    &::after {
        content: "";
        display: block;
        height: 2px;
        min-width: 200px;
    }

    &::before {
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.body + "," + theme.text}
        );
        margin-right: 20px;
    }

    &::after {
        background: linear-gradient(
            to left,
            ${({ theme }) => theme.body + "," + theme.text}
        );
        margin-left: 20px;
    }
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;
