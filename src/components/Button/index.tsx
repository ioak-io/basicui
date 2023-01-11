import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import "./style.css";
import OptionsList, { OptionsObjectType } from "../shared/OptionsList";
import { isEmptyOrSpaces } from "../../utils/TextUtils";

export interface ButtonProps {
    onClick?: any;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Button = (props: ButtonProps) => {

    const handleClick = (event: any) => {
        console.log("****");
    }

    return (
        <button className="basicui-button" type="button" onClick={handleClick}>
            {props.children}
        </button>
    );
};

export default Button;