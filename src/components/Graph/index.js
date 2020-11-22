import React from "react";
import "./graph.css";
import { Line } from "react-chartjs-2";

const options = {
    legend: {
        display: false
    },
    elements: {
        point: {
            radius: 0
        }
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return tooltipItem.value;
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
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
                        return value;
                    }
                }
            }
        ]
    }
};

function Graph() {
    const data = React.useMemo(
        () => [
            [0, 1],
            [1, 7],
            [2, 4],
            [3, 2],
            [4, 4],
            [5, 5]
        ],
        []
    );

    const series = React.useMemo(
        () => ({
            showPoints: false
        }),
        []
    );

    const axes = React.useMemo(
        () => [
            { primary: true, type: "time", position: "bottom" },
            { type: "linear", position: "left" }
        ],
        []
    );
    return <div className="graph__container"></div>;
}

export default Graph;
