import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Button, { ButtonProps } from ".";
import ThemeType from "../types/ThemeType";
import ButtonVariantType from "../types/ButtonVariantType";

const meta: Meta<typeof Button> = {
  title: "Form elements/Button",
  component: Button,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Button>;


const Template: Story = {
  render: (args: ButtonProps) => {
    return (
      <Button {...args} />
    );
  },
};

// Create a master template for mapping args to render the Button component
// const Template: Story = (args: ButtonProps) => <Button {...args} />;

// Reuse that template for creating different stories
export const Playground = {
  ...Template, args: {
    theme: ThemeType.primary,
    variant: ButtonVariantType.default,
    children: <div>Lorem ipsum</div>
  }
};
