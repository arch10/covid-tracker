import React, { useMemo } from "react";
import "./card.css";
import classNames from "classnames";
import PropTypes from "prop-types";

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

    const boxShadow = useMemo(() => {
        if (active) {
            switch (type) {
                case "confirm":
                    return shadow.CONFIRM;
                case "active":
                    return shadow.ACTIVE;
                case "recovered":
                    return shadow.RECOVERED;
                case "deaths":
                    return shadow.DEATHS;
                default:
                    return shadow.DEFAULT;
            }
        } else {
            return shadow.DEFAULT;
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

export default Card;
