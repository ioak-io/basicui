import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import AppShellNavbarHeader from "./AppShellNavbarHeader";
import AppShellNavbarFooter from "./AppShellNavbarFooter";
import AppShellNavbarBody from "./AppShellNavbarBody";

export type AppShellNavbarProps = {
  children: any;
  [key: string]: any;
};

const AppShellNavbar = ({ children, ...props }: AppShellNavbarProps) => {
  const [appShellNavbarHeader, setAppShellNavbarHeader] = useState<any>();
  const [appShellNavbarBody, setAppShellNavbarBody] = useState<any>();
  const [appShellNavbarFooter, setAppShellNavbarFooter] = useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "AppShellNavbarHeader" ||
        item.type.name === "AppShellNavbarHeader"
      ) {
        setAppShellNavbarHeader(clonedChild);
      }
      if (
        item.type.displayName === "AppShellNavbarBody" ||
        item.type.name === "AppShellNavbarBody"
      ) {
        setAppShellNavbarBody(clonedChild);
      }
      if (
        item.type.displayName === "AppShellNavbarFooter" ||
        item.type.name === "AppShellNavbarFooter"
      ) {
        setAppShellNavbarFooter(clonedChild);
      }
    });
  }, [children]);

  return (
    <div className="basicui-appshell-navbar">
      {appShellNavbarHeader}
      {appShellNavbarBody}
      {appShellNavbarFooter}
    </div>
  );
};
export default AppShellNavbar;

AppShellNavbar.Header = AppShellNavbarHeader;
AppShellNavbar.Footer = AppShellNavbarFooter;
AppShellNavbar.Body = AppShellNavbarBody;

AppShellNavbar.displayName = "AppShellNavbar";
