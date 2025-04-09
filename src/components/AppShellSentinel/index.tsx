import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import AppShellSentinelNavbar from "./AppShellSentinelNavbar";
import AppShellSentinelTopbar from "./AppShellSentinelTopbar";
import AppShellSentinelBody from "./AppShellSentinelBody";
import AppShellSentinelMobileNavbar from "./AppShellSentinelMobileNavbar";

export type AppShellSentinelProps = {
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

const AppShellSentinel = ({ children, ...props }: AppShellSentinelProps) => {
  const [appShellNavbar, setAppShellSentinelNavbar] = useState<any>();
  const [appShellTopbar, setAppShellSentinelTopbar] = useState<any>();
  const [appShellBody, setAppShellSentinelBody] = useState<any>();
  const [appShellMobileNavbarBody, setAppShellSentinelMobileNavbar] =
    useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "AppShellSentinelNavbar" ||
        item.type.name === "AppShellSentinelNavbar"
      ) {
        setAppShellSentinelNavbar(clonedChild);
      }
      if (
        item.type.displayName === "AppShellSentinelBody" ||
        item.type.name === "AppShellSentinelBody"
      ) {
        setAppShellSentinelBody(clonedChild);
      }
      if (
        item.type.displayName === "AppShellSentinelMobileNavbar" ||
        item.type.name === "AppShellSentinelMobileNavbar"
      ) {
        setAppShellSentinelMobileNavbar(clonedChild);
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
        item.type.displayName === "AppShellSentinelTopbar" ||
        item.type.name === "AppShellSentinelTopbar"
      ) {
        setAppShellSentinelTopbar(clonedChild);
      }
    });
  }, [children, appShellMobileNavbarBody]);

  return (
    <div
      className={`basicui-appshellsentinel ${
        props.isSidebarExpanded
          ? "basicui-appshellsentinel--expanded"
          : "basicui-appshellsentinel--collapsed"
      }`}
    >
      {!props.hideNavbar && (
        <div className={`basicui-appshellsentinel__left  desktop-only`}>
          {appShellNavbar}
        </div>
      )}

      <div
        className={`basicui-appshellsentinel__right ${
          props.hideNavbar ? "basicui-appshellsentinel__right--" + "hide-navbar" : ""
        }`}
      >
        {appShellTopbar}
        {appShellBody}
      </div>
    </div>
  );
};
export default AppShellSentinel;

AppShellSentinel.Navbar = AppShellSentinelNavbar;
AppShellSentinel.Topbar = AppShellSentinelTopbar;
AppShellSentinel.Body = AppShellSentinelBody;
AppShellSentinel.MobileNavbar = AppShellSentinelMobileNavbar;
AppShellSentinel.displayName = "AppShellSentinel";
