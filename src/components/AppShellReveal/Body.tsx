import React, { useState, Dispatch, SetStateAction, Children } from "react";

export type BodyProps = {
  children?: any;
  [key: string]: any;
};

const Body = (props: BodyProps) => {
  return <div className="basicui-appshellreveal-body">{props.children}</div>;
};
export default Body;

Body.displayName = "Body";
