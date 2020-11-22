import React, { useEffect, useState, memo } from "react";
import "./card.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import { numberFormatter } from "../../util";

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    value: PropTypes.string,
    active: PropTypes.bool,
    type: PropTypes.oneOf(["active", "confirm", "recovered", "deaths"]),
    onClick: PropTypes.func
};

Card.defaultProps = {
    title: "",
    subtitle: "",
    value: "",
    active: false,
    type: "active",
    onClick: null
};

const shadow = {
    CONFIRM: "0px 4px 25px 0px #ed6663BF",
    ACTIVE: "0px 4px 25px 0px #4e89aeBF",
    RECOVERED: "0px 4px 25px 0px #4caf50bf",
    DEATHS: "0px 4px 25px 0px #757575BF",
    DEFAULT: "0px 4px 25px 0px #00000040"
};

function Card({ title, subtitle, value, type, active, onClick }) {
    const subtitleClasses = classNames(["card__subtitle", `card__${type}`]);
    const [boxShadow, setBoxShadow] = useState(shadow.DEFAULT);

    useEffect(() => {
        if (active) {
            switch (type) {
                case "confirm":
                    setBoxShadow(shadow.CONFIRM);
                    break;
                case "active":
                    setBoxShadow(shadow.ACTIVE);
                    break;
                case "recovered":
                    setBoxShadow(shadow.RECOVERED);
                    break;
                case "deaths":
                    setBoxShadow(shadow.DEATHS);
                    break;
                default:
                    setBoxShadow(shadow.DEFAULT);
                    break;
            }
        } else {
            setBoxShadow(shadow.DEFAULT);
        }
    }, [active, type]);

    return (
        <div
            className="card"
            style={{ boxShadow: boxShadow }}
            onClick={() => {
                if (onClick) {
                    onClick(type);
                }
            }}>
            <h4 className="card__title">{title}</h4>
            <p className={subtitleClasses}>{subtitle}</p>
            <h5 className="card__value">{value}</h5>
        </div>
    );
}

export default memo(Card);
