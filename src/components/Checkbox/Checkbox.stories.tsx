import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Checkbox, { CheckboxProps } from ".";
import ThemeType from "../types/ThemeType";

export default {
  title: "Form elements/Checkbox",
  component: Checkbox,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CheckboxProps> = (args: CheckboxProps) => <Checkbox {...args} />;

// Reuse that template for creating different stories
export const Playground = Template.bind({});
Playground.args = {
  label: "Lorem ipsum dolor sit",
};
