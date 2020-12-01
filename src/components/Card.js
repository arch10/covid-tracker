import React from "react";
import PropTypes from "prop-types";
import {
    CardWrapper,
    Header4,
    Header5,
    WrapperDiv,
    Subtitle2
} from "./StyledComponents";
import styled from "styled-components";

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

const ChangeText = styled(Subtitle2)`
    color: ${({ type, theme }) => theme.cardColors[type]};
`;

function Card({ title, subtitle, value, type, active, onClick }) {
    return (
        <CardWrapper
            borderRadius="16px"
            cursor="pointer"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            type={type}
            active={active}
            margin={{ top: 16, bottom: 16, left: 16, right: 16 }}
            onClick={() => {
                if (onClick) {
                    onClick(type);
                }
            }}>
            <Header5>{title}</Header5>
            <WrapperDiv margin={{ top: 15 }}>
                <ChangeText type={type}>{subtitle}</ChangeText>
            </WrapperDiv>
            <WrapperDiv margin={{ top: 8 }}>
                <Header4>{value}</Header4>
            </WrapperDiv>
        </CardWrapper>
    );
}

export default Card;
