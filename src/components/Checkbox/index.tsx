import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";
import ThemeType from "../types/ThemeType";

export interface ChekboxProps {
    id: string;
    value?: string | number;
    checked?: boolean;
    label?: string;
    tooltip?: string;
    theme?: ThemeType;
};

/**
 * Component to render checkbox form element. For using it with standard html input, add css class basicui-input
 */
const Chekbox = (props: ChekboxProps) => {
    return (
        <label className={`basicui-checkbox ${props.checked ? "basicui-checkbox--checked" : ""} basicui-checkbox--theme-${props.theme || ThemeType.default}`} htmlFor={props.id}>
            <input className="basicui-checkbox__input" id={props.id} checked={props.checked} type="checkbox" value={props.value} />
            {props.label && <span className="basicui-checkbox__span">{props.label}</span>}
        </label>
    );
};

export default Chekbox;