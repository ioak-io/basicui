import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import AppShellSentinelMobileNavbarBody from "./AppShellSentinelMobileNavbarBody";
import AppShellSentinelMobileNavbarFooter from "./AppShellSentinelMobileNavbarFooter";

export type AppShellSentinelNavbarProps = {
  children: any;
  [key: string]: any;
};

const AppShellSentinelMobileNavbar = ({ children, ...props }: AppShellSentinelNavbarProps) => {
  const [appShellMobileNavbarBody, setAppShellSentinelMobileNavbarBody] =
    useState<any>();
  const [appShellMobileNavbarFooter, setAppShellSentinelMobileNavbarFooter] =
    useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "AppShellSentinelMobileNavbarBody" ||
        item.type.name === "AppShellSentinelMobileNavbarBody"
      ) {
        setAppShellSentinelMobileNavbarBody(clonedChild);
      }
      if (
        item.type.displayName === "AppShellSentinelMobileNavbarFooter" ||
        item.type.name === "AppShellSentinelMobileNavbarFooter"
      ) {
        setAppShellSentinelMobileNavbarFooter(clonedChild);
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
export default AppShellSentinelMobileNavbar;

AppShellSentinelMobileNavbar.Body = AppShellSentinelMobileNavbarBody;
AppShellSentinelMobileNavbar.Footer = AppShellSentinelMobileNavbarFooter;

AppShellSentinelMobileNavbar.displayName = "AppShellSentinelMobileNavbar";
