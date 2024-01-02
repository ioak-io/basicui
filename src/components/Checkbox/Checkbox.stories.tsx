import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Checkbox, { CheckboxProps } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Form elements/Checkbox",
  component: Checkbox,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Checkbox>;


const Template: Story = {
  render: (args: CheckboxProps) => {
    return (
      <Checkbox {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    label: "Lorem ipsum dolor sit",
  }
};
