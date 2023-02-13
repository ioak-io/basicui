import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Table, { TableProps } from ".";

export default {
  title: "Surfaces/Table",
  component: Table,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Table component
const Template: Story<TableProps> = (args: TableProps) => <Table {...args} />;

// Reuse that template for creating different stories
export const Overview = Template.bind({});
Overview.args = {
};
