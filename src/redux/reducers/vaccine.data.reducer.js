import { vaccineDataConstants } from "../../constants";

const initialState = {
    data: null,
    error: false,
    loading: false
};

export function vaccineDataReducer(state = initialState, action) {
    switch (action.type) {
        case vaccineDataConstants.VACCINE_DATA_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: false
            };
        case vaccineDataConstants.VACCINE_DATA_FAILURE:
            return {
                data: null,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case vaccineDataConstants.VACCINE_DATA_PROGRESS:
            return {
                loading: true
            };
        default:
            return state;
    }
}
