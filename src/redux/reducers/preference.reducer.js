import { preferenceConstants } from "../../constants";

const initialState = {
    darkMode: JSON.parse(window.localStorage.getItem("darkMode")) || false
};

export function preferenceReducer(state = initialState, action) {
    switch (action.type) {
        case preferenceConstants.CHANGE_THEME:
            window.localStorage.setItem("darkMode", !state.darkMode);
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
}
