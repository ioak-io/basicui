import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";

export type LabelProps = {
    children: any;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Label = (props: LabelProps) => {

    return (
        <FormElementMessage text={props.children} type="label" />
    );
};

export default Label;