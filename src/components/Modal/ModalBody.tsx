import React, { useState, Dispatch, SetStateAction, Children } from 'react';

export type ModalBodyProps = {
    children?: any;
}

const ModalBody = (props: ModalBodyProps) => {

    return (
        <div className="basicui-modal-body">
            {props.children}
        </div>
    );
}
export default ModalBody;