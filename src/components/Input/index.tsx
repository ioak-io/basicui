import React, { useState, useRef, useEffect } from "react";

import FormElementMessage from "../shared/FormElementMessage";

export type InputProps = {
    id?: string;
    type?: string;
    label?: string;
    value?: string | number;
    placeholder?: string;
    tooltip?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    onChange?: any;
    onInput?: any;
    [key: string]: any;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Input = ({ id,
    type,
    label,
    value,
    placeholder,
    tooltip,
    errorMessage,
    warningMessage,
    successMessage,
    ...restProps
}: InputProps) => {

    return (
        <div
            className={["basicui-input-el"].join(
                " "
            )}
        >
            {label && <FormElementMessage text={label} type="label" />}
            <input
                id={id}
                className={`basicui-input ${errorMessage ? "basicui-input--error" : ""} ${warningMessage ? "basicui-input--warning" : ""} ${successMessage ? "basicui-input--success" : ""}`}
                value={value}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                {...restProps}
            />
            {tooltip && <FormElementMessage text={tooltip} type="info" />}
            {errorMessage && <FormElementMessage text={errorMessage} type="error" />}
            {warningMessage && <FormElementMessage text={warningMessage} type="warning" />}
            {successMessage && <FormElementMessage text={successMessage} type="success" />}
        </div>
    );
};

export default Input;