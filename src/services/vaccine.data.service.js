import { api, log } from "../util";

async function getVaccineData() {
    try {
        const response = await api.get(
            "https://disease.sh/v3/covid-19/vaccine"
        );
        return response.data;
    } catch (error) {
        log.error("data.service.js:getStatsData()", error.message);
        throw error;
    }
}

export const vaccineDataService = {
    getVaccineData
};
