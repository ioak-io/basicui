import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Input, { InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

// Reuse that template for creating different stories
export const Text = Template.bind({});
Text.args = {
  initialValue: "Dolor sit",
  placeholder: 'Lorep ipsum dolor sit',
  tooltip: "Ipsum dolor sit",
  errorMessage: "jhsdfdsgf sdfg hfdsg"
};
