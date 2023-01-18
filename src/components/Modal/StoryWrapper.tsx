import React, { useState, useRef, useEffect } from "react";

import "./style.css";
import { isEmptyOrSpaces } from "../../utils/TextUtils";
import FormElementMessage from "../shared/FormElementMessage";
import Modal from ".";
import Button from "../Button";
import ModalSizeType from "../types/ModalSizeType";

type Props = {
    size?: ModalSizeType;
}

const StoryWrapper = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}
                heading="Lorem ipsum"
                size={props.size}
            >
                Praesent urna erat, pharetra vel est vitae, tincidunt viverra sapien. Nullam ac rutrum diam. Curabitur non augue justo. Morbi pulvinar convallis leo eu faucibus. Nullam eu ullamcorper nisl. Ut cursus sagittis elit at congue. Donec malesuada sem at condimentum ultrices. Ut elementum tincidunt ipsum quis condimentum. Mauris nec arcu vitae diam sollicitudin aliquet. Nunc sed euismod ante. Proin eros magna, lobortis ut varius finibus, dignissim eu purus. Praesent ornare rutrum turpis imperdiet fringilla.</Modal>
        </div>
    );
};

export default StoryWrapper;