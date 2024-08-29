import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import AppShellNavbar from "./AppShellNavbar";
import AppShellTopbar from "./AppShellTopbar";
import AppShellBody from "./AppShellBody";
import AppShellMobileNavbar from "./AppShellMobileNavbar";

export type AppShellProps = {
  children: any;
  onSignin: any;
  onSignout: any;
  logoIconBlack: any;
  logoIconWhite: any;
  logoTextBlack: any;
  logoTextWhite: any;
  isSidebarExpanded: boolean;
  onSidebarToggle: any;
  isDarkMode: boolean;
  onDarkModeToggle: any;
  location?: any;
  hideNavbar?: boolean;
};

const AppShell = ({ children, ...props }: AppShellProps) => {
  const [appShellNavbar, setAppShellNavbar] = useState<any>();
  const [appShellTopbar, setAppShellTopbar] = useState<any>();
  const [appShellBody, setAppShellBody] = useState<any>();
  const [appShellMobileNavbarBody, setAppShellMobileNavbar] =
    useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "AppShellNavbar" ||
        item.type.name === "AppShellNavbar"
      ) {
        setAppShellNavbar(clonedChild);
      }
      if (
        item.type.displayName === "AppShellBody" ||
        item.type.name === "AppShellBody"
      ) {
        setAppShellBody(clonedChild);
      }
      if (
        item.type.displayName === "AppShellMobileNavbar" ||
        item.type.name === "AppShellMobileNavbar"
      ) {
        setAppShellMobileNavbar(clonedChild);
      }
    });
  }, [children]);

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, {
        ...props,
        children: appShellMobileNavbarBody,
      });
      if (
        item.type.displayName === "AppShellTopbar" ||
        item.type.name === "AppShellTopbar"
      ) {
        setAppShellTopbar(clonedChild);
      }
    });
  }, [children, appShellMobileNavbarBody]);

  return (
    <div
      className={`basicui-appshell ${
        props.isSidebarExpanded
          ? "basicui-appshell--expanded"
          : "basicui-appshell--collapsed"
      }`}
    >
      {!props.hideNavbar && (
        <div className={`basicui-appshell__left  desktop-only`}>
          {appShellNavbar}
        </div>
      )}

      <div
        className={`basicui-appshell__right ${
          props.hideNavbar ? "basicui-appshell__right--" + "hide-navbar" : ""
        }`}
      >
        {appShellTopbar}
        {appShellBody}
      </div>
    </div>
  );
};
export default AppShell;

AppShell.Navbar = AppShellNavbar;
AppShell.Topbar = AppShellTopbar;
AppShell.Body = AppShellBody;
AppShell.MobileNavbar = AppShellMobileNavbar;
AppShell.displayName = "AppShell";
