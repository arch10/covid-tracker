import { dataConstants } from "../../constants";

const initialState = {
    data: null,
    error: false,
    loading: false
};

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case dataConstants.DATA_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: false
            };
        case dataConstants.DATA_FAILURE:
            return {
                data: null,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case dataConstants.DATA_PROGRESS:
            return {
                loading: true
            };
        default:
            return state;
    }
}
