import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Switch, { SwitchProps } from '.';
import ThemeType from '../types/ThemeType';

const meta: Meta<typeof Switch> = {
  title: "Form elements/Switch",
  component: Switch,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Switch>;


const Template: Story = {
  render: (args: SwitchProps) => {
    return (
      <Switch {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    theme: ThemeType.primary,
    label: "Lorem ipsum",
    children:
      <svg className="MuiSvgIcon-root cursor-pointer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></svg>
  }
};
