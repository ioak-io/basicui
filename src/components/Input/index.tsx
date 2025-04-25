import React, { useState, useRef, useEffect } from "react";

import FormElementMessage from "../shared/FormElementMessage";
import Label from "../Label";

export type InputProps = {
    id?: string;
    type?: string;
    label?: string;
    labelDesc?: string;
    value?: string | number;
    placeholder?: string;
    tooltip?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    onChange?: any;
    onInput?: any;
    className?: string;
    [key: string]: any;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Input = ({ id,
    type,
    label,
    labelDesc,
    value,
    placeholder,
    tooltip,
    errorMessage,
    warningMessage,
    successMessage,
    className,
    wrapperClassName,
    ...restProps
}: InputProps) => {

    return (
        <div
            className={`basicui-input-el ${wrapperClassName || ""}`}
        >
            {label && <Label labelDesc={labelDesc}>{label}</Label>}
            <input
                id={id}
                className={`basicui-input ${className || ""} ${errorMessage ? "basicui-input--error" : ""} ${warningMessage ? "basicui-input--warning" : ""} ${successMessage ? "basicui-input--success" : ""}`}
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