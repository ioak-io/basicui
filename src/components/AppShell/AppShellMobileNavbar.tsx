import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import AppShellMobileNavbarBody from "./AppShellMobileNavbarBody";
import AppShellMobileNavbarFooter from "./AppShellMobileNavbarFooter";

export type AppShellNavbarProps = {
  children: any;
  [key: string]: any;
};

const AppShellMobileNavbar = ({ children, ...props }: AppShellNavbarProps) => {
  const [appShellMobileNavbarBody, setAppShellMobileNavbarBody] =
    useState<any>();
  const [appShellMobileNavbarFooter, setAppShellMobileNavbarFooter] =
    useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "AppShellMobileNavbarBody" ||
        item.type.name === "AppShellMobileNavbarBody"
      ) {
        setAppShellMobileNavbarBody(clonedChild);
      }
      if (
        item.type.displayName === "AppShellMobileNavbarFooter" ||
        item.type.name === "AppShellMobileNavbarFooter"
      ) {
        setAppShellMobileNavbarFooter(clonedChild);
      }
    });
  }, [children]);

  return (
    <div className="basicui-appshell-mobile-navbar">
      {appShellMobileNavbarBody}
      {appShellMobileNavbarFooter}
    </div>
  );
};
export default AppShellMobileNavbar;

AppShellMobileNavbar.Body = AppShellMobileNavbarBody;
AppShellMobileNavbar.Footer = AppShellMobileNavbarFooter;

AppShellMobileNavbar.displayName = "AppShellMobileNavbar";
