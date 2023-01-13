import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface LinkProps {
    theme?: ThemeType;
    onClick?: any;
    onSubmit?: any;
    onReset?: any;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Link = (props: LinkProps) => {
    return (
        <a className={`basicui-link basicui-link--theme-${props.theme || ThemeType.default}`}>
            {props.children}
        </a>
    );
};

export default Link;