import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellNavbarBodyProps = {
  children: any;
  [key: string]: any;
};

const AppShellNavbarBody = (props: AppShellNavbarBodyProps) => {
  return (
    <div className="basicui-appshell-navbar-body">
      <button
        className="basicui-appshell-navbar-body__toggle"
        onClick={props.onSidebarToggle}
      >
        {props.isSidebarExpanded && <>C</>}
        {!props.isSidebarExpanded && <>E</>}
      </button>
      {props.children}
    </div>
  );
};
export default AppShellNavbarBody;
