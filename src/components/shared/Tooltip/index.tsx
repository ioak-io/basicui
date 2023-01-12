import React, { useState, useRef, useEffect } from "react";

import "./style.css";

export interface TooltipProps {
    text: string;
};

/**
 * Tooltip component
 */
const Tooltip = (props: TooltipProps) => {

    return (
        <div
            className={["basicui-tooltip"].join(
                " "
            )}
        >
            {props.text}
        </div>
    );
};

export default Tooltip;