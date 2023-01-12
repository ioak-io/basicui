import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import SelectNative, { SelectNativeProps } from ".";
import { SelectPropsConverter } from "../..";

export default {
  title: "Components/SelectNative",
  component: SelectNative,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SelectNativeProps> = (args: SelectNativeProps) => <SelectNative {...args} />;

// Reuse that template for creating different stories
export const SingleSelectNative = Template.bind({});
SingleSelectNative.args = {
  initialValues: ["Dolor sit"],
  options: SelectPropsConverter.optionsFromSimpleList(["Lorem ipsum", "Dolor sit", "another long text another long text another long text another long text another long text "]),
  placeholder: 'Default drop down'
};

export const MultiSelectNative = Template.bind({});
MultiSelectNative.args = {
  multiple: true,
  initialValues: ["Lorem ipsum"],
  options: SelectPropsConverter.optionsFromSimpleList(["Lorem ipsum", "Dolor sit", "another long text another long text another long text another long text another long text "]),
  placeholder: 'Default drop down'
};
