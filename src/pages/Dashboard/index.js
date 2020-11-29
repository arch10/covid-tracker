import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./dashboard.css";
import moment from "moment";
import Lottie from "react-lottie-player";
import errorAnimation from "../../assets/animations/error.json";
import loadingAnimation from "../../assets/animations/loading.json";
import { dataActions } from "../../redux/actions";
import { Header, Card, Graph, FlipSwitch } from "../../components";

function Dashboard({ covidData, getData }) {
    const [active, setActive] = useState("confirm");
    const [selectedTab, setSelectedTab] = useState(0);

    const { data, error, loading } = covidData;

    useEffect(() => {
        getData();
    }, [getData]);

    const loadDataComponents = () => {
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
    };

    const loadPage = () => {
        if (loading) {
            return (
                <div className="loading">
                    <Lottie
                        animationData={loadingAnimation}
                        play
                        loop={true}
                        style={{ width: 150, height: 150 }}
                    />
                </div>
            );
        } else if (error) {
            return (
                <div className="loading">
                    <Lottie
                        animationData={errorAnimation}
                        play
                        speed={0.8}
                        loop={false}
                        style={{ width: 400, height: 400 }}
                    />
                </div>
            );
        } else if (data) {
            return loadDataComponents();
        }
    };

    return <>{loadPage()}</>;
}

const mapStateToProps = (state) => state;
const actionCreators = {
    getData: dataActions.getData
};

export default connect(mapStateToProps, actionCreators)(Dashboard);
