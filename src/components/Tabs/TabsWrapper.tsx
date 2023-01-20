import React, { useState, useRef, useEffect } from "react";
import Tabs, { TabsProps } from ".";
import TabHeaderAlignmentType from "../types/TabHeaderAlignmentType";
import ThemeType from "../types/ThemeType";
import Tab from "./Tab";
import TabDetail from "./TabDetail";
import TabHeader from "./TabHeader";

export type TabsWrapperProps = {
    flushed: boolean;
    theme: ThemeType;
}

const TabsWrapper = (props: TabsProps) => {
    const [activeTabId, setActiveTabId] = useState("lorem ipsum tab-1");

    const handleChange = (_activeTabId: string) => {
        setActiveTabId(_activeTabId);
    }

    return (
        <div>
            <Tabs {...props} activeTabId={activeTabId} onChange={handleChange}>
                <Tab id="lorem ipsum tab-1">
                    <TabHeader>tab one</TabHeader>
                    <TabDetail>lorem ipsum tab one</TabDetail>
                </Tab>
                <Tab id="lorem ipsum tab-2">
                    <TabHeader>tab two</TabHeader>
                    <TabDetail>lorem ipsum tab two</TabDetail>
                </Tab>
                <Tab id="lorem ipsum tab-3">
                    <TabHeader>tab three</TabHeader>
                    <TabDetail>lorem ipsum tab three</TabDetail>
                </Tab>
                <Tab id="lorem ipsum tab-4">
                    <TabHeader>tab four</TabHeader>
                    <TabDetail>lorem ipsum tab four</TabDetail>
                </Tab>
                <Tab id="lorem ipsum tab-5">
                    <TabHeader>tab five</TabHeader>
                    <TabDetail>lorem ipsum tab five</TabDetail>
                </Tab>
                <Tab id="lorem ipsum tab-6">
                    <TabHeader alignment={TabHeaderAlignmentType.default}>
                        <div><svg
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                            ></path>
                        </svg></div>
                        tab six
                    </TabHeader>
                    <TabDetail>lorem ipsum tab six</TabDetail>
                </Tab>
            </Tabs>
        </div>
    );
};

export default TabsWrapper;