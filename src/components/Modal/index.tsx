import React, { useState, Dispatch, SetStateAction, Children, useEffect } from 'react';
import ModalPlacement from '../types/ModalPlacement';
import ModalSizeType from '../types/ModalSizeType';
import Portal from './Portal';

export type ModalProps = {
    isOpen: boolean,
    onClose: any,
    size?: ModalSizeType,
    placement?: ModalPlacement,
    children?: any
}

const Modal = (
    props: ModalProps) => {
    const [shouldRender, setShouldRender] = useState(props.isOpen);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                props.onClose();
            }
        };

        if (props.isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [props.isOpen, props.onClose]);

    useEffect(() => {
        if (!props.isOpen) {
            setIsClosing(true);
            const timeoutId = setTimeout(() => {
                setShouldRender(false);
            }, 250);

            return () => clearTimeout(timeoutId);
        } else {
            setIsClosing(false);
            setShouldRender(true);
        }
    }, [props.isOpen]);

    if (!shouldRender) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <Portal wrapperId="basicui-modal">
            <div className={`basicui-modal ${props.isOpen ? 'basicui-modal--open' : 'basicui-modal--close'}`}>
                <div
                    className="basicui-modal__overlay"
                    onClick={handleOverlayClick}
                >
                    <div
                        className={`basicui-modal__base 
                            ${isClosing ? 'basicui-modal__base--closing' : 'basicui-modal__base--opening'}
                            basicui-modal__base--size-${props.size || "default"} basicui-modal__base--placement-${props.placement || "default"}`}
                    >
                        {props.children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
export default Modal;