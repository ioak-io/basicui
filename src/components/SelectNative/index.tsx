import React, { useState, useRef, useEffect } from "react";

import FormElementMessage from "../shared/FormElementMessage";
import { OptionsObjectType } from "../shared/OptionsList";
import Label from "../Label";

export interface SelectNativeProps {
    initialValues?: (string | number)[];
    options: OptionsObjectType[];
    id?: string;
    label?: string;
    labelDesc?: string;
    placeholder?: string;
    tooltip?: string;
    errorMessage?: string;
    warningMessage?: string;
    successMessage?: string;
    multiple?: boolean;
    autocomplete?: boolean;
    [key: string]: any;
};

/**
 * Component to render input form element. For using it with standard html input, add css class basicui-input
 */
const SelectNative = ({
    id,
    label,
    labelDesc,
    placeholder,
    initialValues,
    options,
    tooltip,
    errorMessage,
    warningMessage,
    successMessage,
    multiple,
    autocomplete,
    ...restProps
}: SelectNativeProps) => {
    const [values, setValues] = useState<(string | number)[]>([]);

    useEffect(() => {
        if (values.length === 0 && initialValues && initialValues.length > 0) {
            setValues(initialValues);
        }
    }, [initialValues]);
    return (
        <div
            className={["basicui-selectnative"].join(
                " "
            )}
        >
            {label && <Label labelDesc={labelDesc}>{label}</Label>}
            <select
                id={id}
                className={`basicui-input basicui-selectnative ${multiple ? 'basicui-selectnative--multiple' : ''}`}
                {...restProps}
                multiple={multiple}
                size={multiple ? 5 : 1}
            >
                {options.map(option =>
                    <option selected={values.includes(option.value)} className="basicui-selectnative__option">
                        {option.label}
                    </option>)}
            </select>
            {tooltip && <FormElementMessage text={tooltip} type="info" />}
            {errorMessage && <FormElementMessage text={errorMessage} type="error" />}
            {warningMessage && <FormElementMessage text={warningMessage} type="warning" />}
            {successMessage && <FormElementMessage text={successMessage} type="success" />}
        </div>
    );
};

export default SelectNative;