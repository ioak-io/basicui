import React, { useState, useRef, useEffect } from "react";
import "./style.css";

export type DemoSectionProps = {
    heading: string;
    children: any;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const DemoSection = (props: DemoSectionProps) => {
    return (
        <section className="basicuidemo-section">
            <h4>{props.heading}</h4>
            {props.children}
        </section>
    );
};

export default DemoSection;