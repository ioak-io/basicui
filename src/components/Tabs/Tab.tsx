import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface TabProps {
    id: string;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Tab = (props: TabProps) => {
    const bodyRef: React.MutableRefObject<any> = useRef(null);

    return (
        <div className="basicui-tab">
            {props.children}
        </div>
    );
};

export default Tab;