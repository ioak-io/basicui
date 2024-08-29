import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import FlexContainer, { FlexContainerProps } from ".";

const meta: Meta<typeof FlexContainer> = {
  title: "Surfaces/FlexContainer",
  component: FlexContainer,
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof FlexContainer>;

const Template: Story = {
  render: (args: FlexContainerProps) => {
    return <FlexContainer {...args} />;
  },
};

export const Playground = {
  ...Template,
  args: {
    children: (
      <>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </>
    ),
  },
};
