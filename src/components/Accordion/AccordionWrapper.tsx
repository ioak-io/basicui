import React, { useState, useRef, useEffect } from "react";
import Accordion, { AccordionProps } from ".";

const AccordionWrapper = (props: AccordionProps | any) => {
    const [expanded, setExpanded] = useState("");

    const handleChange = (panelName: string) => {
        setExpanded(expanded === panelName ? "" : panelName);
    }

    return (
        <div>
            <Accordion {...props} heading="Etiam venenatis" expanded={expanded === "panel1"} onChange={() => handleChange("panel1")}>
                Etiam venenatis, quam nec volutpat bibendum, magna ex fringilla turpis, vitae efficitur nisl lectus ut mauris. Curabitur sagittis neque id odio viverra pellentesque. Etiam pellentesque molestie suscipit. Suspendisse quis dui a arcu ultrices tempor. Integer cursus justo nisi, vel vestibulum justo viverra id. Phasellus suscipit, felis ac volutpat viverra, ligula tellus molestie felis, et elementum tortor libero vel ante. Mauris sodales imperdiet turpis. Fusce pulvinar diam at dictum commodo. Aliquam erat volutpat. Suspendisse porta, sapien et euismod fermentum, lectus risus facilisis purus, sit amet tempus nunc leo sed neque.
            </Accordion>
            <Accordion {...props} heading="Lorem ipsum" expanded={expanded === "panel2"} onChange={() => handleChange("panel2")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in tristique orci. Donec eget urna ut nisi mattis interdum sed sit amet orci. Nulla ac efficitur ipsum. Nam vitae nulla velit. Proin eu elementum velit. Cras id sollicitudin tortor, id placerat ante. Duis in magna purus. Aenean dignissim sit amet metus id ultrices. Ut egestas ex lectus, et congue erat pulvinar ac. In sem nulla, tincidunt eu convallis nec, sollicitudin id nulla. Donec ullamcorper, leo nec interdum mollis, dui sapien dignissim arcu, quis placerat tellus ligula id ex.
                Fusce convallis metus in elementum posuere. Proin eu nulla imperdiet, aliquet purus finibus, mollis tellus. Praesent accumsan nunc id purus sollicitudin egestas. Sed interdum sodales aliquam. Proin fermentum ipsum nec sem sagittis facilisis. Maecenas ac metus quis leo sodales posuere. Aliquam eleifend ultrices turpis pellentesque egestas.
            </Accordion>
            <Accordion {...props} heading="Curabitur condimentum risus pharetra diam" expanded={expanded === "panel3"} onChange={() => handleChange("panel3")}>
                Curabitur condimentum risus pharetra diam volutpat pellentesque. Proin volutpat, est nec sollicitudin posuere, justo neque elementum orci, in cursus neque nunc nec tortor. In lorem risus, tempor nec justo quis, scelerisque porttitor lacus. Phasellus dignissim nibh vel quam ornare porta a ut nulla. Sed congue vestibulum tellus, tincidunt porta libero molestie nec. Fusce elementum eros erat, eget varius turpis consectetur aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit lorem in ex sagittis semper. Vivamus fermentum sit amet nisl id facilisis. Aenean convallis auctor consectetur. Pellentesque convallis mattis felis in molestie. Praesent at nisi condimentum, pharetra risus a, dapibus quam.

                Etiam tristique convallis tristique. Donec sagittis est sapien, sit amet aliquet ligula bibendum eu. Suspendisse maximus tincidunt urna ut mattis. Praesent non nulla quis odio lobortis tincidunt. Phasellus lacinia mauris dolor, id dapibus quam venenatis pretium. Donec semper faucibus ipsum eu pellentesque. Vivamus pharetra dui sem, nec condimentum mauris pulvinar vitae. Mauris sed leo felis. Mauris venenatis vel lorem id aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lacinia placerat sem, at blandit arcu congue sollicitudin. Sed non risus rhoncus, porttitor lectus et, iaculis est. Phasellus dui arcu, vestibulum vel malesuada ac, suscipit vel turpis. Mauris porta odio dui, ac pharetra ex fringilla eu. Donec molestie pellentesque ipsum eu tempus.
            </Accordion>
        </div>
    );
};

export default AccordionWrapper;