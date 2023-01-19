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
    const [temp, setTemp] = useState(false);
    const bodyRef = useRef();

    const handleToggle = () => {
        setTemp(!temp);
    }

    return (
        <div className={`basicui-accordion  ${temp ? "basicui-accordion--active" : ""}`}>
            <button className="basicui-accordion__header" onClick={handleToggle}>
                <div>{props.heading}</div>
                v
            </button>
            <div className="basicui-accordion__body" ref={bodyRef.current}>
                <div className="basicui-accordion__body__content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;