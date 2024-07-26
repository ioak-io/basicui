import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellBodyProps = {
  children?: any;
  [key: string]: any;
};

const AppShellBody = (props: AppShellBodyProps) => {
  return <div className="basicui-appshell-body">{props.children}</div>;
};
export default AppShellBody;
