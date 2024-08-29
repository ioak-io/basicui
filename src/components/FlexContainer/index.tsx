import React, { useState, useRef, useEffect } from "react";
import FormElementMessage from "../shared/FormElementMessage";

export type FlexContainerProps = {
  children: any;
  orientation?: "default" | "column";
  wrap?: boolean;
  alignX?: "default" | "center" | "right";
  alignY?: "default" | "middle" | "bottom";
  gap?: "default" | "less" | "more";
};

/**
 * Component to layout child elements in a flex arrangement
 */
const FlexContainer = (props: FlexContainerProps) => {
  return (
    <div
      className={`basicui-flex-container basicui-flex-container--orientation-${
        props.orientation || "default"
      } basicui-flex-container--alignx-${
        props.alignX || "default"
      } basicui-flex-container--aligny-${
        props.alignY || "default"
      } basicui-flex-container--gap-${props.gap || "default"} ${
        props.wrap ? "basicui-flex-container--wrap" : ""
      }`}
    >
      <div className="basicui-flex-container__children">{props.children}</div>
      <div className="basicui-flex-container__antimargin" />
    </div>
  );
};

export default FlexContainer;
