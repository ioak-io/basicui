import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import "./style.css";
import OptionsList from "../shared/OptionsList";

export interface SelectProps {
    options: string[];
    initialValues?: string[];
    placeholder?: string;
    handleChange?: any;
    multiple?: boolean;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Select = (props: SelectProps) => {
    const [values, setValues] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const referenceElement: React.MutableRefObject<any> = useRef(null);
    const popperElement: React.MutableRefObject<any> = useRef(null);


    useEffect(() => {
        if (values.length === 0 && props.initialValues && props.initialValues.length > 0) {
            setValues(props.initialValues);
        }
    }, [props.initialValues]);

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
                            offset: [0, 6],
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
        let _values = [...values];
        if (!props.multiple && _values.includes(option)) {
            _values = [];
        } else if (!props.multiple && !_values.includes(option)) {
            _values = [option];
        } else if (_values.includes(option)) {
            _values = _values.filter(item => item !== option);
        } else {
            _values = [..._values, option];
        }

        setValues(_values);
        if (props.handleChange) { props.handleChange(_values) };

        if (!props.multiple) {
            setIsVisible(false);
        }
    }

    return (
        <div
            className={["basicui-select"].join(
                " "
            )}
        >
            <button className="basicui-input basicui-select__button" type="button" ref={referenceElement} onClick={handleSelectClick}>
                {values.join(', ') || props.placeholder || "-"}
            </button>

            <div ref={popperElement} className="basicui-select__popper">
                {isVisible && <OptionsList values={values} options={props.options} referenceElement={referenceElement} handleChange={handleChange} handleClose={() => setIsVisible(false)} />}
            </div>
        </div>
    );
};

export default Select;