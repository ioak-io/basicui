import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ThemeType from "../types/ThemeType";
import ButtonVariantType from "../types/ButtonVariantType";
import IconButton, { IconButtonProps } from ".";

export default {
  title: "Form elements/IconButton",
  component: IconButton,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IconButtonProps> = (args: IconButtonProps) => <IconButton {...args} />;

// Reuse that template for creating different stories
export const DefaultThemeWithDefaultVariant = Template.bind({});
DefaultThemeWithDefaultVariant.args = {
  circle: true,
  theme: ThemeType.default,
  variant: ButtonVariantType.default,
  children: <svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg>
};

export const DefaultThemeWithOutlineVariant = Template.bind({});
DefaultThemeWithOutlineVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.outline,
  children: <div><svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg></div>
};

export const DefaultThemeWithFillVariant = Template.bind({});
DefaultThemeWithFillVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.fill,
  children: <div><svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg></div>
};

export const DefaultThemeWithTransparentVariant = Template.bind({});
DefaultThemeWithTransparentVariant.args = {
  theme: ThemeType.default,
  variant: ButtonVariantType.transparent,
  children: <div><svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg></div>
};

// Primary theme
export const PrimaryThemeWithPrimaryVariant = Template.bind({});
PrimaryThemeWithPrimaryVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.default,
  children: <div><svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg></div>
};

export const PrimaryThemeWithOutlineVariant = Template.bind({});
PrimaryThemeWithOutlineVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.outline,
  children: <div><svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg></div>
};

export const PrimaryThemeWithFillVariant = Template.bind({});
PrimaryThemeWithFillVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.fill,
  children: <div><svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg></div>
};

export const PrimaryThemeWithTransparentVariant = Template.bind({});
PrimaryThemeWithTransparentVariant.args = {
  theme: ThemeType.primary,
  variant: ButtonVariantType.transparent,
  children: <div><svg
  height="16"
  viewBox="0 0 16 16"
  version="1.1"
  width="16"
  aria-hidden="true"
>
  <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
  ></path>
</svg></div>
};
