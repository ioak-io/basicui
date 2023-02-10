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

// Reuse that template for creating different stories
export const Adaptive = Template.bind({});
Adaptive.args = {
  discriminator: "adaptive"
};

export const Black = Template.bind({});
Black.args = {
  discriminator: "black"
};

export const White = Template.bind({});
White.args = {
  discriminator: "white"
};

export const Default = Template.bind({});
Default.args = {
  discriminator: "default"
};

export const Primary = Template.bind({});
Primary.args = {
  discriminator: "primary"
};
