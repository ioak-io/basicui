import React, { useState, useRef, useEffect, ElementRef, ReactChild, ReactNode, ReactFragment } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface TabsProps {
    activeTabId: string;
    onChange: any;
    heading: string;
    flushed?: boolean;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Tabs = (props: TabsProps) => {
    const [tabSpec, setTabSpec] = useState<{ id: string }[]>([]);
    const [tabMap, setTabMap] = useState<any>({});

    useEffect(() => {
        console.log(props.children);
        const _tabMap: any = {};
        const _tabSpec: { id: string }[] = [];
        props.children.forEach((tab: any) => {
            _tabMap[tab.props.id] = tab;
            _tabSpec.push({ id: tab.props.id });
        })
        setTabMap(_tabMap);
        setTabSpec(_tabSpec);
    }, [props.children]);

    useEffect(() => {
        console.log("tab=", tabSpec, tabMap);
    }, [tabSpec, tabMap]);

    return (
        <div className="basicui-tabs">
            <ul className="basicui-tabs__ul">
                {tabSpec.map((tab) =>
                    <li className={`basicui-tabs__ul__li ${props.activeTabId === tab.id ? "basicui-tabs__ul__li--active" : ""} `}>
                        <button className="basicui-tabs__ul__li__button">{tab.id}</button>
                    </li>
                )}
            </ul>
            <div>
                {tabMap[props.activeTabId]}
            </div>
        </div>
    );
};

export default Tabs;