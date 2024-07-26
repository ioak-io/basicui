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

export type AppShellProps = {
  children: any;
  onSidebarToggle: any;
  isSidebarExpanded: boolean;
};

const AppShell = (props: AppShellProps) => {
  const [appShellNavbar, setAppShellNavbar] = useState<any>();
  const [appShellTopbar, setAppShellTopbar] = useState<any>();
  const [appShellBody, setAppShellBody] = useState<any>();

  useEffect(() => {
    props.children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, {
        onSidebarToggle: props.onSidebarToggle,
        isSidebarExpanded: props.isSidebarExpanded,
      });
      if (
        item.type.displayName === "AppShellNavbar" ||
        item.type.name === "AppShellNavbar"
      ) {
        setAppShellNavbar(clonedChild);
      }
      if (
        item.type.displayName === "AppShellTopbar" ||
        item.type.name === "AppShellTopbar"
      ) {
        setAppShellTopbar(clonedChild);
      }
      if (
        item.type.displayName === "AppShellBody" ||
        item.type.name === "AppShellBody"
      ) {
        setAppShellBody(clonedChild);
      }
    });
  }, [props.children]);

  return (
    <div
      className={`basicui-appshell ${
        props.isSidebarExpanded
          ? "basicui-appshell--expanded"
          : "basicui-appshell--collapsed"
      }`}
    >
      <div className={`basicui-appshell__left  desktop-only`}>
        {appShellNavbar}
      </div>

      <div className="basicui-appshell__right">
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
