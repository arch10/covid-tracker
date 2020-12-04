import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Lottie from "react-lottie-player";
import { X } from "react-feather";
import errorAnimation from "../assets/animations/error.json";
import loadingAnimation from "../assets/animations/loading.json";
import { dataActions, preferenceActions } from "../redux/actions";
import { DataSelector, TableSection, Footer } from "../fragments";
import {
    Header,
    Card,
    Graph,
    Body1,
    WrapperDiv,
    lightTheme,
    darkTheme,
    Divider,
    Header5
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

function Dashboard({ covidData, getData, preference, changeActiveTab }) {
    const [selectedTab, setSelectedTab] = useState(0);

    const { activeTab } = preference;

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
                    alignItems="center"
                    justifyContent="center"
                    alignSelf="center"
                    margin={{ top: 120 }}
                    padding={{ top: 16, left: 16, right: 16, bottom: 16 }}>
                    <Header5>Covid Tracker India</Header5>
                </WrapperDiv>
                <Divider>
                    <X size={16} />
                </Divider>
                <WrapperDiv
                    padding={{ top: 16, left: 16, right: 16 }}
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
                        active={activeTab === "confirm"}
                        onClick={changeActiveTab}
                    />
                    <Card
                        title="Active"
                        subtitle={data?.summary.daily.active}
                        value={data?.summary.total.active}
                        type="active"
                        active={activeTab === "active"}
                        onClick={changeActiveTab}
                    />
                    <Card
                        title="Recovered"
                        subtitle={data?.summary.daily.recovered}
                        value={data?.summary.total.recovered}
                        type="recovered"
                        active={activeTab === "recovered"}
                        onClick={changeActiveTab}
                    />
                    <Card
                        title="Total Deaths"
                        subtitle={data?.summary.daily.deaths}
                        value={data?.summary.total.deaths}
                        type="deaths"
                        active={activeTab === "deaths"}
                        onClick={changeActiveTab}
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
                                active={activeTab}
                            />
                        </WrapperDiv>
                        <WrapperDiv alignItems="center" justifyContent="center">
                            <Graph
                                active={activeTab}
                                title={"Total " + getTitle(activeTab)}
                                data={data.historical.total[activeTab]}
                                darkMode={preference.darkMode}
                                selected={selectedTab}
                                graphOptions={getGraphColors(activeTab, theme)}
                            />
                            <Graph
                                active={activeTab}
                                title={"Daily " + getTitle(activeTab)}
                                data={data.historical.daily[activeTab]}
                                darkMode={preference.darkMode}
                                selected={selectedTab}
                                graphOptions={getGraphColors(activeTab, theme)}
                            />
                        </WrapperDiv>
                    </>
                )}
                <TableSection data={data.stateWise} theme={theme} />
                <Footer />
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
    getData: dataActions.getData,
    changeActiveTab: preferenceActions.changeActiveTab
};

export default connect(mapStateToProps, actionCreators)(Dashboard);
