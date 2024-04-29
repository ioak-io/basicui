import React, { useState, useRef, useEffect } from "react";

import ThemeType from "../types/ThemeType";

export interface CheckboxProps {
    id?: string;
    label?: string;
    theme?: ThemeType;
    checked?: boolean;
    defaultChecked?: boolean;
    [key: string]: any;
};

/**
 * Component to render checkbox form element. For using it with standard html input, add css class basicui-input
 */
const Checkbox = ({
    id,
    label,
    theme,
    checked,
    ...restProps
}: CheckboxProps) => {
    return (
        <label className={`basicui-checkbox ${checked ? "basicui-checkbox--checked" : ""} basicui-checkbox--theme-${theme || ThemeType.default}`} htmlFor={id}>
            <input className="basicui-checkbox__input" id={id} checked={checked} type="checkbox" {...restProps} />
            {label && <span className="basicui-checkbox__span">{label}</span>}
        </label>
    );
};

export default Checkbox;