import React, { useMemo } from "react";
import Accordion from "react-bootstrap/Accordion";
import classNames from "classnames";
import Card from "react-bootstrap/Card";
import "./components.css";

function VaccineDetail({ darkMode, item, index }) {
    const sponsors = useMemo(() => {
        const sponsorList = item.sponsors;
        let sp = "";
        sponsorList.forEach((item) => {
            sp = sp + item + ", ";
        });
        sp = sp.substr(0, sp.length - 2);
        return sp;
    }, [item]);

    const institutions = useMemo(() => {
        const institutionList = item.institutions;
        let sp = "";
        institutionList.forEach((item) => {
            sp = sp + item + ", ";
        });
        sp = sp.substr(0, sp.length - 2);
        sp = sp.replaceAll("&nbsp", "");
        return sp;
    }, [item]);

    return (
        <Card className={classNames([{ dark: darkMode }])}>
            <Accordion.Toggle
                as={Card.Header}
                eventKey={index + 1}
                className={classNames(["card", "header", { dark: darkMode }])}>
                <b>{item.candidate}</b>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index + 1}>
                <Card.Body
                    className={classNames([
                        "card",
                        "body",
                        { dark: darkMode }
                    ])}>
                    <p>
                        <b>Mechanism: </b>
                        {item.mechanism}
                    </p>
                    <p>
                        <b>Sponsors: </b>
                        {sponsors}
                    </p>
                    <p>
                        <b>Phase: </b>
                        {item.trialPhase}
                    </p>
                    <p>
                        <b>Institutions: </b>
                        {institutions}
                    </p>
                    <p>
                        <b>Details: </b>
                        {item.details.replaceAll("&nbsp", " ")}
                    </p>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default VaccineDetail;
