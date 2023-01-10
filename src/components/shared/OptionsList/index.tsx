import React, { useState, useRef, useEffect } from "react";

import "./style.css";

export interface OptionsObjectType {
    name: string | number;
    value: string | number;
}

export interface OptionsListProps {
    referenceElement: any;
    values: string[];
    options: OptionsObjectType[];
    handleChange: any;
    handleClose: any;
    handleSearchTextChange?: any;
};

const OptionsList = (props: OptionsListProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentIndexRef = useRef(0);
    const searchReferenceElement: React.MutableRefObject<any> = useRef(null);

    useEffect(() => {
        if (props.referenceElement.current) {
            props.referenceElement.current.addEventListener('keydown', keydownEventHandler);
        }
        // if (props.popperElement.current) {
        //     props.popperElement.current.addEventListener('keydown', keydownEventHandler);
        // }
        return () => {
            if (props.referenceElement.current) {
                props.referenceElement.current.removeEventListener('keydown', keydownEventHandler);
            }
        };
    }, [props.referenceElement]);

    useEffect(() => {
        if (searchReferenceElement.current) {
            searchReferenceElement.current.addEventListener('keydown', keydownEventHandler);
        }
        // if (props.popperElement.current) {
        //     props.popperElement.current.addEventListener('keydown', keydownEventHandler);
        // }
        return () => {
            if (searchReferenceElement.current) {
                searchReferenceElement.current.removeEventListener('keydown', keydownEventHandler);
            }
        };
    }, [searchReferenceElement]);

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
                event.preventDefault();
                props.handleChange(currentIndexRef.current, props.options[currentIndexRef.current]);
                break;
            case 'Tab':
                event.preventDefault();
                console.log("_deactivate()");
                break;
            case 'Escape':
                event.preventDefault();
                props.handleClose();
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

    const handleClick = (index: number, option: string) => {
        props.handleChange(index, option);
    }

    return <div>
        <ul role="listbox" className="basicui-select__ul basicui-popup">
            <div className="basicui-select__ul__search">
                <input ref={searchReferenceElement} className="basicui-input" autoFocus />
            </div>
            {
                props.options?.map((option, index) => (
                    <li key={index} role="option" className="basicui-select__ul__li">
                        <button className={`basicui-select__ul__li__link ${currentIndex === index ? 'basicui-select__ul__li__link--active' : ''}`} onClick={() => handleClick(index, option)}>
                            <div className="basicui-select__ul__li__indicator">
                                {props.values.includes(option.name + "") && <div><svg
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                    ></path>
                                </svg></div>}
                            </div>
                            <div className="basicui-select__ul__li__text">
                                {option.value}
                            </div>
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
};

export default OptionsList;