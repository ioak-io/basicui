import React, { useState, useRef, useEffect, ElementRef, ReactChild, ReactNode, ReactFragment } from "react";
import TabShapeType from "../types/TabShapeType";
import ThemeType from "../types/ThemeType";
import "./style.css";

export type TabsProps = {
    theme?: ThemeType;
    shape?: TabShapeType;
    offset?: boolean;
    activeTabId: string;
    onChange: any;
    children: any;
};

/**
 * Component to render tab surface
 */
const Tabs = (props: TabsProps) => {
    const [tabHeaders, setTabHeaders] = useState<{ id: string, component: any }[]>([]);
    const [tabMap, setTabMap] = useState<any>({});

    useEffect(() => {
        const _tabMap: any = {};
        const _tabHeaders: { id: string, component: any }[] = [];
        props.children.forEach((tab: any) => {
            _tabMap[tab.props.id] = tab;
            console.log(tab);
            tab.props.children?.forEach((item: any) => {
                if (item.type.displayName === "TabHeader" || item.type.name === "TabHeader") {
                    _tabHeaders.push({ id: tab.props.id, component: item });
                }
            })
        })
        setTabMap(_tabMap);
        setTabHeaders(_tabHeaders);
        console.log(props.children, _tabHeaders, _tabMap);
    }, [props.children]);

    const handleClick = (tabId: string) => {
        props.onChange(tabId);
    }

    return (
        <div className={`basicui-tabs ${props.offset ? "basicui-tabs--offset" : ""} basicui-tabs--theme-${props.theme || ThemeType.default} basicui-tabs--shape-${props.shape || TabShapeType.default}`}>
            <ul className="basicui-tabs__ul">
                {tabHeaders.map((tab) =>
                    <li className={`basicui-tabs__ul__li ${props.activeTabId === tab.id ? "basicui-tabs__ul__li--active" : ""} `}>
                        <button className="basicui-tabs__ul__li__button" onClick={() => handleClick(tab.id)}>{tab.component}</button>
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