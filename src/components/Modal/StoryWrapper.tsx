import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";
import Modal, { ModalProps } from ".";
import Button from "../Button";
import ModalSizeType from "../types/ModalSizeType";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ThemeType from "../types/ThemeType";
import AlignmentType from "../types/AlignmentType";

const StoryWrapper = (props: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}
                size={props.size}
                placement={props.placement}
            >
                <ModalHeader border onClose={() => setIsOpen(false)} heading="Lorem ipsum dolor sit" />
                <ModalBody>
                    Praesent urna erat, pharetra vel est vitae, tincidunt viverra sapien. Nullam ac rutrum diam. Curabitur non augue justo. Morbi pulvinar convallis leo eu faucibus. Nullam eu ullamcorper nisl. Ut cursus sagittis elit at congue. Donec malesuada sem at condimentum ultrices. Ut elementum tincidunt ipsum quis condimentum. Mauris nec arcu vitae diam sollicitudin aliquet. Nunc sed euismod ante. Proin eros magna, lobortis ut varius finibus, dignissim eu purus. Praesent ornare rutrum turpis imperdiet fringilla.
                </ModalBody>
                <ModalFooter alignment={AlignmentType.left} border>
                    <Button onClick={() => setIsOpen(false)} theme={ThemeType.primary}>Apply</Button>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default StoryWrapper;