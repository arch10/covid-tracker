import { preferenceConstants } from "../../constants";

export const preferenceActions = {
    changeTheme
};

function changeTheme() {
    return (dispatch) => {
        dispatch({ type: preferenceConstants.CHANGE_THEME });
    };
}
