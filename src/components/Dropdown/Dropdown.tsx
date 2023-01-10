import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import "./dropdown.css";
import PopupArea from "./PopupArea";

export interface DropdownProps {
    type: string;
    options: string[];
    initialValue?: string;
    placeholder?: string;
    handleChange?: any;
    //   onClick?: (
    //     event: React.MouseEvent<HTMLDropdownElement, MouseEvent>
    //   ) => void;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Dropdown = (props: DropdownProps) => {
    const [value, setValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const referenceElement: React.MutableRefObject<any> = useRef(null);
    const popperElement: React.MutableRefObject<any> = useRef(null);


    useEffect(() => {
        if (value === "" && props.initialValue && props.initialValue !== "") {
            setValue(props.initialValue);
        }
    }, [props.initialValue]);

    useEffect(() => {
        // listen for clicks and close dropdown on body
        document.addEventListener("mousedown", handleDocumentClick);
        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, []);

    useEffect(() => {
        if (referenceElement.current && popperElement.current) {
            createPopper(referenceElement.current, popperElement.current, {
                placement: 'bottom-start',
                modifiers: [preventOverflow, flip,
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 4],
                        },
                    }
                ],
            });
        }
    }, [referenceElement, popperElement]);

    const handleDocumentClick = (event: any) => {
        if (referenceElement.current?.contains(event.target) || popperElement.current?.contains(event.target)) {
            return;
        }
        setIsVisible(false);
    }

    const handleDropdownClick = (event: any) => {
        setIsVisible(!isVisible);
    }

    const handleChange = (index: number, option: string) => {
        if (props.handleChange) { props.handleChange(index, option) };
        setValue(option);
        setIsVisible(false);
    }

    return (
        <div
            className={["basicui-dropdown"].join(
                " "
            )}
        >
            <button type="button" ref={referenceElement} onClick={handleDropdownClick}>
                {value || props.placeholder || "-"}
            </button>

            <div ref={popperElement} className="basicui-dropdown__popper">
                {isVisible && <PopupArea value={value} options={props.options} referenceElement={referenceElement} handleChange={handleChange} />}
            </div>
        </div>
    );
};

export default Dropdown;