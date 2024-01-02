import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Input, { InputProps } from '.';

const meta: Meta<typeof Input> = {
  title: "Form elements/Input",
  component: Input,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Input>;


const Template: Story = {
  render: (args: InputProps) => {
    const [state, setState] = useState("Dolor sit");
    const onChange = (event: any) => setState(event.currentTarget.value);
    return (
      <Input {...args} value={state} onInput={onChange} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    label: "First name",
    placeholder: 'Lorem ipsum dolor sit',
    tooltip: "Quisque tincidunt vitae purus id feugiat",
  }
};
