import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import StoryWrapper from "./StoryWrapper";
import AppShell, { AppShellProps } from '.';

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof AppShell>;


const Template: Story = {
  render: (args: AppShellProps) => {
    return (
      <StoryWrapper {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
  }
};
