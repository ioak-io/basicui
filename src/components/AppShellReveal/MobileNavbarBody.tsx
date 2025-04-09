import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type NavbarBodyProps = {
  children: any;
  [key: string]: any;
};

const MobileNavbarBody = (props: NavbarBodyProps) => {
  return (
    <div className="basicui-appshellreveal-mobile-navbar-body">{props.children}</div>
  );
};
export default MobileNavbarBody;

MobileNavbarBody.displayName = "MobileNavbarBody";
