import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import IconButton, { IconButtonProps } from '.';
import ThemeType from '../types/ThemeType';

const meta: Meta<typeof IconButton> = {
  title: "Form elements/IconButton",
  component: IconButton,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof IconButton>;


const Template: Story = {
  render: (args: IconButtonProps) => {
    return (
      <IconButton {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    theme: ThemeType.primary,
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
  }
};
