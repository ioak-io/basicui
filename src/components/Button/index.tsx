import React, { useState, useRef, useEffect } from "react";
import ButtonVariantType from "../types/ButtonVariantType";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface ButtonProps {
    theme?: ThemeType;
    onClick?: any;
    onSubmit?: any;
    onReset?: any;
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariantType;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Button = (props: ButtonProps) => {
    return (
        <button className={`basicui-button basicui-button--theme-${props.theme || ThemeType.default} basicui-button--variant-${props.variant || ButtonVariantType.default}`}
            type={props.type || "button"}
            onSubmit={props.onSubmit}
            onReset={props.onReset}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;