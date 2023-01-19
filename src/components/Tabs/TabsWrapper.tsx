import React, { useState, useRef, useEffect } from "react";
import Tabs, { TabsProps } from ".";
import Tab from "./Tab";

export type TabsWrapperProps = {
    flushed: boolean;
}

const TabsWrapper = (props: TabsWrapperProps) => {
    const [activeTabId, setActiveTabId] = useState("lorem ipsum tab-1");

    const handleChange = (_activeTabId: string) => {
        setActiveTabId(_activeTabId);
    }

    return (
        <div>
            <Tabs activeTabId={activeTabId} flushed={props.flushed} heading="Etiam venenatis" onChange={handleChange}>
                <Tab id="lorem ipsum tab-1">tab one</Tab>
                <Tab id="lorem ipsum tab-2">tab two</Tab>
                <Tab id="lorem ipsum tab-3">tab three</Tab>
                <Tab id="lorem ipsum tab-4">tab four</Tab>
                <Tab id="lorem ipsum tab-5">tab five</Tab>
                <Tab id="lorem ipsum tab-6">tab six</Tab>
            </Tabs>
        </div>
    );
};

export default TabsWrapper;