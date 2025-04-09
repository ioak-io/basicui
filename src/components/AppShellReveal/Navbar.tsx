import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarFooter from "./NavbarFooter";
import NavbarBody from "./NavbarBody";

export type NavbarProps = {
  children: any;
  [key: string]: any;
};

const Navbar = ({ children, ...props }: NavbarProps) => {
  const [appShellNavbarHeader, setNavbarHeader] = useState<any>();
  const [appShellNavbarBody, setNavbarBody] = useState<any>();
  const [appShellNavbarFooter, setNavbarFooter] = useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "NavbarHeader" ||
        item.type.name === "NavbarHeader"
      ) {
        setNavbarHeader(clonedChild);
      }
      if (
        item.type.displayName === "NavbarBody" ||
        item.type.name === "NavbarBody"
      ) {
        setNavbarBody(clonedChild);
      }
      if (
        item.type.displayName === "NavbarFooter" ||
        item.type.name === "NavbarFooter"
      ) {
        setNavbarFooter(clonedChild);
      }
    });
  }, [children]);

  return (
    <div className="basicui-appshellreveal-navbar">
      {appShellNavbarHeader}
      {appShellNavbarBody}
      {appShellNavbarFooter}
    </div>
  );
};
export default Navbar;

Navbar.Header = NavbarHeader;
Navbar.Footer = NavbarFooter;
Navbar.Body = NavbarBody;

Navbar.displayName = "Navbar";
