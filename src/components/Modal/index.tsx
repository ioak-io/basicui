// @src/components/Modal.tsx
import React, { useState, Dispatch, SetStateAction, Children } from 'react';
import { Button, SelectPropsConverter, ThemeType } from '../..';
import Portal from './Portal';

// Define the props of Modal.
export type ModalProps = {
    isOpen: boolean,
    onClose: any,
    heading?: string;
    children?: any
}
// Modal component.
const Modal = (
    props: ModalProps) => {

    if (!props.isOpen) return null;

    return (
        <Portal wrapperId="basicui-modal">
            <div className="basicui-modal">
                <div className="basicui-modal__overlay">
                    <div className="basicui-modal__base">
                        <div className="basicui-modal__header">
                            <div className="basicui-modal__header__heading">{props.heading}</div>
                            x
                        </div>
                        <div className="basicui-modal__body">
                            {props.children}
                        </div>
                        <div className="basicui-modal__footer">
                            <Button
                                onClick={props.onClose}
                                theme={ThemeType.primary}
                            >
                                Apply
                            </Button>
                            <Button
                                onClick={props.onClose}
                                theme={ThemeType.default}
                            >
                                theme-white and theme-white
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
export default Modal;