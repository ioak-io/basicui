import React, {
  useState,
  Dispatch,
  SetStateAction,
  Children,
  useEffect,
} from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Body from "./Body";
import MobileNavbar from "./MobileNavbar";

export type AppShellRevealProps = {
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

const AppShellReveal = ({ children, ...props }: AppShellRevealProps) => {
  const [appShellNavbar, setNavbar] = useState<any>();
  const [appShellTopbar, setTopbar] = useState<any>();
  const [appShellBody, setBody] = useState<any>();
  const [appShellMobileNavbarBody, setMobileNavbar] =
    useState<any>();

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (
        item.type.displayName === "Navbar" ||
        item.type.name === "Navbar"
      ) {
        setNavbar(clonedChild);
      }
      if (
        item.type.displayName === "Body" ||
        item.type.name === "Body"
      ) {
        setBody(clonedChild);
      }
      if (
        item.type.displayName === "MobileNavbar" ||
        item.type.name === "MobileNavbar"
      ) {
        setMobileNavbar(clonedChild);
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
        item.type.displayName === "Topbar" ||
        item.type.name === "Topbar"
      ) {
        setTopbar(clonedChild);
      }
    });
  }, [children, appShellMobileNavbarBody]);

  return (
    <div
      className={`basicui-appshellreveal ${
        props.isSidebarExpanded
          ? "basicui-appshellreveal--expanded"
          : "basicui-appshellreveal--collapsed"
      }`}
    >
      {!props.hideNavbar && (
        <div className={`basicui-appshellreveal__left  desktop-only`}>
          {appShellNavbar}
        </div>
      )}

      <div
        className={`basicui-appshellreveal__right ${
          props.hideNavbar ? "basicui-appshellreveal__right--" + "hide-navbar" : ""
        }`}
      >
        {appShellTopbar}
        {appShellBody}
      </div>
    </div>
  );
};
export default AppShellReveal;

AppShellReveal.Navbar = Navbar;
AppShellReveal.Topbar = Topbar;
AppShellReveal.Body = Body;
AppShellReveal.MobileNavbar = MobileNavbar;
AppShellReveal.displayName = "AppShellReveal";
