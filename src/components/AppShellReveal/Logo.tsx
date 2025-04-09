import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type LogoProps = {
  isDarkMode: boolean;
  showText: boolean;
  logoIconBlack: any;
  logoIconWhite: any;
  logoTextBlack: any;
  logoTextWhite: any;
};

const Logo = (props: LogoProps) => {
  return (
    <div className="basicui-logo">
      <div className="basicui-logo__icon">
        <img
          src={props.isDarkMode ? props.logoIconWhite : props.logoIconBlack}
          alt="Logo"
        />
      </div>
      {props.showText && (
        <div className="basicui-logo__text">
          <img
            src={props.isDarkMode ? props.logoTextWhite : props.logoTextBlack}
            alt="Logo"
          />
        </div>
      )}
    </div>
  );
};
export default Logo;
