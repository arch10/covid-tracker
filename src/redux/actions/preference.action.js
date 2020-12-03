import { preferenceConstants } from "../../constants";

export const preferenceActions = {
    changeTheme,
    changeActiveTab
};

function changeTheme() {
    return (dispatch) => {
        dispatch({ type: preferenceConstants.CHANGE_THEME });
    };
}

function changeActiveTab(tab) {
    return (dispatch) => {
        dispatch({ type: preferenceConstants.CHANGE_ACTIVE_TAB, payload: tab });
    };
}
