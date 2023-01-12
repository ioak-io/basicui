import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface ButtonProps {
    theme?: ThemeType;
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
        <button className={`basicui-button basicui-button--theme-${props.theme || ThemeType.default}`} type="button" onClick={handleClick}>
            {props.children}
        </button>
    );
};

export default Button;