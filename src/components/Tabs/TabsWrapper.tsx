import React, { useState, useRef, useEffect } from "react";
import Tabs, { TabsProps } from ".";
import Tab from "./Tab";

export type TabsWrapperProps = {
    flushed: boolean;
}

const TabsWrapper = (props: TabsWrapperProps) => {
    const [expanded, setExpanded] = useState("");

    const handleChange = (panelName: string) => {
        setExpanded(expanded === panelName ? "" : panelName);
    }

    return (
        <div>
            <Tabs activeTabId="tab-2" flushed={props.flushed} heading="Etiam venenatis" onChange={() => handleChange("panel1")}>
                <Tab id="tab-1">tab one</Tab>
                <Tab id="tab-2">tab two</Tab>
            </Tabs>
        </div>
    );
};

export default TabsWrapper;