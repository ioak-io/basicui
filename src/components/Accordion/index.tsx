import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface AccordionProps {
    theme?: ThemeType;
    heading: string;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Accordion = (props: AccordionProps) => {
    return (
        <div className="basicui-accordion">
            <button className="basicui-accordion__header">
                <div>{props.heading}</div>
                v
            </button>
            <div className="basicui-accordion__body">
                {props.children}
            </div>
        </div>
    );
};

export default Accordion;