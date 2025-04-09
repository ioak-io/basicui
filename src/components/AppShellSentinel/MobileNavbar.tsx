import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import MobileNavbarBody from "./MobileNavbarBody";
import MobileNavbarFooter from "./MobileNavbarFooter";

export type NavbarProps = {
  children: any;
  [key: string]: any;
};

const MobileNavbar = ({ children, ...props }: NavbarProps) => {
  const [appShellMobileNavbarBody, setMobileNavbarBody] =
    useState<any>();
  const [appShellMobileNavbarFooter, setMobileNavbarFooter] =
    useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "MobileNavbarBody" ||
        item.type.name === "MobileNavbarBody"
      ) {
        setMobileNavbarBody(clonedChild);
      }
      if (
        item.type.displayName === "MobileNavbarFooter" ||
        item.type.name === "MobileNavbarFooter"
      ) {
        setMobileNavbarFooter(clonedChild);
      }
    });
  }, [children]);

  return (
    <div className="basicui-appshellsentinel-mobile-navbar">
      {appShellMobileNavbarBody}
      {appShellMobileNavbarFooter}
    </div>
  );
};
export default MobileNavbar;

MobileNavbar.Body = MobileNavbarBody;
MobileNavbar.Footer = MobileNavbarFooter;

MobileNavbar.displayName = "MobileNavbar";
