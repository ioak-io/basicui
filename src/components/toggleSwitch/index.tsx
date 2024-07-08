import React from "react";

import "./style.css";
import ThemeType from "../types/ThemeType";
import { ModalSizeType } from "../..";
export interface SwitchProps {
  id: string;
  theme?: ThemeType;
  size:ModalSizeType;
  checked?: boolean;
  [key: string]: any;
  icon:[any,any];
}

/**
 * Component to render switch form element. For using it with standard html input, add css class basicui-input
 */
const Switch = ({ id, label, theme,size, checked,icon, ...restProps }: SwitchProps) => {
  return (
    <label className={`basicui-switch ${
      checked ? "basicui-switch--checked" : ""
    } basicui-switch--theme-${theme || ThemeType.default}`}  htmlFor={id}>
	<span className="basicui-switch__input-wrap">
		<input className={`basicui-switch__input  basicui-switch__input-${theme || ThemeType.default}
		basicui-switch__input-${size || ModalSizeType.large}`} 
      id={id} checked={checked} type="checkbox" role="switch" value="dark" {...restProps}/>
		<span className="basicui-switch__slider"></span>
		{ size !=='small' && size !=='medium' && !icon &&<span className="basicui-switch__theme__icon">
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
			<span className="basicui-switch__theme__icon-part"></span>
		</span>}
		{icon &&
		<span className="basicui-icon">
			<span className="basicui-icon-part">
			<img src={icon[0]} alt="Sun Icon" />
			  <img src={icon[1]} alt="Moon Icon" />
			</span>
		</span>
		}
	</span>
</label>
  );
};

export default Switch;
