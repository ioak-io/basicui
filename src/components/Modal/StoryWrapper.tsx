import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";
import Modal from ".";
import Button from "../Button";


const StoryWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const openModal = () => {
        console.log("**1", isOpen);
        setIsOpen(!isOpen)
    }

    const openModal2 = () => {
        console.log("**2", isOpen2);
        setIsOpen2(!isOpen2)
    }

    return (
        <div>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
                First modal</Modal>

            <Button onClick={openModal2}>Open Modal 2</Button>
            <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
                Second modal</Modal>
        </div>
    );
};

export default StoryWrapper;