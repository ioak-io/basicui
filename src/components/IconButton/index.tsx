import React, { forwardRef } from "react";
import ButtonVariantType from "../types/ButtonVariantType";
import ThemeType from "../types/ThemeType";

export interface IconButtonProps {
  theme?: ThemeType;
  onClick?: any;
  onSubmit?: any;
  onReset?: any;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariantType;
  children: any;
  circle?: boolean;
  loading?: boolean;
  className?: string;
  [key: string]: any;
}

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  type,
  theme,
  variant,
  loading,
  circle,
  children,
  className,
  ...restProps
}, ref) => {
  return (
    <button
      ref={ref}
      className={`${className || ""} basicui-button basicui-icon-button ${
        circle ? "basicui-icon-button--circle" : ""
      } basicui-button--theme-${
        theme || ThemeType.default
      } basicui-button--variant-${variant || ButtonVariantType.default} ${
        loading ? "basicui-button--loading" : ""
      }`}
      type={type || "button"}
      {...restProps}
    >
      {loading && (
        <svg
          className="basicui-button__svg--loading"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
        </svg>
      )}
      {!loading && children}
    </button>
  );
});

export default IconButton;
