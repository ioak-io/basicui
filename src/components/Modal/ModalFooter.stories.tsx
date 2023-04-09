import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import ThemeType from "../types/ThemeType";
import StoryWrapper from "./StoryWrapper";
import ModalFooter, { ModalFooterProps } from "./ModalFooter";
import AlignmentType from "../types/AlignmentType";
import Button from "../Button";

export default {
  title: "Surfaces/ModalFooter",
  component: ModalFooter,
  argTypes: {
    // initialValues: [],
    // options: []
  },
} as Meta;

// Create a master template for mapping args to render the ModalFooter component
const Template: Story<ModalFooterProps> = (args: any) => <ModalFooter {...args} />;

// Reuse that template for creating different stories
export const DefaultModalFooter = Template.bind({});
DefaultModalFooter.args = {
  border: true,
  alignment: AlignmentType.default,
  children:
    <>
      <Button>Apply</Button>
      <Button>Cancel</Button>
    </>
};
