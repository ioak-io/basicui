import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Textarea, { TextareaProps } from ".";

export default {
  title: "Form elements/Textarea",
  component: Textarea,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextareaProps> = (args: TextareaProps) => <Textarea {...args} />;

// Reuse that template for creating different stories
export const BasicTextarea = Template.bind({});
BasicTextarea.args = {
  label: "Article description",
  initialValue: "",
  placeholder: 'Lorem ipsum dolor sit',
};

export const TextareaWithTooltip = Template.bind({});
TextareaWithTooltip.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Quisque tincidunt vitae purus id feugiat"
};

export const TextareaWithError = Template.bind({});
TextareaWithError.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const TextareaWithWarning = Template.bind({});
TextareaWithWarning.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  warningMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const TextareaWithSuccess = Template.bind({});
TextareaWithSuccess.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  successMessage: "Quisque tincidunt vitae purus id feugiat"
};

export const TextareaWithTooltipAndError = Template.bind({});
TextareaWithTooltipAndError.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Ipsum dolor sit",
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};
