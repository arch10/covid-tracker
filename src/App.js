import React, { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";
import { Header, Card, Graph } from "./components";
import { dataService } from "./services";

function App() {
    const [active, setActive] = useState("confirm");
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const summary = await dataService.getStatsData();
            setSummary(summary);
        };
        getData();
    }, []);

    return (
        <div className="app">
            <Header />
            <h4 className="updated__text">
                Last Updated on:
                {" " +
                    moment(summary?.updatedAt)
                        .utcOffset("+05:30")
                        .local()
                        .format("Do MMM, YYYY  hh:mm A [IST]")}
            </h4>
            <div className="card__container">
                <Card
                    title="Total Confirmed"
                    subtitle={summary?.daily.confirmed}
                    value={summary?.total.confirmed}
                    type="confirm"
                    active={active === "confirm"}
                    onClick={setActive}
                />
                <Card
                    title="Active"
                    subtitle={summary?.daily.active}
                    value={summary?.total.active}
                    type="active"
                    active={active === "active"}
                    onClick={setActive}
                />
                <Card
                    title="Recovered"
                    subtitle={summary?.daily.recovered}
                    value={summary?.total.recovered}
                    type="recovered"
                    active={active === "recovered"}
                    onClick={setActive}
                />
                <Card
                    title="Total Deaths"
                    subtitle={summary?.daily.deaths}
                    value={summary?.total.deaths}
                    type="deaths"
                    active={active === "deaths"}
                    onClick={setActive}
                />
            </div>
            <Graph />
        </div>
    );
}

export default App;
