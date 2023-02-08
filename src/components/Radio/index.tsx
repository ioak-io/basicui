import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import ThemeType from "../types/ThemeType";

export interface RadioProps {
    id: string;
    label?: string;
    theme?: ThemeType;
    checked?: boolean;
    value?: any;
    [key: string]: any;
};

/**
 * Component to render radio form element. For using it with standard html input, add css class basicui-input
 */
const Radio = ({
    id,
    label,
    theme,
    checked,
    value,
    ...restProps
}: RadioProps) => {
    return (
        <label className={`basicui-radio ${checked ? "basicui-radio--checked" : ""} basicui-radio--theme-${theme || ThemeType.default}`} htmlFor={id}>
            <input className="basicui-radio__input" id={id} checked={checked} value={value} type="radio" {...restProps} />
            {label && <span className="basicui-radio__span">{label}</span>}
        </label>
    );
};

export default Radio;