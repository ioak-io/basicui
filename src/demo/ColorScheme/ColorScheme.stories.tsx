import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import ColorScheme, { ColorSchemeProps } from ".";

export default {
  title: "Styleguide/Color Schemes",
  component: ColorScheme,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the ColorScheme component
const Template: Story<ColorSchemeProps> = (args: ColorSchemeProps) => <ColorScheme {...args} />;

export const ThemesOverview = Template.bind({});
ThemesOverview.args = {
  discriminator: "themes-overview"
};

// Reuse that template for creating different stories
export const Adaptive = Template.bind({});
Adaptive.args = {
  discriminator: "adaptive"
};

export const Black = Template.bind({});
Black.args = {
  discriminator: "black"
};

export const BlackExtended = Template.bind({});
BlackExtended.args = {
  discriminator: "black-extended"
};

export const White = Template.bind({});
White.args = {
  discriminator: "white"
};

export const WhiteExtended = Template.bind({});
WhiteExtended.args = {
  discriminator: "white-extended"
};

export const Default = Template.bind({});
Default.args = {
  discriminator: "default"
};

export const DefaultTransparent = Template.bind({});
DefaultTransparent.args = {
  discriminator: "default-transparent"
};

export const Primary = Template.bind({});
Primary.args = {
  discriminator: "primary"
};

export const PrimaryTransparent = Template.bind({});
PrimaryTransparent.args = {
  discriminator: "primary-transparent"
};

export const Danger = Template.bind({});
Danger.args = {
  discriminator: "danger"
};

export const DangerTransparent = Template.bind({});
DangerTransparent.args = {
  discriminator: "danger-transparent"
};
