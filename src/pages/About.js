import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { Header4, WrapperDiv } from "../components";

const StyledLogo = styled(Logo)`
    fill: #2196f3;
    height: 128px;
    width: 128px;
    margin-top: 24px;
    @media only screen and (max-width: 576px) {
        height: 96px;
        width: 96px;
    }
`;

function About() {
    return (
        <WrapperDiv
            margin={{ top: 120 }}
            padding={{ left: 24, right: 24 }}
            flexDirection="column"
            alignItems="center">
            <Header4>About</Header4>
            <StyledLogo />
            <WrapperDiv
                padding={{ left: 24, right: 24 }}
                margin={{ top: 36 }}
                maxWidth="800px">
                <p style={{ textAlign: "center" }}>
                    <b>Covid Tracker India</b> is a statistical and tracking
                    project aims at tracking the Covid-19 pandemic in India.
                    This project gets the fresh data collected from multiple
                    sources and shows it in a meaningful way for better. It
                    shows the current and total data of confirmed, active,
                    recovered and death cases of Covid-19. The historical case
                    data of India is also drawn in a line graph for better
                    understanding of the impact. The graph can be switched
                    between all, last 3 months and last 1 month data. The state
                    wise data is also listed in a form of table which shows the
                    total and daily cases of covid-19 in a state or union
                    territory. It also shows the change in the number cases from
                    the day before.
                </p>
                <p style={{ textAlign: "center" }}>
                    I would like to thank the Covid19India Team for the valuable
                    data that is being used in this project. This project uses
                    the daily and historical case data exposed by{" "}
                    <a href="https://api.covid19india.org/" target="_blank">
                        Covid-19India
                    </a>{" "}
                    Team. This data is cleaned and then put together in a proper
                    format. The vaccine data is exposed by{" "}
                    <a href="https://disease.sh/" target="_blank">
                        disease.sh
                    </a>{" "}
                    via RAPS (Regulatory Affairs Professional Society). This
                    data shows the current status of each candidate vaccine
                    throughout the world.
                </p>
                <p style={{ textAlign: "center" }}>
                    This project is an open-sourced react project hosted on
                    github. Feel free to contact me for any suggestions about
                    this project. If you would like to contribute to this
                    project in any way you can head over to github for more
                    instructions. 🚀😎
                </p>
            </WrapperDiv>
        </WrapperDiv>
    );
}

export default About;
