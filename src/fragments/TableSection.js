import React, { useState } from "react";
import { ArrowUp, ArrowDown, Minus } from "react-feather";
import numeral from "numeral";
import "./table.css";
import {
    WrapperDiv,
    TableItem,
    Caption,
    Body2,
    Body1,
    TableRow,
    Button
} from "../components";

function assignChangeValue(changeValue) {
    const value = numeral(changeValue).value();
    if (value === 0) {
        return <Minus size={12} />;
    } else {
        if (value > 0) {
            return (
                <>
                    <ArrowUp size={12} />
                    {" " + numeral(value).format("0,0")}
                </>
            );
        } else {
            return (
                <>
                    <ArrowDown size={12} />
                    {numeral(Math.abs(value)).format("0,0")}
                </>
            );
        }
    }
}

function TableSection({ data, theme }) {
    const [expand, setExpand] = useState(false);

    const renderTableRow = () => {
        let stateData = [...data].slice(1);
        if (!expand) {
            stateData = stateData.slice(0, 10);
        }
        return stateData.map((value, index) => {
            return (
                <TableRow key={index}>
                    <td>
                        <TableItem header state>
                            <Body2 style={{ fontWeight: 600 }}>
                                {value.state}
                            </Body2>
                        </TableItem>
                    </td>
                    <td>
                        <TableItem>
                            <Caption
                                style={{ marginBottom: 4 }}
                                color={theme.cardColors.confirm}>
                                {assignChangeValue(value.todayConfirmed)}
                            </Caption>
                            <Body2 style={{ fontWeight: 600 }}>
                                {value.totalConfirmed}
                            </Body2>
                        </TableItem>
                    </td>
                    <td>
                        <TableItem>
                            <Caption
                                style={{ marginBottom: 4 }}
                                color={theme.cardColors.active}>
                                {assignChangeValue(value.todayActive)}
                            </Caption>
                            <Body2 style={{ fontWeight: 600 }}>
                                {value.totalActive}
                            </Body2>
                        </TableItem>
                    </td>
                    <td>
                        <TableItem>
                            <Caption
                                style={{ marginBottom: 4 }}
                                color={theme.cardColors.recovered}>
                                {assignChangeValue(value.todayRecovered)}
                            </Caption>
                            <Body2 style={{ fontWeight: 600 }}>
                                {value.totalRecovered}
                            </Body2>
                        </TableItem>
                    </td>
                    <td>
                        <TableItem>
                            <Caption
                                style={{ marginBottom: 4 }}
                                color={theme.cardColors.deaths}>
                                {assignChangeValue(value.todayDeaths)}
                            </Caption>
                            <Body2 style={{ fontWeight: 600 }}>
                                {value.totalDeaths}
                            </Body2>
                        </TableItem>
                    </td>
                </TableRow>
            );
        });
    };

    return (
        <WrapperDiv
            margin={{ top: 36, left: 16, right: 16, bottom: 36 }}
            justifyContent="center">
            <table className="state__table">
                <thead>
                    <TableRow>
                        <th>
                            <TableItem header state>
                                <Body1 style={{ fontWeight: 600 }}>State</Body1>
                            </TableItem>
                        </th>
                        <th>
                            <TableItem header>
                                <Body1 style={{ fontWeight: 600 }}>
                                    Confirmed
                                </Body1>
                            </TableItem>
                        </th>
                        <th>
                            <TableItem header>
                                <Body1 style={{ fontWeight: 600 }}>
                                    Active
                                </Body1>
                            </TableItem>
                        </th>
                        <th>
                            <TableItem header>
                                <Body1 style={{ fontWeight: 600 }}>
                                    Recovered
                                </Body1>
                            </TableItem>
                        </th>
                        <th>
                            <TableItem header>
                                <Body1 style={{ fontWeight: 600 }}>
                                    Deaths
                                </Body1>
                            </TableItem>
                        </th>
                    </TableRow>
                </thead>
                <tbody>
                    {renderTableRow()}
                    <TableRow key={data.length}>
                        <td>
                            <TableItem header state last>
                                <Body2 style={{ fontWeight: 600 }}>India</Body2>
                            </TableItem>
                        </td>
                        <td>
                            <TableItem last>
                                <Caption
                                    style={{ marginBottom: 4 }}
                                    color={theme.cardColors.confirm}>
                                    {assignChangeValue(data[0].todayConfirmed)}
                                </Caption>
                                <Body2 style={{ fontWeight: 600 }}>
                                    {data[0].totalConfirmed}
                                </Body2>
                            </TableItem>
                        </td>
                        <td>
                            <TableItem last>
                                <Caption
                                    style={{ marginBottom: 4 }}
                                    color={theme.cardColors.active}>
                                    {assignChangeValue(data[0].todayActive)}
                                </Caption>
                                <Body2 style={{ fontWeight: 600 }}>
                                    {data[0].totalActive}
                                </Body2>
                            </TableItem>
                        </td>
                        <td>
                            <TableItem last>
                                <Caption
                                    style={{ marginBottom: 4 }}
                                    color={theme.cardColors.recovered}>
                                    {assignChangeValue(data[0].todayRecovered)}
                                </Caption>
                                <Body2 style={{ fontWeight: 600 }}>
                                    {data[0].totalRecovered}
                                </Body2>
                            </TableItem>
                        </td>
                        <td>
                            <TableItem last>
                                <Caption
                                    style={{ marginBottom: 4 }}
                                    color={theme.cardColors.deaths}>
                                    {assignChangeValue(data[0].todayDeaths)}
                                </Caption>
                                <Body2 style={{ fontWeight: 600 }}>
                                    {data[0].totalDeaths}
                                </Body2>
                            </TableItem>
                        </td>
                    </TableRow>
                    <TableRow>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <TableItem
                                last
                                onClick={() => {
                                    setExpand((prev) => !prev);
                                }}>
                                {expand ? "Show Less" : "Show More"}
                            </TableItem>
                        </td>
                    </TableRow>
                </tbody>
            </table>
        </WrapperDiv>
    );
}

export default TableSection;
