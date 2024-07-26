import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellNavbarHeaderProps = {
  children?: any;
  [key: string]: any;
};

const AppShellNavbarHeader = (props: AppShellNavbarHeaderProps) => {
  return (
    <div className="basicui-appshell-navbar-header">
      <div className="basicui-appshell-navbar-header__logo">
        <div className="basicui-appshell-navbar-header__logo__icon">
          <img
            src={props.isDarkMode ? props.logoIconWhite : props.logoIconBlack}
            alt="Logo"
          />
        </div>
        {props.isSidebarExpanded && (
          <div className="basicui-appshell-navbar-header__logo__text">
            <img
              src={props.isDarkMode ? props.logoTextWhite : props.logoTextBlack}
              alt="Logo"
            />
          </div>
        )}
      </div>
      {props.isSidebarExpanded && <div>{props.children}</div>}
    </div>
  );
};
export default AppShellNavbarHeader;
