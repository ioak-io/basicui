import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Tabs, { TabsProps } from ".";
import ThemeType from "../types/ThemeType";
import TabsWrapper, { TabsWrapperProps } from "./TabsWrapper";

export default {
  title: "Surfaces/Tabs",
  component: Tabs,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Tabs component
const Template: Story<TabsProps> = (args: TabsProps) => <TabsWrapper {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
};

export const Primary = Template.bind({});
Primary.args = {
  theme: ThemeType.primary
};
