import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellNavbarHeaderProps = {
  children?: any;
  [key: string]: any;
};

const AppShellNavbarHeader = (props: AppShellNavbarHeaderProps) => {
  return (
    <div className="basicui-appshell-navbar-header">
      {props.children}
    </div>
  );
};
export default AppShellNavbarHeader;
