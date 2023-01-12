import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import Tooltip from "../shared/Tooltip";
import FormElementMessage from "../shared/FormElementMessage";

export interface InputProps {
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
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Input = (props: InputProps) => {
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
            className={["basicui-input-el"].join(
                " "
            )}
        >
            <input className="basicui-input"
                onInput={onInput}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onClick={props.onClick}
                onBlur={props.onBlur}
            />
            {props.tooltip && <Tooltip text={props.tooltip} />}
            {props.errorMessage && <FormElementMessage text={props.errorMessage} />}
        </div>
    );
};

export default Input;