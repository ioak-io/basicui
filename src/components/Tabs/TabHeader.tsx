import React, { useState, useRef, useEffect } from "react";
import TabHeaderAlignmentType from "../types/TabHeaderAlignmentType";

export interface TabHeaderProps {
    alignment?: TabHeaderAlignmentType;
    children: any;
};

/**
 * Component to render Header link for the tab
 */
const TabHeader = (props: TabHeaderProps) => {
    const bodyRef: React.MutableRefObject<any> = useRef(null);

    return (
        <div className={`basicui-tab-header basicui-tab-header--alignment-${props.alignment || TabHeaderAlignmentType.default}`}>
            {props.children}
        </div>
    );
};

export default TabHeader;