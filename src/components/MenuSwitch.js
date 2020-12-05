import React, { useMemo } from "react";
import Lottie from "react-lottie-player";
import { preferenceActions } from "../redux/actions";
import { connect } from "react-redux";
import switchAnimation from "../assets/animations/menu.json";
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

function Switch({ darkMode, changeTheme, open, onClick }) {
    // const play = useMemo(() => {
    //     if (open) {

    //     }
    // }, [open]);
    console.log(open);
    return (
        <IconWrapper onClick={onClick}>
            <Lottie animationData={switchAnimation} loop={false} />
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
export const MenuSwitch = connect(mapStateToProps, actionCreators)(Switch);
