import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface AccordionProps {
    expanded: boolean;
    onChange: any;
    heading: string;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Accordion = (props: AccordionProps) => {
    const bodyRef: React.MutableRefObject<any> = useRef(null);

    useEffect(() => {
        updateScrollHeight();
    }, [props.expanded]);

    const updateScrollHeight = () => {
        console.log(bodyRef.current)
        if (!bodyRef.current) return;
        //   setTimeout(() => {
        if (props.expanded && bodyRef.current) {
            console.log("**", bodyRef.current.scrollHeight);
            bodyRef.current.style.maxHeight = bodyRef.current.scrollHeight + 'px';
            bodyRef.current.style.overflowY = 'hidden';
            bodyRef.current.style.visibility = 'visible';
            setTimeout(() => {
                bodyRef.current.style.overflowY = 'visible';
            }, 300);
        } else if (bodyRef.current) {
            bodyRef.current.style.maxHeight = '0px';
            bodyRef.current.style.overflowY = 'hidden';
            setTimeout(() => {
                bodyRef.current.style.visibility = 'hidden';
            }, 300);
        }
        //   }, 0);
    }

    return (
        <div className={`basicui-accordion  ${props.expanded ? "basicui-accordion--active" : ""}`}>
            <button className="basicui-accordion__header" onClick={props.onChange}>
                <div>{props.heading}</div>
                v
            </button>
            <div className="basicui-accordion__body" ref={bodyRef}>
                <div className="basicui-accordion__body__content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;