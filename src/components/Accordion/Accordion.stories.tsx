import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Accordion, { AccordionProps } from ".";
import ThemeType from "../types/ThemeType";
import AccordionWrapper, { AccordionWrapperProps } from "./AccordionWrapper";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Accordion component
const Template: Story<AccordionProps> = (args: AccordionProps) => <AccordionWrapper {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  flushed: false
};

export const Flushed = Template.bind({});
Flushed.args = {
  flushed: true
};
