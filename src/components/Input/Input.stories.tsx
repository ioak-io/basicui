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
  label: "First name",
  initialValue: "",
  placeholder: 'Lorem ipsum dolor sit',
};

export const TextWithTooltip = Template.bind({});
TextWithTooltip.args = {
  label: "First name",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Quisque tincidunt vitae purus id feugiat"
};

export const TextWithError = Template.bind({});
TextWithError.args = {
  label: "First name",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const TextWithWarning = Template.bind({});
TextWithWarning.args = {
  label: "First name",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  warningMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const TextWithSuccess = Template.bind({});
TextWithSuccess.args = {
  label: "First name",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  successMessage: "Quisque tincidunt vitae purus id feugiat"
};

export const TextWithTooltipAndError = Template.bind({});
TextWithTooltipAndError.args = {
  label: "First name",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Ipsum dolor sit",
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};
