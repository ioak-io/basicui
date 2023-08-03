import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Select, { SelectProps } from ".";
import { SelectPropsConverter } from "../..";

export default {
  title: "Form elements/Select",
  component: Select,
  argTypes: {
    value: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SelectProps> = (args: SelectProps) => <Select {...args} />;

// Reuse that template for creating different stories
export const SingleSelect = Template.bind({});
SingleSelect.args = {
  value: ["Dolor sit"],
  options: SelectPropsConverter.optionsFromSimpleList(["Lorem ipsum", "Dolor sit", "another long text another long text another long text another long text another long text "]),
  placeholder: 'Default drop down'
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  multiple: true,
  value: ["Lorem ipsum"],
  options: SelectPropsConverter.optionsFromSimpleList(["Lorem ipsum", "Dolor sit", "another long text another long text another long text another long text another long text "]),
  placeholder: 'Default drop down'
};

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  value: [],
  autocomplete: true,
  options: SelectPropsConverter.optionsFromObject({ 1: "Lorem ipsum", 2: "Dolor sit", 4: 56 }),
  placeholder: 'Autocomplete drop down'
};

export const AutocompleteMultiSelect = Template.bind({});
AutocompleteMultiSelect.args = {
  value: [],
  autocomplete: true,
  allowNewValues: true,
  multiple: true,
  options: SelectPropsConverter.optionsFromObject({ 1: "Lorem ipsum", 2: "Dolor sit", 4: 56 }),
  placeholder: 'Autocomplete drop down'
};
