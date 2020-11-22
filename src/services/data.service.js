import { api, log } from "../util";
import numeral from "numeral";
import moment from "moment";

async function getStatsData() {
    try {
        const response = await api.get(
            "https://api.covid19india.org/data.json"
        );
        const data = response.data;
        return getSummary(data);
    } catch (error) {
        log.error("data.service.js:getStatsData()", error.message);
    }
}

function getSummary(data) {
    const {
        confirmed,
        active,
        recovered,
        deaths,
        deltaconfirmed,
        deltadeaths,
        deltarecovered,
        lastupdatedtime
    } = data.statewise[0];
    const totalConfirmed = numeral(confirmed).format("0,0");
    const totalActive = numeral(active).format("0,0");
    const totalRecovered = numeral(recovered).format("0,0");
    const totalDeaths = numeral(deaths).format("0,0");

    const todayConfirmed = numeral(deltaconfirmed).format("+0,0");
    const todayActive = numeral(
        numeral(deltaconfirmed).value() -
            (numeral(deltarecovered).value() + numeral(deltadeaths).value())
    ).format("+0,0");
    const todayRecovered = numeral(deltarecovered).format("+0,0");
    const todayDeaths = numeral(deltadeaths).format("+0,0");
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
        },
        updatedAt: moment(lastupdatedtime, "DD/MM/YYYY HH:mm:ss")
    };
}

export const dataService = {
    getStatsData
};
