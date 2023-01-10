import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Select, { SelectProps } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SelectProps> = (args: SelectProps) => <Select {...args} />;


let valueDefault = ""

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { type: "default", initialValue: "", options: ["Lorem ipsum", "Dolor sit", "another long text another long text another long text another long text another long text "], placeholder: 'Default drop down'};

export const Autocomplete = Template.bind({});
Autocomplete.args = { type: "autocomplete", options: ["Lorem ipsum", "Dolor sit"], placeholder: 'Autocomplete drop down' };
