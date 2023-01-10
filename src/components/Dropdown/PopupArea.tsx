import React, { useState, useRef, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

import "./dropdown.css";

export interface PopupAreaProps {
    referenceElement: any;
    options: string[];
};

const PopupArea = (props: PopupAreaProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentIndexRef = useRef(0);

    useEffect(() => {
        if (props.referenceElement.current) {
            props.referenceElement.current.addEventListener('keydown', keydownEventHandler);
        }
    }, [props.referenceElement]);

    const keydownEventHandler = (event: any) => {
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

    return <div>
        <ul role="listbox" className="basicui-dropdown__ul">
            {
                props.options?.map((option, index) => (
                    <li key={index} role="option" className="basicui-dropdown__ul__li">
                        <a className={`basicui-dropdown__ul__li__link ${currentIndex === index ? 'basicui-dropdown__ul__li__link--active' : ''}`} href="#">
                            <div className="basicui-dropdown__ul__li__indicator">
                                C
                            </div>
                            <div className="basicui-dropdown__ul__li__text">
                                {option}
                            </div>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
};

export default PopupArea;