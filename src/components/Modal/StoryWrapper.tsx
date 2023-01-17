import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";
import Modal from ".";
import Button from "../Button";


const StoryWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
                First modal</Modal>

            <Button onClick={() => setIsOpen2(true)}>Open Modal 2</Button>
            <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
                Second modal</Modal>
        </div>
    );
};

export default StoryWrapper;