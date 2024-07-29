import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellNavbarBodyProps = {
  children: any;
  [key: string]: any;
};

const AppShellMobileNavbarBody = (props: AppShellNavbarBodyProps) => {
  return (
    <div className="basicui-appshell-mobile-navbar-body">
      {props.children}
    </div>
  );
};
export default AppShellMobileNavbarBody;
