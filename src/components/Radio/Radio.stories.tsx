import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Radio, { RadioProps } from '.';
import ThemeType from '../types/ThemeType';

const meta: Meta<typeof Radio> = {
  title: "Form elements/Radio",
  component: Radio,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Radio>;


const Template: Story = {
  render: (args: RadioProps) => {
    return (
      <Radio {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    theme: ThemeType.primary,
    label: "Lorem ipsum"
  }
};
