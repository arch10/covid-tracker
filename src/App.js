import React, { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";
import { Header, Card, Graph } from "./components";
import { dataService } from "./services";

function App() {
    const [active, setActive] = useState("confirm");
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await dataService.getStatsData();
            setData(data);
        };
        getData();
    }, []);
    return (
        <div className="app">
            <Header />
            <h4 className="updated__text">
                Last Updated on:
                {" " +
                    moment(data?.updatedAt)
                        .utcOffset("+05:30")
                        .local()
                        .format("Do MMM, YYYY  hh:mm A [IST]")}
            </h4>
            <div className="card__container">
                <Card
                    title="Total Confirmed"
                    subtitle={data?.summary.daily.confirmed}
                    value={data?.summary.total.confirmed}
                    type="confirm"
                    active={active === "confirm"}
                    onClick={setActive}
                />
                <Card
                    title="Active"
                    subtitle={data?.summary.daily.active}
                    value={data?.summary.total.active}
                    type="active"
                    active={active === "active"}
                    onClick={setActive}
                />
                <Card
                    title="Recovered"
                    subtitle={data?.summary.daily.recovered}
                    value={data?.summary.total.recovered}
                    type="recovered"
                    active={active === "recovered"}
                    onClick={setActive}
                />
                <Card
                    title="Total Deaths"
                    subtitle={data?.summary.daily.deaths}
                    value={data?.summary.total.deaths}
                    type="deaths"
                    active={active === "deaths"}
                    onClick={setActive}
                />
            </div>
            <div className="graph__container">
                <Graph
                    active={active}
                    total
                    data={data?.historical.total[active]}
                />
                <Graph active={active} data={data?.historical.daily[active]} />
            </div>
        </div>
    );
}

export default App;
