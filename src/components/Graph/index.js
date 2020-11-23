import React, { useMemo } from "react";
import "./graph.css";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const getChartConfig = (type) => {
    switch (type) {
        case "active":
            return {
                title: "Active Cases",
                backgroundColor: "#4e89ae80",
                borderColor: "#4e89ae"
            };
        case "recovered":
            return {
                title: "Recovered",
                backgroundColor: "#4caf5080",
                borderColor: "#4caf50"
            };
        case "deaths":
            return {
                title: "Deaths",
                backgroundColor: "#75757580",
                borderColor: "#757575"
            };
        case "confirm":
        default:
            return {
                title: "Confirmed Cases",
                backgroundColor: "#ed666380",
                borderColor: "#ed6663"
            };
    }
};

function Graph({ active, data, total, selected }) {
    const config = useMemo(() => getChartConfig(active), [active]);
    const manipulatedData = useMemo(() => {
        if (selected === 0) {
            return data;
        } else if (selected === 1) {
            return data.slice(Math.max(data.length - 90, 0));
        } else {
            return data.slice(Math.max(data.length - 30, 0));
        }
    }, [data, selected]);

    const options = {
        legend: {
            display: false
        },
        title: {
            text: (total ? "Total " : "Daily ") + config?.title,
            display: true,
            fontFamily: "Lucida Sans Regular"
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
                        display: true
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
                            backgroundColor: config?.backgroundColor,
                            borderColor: config?.borderColor,
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
