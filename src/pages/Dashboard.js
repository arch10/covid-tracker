import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Lottie from "react-lottie-player";
import errorAnimation from "../assets/animations/error.json";
import loadingAnimation from "../assets/animations/loading.json";
import { dataActions } from "../redux/actions";
import { DataSelector, TableSection } from "../fragments";
import {
    Header,
    Card,
    Graph,
    Body1,
    WrapperDiv,
    lightTheme,
    darkTheme
} from "../components";

const getTitle = (type) => {
    switch (type) {
        case "active":
            return "Active Cases";
        case "recovered":
            return "Recovered";
        case "deaths":
            return "Deaths";
        case "confirm":
        default:
            return "Confirmed Cases";
    }
};

const getGraphColors = (type, theme) => {
    switch (type) {
        case "active":
            return {
                backgroundColor: theme.cardColors[type] + "80",
                borderColor: theme.cardColors[type]
            };
        case "recovered":
            return {
                backgroundColor: theme.cardColors[type] + "80",
                borderColor: theme.cardColors[type]
            };
        case "deaths":
            return {
                backgroundColor: theme.cardColors[type] + "80",
                borderColor: theme.cardColors[type]
            };
        case "confirm":
        default:
            return {
                backgroundColor: theme.cardColors[type] + "80",
                borderColor: theme.cardColors[type]
            };
    }
};

function Dashboard({ covidData, getData, preference }) {
    const [active, setActive] = useState("confirm");
    const [selectedTab, setSelectedTab] = useState(0);

    const { data, error, loading } = covidData;

    useEffect(() => {
        getData();
    }, [getData]);

    const theme = useMemo(() => {
        if (preference.darkMode) {
            return darkTheme;
        } else {
            return lightTheme;
        }
    }, [preference.darkMode]);

    const loadDataComponents = () => {
        return (
            <WrapperDiv flexDirection="column">
                <Header />
                <WrapperDiv
                    margin={{ top: 100 }}
                    padding={{ top: 16, bottom: 16, left: 16, right: 16 }}
                    justifyContent="center"
                    alignItems="center">
                    <Body1 textAlign="center" color={theme.secondary}>
                        Last Updated on:
                        {" " +
                            moment(data?.updatedAt)
                                .utcOffset("+05:30")
                                .local()
                                .format("Do MMM, YYYY  hh:mm A [IST]")}
                    </Body1>
                </WrapperDiv>
                <WrapperDiv
                    alignItems="center"
                    justifyContent="center"
                    margin={{ top: 24, left: 24, right: 24, bottom: 24 }}>
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
                </WrapperDiv>
                {data?.historical && (
                    <>
                        <WrapperDiv
                            alignItems="center"
                            justifyContent="center"
                            margin={{
                                top: 24,
                                left: 24,
                                right: 24,
                                bottom: 24
                            }}>
                            <DataSelector
                                selected={selectedTab}
                                onChange={setSelectedTab}
                                active={active}
                            />
                        </WrapperDiv>
                        <WrapperDiv alignItems="center" justifyContent="center">
                            <Graph
                                active={active}
                                title={"Total " + getTitle(active)}
                                data={data.historical.total[active]}
                                darkMode={preference.darkMode}
                                selected={selectedTab}
                                graphOptions={getGraphColors(active, theme)}
                            />
                            <Graph
                                active={active}
                                title={"Daily " + getTitle(active)}
                                data={data.historical.daily[active]}
                                darkMode={preference.darkMode}
                                selected={selectedTab}
                                graphOptions={getGraphColors(active, theme)}
                            />
                        </WrapperDiv>
                    </>
                )}
                <TableSection data={data.stateWise} theme={theme} />
            </WrapperDiv>
        );
    };

    const loadPage = () => {
        if (loading) {
            return (
                <WrapperDiv
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                    width="100%">
                    <Lottie
                        animationData={loadingAnimation}
                        play
                        loop={true}
                        style={{ width: 150, height: 150 }}
                    />
                </WrapperDiv>
            );
        } else if (error) {
            return (
                <WrapperDiv
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                    width="100%">
                    <Lottie
                        animationData={errorAnimation}
                        play
                        speed={0.8}
                        loop={false}
                        style={{ width: 400, height: 400 }}
                    />
                </WrapperDiv>
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
