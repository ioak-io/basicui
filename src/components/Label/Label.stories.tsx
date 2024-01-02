import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Label, { LabelProps } from '.';

const meta: Meta<typeof Label> = {
  title: "Form elements/Label",
  component: Label,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Label>;


const Template: Story = {
  render: (args: LabelProps) => {
    return (
      <Label {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    children: 'Lorem ipsum dolor sit',
  }
};
