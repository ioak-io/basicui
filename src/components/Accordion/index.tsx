import React, { useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import SvgIcon from "../SvgIcon";

export interface AccordionProps {
    theme?: ThemeType;
    expanded: boolean;
    onChange?: () => void;
    heading?: string;
    bordered?: boolean;
    children: React.ReactNode;
    className?: string;
    header?: React.ReactNode; // Optional custom header
}

/**
 * Component to render an accordion with optional custom header.
 * Allows parent to fully control expand/collapse behavior.
 */
const Accordion = (props: AccordionProps) => {
    const bodyRef: React.MutableRefObject<any> = useRef(null);
    const isAnimationCompletedRef = useRef(true);

    const handleChange = () => {
        if (isAnimationCompletedRef.current && props.onChange) {
            props.onChange();
        }
    };

    useEffect(() => {
        updateScrollHeight();
    }, [props.expanded]);

    const updateScrollHeight = () => {
        if (!bodyRef.current) return;

        if (props.expanded) {
            bodyRef.current.style.height = bodyRef.current.scrollHeight + 'px';
            bodyRef.current.style.overflowY = 'hidden';
            bodyRef.current.style.visibility = 'visible';
            isAnimationCompletedRef.current = false;
            setTimeout(() => {
                if (bodyRef.current) {
                    bodyRef.current.style.overflowY = 'visible';
                    bodyRef.current.style.height = 'auto';
                }
                isAnimationCompletedRef.current = true;
            }, 300);
        } else {
            isAnimationCompletedRef.current = false;
            bodyRef.current.style.height = bodyRef.current.scrollHeight + 'px';
            setTimeout(() => {
                bodyRef.current.style.height = '0px';
            }, 0);
            bodyRef.current.style.overflowY = 'hidden';
            setTimeout(() => {
                if (bodyRef.current) {
                    bodyRef.current.style.visibility = 'hidden';
                }
                isAnimationCompletedRef.current = true;
            }, 300);
        }
    };

    const renderHeader = () => {
        if (props.header) {
            return <div className="basicui-accordion__header-custom">{props.header}</div>;
        }

        if (props.heading && props.onChange) {
            return (
                <button className="basicui-accordion__header" onClick={handleChange}>
                    <div>{props.heading}</div>
                    <SvgIcon
                        className="basicui-accordion__header__arrow"
                        src="/icons/fontawesome/down.svg"
                        height="12px"
                        width="12px"
                    />
                </button>
            );
        }

        return null; // No header
    };

    return (
        <div className={`basicui-accordion ${props.expanded ? "accordion-active" : ""} ${props.bordered ? "accordion-bordered" : ""} theme-${props.theme || ThemeType.default} ${props.className || ""}`}>
            {renderHeader()}
            <div className="basicui-accordion__body" ref={bodyRef}>
                <div className="basicui-accordion__body__content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
