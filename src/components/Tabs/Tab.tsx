import React, { useState, useRef, useEffect } from "react";

export interface TabProps {
    id: string;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Tab = (props: TabProps) => {

    const [tabDetail, setTabDetail] = useState<any>();

    useEffect(() => {
        props.children.forEach((item: any) => {
            if (item.type.displayName === "TabDetail" || item.type.name === "TabDetail") {
                setTabDetail(item);
            }
        });
    }, [props.children]);

    return (
        <div className="basicui-tab">
            {tabDetail}
        </div>
    );
};

export default Tab;