import React from "react";
import { SwitchItem, Caption, WrapperDiv } from "../components";

function DataSelector({ selected, onChange, active }) {
    return (
        <WrapperDiv>
            <SwitchItem
                start={1}
                active={active}
                selected={selected === 0}
                onClick={() => onChange(0)}>
                <Caption color="#fff">Beginning</Caption>
            </SwitchItem>
            <SwitchItem
                active={active}
                selected={selected === 1}
                onClick={() => onChange(1)}>
                <Caption color="#fff">3 Months</Caption>
            </SwitchItem>
            <SwitchItem
                end={1}
                active={active}
                selected={selected === 2}
                onClick={() => onChange(2)}>
                <Caption color="#fff">1 Month</Caption>
            </SwitchItem>
        </WrapperDiv>
    );
}

export default DataSelector;
