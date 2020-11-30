import React, { useEffect, useMemo } from "react";
import Lottie from "react-lottie-player";
import { preferenceActions } from "../redux/actions";
import { connect } from "react-redux";
import switchAnimation from "../assets/animations/dark-mode.json";

function Switch({ darkMode, changeTheme }) {
    const segments = useMemo(() => {
        if (!darkMode) {
            return [0, 60];
        }
        return [60, 120];
    }, [darkMode]);

    useEffect(() => {}, [darkMode]);

    return (
        <div onClick={changeTheme}>
            <Lottie
                play
                animationData={switchAnimation}
                segments={segments}
                loop={false}
                speed={2}
                style={{ width: 72, height: 72 }}
            />
        </div>
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
