import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellSentinelNavbarBodyProps = {
  children: any;
  [key: string]: any;
};

const AppShellSentinelMobileNavbarBody = (props: AppShellSentinelNavbarBodyProps) => {
  return (
    <div className="basicui-appshellsentinel-mobile-navbar-body">{props.children}</div>
  );
};
export default AppShellSentinelMobileNavbarBody;

AppShellSentinelMobileNavbarBody.displayName = "AppShellSentinelMobileNavbarBody";
