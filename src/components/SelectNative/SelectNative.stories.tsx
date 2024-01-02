import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import SelectNative, { SelectNativeProps } from '.';
import ThemeType from '../types/ThemeType';
import { SelectPropsConverter } from '../..';

const meta: Meta<typeof SelectNative> = {
  title: "Form elements/SelectNative",
  component: SelectNative,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof SelectNative>;


const Template: Story = {
  render: (args: SelectNativeProps) => {
    return (
      <SelectNative {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    initialValues: ["Dolor sit"],
    options: SelectPropsConverter.optionsFromSimpleList(["Lorem ipsum", "Dolor sit", "another long text another long text another long text another long text another long text "]),
    placeholder: 'Default drop down',
    label: "Lorem ipsum"
  }
};
