import { dataConstants } from "../../constants";
import { dataService } from "../../services";

export const dataActions = {
    getData
};

function getData(ds) {
    return async (dispatch) => {
        try {
            dispatch(progress());
            const data = await dataService.getStatsData(ds);
            dispatch(dataSuccess(data));
        } catch (error) {
            dispatch(dataFailure(error.message));
        }
    };
}

function progress() {
    return { type: dataConstants.DATA_PROGRESS };
}

function dataSuccess(data) {
    return {
        type: dataConstants.DATA_SUCCESS,
        payload: data
    };
}
function dataFailure(error) {
    return { type: dataConstants.DATA_FAILURE, payload: error };
}
