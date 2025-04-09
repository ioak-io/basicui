import React, { useState, Dispatch, SetStateAction, Children } from "react";
import Logo from "./Logo";

export type NavbarHeaderProps = {
  children?: any;
  [key: string]: any;
};

const NavbarHeader = (props: NavbarHeaderProps) => {
  return (
    <div className="basicui-appshellsentinel-navbar-header">
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
export default NavbarHeader;

NavbarHeader.displayName = "NavbarHeader";
