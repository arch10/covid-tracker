import { combineReducers } from "redux";
import { dataReducer } from "./data.reducer";
import { preferenceReducer } from "./preference.reducer";
const rootReducer = combineReducers({
    covidData: dataReducer,
    preference: preferenceReducer
});

export default rootReducer;
