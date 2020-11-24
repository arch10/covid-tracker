import numeral from "numeral";
import moment from "moment";

export function getDataFromWorldOMeters(data) {
    const { updated } = data;
    const summaryData = getSummaryFromWorldOMeters(data);
    return {
        summary: summaryData,
        updatedAt: moment(updated)
    };
}

function getSummaryFromWorldOMeters(data) {
    const {
        cases,
        active,
        recovered,
        deaths,
        todayCases,
        todayDeaths,
        todayRecovered
    } = data;
    const totalConfirmed = numeral(cases).format("0,0");
    const totalActive = numeral(active).format("0,0");
    const totalRecovered = numeral(recovered).format("0,0");
    const totalDeaths = numeral(deaths).format("0,0");

    const todayConfirmed = numeral(todayCases).format("+0,0");
    const todayActive = numeral(
        numeral(todayCases).value() -
            (numeral(todayRecovered).value() + numeral(todayDeaths).value())
    ).format("+0,0");
    const deltaRecovered = numeral(todayRecovered).format("+0,0");
    const deltaDeaths = numeral(todayDeaths).format("+0,0");
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
            recovered: deltaRecovered,
            deaths: deltaDeaths
        }
    };
}
