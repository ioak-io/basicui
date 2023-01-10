import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import "./dropdown.css";
import PopupArea from "./PopupArea";

export interface DropdownProps {
    type: string;
    options: string[];
    //   onClick?: (
    //     event: React.MouseEvent<HTMLDropdownElement, MouseEvent>
    //   ) => void;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Dropdown = (props: DropdownProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const referenceElement: React.MutableRefObject<any> = useRef(null);
    const popperElement: React.MutableRefObject<any> = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentIndexRef = useRef(0);

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
        referenceElement.current.addEventListener('keydown', keydownEventHandler);
    }, [referenceElement, popperElement]);

    const keydownEventHandler = (event: any) => {
        console.log("****", event.key);
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                navigateDown();
                break;
            case 'ArrowUp':
                event.preventDefault();
                navigateUp();
                break;
            case 'Enter':
                // if (this._isActivated) {
                event.preventDefault();
                console.log("handleChange(this._currentIndex)");
                // }
                break;
            case 'Tab':
                // if (this._isActivated) {
                event.preventDefault();
                console.log("_deactivate()");
                // }
                break;
            default:
                break;
        }
    };

    const navigateUp = () => {
        let _current = 0;
        if (currentIndexRef.current !== 0) {
            _current = currentIndexRef.current - 1;
        } else {
            _current = props.options.length - 1
        }
        currentIndexRef.current = _current;
        setCurrentIndex(_current);
    }

    const navigateDown = () => {
        let _current = 0;
        if (currentIndexRef.current < props.options.length - 1) {
            _current = currentIndexRef.current + 1
        }
        currentIndexRef.current = _current;
        setCurrentIndex(_current);
    }

    const handleDocumentClick = (event: any) => {
        if (referenceElement.current?.contains(event.target)) {
            return;
        }
        setIsVisible(false);
    }

    const handleDropdownClick = (event: any) => {
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
                {isVisible && <PopupArea options={props.options} referenceElement={referenceElement} />}
            </div>
        </div>
    );
};

export default Dropdown;