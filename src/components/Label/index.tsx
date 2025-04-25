import React, { useState, useRef, useEffect } from "react";
import FormElementMessage from "../shared/FormElementMessage";
import { isEmptyOrSpaces } from "../../utils/TextUtils";

export type LabelProps = {
    children: any;
    labelDesc?: string;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const Label = (props: LabelProps) => {

    return (
        <>
            {props.children && !isEmptyOrSpaces(props.children) && <FormElementMessage text={props.children} type="label" />}
            {props.labelDesc && !isEmptyOrSpaces(props.labelDesc) && <FormElementMessage text={props.labelDesc} type="labeldesc" />}
        </>
    );
};

export default Label;