import React, { useState, useRef, useEffect } from "react";
import "./styles/index.css";

export type ColorSchemeProps = {
    discriminator:
    "adaptive"
    | "black"
    | "white"
    | "black-extended"
    | "white-extended"
    | "default"
    | "primary"
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const ColorScheme = (props: ColorSchemeProps) => {
    const [levels, setLevels] = useState([
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]);

    return (
        <div className={`basicuidemo-color-scheme basicuidemo-color-scheme--${props.discriminator}`}>
            {levels.map(level => (
                <div className={`basicuidemo-color-scheme__x basicuidemo-color-scheme__${level}`}>
                    <div className="basicuidemo-color-scheme__x__bg">
                        <div className="basicuidemo-color-scheme__x__bg__label">
                            background-color:
                        </div>
                        <div className="basicuidemo-color-scheme__x__bg__value">
                            {`var(--theme-${props.discriminator}-${level})`}
                        </div>
                    </div>
                    <div className="basicuidemo-color-scheme__x__fg">
                        <div className="basicuidemo-color-scheme__x__fg__label">
                            color:
                        </div>
                        <div className="basicuidemo-color-scheme__x__fg__value">
                            {`var(--theme-${props.discriminator}-${level}i)`}
                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default ColorScheme;