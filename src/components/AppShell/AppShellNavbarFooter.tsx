import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type AppShellNavbarFooterProps = {
  children?: any;
  userName?: string;
  onSignin: any;
  onSignout: any;
  [key: string]: any;
};

const AppShellNavbarFooter = (props: AppShellNavbarFooterProps) => {
  return (
    <div
      className={`basicui-appshell-navbar-footer ${
        props.isSidebarExpanded
          ? "basicui-appshell-navbar-footer--expanded"
          : "basicui-appshell-navbar-footer--collapsed"
      }`}
    >
      <div className="basicui-appshell-navbar-footer__left">
        {props.userName && (
          <button className="button" onClick={props.onSignout}>
            SO
          </button>
        )}
        {!props.userName && (
          <button className="button" onClick={props.onSignin}>
            SI
          </button>
        )}
        {props.isSidebarExpanded && <div>{props.userName}</div>}
      </div>
      {props.isSidebarExpanded && (
        <div className="basicui-appshell-navbar-footer__right">DMI</div>
      )}
      {/* <NavAccountIcon logout={logout} login={login} /> */}
    </div>
  );
};
export default AppShellNavbarFooter;
