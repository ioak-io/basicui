import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import AppShellSentinelNavbarHeader from "./AppShellSentinelNavbarHeader";
import AppShellSentinelNavbarFooter from "./AppShellSentinelNavbarFooter";
import AppShellSentinelNavbarBody from "./AppShellSentinelNavbarBody";

export type AppShellSentinelNavbarProps = {
  children: any;
  [key: string]: any;
};

const AppShellSentinelNavbar = ({ children, ...props }: AppShellSentinelNavbarProps) => {
  const [appShellNavbarHeader, setAppShellSentinelNavbarHeader] = useState<any>();
  const [appShellNavbarBody, setAppShellSentinelNavbarBody] = useState<any>();
  const [appShellNavbarFooter, setAppShellSentinelNavbarFooter] = useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "AppShellSentinelNavbarHeader" ||
        item.type.name === "AppShellSentinelNavbarHeader"
      ) {
        setAppShellSentinelNavbarHeader(clonedChild);
      }
      if (
        item.type.displayName === "AppShellSentinelNavbarBody" ||
        item.type.name === "AppShellSentinelNavbarBody"
      ) {
        setAppShellSentinelNavbarBody(clonedChild);
      }
      if (
        item.type.displayName === "AppShellSentinelNavbarFooter" ||
        item.type.name === "AppShellSentinelNavbarFooter"
      ) {
        setAppShellSentinelNavbarFooter(clonedChild);
      }
    });
  }, [children]);

  return (
    <div className="basicui-appshellsentinel-navbar">
      {appShellNavbarHeader}
      {appShellNavbarBody}
      {appShellNavbarFooter}
    </div>
  );
};
export default AppShellSentinelNavbar;

AppShellSentinelNavbar.Header = AppShellSentinelNavbarHeader;
AppShellSentinelNavbar.Footer = AppShellSentinelNavbarFooter;
AppShellSentinelNavbar.Body = AppShellSentinelNavbarBody;

AppShellSentinelNavbar.displayName = "AppShellSentinelNavbar";
