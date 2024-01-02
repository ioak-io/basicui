import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Modal, { ModalProps } from '.';
import StoryWrapper from "./StoryWrapper";

const meta: Meta<typeof Modal> = {
  title: "Surfaces/Modal",
  component: Modal,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Modal>;


const Template: Story = {
  render: (args: ModalProps) => {
    return (
      <StoryWrapper {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
  }
};
