import React from "react";
import Dropdown from "./Dropdown";
export default {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
// Create a master template for mapping args to render the Button component
const Template = (args) => React.createElement(Dropdown, Object.assign({}, args));
// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { type: "default" };
export const Autocomplete = Template.bind({});
Autocomplete.args = { type: "autocomplete" };
//# sourceMappingURL=Dropdown.stories.js.map