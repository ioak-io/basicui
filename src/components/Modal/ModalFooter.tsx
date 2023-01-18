import React, { useState, Dispatch, SetStateAction, Children } from 'react';
import AlignmentType from '../types/AlignmentType';
import ThemeType from '../types/ThemeType';
import './ModalFooter.css';

export type ModalFooterProps = {
    children?: any;
    alignment?: AlignmentType;
    noBorder?: boolean;
}

const ModalFooter = (props: ModalFooterProps) => {

    return (
        <div className={`basicui-modal-footer ${props.noBorder ? "" : "basicui-modal-footer--show-border"} basicui-modal-footer--alignment-${props.alignment || ThemeType.default}`}>
            {props.children}
        </div>
    );
}
export default ModalFooter;