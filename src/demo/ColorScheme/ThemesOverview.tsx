import React, { useState, useRef, useEffect } from "react";
import "./styles/index.css";

export type ThemesOverviewProps = {
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const ThemesOverview = (props: ThemesOverviewProps) => {
    const [themes, setThemes] = useState([
        "adaptive",
        "black",
        "black-extended",
        "white",
        "white-extended",
        "default",
        "default-transparent",
        "primary",
        "primary-transparent",
        "warning",
        "warning-transparent",
        "danger",
        "danger-transparent"
    ]);

    return (
        <div className="basicuidemo-color-scheme">
            {themes.map(theme => (
                <div className={`basicuidemo-color-scheme__x basicuidemo-themes-overview__${theme}`}>
                    <div className="basicuidemo-color-scheme__x__bg">
                        <div className="basicuidemo-color-scheme__x__bg__label">
                            background-color:
                        </div>
                        <div className="basicuidemo-color-scheme__x__bg__value">
                            {`var(--theme-${theme}-500)`}
                        </div>
                    </div>
                    <div className="basicuidemo-color-scheme__x__fg">
                        <div className="basicuidemo-color-scheme__x__fg__label">
                            color:
                        </div>
                        <div className="basicuidemo-color-scheme__x__fg__value">
                            {`var(--theme-${theme}-500i)`}
                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default ThemesOverview;