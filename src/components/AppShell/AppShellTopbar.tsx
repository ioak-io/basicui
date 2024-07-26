import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellTopbarProps = {
  children?: any;
  [key: string]: any;
};

const AppShellTopbar = (props: AppShellTopbarProps) => {
  return <div className="basicui-appshell-topbar">{props.children}</div>;
};
export default AppShellTopbar;
