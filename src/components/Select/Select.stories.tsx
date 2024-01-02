import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Select, { SelectProps } from '.';
import { SelectPropsConverter } from '../..';

const meta: Meta<typeof Select> = {
  title: "Form elements/Select",
  component: Select,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Select>;


const Template: Story = {
  render: (args: SelectProps) => {
    const [state, setState] = useState<(string | number)[]>([]);
    const onChange = (event: any) => {
      if (typeof event.currentTarget.value === 'object') {
        setState(event.currentTarget.value);
      } else {
        setState([event.currentTarget.value]);
      }
    };
    return (
      <Select {...args} onInput={onChange} value={state} />
    );
  },
};

export const SelectForm = {
  ...Template, args: {
    value: ["Lorem ipsum"],
    options: SelectPropsConverter.optionsFromSimpleList(["Lorem ipsum", "Dolor sit", "another long text another long text another long text another long text another long text "]),
    placeholder: 'Select drop down'
  }
};

export const AutocompleteForm = {
  ...Template, args: {
    value: [],
    autocomplete: true,
    options: SelectPropsConverter.optionsFromObject({ 1: "Lorem ipsum", 2: "Dolor sit", 4: 56 }),
    placeholder: 'Autocomplete drop down'
  }
};
