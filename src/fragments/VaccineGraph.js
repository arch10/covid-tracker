import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { lightTheme, darkTheme } from "../components";
import "./table.css";

function VaccineGraph({ data, darkMode }) {
    const label = useMemo(() => {
        return data
            .map((item) => {
                return item.phase;
            })
            .reverse();
    }, [data]);

    const graphData = useMemo(() => {
        return data
            .map((item) => {
                return item.candidates;
            })
            .reverse();
    }, [data]);

    const theme = useMemo(() => {
        if (darkMode) {
            return darkTheme;
        } else {
            return lightTheme;
        }
    }, [darkMode]);

    const options = {
        legend: {
            display: false
        },
        title: {
            text: "Vaccine Status",
            display: true,
            fontFamily: "Lucida Sans Regular",
            fontColor: darkMode ? "#FAFAFA" : "#212121"
        },
        layout: {
            padding: 16
        },
        maintainAspectRatio: true,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ]
        }
    };

    return (
        <div className="vaccine graph">
            <Bar
                data={{
                    labels: label,
                    datasets: [
                        {
                            backgroundColor: theme.cardColors.recovered,
                            data: graphData
                        }
                    ]
                }}
                options={options}
            />
        </div>
    );
}

export default VaccineGraph;
