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
    disabled?: boolean;
    variant?: ButtonVariantType;
    children: any;
    loading?: boolean;
    [key: string]: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Button = ({ type, theme, variant, loading, children, disabled, ...restProps }: ButtonProps) => {
    return (
        <button className={`basicui-button basicui-button--theme-${theme || ThemeType.default} ${loading ? 'basicui-button--loading' : ''} basicui-button--variant-${variant || ButtonVariantType.default}`}
            type={type || "button"}
            disabled={disabled || loading}
            {...restProps}>
            {loading && <svg className="basicui-button__svg--loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>}
            {children}
        </button>
    );
};

export default Button;