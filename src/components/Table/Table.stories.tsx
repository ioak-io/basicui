import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import Table, { TableProps } from '.';
import TableWrapper from './TableWrapper';

const meta: Meta<typeof Table> = {
  title: "Surfaces/Table",
  component: Table,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Table>;


const Template: Story = {
  render: (args: TableProps) => {
    return (
      <TableWrapper {...args} />
    );
  },
};

export const Playground = {
  ...Template, args: {
    inverseHeaders: true
  }
};
