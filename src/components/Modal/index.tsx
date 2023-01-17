// @src/components/Modal.tsx
import React, { useState, Dispatch, SetStateAction, Children } from 'react';
import Portal from './Portal';

// Define the props of Modal.
export type ModalProps = {
    isOpen: boolean,
    onClose: any,
    children?: any
}
// Modal component.
const Modal = (
    { isOpen, children, onClose }: ModalProps) => {

    if (!isOpen) return null;

    return (
        <Portal wrapperId="basicui-modal">
            <div className="basicui-modal">
                <div className="basicui-modal__overlay">
                    <div className="basicui-modal__base">
                        <div className="modal__modal-heading">
                            Heading
                        </div>
                        <div className="modal__modal-body">
                            {children}
                        </div>
                        <div className="modal__modal-footer">
                            <button
                                className="modal__modal-btn-close"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
export default Modal;