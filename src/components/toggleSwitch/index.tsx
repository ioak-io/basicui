import React from "react";

import "./style.css";
import ThemeType from "../types/ThemeType";

export interface SwitchProps {
  id: string;
  theme?: ThemeType;
  checked?: boolean;
  [key: string]: any;
}

/**
 * Component to render switch form element. For using it with standard html input, add css class basicui-input
 */
const Switch = ({ id, label, theme, checked, ...restProps }: SwitchProps) => {
  return (
    <label
      className={`basicui-switch ${
        checked ? "basicui-switch--checked" : ""
      } basicui-switch--theme-${theme || ThemeType.default}`}
      htmlFor={id}
    >
      <input
        className="basicui-switch__input"
        id={id}
        checked={checked}
        type="checkbox"
        {...restProps}
      />
      <span className="basicui-switch__slider" />
    </label>
  );
};

export default Switch;
