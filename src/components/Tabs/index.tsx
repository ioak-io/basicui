import React, { useState, useRef, useEffect, ElementRef, ReactChild, ReactNode, ReactFragment } from "react";
import TabVariantType from "../types/TabVariantType";
import ThemeType from "../types/ThemeType";
import "./style.css";

export type TabsProps = {
    theme?: ThemeType;
    variant?: TabVariantType;
    activeTabId: string;
    onChange: any;
    heading: string;
    flushed?: boolean;
    children: any;
};

/**
 * Component to render tab surface
 */
const Tabs = (props: TabsProps) => {
    const [tabSpec, setTabSpec] = useState<{ id: string }[]>([]);
    const [tabMap, setTabMap] = useState<any>({});

    useEffect(() => {
        const _tabMap: any = {};
        const _tabSpec: { id: string }[] = [];
        props.children.forEach((tab: any) => {
            _tabMap[tab.props.id] = tab;
            _tabSpec.push({ id: tab.props.id });
        })
        setTabMap(_tabMap);
        setTabSpec(_tabSpec);
    }, [props.children]);

    const handleClick = (tabId: string) => {
        props.onChange(tabId);
    }

    return (
        <div className={`basicui-tabs basicui-tabs--theme-${props.theme || ThemeType.default} basicui-tabs--variant-${props.variant || TabVariantType.default}`}>
            <ul className="basicui-tabs__ul">
                {tabSpec.map((tab) =>
                    <li className={`basicui-tabs__ul__li ${props.activeTabId === tab.id ? "basicui-tabs__ul__li--active" : ""} `}>
                        <button className={`basicui-tabs__ul__li__button basicui-tabs__ul__li__button--theme-${props.theme || ThemeType.default} basicui-tabs__ul__li__button--variant-${props.variant || TabVariantType.default}`} onClick={() => handleClick(tab.id)}>{tab.id}</button>
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