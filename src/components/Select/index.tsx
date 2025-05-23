import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import OptionsList, { OptionsObjectType } from "../shared/OptionsList";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";
import Label from "../Label";

export interface SelectProps {
    name?: string;
    label?: string;
    labelDesc?: string;
    options: OptionsObjectType[];
    value: (string | number)[];
    placeholder?: string;
    onChange?: any;
    onInput?: any;
    multiple?: boolean;
    autocomplete?: boolean;
    allowNewValues?: boolean;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Select = (props: SelectProps) => {
    const valueRef: React.MutableRefObject<(string | number)[]> = useRef<(string | number)[]>([]);

    const [valuesText, setValuesText] = useState<(string | number)[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const referenceElement: React.MutableRefObject<any> = useRef(null);
    const popperElement: React.MutableRefObject<any> = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState<OptionsObjectType[]>([]);


    useEffect(() => {
        valueRef.current = props.value || [];
    }, [props.value]);

    useEffect(() => {
        if (!isVisible) {
            setSearchText("");
        }
    }, [isVisible]);

    useEffect(() => {
        const _searchText = searchText.toLowerCase();
        if (isEmptyOrSpaces(_searchText)) {
            setOptions(props.options);
        } else {
            const _options = props.options.filter(
                item => (item.value + "").toLowerCase().includes(_searchText)
            );

            if (props.allowNewValues && !_options.find(item => item.name === _searchText)) {
                _options.unshift({ name: searchText, value: searchText });
            }

            setOptions(_options);
        }
    }, [searchText, props.options]);

    useEffect(() => {
        const _optionsAsMap: any = {};
        props.options.forEach(item => (_optionsAsMap[item.name] = item.value));
        const _valuesText: (string | number)[] = [];
        props.value.forEach((item: (string | number)) => _valuesText.push(_optionsAsMap[item] || item));
        setValuesText(_valuesText);
    }, [props.value]);

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

    const handleChange = (event: any, index: number, option: string) => {
        let _value = [...valueRef.current];
        if (!props.multiple && _value.includes(option)) {
            _value = [];
        } else if (!props.multiple && !_value.includes(option)) {
            _value = [option];
        } else if (_value.includes(option)) {
            _value = _value.filter(item => item !== option);
        } else {
            _value = [..._value, option];
        }

        const _event: any = {
            preventDefault: event.preventDefault,
            currentTarget: {
                values: _value,
                value: _value,
                name: props.name
            }
        }

        if (!props.multiple) {
            _event.currentTarget.value = _value.length > 0 ? _value[0] : null;
        }

        if (props.onChange) { props.onChange(_event) };
        if (props.onInput) { props.onInput(_event) };

        if (!props.multiple) {
            setIsVisible(false);
        }
    }

    const handleSearchTextChange = (_searchText: string) => {
        setSearchText(_searchText);
    }

    return (
        <div
            className={["basicui-select"].join(
                " "
            )}
        >
            {props.label && <Label labelDesc={props.labelDesc}>{props.label}</Label>}
            <button className="basicui-input basicui-select__button" type="button" ref={referenceElement} onClick={handleSelectClick}>
                {valuesText.join(', ') || props.placeholder || "-"}
            </button>

            <div ref={popperElement} className="basicui-select__popper">
                {isVisible && <OptionsList value={props.value} options={options} referenceElement={referenceElement} handleChange={handleChange} handleClose={() => setIsVisible(false)} handleSearchTextChange={props.autocomplete ? handleSearchTextChange : null} />}
            </div>
        </div>
    );
};

export default Select;