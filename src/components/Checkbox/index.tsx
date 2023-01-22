import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";

export interface ChekboxProps {
    id: string;
    name?: string;
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
const Chekbox = (props: ChekboxProps) => {
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
        <div className="basicui-checkbox" >
            <input checked type="checkbox" id={props.id} name={props.name} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

export default Chekbox;