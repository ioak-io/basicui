import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Body from "./Body";
import MobileNavbar from "./MobileNavbar";
import Logo from "./Logo";
import SvgIcon from "../SvgIcon";

export type AppShellRevealProps = {
  children: any;
  userName?: string;
  onSignin: any;
  onSignout: any;
  logoIconBlack: any;
  logoIconWhite: any;
  logoTextBlack: any;
  logoTextWhite: any;
  isMenuActive: boolean;
  setIsMenuActive: any;
  isDarkMode: boolean;
  onDarkModeToggle: any;
  location?: any;
  hideNavbar?: boolean;
};

const AppShellReveal = ({ children, ...props }: AppShellRevealProps) => {
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [navbar, setNavbar] = useState<any>();
  const [body, setBody] = useState<any>();
  const [mobileNavbarBody, setMobileNavbar] = useState<any>();

  const animationTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    children.forEach((item: any) => {
      const clonedChild = React.cloneElement(item, { ...props });
      if (item.type.displayName === "Navbar" || item.type.name === "Navbar") {
        setNavbar(clonedChild);
      }
      if (item.type.displayName === "Body" || item.type.name === "Body") {
        setBody(clonedChild);
      }
      if (item.type.displayName === "MobileNavbar" || item.type.name === "MobileNavbar") {
        setMobileNavbar(clonedChild);
      }
    });
  }, [children]);

  useEffect(() => {
    if (props.isMenuActive) {
      setShouldRenderMenu(true);
    } else {
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
      animationTimeout.current = setTimeout(() => {
        setShouldRenderMenu(false);
      }, 300);
    }
    return () => {
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
    };
  }, [props.isMenuActive]);

  return (
    <div className="basicui-appshellreveal">
      <header className="basicui-appshellreveal__header">
        <div className="basicui-appshellreveal__header__left">
          <Logo logoIconBlack={props.logoIconBlack} logoIconWhite={props.logoIconWhite} logoTextBlack={props.logoTextBlack} logoTextWhite={props.logoTextWhite} showText isDarkMode={props.isDarkMode} />
        </div>
        {props.userName && (
          <button className="basicui-internal-button basicui-appshellreveal__header__user" onClick={props.onSignout}>
            <SvgIcon src="/icons/fontawesome/signout.svg" /> {props.userName}
          </button>
        )}
        {!props.userName && (
          <button className="basicui-internal-button basicui-appshellreveal__header__user" onClick={props.onSignin}>
            <SvgIcon src="/icons/fontawesome/signin.svg" /> Login
          </button>
        )}
        <button className="basicui-internal-button basicui-appshellreveal__header__right" onClick={() => props.setIsMenuActive(!props.isMenuActive)}>
          <div className={`basicui-appshellreveal__header__right__icon ${props.isMenuActive ? "basicui-appshellreveal__header__right__icon--open" : ""}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <div className="basicui-appshellreveal__main">{body}</div>

      {shouldRenderMenu && (
        <div className={`basicui-appshellreveal__menupanel basicui-webonly ${props.isMenuActive ? "slide-down" : "slide-up"}`}>
          <div className="basicui-appshellreveal__menupanel__menucontent">{navbar}</div>
        </div>
      )}

      {shouldRenderMenu && (
        <div className={`basicui-appshellreveal__menupanel basicui-mobileonly ${props.isMenuActive ? "slide-down" : "slide-up"}`}>
          <div className="basicui-appshellreveal__menupanel__menucontent">{mobileNavbarBody}</div>
        </div>
      )}
    </div>
  );
};

export default AppShellReveal;

AppShellReveal.Navbar = Navbar;
AppShellReveal.Topbar = Topbar;
AppShellReveal.Body = Body;
AppShellReveal.MobileNavbar = MobileNavbar;
AppShellReveal.displayName = "AppShellReveal";
