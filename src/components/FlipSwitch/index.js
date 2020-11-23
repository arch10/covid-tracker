import React from "react";
import "./flipswitch.css";
import classNames from "classnames";

function FlipSwitch({ selected, onChange }) {
    return (
        <div className="flipswitch">
            <div
                className={classNames([
                    "flipswitch__item",
                    "item__start",
                    { item__selected: selected === 0 }
                ])}
                onClick={() => onChange(0)}>
                <h5 className="item__text">Beginning</h5>
            </div>
            <div
                className={classNames([
                    "flipswitch__item",
                    { item__selected: selected === 1 }
                ])}
                onClick={() => onChange(1)}>
                <h5 className="item__text">3 Months</h5>
            </div>
            <div
                className={classNames([
                    "flipswitch__item",
                    "item__end",
                    { item__selected: selected === 2 }
                ])}
                onClick={() => onChange(2)}>
                <h5 className="item__text">1 Month</h5>
            </div>
        </div>
    );
}

export default FlipSwitch;
