import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Textarea, { TextareaProps } from '.';

const meta: Meta<typeof Textarea> = {
  title: "Form elements/Textarea",
  component: Textarea,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Textarea>;


const Template: Story = {
  render: (args: TextareaProps) => {
    return (
      <Textarea {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    label: "Lorem ipsum",
    initialValue: "",
    placeholder: 'Dolor sit',
  }
};
