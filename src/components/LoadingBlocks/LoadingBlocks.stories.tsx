import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import LoadingBlocks, { LoadingBlocksProps } from ".";

const meta: Meta<typeof LoadingBlocks> = {
  title: "Loaders/LoadingBlocks",
  component: LoadingBlocks,
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof LoadingBlocks>;

const Template: Story = {
  render: (args: LoadingBlocksProps) => {
    return <LoadingBlocks {...args} />;
  },
};

export const Playground = {
  ...Template,
  args: {
    numberOfBlocks: 10,
    isLoading: true,
    minWidth: 20,
    maxWidth: 40,
  },
};
