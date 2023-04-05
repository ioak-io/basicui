import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Button, { ButtonProps } from ".";
import ThemeType from "../types/ThemeType";
import ButtonVariantType from "../types/ButtonVariantType";

export default {
  title: "Form elements/Button",
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
  children: <div>Lorem ipsum</div>,
  disabled: true
};

export const DefaultThemeWithOutlineVariant = Template.bind({});
DefaultThemeWithOutlineVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.outline,
  children: <div>Lorem ipsum</div>
};

export const DefaultThemeWithFillVariant = Template.bind({});
DefaultThemeWithFillVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.fill,
  children: <div>Lorem ipsum</div>
};

export const DefaultThemeWithTransparentVariant = Template.bind({});
DefaultThemeWithTransparentVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.transparent,
  children: <div>Lorem ipsum</div>
};

// Primary theme
export const PrimaryThemeWithPrimaryVariant = Template.bind({});
PrimaryThemeWithPrimaryVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.default,
  children: <div>Lorem ipsum</div>
};

export const PrimaryThemeWithOutlineVariant = Template.bind({});
PrimaryThemeWithOutlineVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.outline,
  children: <div>Lorem ipsum</div>
};

export const PrimaryThemeWithFillVariant = Template.bind({});
PrimaryThemeWithFillVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.fill,
  children: <div>Lorem ipsum</div>
};

export const PrimaryThemeWithTransparentVariant = Template.bind({});
PrimaryThemeWithTransparentVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.transparent,
  children: <div>Lorem ipsum</div>
};


// Danger theme
export const DangerThemeWithDangerVariant = Template.bind({});
DangerThemeWithDangerVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.default,
  children: <div>Lorem ipsum</div>
};

export const DangerThemeWithOutlineVariant = Template.bind({});
DangerThemeWithOutlineVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.outline,
  children: <div>Lorem ipsum</div>
};

export const DangerThemeWithFillVariant = Template.bind({});
DangerThemeWithFillVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.fill,
  children: <div>Lorem ipsum</div>
};

export const DangerThemeWithTransparentVariant = Template.bind({});
DangerThemeWithTransparentVariant.args = {
  theme: ThemeType.danger,
  variant: ButtonVariantType.transparent,
  children: <div>Lorem ipsum</div>
};
