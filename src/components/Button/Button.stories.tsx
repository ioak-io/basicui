import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Button, { ButtonProps } from ".";
import ThemeType from "../types/ThemeType";
import ButtonVariantType from "../types/ButtonVariantType";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

// Reuse that template for creating different stories
export const DefaultThemeWithDefaultVariant = Template.bind({});
DefaultThemeWithDefaultVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.default,
  children: <div>Lorem ipsum</div>
};

export const DefaultThemeWithOutlineVariant = Template.bind({});
DefaultThemeWithOutlineVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.outline,
  children: <div>Lorem ipsum</div>
};

export const PrimaryThemeWithDefaultVariant = Template.bind({});
PrimaryThemeWithDefaultVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.default,
  children: <div>Primary button</div>
};
