import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";

export type NavbarProps = {
  children: any;
  [key: string]: any;
};

const MobileNavbar = ({ children, ...props }: NavbarProps) => {

  return (
    <div className="basicui-appshellreveal-mobile-navbar">
      {children}
    </div>
  );
};
export default MobileNavbar;

MobileNavbar.displayName = "MobileNavbar";
