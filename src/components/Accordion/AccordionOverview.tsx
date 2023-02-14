import React, { useState, useRef, useEffect } from "react";
import Accordion, { AccordionProps } from ".";
import DemoSection from "../../demo/DemoSection";
import ThemeType from "../types/ThemeType";
import AccordionWrapper from "./AccordionWrapper";

const AccordionOverview = () => {
    const [expanded, setExpanded] = useState("");

    const handleChange = (panelName: string) => {
        setExpanded(expanded === panelName ? "" : panelName);
    }

    return (
        <div>
            <DemoSection heading="Accordion with primary theme">
                <AccordionWrapper theme={ThemeType.primary} />
            </DemoSection>
            <DemoSection heading="Bordered accordion with default theme">
                <AccordionWrapper bordered />
            </DemoSection>
            <DemoSection heading="Accordion with danger theme">
                <AccordionWrapper theme={ThemeType.danger} />
            </DemoSection>
        </div>
    );
};

export default AccordionOverview;