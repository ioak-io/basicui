import React, { useState, useRef, useEffect } from "react";

import "./style.css";

export interface FormElementMessageProps {
    text: string;
};

/**
 * FormElementMessage component
 */
const FormElementMessage = (props: FormElementMessageProps) => {

    return (
        <div
            className={["basicui-form-element-error"].join(
                " "
            )}
        >
            {props.text}
        </div>
    );
};

export default FormElementMessage;