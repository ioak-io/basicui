import React, { useState, useRef, useEffect } from "react";
import "./style.css";

export interface TabDetailProps {
    children: any;
};

/**
 * Component to render details for the tab
 */
const TabDetail = (props: TabDetailProps) => {
    const bodyRef: React.MutableRefObject<any> = useRef(null);

    return (
        <div className="basicui-tab-detail">
            {props.children}
        </div>
    );
};

export default TabDetail;