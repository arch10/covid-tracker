import { api, log } from "../util";

async function getStatsData() {
    try {
        const response = await api.get(
            "https://disease.sh/v3/covid-19/countries/in?strict=true"
        );
        return response.data;
    } catch (error) {
        log.error("data.service.js:getStatsData()", error.message);
    }
}

function getSummary(data) {
    const {
        cases,
        active,
        recovered,
        deaths,
        todayCases,
        todayDeaths,
        todayRecovered
    } = data;
    const totalConfirmed = cases;
    const totalActive = active;
    const totalRecovered = recovered;
    const totalDeaths = deaths;

    const todayConfirmed = todayCases;
    const todayActive = todayCases - (todayRecovered + todayDeaths);
    return {
        total: {
            confirmed: totalConfirmed,
            active: totalActive,
            recovered: totalRecovered,
            deaths: totalDeaths
        },
        daily: {
            confirmed: todayConfirmed,
            active: todayActive,
            recovered: todayRecovered,
            deaths: todayDeaths
        }
    };
}

export const dataService = {
    getStatsData,
    getSummary
};
