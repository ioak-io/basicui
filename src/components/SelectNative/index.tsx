import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";
import { OptionsObjectType } from "../shared/OptionsList";

export interface SelectNativeProps {
    initialValues?: (string | number)[];
    options: OptionsObjectType[];
    id?: string;
    label?: string;
    placeholder?: string;
    tooltip?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    multiple?: boolean;
    autocomplete?: boolean;
    onChange?: any;
    onInput?: any;
    onFocus?: any;
    onClick?: any;
    onBlur?: any;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const SelectNative = (props: SelectNativeProps) => {
    const [values, setValues] = useState<(string | number)[]>([]);

    useEffect(() => {
        if (values.length === 0 && props.initialValues && props.initialValues.length > 0) {
            setValues(props.initialValues);
        }
    }, [props.initialValues]);
    return (
        <div
            className={["basicui-selectnative"].join(
                " "
            )}
        >
            {props.label && <FormElementMessage text={props.label} type="label" />}
            <select
                id={props.id}
                className={`basicui-input basicui-selectnative ${props.multiple ? 'basicui-selectnative--multiple' : ''}`}
                onInput={props.onInput}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onClick={props.onClick}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                multiple={props.multiple}
                size={props.multiple ? 5 : 1}
            >
                {props.options.map(option =>
                    <option selected={values.includes(option.name)} className="basicui-selectnative__option">
                        {option.value}
                    </option>)}
            </select>
            {props.tooltip && <FormElementMessage text={props.tooltip} type="info" />}
            {props.errorMessage && <FormElementMessage text={props.errorMessage} type="error" />}
            {props.warningMessage && <FormElementMessage text={props.warningMessage} type="warning" />}
            {props.successMessage && <FormElementMessage text={props.successMessage} type="success" />}
        </div>
    );
};

export default SelectNative;