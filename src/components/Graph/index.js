import React, { useMemo } from "react";
import "./graph.css";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

function Graph({ selected, darkMode, data, title, graphOptions }) {
    const manipulatedData = useMemo(() => {
        const newData = [...data];
        if (selected === 0) {
            return newData;
        } else if (selected === 1) {
            return newData.slice(Math.max(newData.length - 90, 0));
        } else {
            return newData.slice(Math.max(newData.length - 30, 0));
        }
    }, [data, selected]);

    const options = {
        legend: {
            display: false
        },
        title: {
            text: title,
            display: true,
            fontFamily: "Lucida Sans Regular",
            fontColor: darkMode ? "#FAFAFA" : "#212121"
        },
        elements: {
            point: {
                radius: 0
            }
        },
        layout: {
            padding: 24
        },
        maintainAspectRatio: true,
        tooltips: {
            mode: "index",
            intersect: false,
            position: "nearest",
            callbacks: {
                label: function (tooltipItem, data) {
                    return numeral(tooltipItem.value).format("+0,0");
                }
            }
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    gridLines: {
                        display: false
                    },
                    distribution: "series",
                    time: {
                        parser: "YYYY-MM-DD",
                        tooltipFormat: "ll"
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        callback: function (value, index, values) {
                            return numeral(value).format("0a");
                        }
                    }
                }
            ]
        }
    };

    return (
        <div className="graph">
            <Line
                data={{
                    datasets: [
                        {
                            backgroundColor: graphOptions.backgroundColor,
                            borderColor: graphOptions.borderColor,
                            data: manipulatedData
                        }
                    ]
                }}
                options={options}
            />
        </div>
    );
}

export default Graph;
