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
    const historicalData = getHistoricalData(data);
    return {
        summary: {
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
        },
        historical: historicalData,
        updatedAt: moment(lastupdatedtime, "DD/MM/YYYY HH:mm:ss")
    };
}

function getHistoricalData(data) {
    const totalConfirmed = [];
    const totalActive = [];
    const totalRecovered = [];
    const totalDeaths = [];
    const dailyConfirmed = [];
    const dailyActive = [];
    const dailyRecovered = [];
    const dailyDeaths = [];
    const { cases_time_series: history } = data;

    history.forEach((value) => {
        //total calculation
        totalConfirmed.push({
            x: value.dateymd,
            y: numeral(value.totalconfirmed).value()
        });
        totalActive.push({
            x: value.dateymd,
            y:
                numeral(value.totalconfirmed).value() -
                (numeral(value.totalrecovered).value() +
                    numeral(value.totaldeceased).value())
        });
        totalRecovered.push({
            x: value.dateymd,
            y: numeral(value.totalrecovered).value()
        });
        totalDeaths.push({
            x: value.dateymd,
            y: numeral(value.totaldeceased).value()
        });

        //daily calculation
        dailyConfirmed.push({
            x: value.dateymd,
            y: numeral(value.dailyconfirmed).value()
        });
        dailyActive.push({
            x: value.dateymd,
            y:
                numeral(value.dailyconfirmed).value() -
                (numeral(value.dailyrecovered).value() +
                    numeral(value.dailydeceased).value())
        });
        dailyRecovered.push({
            x: value.dateymd,
            y: numeral(value.dailyrecovered).value()
        });
        dailyDeaths.push({
            x: value.dateymd,
            y: numeral(value.dailydeceased).value()
        });
    });

    return {
        total: {
            confirm: totalConfirmed,
            active: totalActive,
            recovered: totalRecovered,
            deaths: totalDeaths
        },
        daily: {
            confirm: dailyConfirmed,
            active: dailyActive,
            recovered: dailyRecovered,
            deaths: dailyDeaths
        }
    };
}

export const dataService = {
    getStatsData
};
