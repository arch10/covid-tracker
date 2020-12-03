import { api, log } from "../util";
import { getDataFromCovidIndia } from "./ds.covidindia.service";
import { getDataFromWorldOMeters } from "./ds.worldometers.service";

async function getStatsData(ds) {
    try {
        const response = await api.get(getUrl(ds));
        const data = response.data;
        return getData(data, ds);
    } catch (error) {
        log.error("data.service.js:getStatsData()", error.message);
        throw error;
    }
}

function getUrl(ds) {
    switch (ds) {
        case 1:
            return "https://disease.sh/v3/covid-19/countries/in?strict=true";
        case 0:
        default:
            return "https://api.covid19india.org/data.json";
    }
}

function getData(data, ds) {
    switch (ds) {
        case 1:
            return getDataFromWorldOMeters(data);
        case 0:
        default:
            return getDataFromCovidIndia(data);
    }
}

export const dataService = {
    getStatsData
};
