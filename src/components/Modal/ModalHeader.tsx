import React, { useState, Dispatch, SetStateAction, Children } from 'react';
import './ModalHeader.css';

export type ModalHeaderProps = {
    onClose: any;
    heading?: string;
    noBorder?: boolean;
}

const ModalHeader = (props: ModalHeaderProps) => {

    return (
        <div className={`basicui-modal-header ${props.noBorder ? "" : "basicui-modal-header--show-border"}`}>
            <div className="basicui-modal-header__heading">{props.heading}</div>
            x
        </div>
    );
}
export default ModalHeader;