import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface LinkProps {
    theme?: ThemeType;
    noUnderline?: boolean;
    noGlow?: boolean;
    children?: any;
    label?: string;
    href: string;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Link = ({href, children, label, noGlow, noUnderline, theme, ...restProps}: LinkProps) => {
    return (
        <a href={href} {...restProps}
            className={`basicui-link basicui-link--theme-${theme || ThemeType.default} ${noUnderline ? "basicui-link--no-underline" : ""} ${noGlow ? "basicui-link--no-glow" : ""}`}>
            {children}
            <span>{label}</span>
        </a>
    );
};

export default Link;