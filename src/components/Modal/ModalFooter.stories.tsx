import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import ModalFooter, { ModalFooterProps } from './ModalFooter';
import ThemeType from '../types/ThemeType';
import Button from '../Button';

const meta: Meta<typeof ModalFooter> = {
  title: "Surfaces/ModalFooter",
  component: ModalFooter,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof ModalFooter>;


const Template: Story = {
  render: (args: ModalFooterProps) => {
    return (
      <ModalFooter {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    children:
      <>
        <Button theme={ThemeType.primary}>Apply</Button>
        <Button>Cancel</Button>
      </>
  }
};
