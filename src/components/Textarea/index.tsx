import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";

export interface TextareaProps {
    id?: string;
    type?: string;
    label?: string;
    initialValue?: string | number;
    placeholder?: string;
    tooltip?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    onChange?: any;
    onInput?: any;
    onFocus?: any;
    onClick?: any;
    onBlur?: any;
    onResize?: any;
    rows?: number;
    cols?: number;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Textarea = (props: TextareaProps) => {
    const [value, setValue] = useState<(string | number)>('');

    useEffect(() => {
        if (isEmptyOrSpaces(value) && !isEmptyOrSpaces(props.initialValue)) {
            setValue(props.initialValue || '');
        }
    }, [props.initialValue]);

    const onInput = (event: any) => {
        setValue(event.currentTarget.value);
        if (props.onInput) {
            props.onInput(event);
        }
    }

    return (
        <div
            className={["basicui-textarea"].join(
                " "
            )}
        >
            {props.label && <FormElementMessage text={props.label} type="label" />}
            <textarea
                id={props.id}
                className="basicui-input"
                onInput={onInput}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onClick={props.onClick}
                onBlur={props.onBlur}
                value={value}
                placeholder={props.placeholder}
                onResize={props.onResize}
                rows={props.rows}
                cols={props.cols}
                autoComplete="none"
            />
            {props.tooltip && <FormElementMessage text={props.tooltip} type="info" />}
            {props.errorMessage && <FormElementMessage text={props.errorMessage} type="error" />}
            {props.warningMessage && <FormElementMessage text={props.warningMessage} type="warning" />}
            {props.successMessage && <FormElementMessage text={props.successMessage} type="success" />}
        </div>
    );
};

export default Textarea;