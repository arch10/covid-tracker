import { preferenceConstants } from "../../constants";

function loadActiveTab() {
    const savedActiveTab = window.localStorage.getItem("activeTab");
    if (!savedActiveTab) {
        return "confirm";
    } else {
        //validate before setting
        switch (savedActiveTab) {
            case "confirm":
            case "active":
            case "recovered":
            case "deaths":
                return savedActiveTab;
            default:
                window.localStorage.setItem("activeTab", "confirm");
                return "confirm";
        }
    }
}

function loadDarkMode() {
    const savedMode = window.localStorage.getItem("darkMode");
    if (!savedMode) {
        return false;
    } else {
        switch (savedMode) {
            case "true":
            case "false":
                return JSON.parse(savedMode);
            default:
                window.localStorage.setItem("darkMode", false);
                return false;
        }
    }
}

const initialState = {
    darkMode: loadDarkMode(),
    activeTab: loadActiveTab()
};

export function preferenceReducer(state = initialState, action) {
    switch (action.type) {
        case preferenceConstants.CHANGE_THEME:
            window.localStorage.setItem("darkMode", !state.darkMode);
            return {
                ...state,
                darkMode: !state.darkMode
            };
        case preferenceConstants.CHANGE_ACTIVE_TAB:
            window.localStorage.setItem("activeTab", action.payload);
            return {
                ...state,
                activeTab: action.payload
            };
        default:
            return state;
    }
}
