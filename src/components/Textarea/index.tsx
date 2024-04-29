import React, { useState, useRef, useEffect } from "react";

import FormElementMessage from "../shared/FormElementMessage";

export interface TextareaProps {
    label?: string;
    value?: string | number;
    tooltip?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    [key: string]: any;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Textarea = ({value, label, tooltip, errorMessage, successMessage, warningMessage, ...restProps}: TextareaProps) => {

    return (
        <div
            className={["basicui-textarea"].join(
                " "
            )}
        >
            {label && <FormElementMessage text={label} type="label" />}
            <textarea
                className="basicui-input"
                value={value}
                autoComplete="none"
                {...restProps}
            />
            {tooltip && <FormElementMessage text={tooltip} type="info" />}
            {errorMessage && <FormElementMessage text={errorMessage} type="error" />}
            {warningMessage && <FormElementMessage text={warningMessage} type="warning" />}
            {successMessage && <FormElementMessage text={successMessage} type="success" />}
        </div>
    );
};

export default Textarea;