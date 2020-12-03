import React from "react";
import styled from "styled-components";
import {
    GitHub,
    Twitter,
    Database,
    Send,
    Mail,
    Linkedin,
    Heart
} from "react-feather";
import "./table.css";
import { WrapperDiv, Body2 } from "../components";

const FooterWrapper = styled.div`
    width: 1024px;
    padding: 120px 0px;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 1024px) {
        width: 768px;
    }
    @media only screen and (max-width: 768px) {
        width: 480px;
    }
    @media only screen and (max-width: 480px) {
        width: 360px;
    }
`;

function handleFooterClick(item) {
    switch (item) {
        case "github":
            window.open("https://github.com/arch10/covid-tracker", "_blank");
            break;
        case "database":
            window.open("https://api.covid19india.org/", "_blank");
            break;
        case "telegram":
            window.open("https://t.me/arch1824", "_blank");
            break;
        case "twitter":
            window.open("https://twitter.com/arch1006", "_blank");
            break;
        case "gmail":
            window.open("mailto:arch1824@gmail.com", "_blank");
            break;
        case "linkedin":
            window.open("https://www.linkedin.com/in/arch6/", "_blank");
            break;
        default:
            break;
    }
}

function Footer() {
    return (
        <FooterWrapper>
            <WrapperDiv
                width="250px"
                justifyContent="space-around"
                margin={{ bottom: 16 }}>
                <GitHub
                    className="icon"
                    color="#333"
                    fill="#333"
                    onClick={() => handleFooterClick("github")}
                />
                <Database
                    className="icon"
                    color="#ed8345"
                    onClick={() => handleFooterClick("database")}
                />
                <Send
                    color="#0088cc"
                    className="icon"
                    onClick={() => handleFooterClick("telegram")}
                />
                <Twitter
                    color="#00acee"
                    className="icon"
                    fill="#00acee"
                    onClick={() => handleFooterClick("twitter")}
                />
                <Mail
                    color="#EA4335"
                    className="icon"
                    onClick={() => handleFooterClick("gmail")}
                />
                <Linkedin
                    color="#0e76a8"
                    className="icon"
                    fill="#0e76a8"
                    onClick={() => handleFooterClick("linkedin")}
                />
            </WrapperDiv>
            <WrapperDiv margin={{ top: 16 }}>
                <Body2>
                    Made with <Heart fill="#ea4335" stroke={0} /> in India
                </Body2>
            </WrapperDiv>
        </FooterWrapper>
    );
}

export default Footer;
