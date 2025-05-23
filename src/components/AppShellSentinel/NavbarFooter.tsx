import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type NavbarFooterProps = {
  children?: any;
  userName?: string;
  [key: string]: any;
};

const NavbarFooter = (props: NavbarFooterProps) => {
  return (
    <div
      className={`basicui-appshellsentinel-navbar-footer ${
        props.isSidebarExpanded
          ? "basicui-appshellsentinel-navbar-footer--expanded"
          : "basicui-appshellsentinel-navbar-footer--collapsed"
      }`}
    >
      <div className="basicui-appshellsentinel-navbar-footer__left">
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
        <div className="basicui-appshellsentinel-navbar-footer__right" onClick={props.onDarkModeToggle}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="sun"
            className="svg-inline--fa fa-sun "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
            ></path>
          </svg>
        </div>
      )}
      {/* <NavAccountIcon logout={logout} login={login} /> */}
    </div>
  );
};
export default NavbarFooter;

NavbarFooter.displayName = "NavbarFooter";
