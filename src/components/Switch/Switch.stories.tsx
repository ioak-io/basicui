import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Switch, { SwitchProps } from ".";
import ThemeType from "../types/ThemeType";

export default {
  title: "Form elements/Switch",
  component: Switch,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwitchProps> = (args: SwitchProps) => <Switch {...args} />;

// Reuse that template for creating different stories
export const BasicSwitch = Template.bind({});
BasicSwitch.args = {
};

export const SwitchWithPrimary = Template.bind({});
SwitchWithPrimary.args = {
  theme: ThemeType.primary,
};

export const SwitchWithError = Template.bind({});
SwitchWithError.args = {
  theme: ThemeType.danger
};
