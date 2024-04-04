import React, { useState } from "react";
import { Meta, StoryObj } from '@storybook/react';
import { Story } from "@storybook/react";
import Switch, { SwitchProps } from ".";
import ThemeType from "../types/ThemeType";
import ModalSizeType from "../types/ModalSizeType";
import MoonIcon from '../svg/moon-dark-theme-svgrepo-com.svg';
import SunIcon from '../svg/sun-light-theme-svgrepo-com.svg';
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

export const SmallSwitch = Template.bind({});
SmallSwitch.args = {
  size: ModalSizeType.small,
};

export const MediumSwitch = Template.bind({});
MediumSwitch.args = {
  size: ModalSizeType.medium,
};

export const LargeSwitch = Template.bind({});
LargeSwitch.args = {
  size: ModalSizeType.large,
};

export const CheckedIconSwitch = Template.bind({});
CheckedIconSwitch.args = {
  icon:[SunIcon,MoonIcon]
};