import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Chekbox, { ChekboxProps } from ".";

export default {
  title: "Components/Chekbox",
  component: Chekbox,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ChekboxProps> = (args: ChekboxProps) => <Chekbox {...args} />;

// Reuse that template for creating different stories
export const BasicChekbox = Template.bind({});
BasicChekbox.args = {
  label: "Article description",
  initialValue: "",
  placeholder: 'Lorem ipsum dolor sit',
};

export const ChekboxWithTooltip = Template.bind({});
ChekboxWithTooltip.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Quisque tincidunt vitae purus id feugiat"
};

export const ChekboxWithError = Template.bind({});
ChekboxWithError.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const ChekboxWithWarning = Template.bind({});
ChekboxWithWarning.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  warningMessage: "Quisque tincidunt vitae purus id feugiat"
};


export const ChekboxWithSuccess = Template.bind({});
ChekboxWithSuccess.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  successMessage: "Quisque tincidunt vitae purus id feugiat"
};

export const ChekboxWithTooltipAndError = Template.bind({});
ChekboxWithTooltipAndError.args = {
  label: "Article description",
  initialValue: "Dolor sit",
  placeholder: 'Lorem ipsum dolor sit',
  tooltip: "Ipsum dolor sit",
  errorMessage: "Quisque tincidunt vitae purus id feugiat"
};
