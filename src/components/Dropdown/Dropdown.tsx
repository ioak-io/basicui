import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import "./dropdown.css";

export interface DropdownProps {
    type: string;
    options: string[];
    //   onClick?: (
    //     event: React.MouseEvent<HTMLDropdownElement, MouseEvent>
    //   ) => void;
};

/**
 * Primary UI component for user interaction
 */
const Dropdown = (props: DropdownProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const referenceElement: React.MutableRefObject<any> = useRef(null);
    const popperElement: React.MutableRefObject<any> = useRef(null);
    const arrowElement: any = useRef(null);

    useEffect(() => {
        // listen for clicks and close dropdown on body
        document.addEventListener("mousedown", handleDocumentClick);
        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, []);

    useEffect(() => {
        if (referenceElement.current && popperElement.current) {
            createPopper(referenceElement.current, popperElement.current, {
                placement: 'bottom-start',
                modifiers: [preventOverflow, flip,
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 4],
                        },
                    }
                ],
            });
        }
    }, [referenceElement, popperElement]);

    function handleDocumentClick(event: any) {
        if (referenceElement.current?.contains(event.target)) {
            return;
        }
        setIsVisible(false);
    }

    function handleDropdownClick(event: any) {
        setIsVisible(!isVisible);
    }

    return (
        <div
            className={["basicui-dropdown"].join(
                " "
            )}
        >
            <button type="button" ref={referenceElement} onClick={handleDropdownClick}>
                Reference element
            </button>

            <div ref={popperElement}>
                {isVisible && <div>
                    <ul role="listbox" className="basicui-dropdown__ul">
                        {
                            props.options?.map(option => (<li role="option" className="basicui-dropdown__ul__li">
                                <a className="basicui-dropdown__ul__li__link" href="#">
                                    <div className="basicui-dropdown__ul__li__indicator">
                                        C
                                    </div>
                                    <div className="basicui-dropdown__ul__li__text">
                                        {option}
                                    </div>
                                </a>
                            </li>))
                        }
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default Dropdown;