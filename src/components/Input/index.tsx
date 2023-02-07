import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";

export interface InputProps {
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
    onFocus?: any;
    onClick?: any;
    onBlur?: any;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Input = (props: InputProps) => {

    const onInput = (event: any) => {
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
            {props.label && <FormElementMessage text={props.label} type="label" />}
            <input
                id={props.id}
                className={`basicui-input ${props.errorMessage ? "basicui-input--error" : ""} ${props.warningMessage ? "basicui-input--warning" : ""} ${props.successMessage ? "basicui-input--success" : ""}`}
                onInput={onInput}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onClick={props.onClick}
                onBlur={props.onBlur}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                autoComplete="none"
            />
            {props.tooltip && <FormElementMessage text={props.tooltip} type="info" />}
            {props.errorMessage && <FormElementMessage text={props.errorMessage} type="error" />}
            {props.warningMessage && <FormElementMessage text={props.warningMessage} type="warning" />}
            {props.successMessage && <FormElementMessage text={props.successMessage} type="success" />}
        </div>
    );
};

export default Input;