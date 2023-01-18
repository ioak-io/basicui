import React, { useState, Dispatch, SetStateAction, Children } from 'react';
import { Button, SelectPropsConverter, ThemeType } from '../..';
import ModalPlacement from '../types/ModalPlacement';
import ModalSizeType from '../types/ModalSizeType';
import Portal from './Portal';
import './style.css';

export type ModalProps = {
    isOpen: boolean,
    onClose: any,
    size?: ModalSizeType,
    placement?: ModalPlacement,
    children?: any
}

const Modal = (
    props: ModalProps) => {

    if (!props.isOpen) return null;

    return (
        <Portal wrapperId="basicui-modal">
            <div className="basicui-modal">
                <div className="basicui-modal__overlay">
                    <div className={`basicui-modal__base basicui-modal__base--size-${props.size || "default"} basicui-modal__base--placement-${props.placement || "default"}`}>
                        {props.children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
export default Modal;