import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Label, { LabelProps } from ".";

export default {
  title: "Form elements/Label",
  component: Label,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<LabelProps> = (args: LabelProps) => <Label {...args} />;

// Reuse that template for creating different stories
export const BasicLabel = Template.bind({});
BasicLabel.args = {
  children: 'Lorem ipsum dolor sit',
};
