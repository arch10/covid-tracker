import React, { useMemo } from "react";
import Lottie from "react-lottie-player";
import { preferenceActions } from "../redux/actions";
import { connect } from "react-redux";
import switchAnimation from "../assets/animations/dark-mode.json";
import styled from "styled-components";
import { WrapperDiv } from "./StyledComponents";

const IconWrapper = styled(WrapperDiv)`
    height: 64px;
    width: 64px;
    cursor: pointer;
    @media only screen and (max-width: 576px) {
        height: 56px;
        width: 56px;
    }
`;

function Switch({ darkMode, changeTheme }) {
    const segments = useMemo(() => {
        if (!darkMode) {
            return [0, 60];
        }
        return [60, 120];
    }, [darkMode]);

    return (
        <IconWrapper onClick={changeTheme}>
            <Lottie
                play
                animationData={switchAnimation}
                segments={segments}
                loop={false}
                speed={2}
            />
        </IconWrapper>
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
export const DarkModeSwitch = connect(mapStateToProps, actionCreators)(Switch);
