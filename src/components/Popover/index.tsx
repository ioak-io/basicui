import React, { useEffect, useRef } from "react";
import { createPopper } from "@popperjs/core";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow.js";
import flip from "@popperjs/core/lib/modifiers/flip.js";

interface PopoverProps {
    visible: boolean;
    anchorRef: React.RefObject<HTMLElement>;
    onClose?: () => void;
    children: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right" | "bottom-start" | "top-end" | any;
}

const Popover = ({ visible, anchorRef, onClose, children, placement = "bottom-start" }: PopoverProps) => {
    const popperRef = useRef<HTMLDivElement>(null);
    const popperInstance = useRef<any>(null);

    useEffect(() => {
        if (anchorRef.current && popperRef.current && visible) {
            popperInstance.current = createPopper(anchorRef.current, popperRef.current, {
                placement,
                modifiers: [
                    preventOverflow,
                    flip,
                    {
                        name: "offset",
                        options: {
                            offset: [0, 6],
                        },
                    },
                ],
            });
        }

        return () => {
            if (popperInstance.current) {
                popperInstance.current.destroy();
                popperInstance.current = null;
            }
        };
    }, [visible, anchorRef, placement]);

    useEffect(() => {
        console.log(anchorRef.current, popperRef.current)
        const handleClickOutside = (event: MouseEvent) => {
            console.log("***clikc outside")
            console.log(anchorRef.current, popperRef.current, event.target, anchorRef.current?.contains(event.target as Node), popperRef.current?.contains(event.target as Node))
            if (
                !anchorRef.current?.contains(event.target as Node) &&
                !popperRef.current?.contains(event.target as Node)
            ) {
                onClose?.();
            }
        };

        if (visible) {
            setTimeout(() => {
                document.addEventListener("mousedown", handleClickOutside);
            }, 0);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [visible, anchorRef, onClose]);


    if (!visible) return null;

    return (
        <div ref={popperRef} className="popover-container" style={{ zIndex: 99 }}>
            {children}
        </div>
    );
};

export default Popover;
