import React from "react";
import "./Dropdown.css";

export interface DropdownProps {
    type: string;
    //   onClick?: (
    //     event: React.MouseEvent<HTMLDropdownElement, MouseEvent>
    //   ) => void;
};

/**
 * Primary UI component for user interaction
 */
const Dropdown = (props: DropdownProps) => {
    return (
        <div
            className={["basicui-dropdown"].join(
                " "
            )}
        >
            {props.type || '"dropdown'}
        </div>
    );
};

export default Dropdown;