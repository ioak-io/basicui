import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import StoryWrapper from "./StoryWrapper";
import AppShellSentinel, { AppShellSentinelProps } from '.';

const meta: Meta<typeof AppShellSentinel> = {
  title: "Layout/AppShellSentinel",
  component: AppShellSentinel,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof AppShellSentinel>;


const Template: Story = {
  render: (args: AppShellSentinelProps) => {
    return (
      <StoryWrapper {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
  }
};
