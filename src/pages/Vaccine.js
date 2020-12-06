import React, { useEffect } from "react";
import { WrapperDiv, Header4, VaccineDetail } from "../components";
import Lottie from "react-lottie-player";
import errorAnimation from "../assets/animations/error.json";
import loadingAnimation from "../assets/animations/loading.json";
import Accordion from "react-bootstrap/Accordion";
import { VaccineGraph } from "../fragments";
import { connect } from "react-redux";
import { vaccineDataActions } from "../redux/actions";

function Vaccine({ darkMode, getData, vaccineData }) {
    const { data, loading, error } = vaccineData;

    useEffect(() => {
        if (!data) {
            getData();
        }
    }, [getData]);

    const loadDataComponents = () => {
        return (
            <WrapperDiv
                margin={{ top: 120 }}
                padding={{ left: 24, right: 24 }}
                flexDirection="column"
                alignItems="center">
                <Header4>Vaccine Status</Header4>
                {data && (
                    <WrapperDiv
                        padding={{ left: 24, right: 24 }}
                        margin={{ top: 36 }}
                        maxWidth="800px">
                        <VaccineGraph data={data.phases} darkMode={darkMode} />
                        <Accordion style={{ width: "100%" }}>
                            {data.data.map((item, index) => {
                                return (
                                    <VaccineDetail
                                        key={index}
                                        index={index}
                                        item={item}
                                        darkMode={darkMode}
                                    />
                                );
                            })}
                        </Accordion>
                    </WrapperDiv>
                )}
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

const mapStateToProps = (state) => {
    return {
        darkMode: state.preference.darkMode,
        vaccineData: state.vaccineData
    };
};
const actionCreators = {
    getData: vaccineDataActions.getData
};

export default connect(mapStateToProps, actionCreators)(Vaccine);
