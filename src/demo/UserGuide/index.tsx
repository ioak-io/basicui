import React from "react";
import "./style.css";
import Introduction from "./Introduction";
import ColorSchemeGenerator from "./ColorSchemeGenerator";

interface Props {
  variant: "introduction" | "color-scheme-generator";
}
const UserGuide = (props: Props) => {
  return (
    <>
      {props.variant === "introduction" && <Introduction />}
      {props.variant === "color-scheme-generator" && <ColorSchemeGenerator />}
    </>
  );
};

export default UserGuide;
