import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";

export interface AccordionProps {
    theme?: ThemeType;
    expanded: boolean;
    onChange: any;
    heading: string;
    bordered?: boolean;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Accordion = (props: AccordionProps) => {
    const bodyRef: React.MutableRefObject<any> = useRef(null);
    const isAnimationCompletedRef = useRef(true);

    const handleChange = () => {
        if (isAnimationCompletedRef.current) {
            props.onChange();
        }
    }

    useEffect(() => {
        updateScrollHeight();
    }, [props.expanded]);

    const updateScrollHeight = () => {
        console.log(bodyRef.current)
        if (!bodyRef.current) return;
        //   setTimeout(() => {
        if (props.expanded && bodyRef.current) {
            bodyRef.current.style.height = bodyRef.current.scrollHeight + 'px';
            bodyRef.current.style.overflowY = 'hidden';
            bodyRef.current.style.visibility = 'visible';
            isAnimationCompletedRef.current = false;
            setTimeout(() => {
                bodyRef.current.style.overflowY = 'visible';
                bodyRef.current.style.height = 'auto';
                isAnimationCompletedRef.current = true;
            }, 300);
        } else if (bodyRef.current) {
            isAnimationCompletedRef.current = false;
            bodyRef.current.style.height = bodyRef.current.scrollHeight + 'px';
            setTimeout(() => {
                bodyRef.current.style.height = '0px';
            }, 0);
            bodyRef.current.style.overflowY = 'hidden';
            setTimeout(() => {
                bodyRef.current.style.visibility = 'hidden';
                isAnimationCompletedRef.current = true;
            }, 300);
        }
        //   }, 0);
    }

    return (
        <div className={`basicui-accordion  ${props.expanded ? "accordion-active" : ""} ${props.bordered ? "accordion-bordered" : ""} theme-${props.theme || ThemeType.default}`}>
            <button className="basicui-accordion__header" onClick={handleChange}>
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