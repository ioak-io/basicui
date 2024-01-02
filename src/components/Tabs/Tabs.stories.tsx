import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Tabs, { TabsProps } from '.';
import ThemeType from '../types/ThemeType';
import TabsWrapper from './TabsWrapper';

const meta: Meta<typeof Tabs> = {
  title: "Surfaces/Tabs",
  component: Tabs,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Tabs>;


const Template: Story = {
  render: (args: TabsProps) => {
    return (
      <TabsWrapper {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    theme: ThemeType.primary
  }
};
