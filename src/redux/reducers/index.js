import { combineReducers } from "redux";
import { dataReducer } from "./data.reducer";
import { preferenceReducer } from "./preference.reducer";
import { vaccineDataReducer } from "./vaccine.data.reducer";
const rootReducer = combineReducers({
    covidData: dataReducer,
    preference: preferenceReducer,
    vaccineData: vaccineDataReducer
});

export default rootReducer;
