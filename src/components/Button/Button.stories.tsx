import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Button, { ButtonProps } from ".";

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
export const Default = Template.bind({});
Default.args = {
  children: <div>Submit</div>
};
