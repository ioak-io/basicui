import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";

export interface InputProps {
    initialValue?: string | number;
    placeholder?: string;
    onChange?: any;
    onInput?: any;
};

/**
 * Component to render input form element
 */
const Input = (props: InputProps) => {
    const [value, setValue] = useState<(string | number)>('');

    useEffect(() => {
        if (isEmptyOrSpaces(value) && !isEmptyOrSpaces(props.initialValue)) {
            setValue(props.initialValue || '');
        }
    }, [props.initialValue]);

    const handleChange = (event: any) => {
        setValue(event.currentTarget.value);
        if (props.onChange) { props.onChange(event.currentTarget.value) };
        if (props.onInput) { props.onInput(event.currentTarget.value) };
    }

    return (
        <div
            className={["basicui-input"].join(
                " "
            )}
        >
            <input className="basicui-input basicui-input-el" onInput={handleChange} />
        </div>
    );
};

export default Input;