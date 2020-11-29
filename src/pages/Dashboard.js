import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { dataActions } from "../redux/actions";
import { Header, Card, Graph, FlipSwitch } from "../components";

function Dashboard({ covidData, getData }) {
    const [active, setActive] = useState("confirm");
    const [selectedTab, setSelectedTab] = useState(0);

    const { data } = covidData;

    useEffect(() => {
        getData();
    }, [getData]);

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
            {data?.historical && (
                <>
                    <div className="switch__container">
                        <FlipSwitch
                            selected={selectedTab}
                            onChange={setSelectedTab}
                        />
                    </div>
                    <div className="graph__container">
                        <Graph
                            active={active}
                            total
                            data={data?.historical.total[active]}
                            selected={selectedTab}
                        />
                        <Graph
                            active={active}
                            data={data?.historical.daily[active]}
                            selected={selectedTab}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

const mapStateToProps = (state) => state;
const actionCreators = {
    getData: dataActions.getData
};

export default connect(mapStateToProps, actionCreators)(Dashboard);
