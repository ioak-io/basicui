import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<DropdownProps> = (args: DropdownProps) => <Dropdown {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { type: "default", options: ["Lorem ipsum", "Dolor sit"] };

export const Autocomplete = Template.bind({});
Autocomplete.args = { type: "autocomplete", options: ["Lorem ipsum", "Dolor sit"] };
