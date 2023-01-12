import React, { useState, useRef, useEffect } from "react";

import "./style.css";

export interface FormElementMessageProps {
    text: string;
    type: 'error' | 'warning' | 'success' | 'info' | 'label';
};

/**
 * FormElementMessage component
 */
const FormElementMessage = (props: FormElementMessageProps) => {

    return (
        <div
            className={`basicui-form-element-${props.type}`}
        >
            {props.text}
        </div>
    );
};

export default FormElementMessage;