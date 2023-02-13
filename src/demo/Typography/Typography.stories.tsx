import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Typography, { TypographyProps } from ".";

export default {
  title: "Styleguide/Typography",
  component: Typography,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Typography component
const Template: Story<TypographyProps> = (args: TypographyProps) => <Typography {...args} />;

// Reuse that template for creating different stories
export const Overview = Template.bind({});
Overview.args = {
};
