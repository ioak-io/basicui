import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";

export interface ChekboxProps {
    id: string;
    value?: string | number;
    checked?: boolean;
    label?: string;
    tooltip?: string;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Chekbox = (props: ChekboxProps) => {

    return (
        <div className="basicui-checkbox">
            <label className="basicui-checkbox__label" htmlFor={props.id}>
                <input className="basicui-checkbox__label__input" id={props.id} checked={props.checked} type="checkbox" value={props.value} />
                {props.label && <span className="basicui-checkbox__label__span">{props.label}</span>}
            </label>
        </div>
    );
};

export default Chekbox;