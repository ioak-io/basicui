import React, { useState, useRef, useEffect } from "react";
import "./style.css";

export type TypographyProps = {
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Typography = (props: TypographyProps) => {
    return (
        <div className="basicuidemo-typography">
            {/* <h1>Typography</h1> */}
            <section className="basicuidemo-typography__section">
                <h4>Headings</h4>
                <h1>h1. heading</h1>
                <h2>h2. heading</h2>
                <h3>h3. heading</h3>
                <h4>h4. heading</h4>
                <h5>h5. heading</h5>
                <h6>h6. heading</h6>
            </section>
            <section className="basicuidemo-typography__section">
                <h4>Body content</h4>
                <h5>(p) Regular paragraph</h5>
                <p>Purus adipiscing purus dictum nascetur hendrerit eleifend feugiat quam pulvinar. congue turpis est sodales placerat id nibh ante. ad justo platea mollis curae lacinia vitae mattis egestas eu musvestibulum. ullamcorper penatibus arcu eleifend cras massa justo. dictum lorem neque semper enim taciti leo imperdiet cubilia. cubilia nulla eu felis adipiscing at accumsan nibh</p>
                <h5>(mark) Inline text with highlighted content</h5>
                <p>maximus urna vivamus euismod quam cursus imperdiet <mark>integer litora nostra luctus</mark> pulvinarin. rutrumaliquam cras phasellus fusce vestibulum nec mattis. laoreet tellus turpis ullamcorper dis sagittis felis gravida. facilisis nisi nulla massa montes habitasse vehicula ante porttitor consequat fusce dis conubia et</p>
            </section>
        </div>
    );
};

export default Typography;