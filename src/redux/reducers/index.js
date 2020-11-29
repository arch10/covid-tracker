import { combineReducers } from "redux";
import { dataReducer } from "./data.reducer";
const rootReducer = combineReducers({
    covidData: dataReducer
});

export default rootReducer;
