import React, {
} from "react";

export type NavbarProps = {
  children: any;
  [key: string]: any;
};

const Navbar = ({ children, ...props }: NavbarProps) => {

  return (
    <div className="basicui-appshellreveal-navbar">
      {children}
    </div>
  );
};
export default Navbar;

Navbar.displayName = "Navbar";
