import { vaccineDataConstants } from "../../constants";
import { vaccineDataService } from "../../services";

export const vaccineDataActions = {
    getData
};

function getData() {
    return async (dispatch) => {
        try {
            dispatch(progress());
            const data = await vaccineDataService.getVaccineData();
            dispatch(dataSuccess(data));
        } catch (error) {
            dispatch(dataFailure(error.message));
        }
    };
}

function progress() {
    return { type: vaccineDataConstants.VACCINE_DATA_PROGRESS };
}

function dataSuccess(data) {
    return {
        type: vaccineDataConstants.VACCINE_DATA_SUCCESS,
        payload: data
    };
}
function dataFailure(error) {
    return { type: vaccineDataConstants.VACCINE_DATA_FAILURE, payload: error };
}
