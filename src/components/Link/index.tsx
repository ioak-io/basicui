import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface LinkProps {
    theme?: ThemeType;
    noUnderline?: boolean;
    noGlow?: boolean;
    onClick?: any;
    onSubmit?: any;
    onReset?: any;
    children?: any;
    label?: string;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Link = (props: LinkProps) => {
    return (
        <a href="https://google.com"
            className={`basicui-link basicui-link--theme-${props.theme || ThemeType.default} ${props.noUnderline ? "basicui-link--no-underline" : ""} ${props.noGlow ? "basicui-link--no-glow" : ""}`}>
            {props.children}
            <span>{props.label}</span>
        </a>
    );
};

export default Link;