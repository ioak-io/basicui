import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import StoryWrapper from "./StoryWrapper";
import AppShellReveal, { AppShellRevealProps } from '.';

const meta: Meta<typeof AppShellReveal> = {
  title: "Layout/AppShellReveal",
  component: AppShellReveal,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof AppShellReveal>;


const Template: Story = {
  render: (args: AppShellRevealProps) => {
    return (
      <StoryWrapper {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
  }
};
