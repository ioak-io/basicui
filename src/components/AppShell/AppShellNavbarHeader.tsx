import React, { useState, Dispatch, SetStateAction, Children } from "react";
import Logo from "./Logo";

export type AppShellNavbarHeaderProps = {
  children?: any;
  [key: string]: any;
};

const AppShellNavbarHeader = (props: AppShellNavbarHeaderProps) => {
  return (
    <div className="basicui-appshell-navbar-header">
      <Logo
        isDarkMode={props.isDarkMode}
        logoIconBlack={props.logoIconBlack}
        logoIconWhite={props.logoIconWhite}
        logoTextBlack={props.logoTextBlack}
        logoTextWhite={props.logoTextWhite}
        showText={props.isSidebarExpanded}
      />
      {props.isSidebarExpanded && <div>{props.children}</div>}
    </div>
  );
};
export default AppShellNavbarHeader;

AppShellNavbarHeader.displayName = "AppShellNavbarHeader";
