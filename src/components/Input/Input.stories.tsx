import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Input, { InputProps } from ".";

export default {
  title: "Form elements/Input",
  component: Input,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

// Reuse that template for creating different stories
export const BasicInput = Template.bind({});
BasicInput.args = {
  label: "First name",
  value: "",
  placeholder: 'Lorem ipsum dolor sit',
};

export const InputWithTooltip = Template.bind({});
InputWithTooltip.args = {
  label: "First name",
  value: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Quisque tincidunt vitae purus id feugiat"
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  label: "First name",
  value: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const InputWithWarning = Template.bind({});
InputWithWarning.args = {
  label: "First name",
  value: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  warningMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const InputWithSuccess = Template.bind({});
InputWithSuccess.args = {
  label: "First name",
  value: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  successMessage: "Quisque tincidunt vitae purus id feugiat"
};

export const InputWithTooltipAndError = Template.bind({});
InputWithTooltipAndError.args = {
  label: "First name",
  value: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Ipsum dolor sit",
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};

export const DateInput = Template.bind({});
DateInput.args = {
  type: "date",
  label: "Date of birth",
  value: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit'
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  label: "Age",
  value: 1,
  placeholder: 'Lorem ipsum dolor sit'
};
