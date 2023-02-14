import React, { useState, useRef, useEffect } from "react";
import Accordion, { AccordionProps } from ".";
import ThemeType from "../types/ThemeType";
import AccordionWrapper from "./AccordionWrapper";

const AccordionOverview = () => {
    const [expanded, setExpanded] = useState("");

    const handleChange = (panelName: string) => {
        setExpanded(expanded === panelName ? "" : panelName);
    }

    return (
        <div>
            <section className="basicuidemo-section">
                <h4>Accordion with primary theme</h4>
                <AccordionWrapper theme={ThemeType.primary} />
            </section>
            <section className="basicuidemo-section">
                <h4>Bordered accordion with default theme</h4>
                <AccordionWrapper bordered />
            </section>
            <section className="basicuidemo-section">
                <h4>Accordion with danger theme</h4>
                <AccordionWrapper theme={ThemeType.danger} />
            </section>
        </div>
    );
};

export default AccordionOverview;