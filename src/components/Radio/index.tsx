import React, { useState, useRef, useEffect } from "react";

import ThemeType from "../types/ThemeType";

export interface RadioProps {
    name?: string;
    id?: string;
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
    theme,
    label,
    checked,
    ...restProps
}: RadioProps) => {
    return (
        <label className={`basicui-radio ${checked ? "basicui-radio--checked" : ""} basicui-radio--theme-${theme || ThemeType.default}`}>
            <input className="basicui-radio__input" type="radio" checked={checked} {...restProps} />
            {label && <span className="basicui-radio__span">{label}</span>}
        </label>
    );
};

export default Radio;