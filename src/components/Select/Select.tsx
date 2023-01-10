import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import "./Select.css";
import PopupArea from "./PopupArea";

export interface SelectProps {
    type: string;
    options: string[];
    initialValue?: string;
    placeholder?: string;
    handleChange?: any;
    //   onClick?: (
    //     event: React.MouseEvent<HTMLSelectElement, MouseEvent>
    //   ) => void;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Select = (props: SelectProps) => {
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
        // listen for clicks and close select on body
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

    const handleSelectClick = (event: any) => {
        setIsVisible(!isVisible);
    }

    const handleChange = (index: number, option: string) => {
        if (props.handleChange) { props.handleChange(index, option) };
        setValue(option);
        setIsVisible(false);
    }

    return (
        <div
            className={["basicui-select"].join(
                " "
            )}
        >
            <button type="button" ref={referenceElement} onClick={handleSelectClick}>
                {value || props.placeholder || "-"}
            </button>

            <div ref={popperElement} className="basicui-select__popper">
                {isVisible && <PopupArea value={value} options={props.options} referenceElement={referenceElement} handleChange={handleChange} handleClose={() => setIsVisible(false)} />}
            </div>
        </div>
    );
};

export default Select;