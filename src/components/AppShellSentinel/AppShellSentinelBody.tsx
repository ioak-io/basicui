import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellSentinelBodyProps = {
  children?: any;
  [key: string]: any;
};

const AppShellSentinelBody = (props: AppShellSentinelBodyProps) => {
  return <div className="basicui-appshellsentinel-body">{props.children}</div>;
};
export default AppShellSentinelBody;

AppShellSentinelBody.displayName = "AppShellSentinelBody";
