import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Accordion, { AccordionProps } from ".";
import ThemeType from "../types/ThemeType";
import AccordionWrapper from "./AccordionWrapper";
import AccordionOverview from "./AccordionOverview";

export default {
  title: "Surfaces/Accordion",
  component: Accordion,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Accordion component
const Template: Story<AccordionProps> = (args: AccordionProps) => <AccordionWrapper {...args} />;
const TemplateOverview: Story<AccordionProps> = () => <AccordionOverview />;

// Reuse that template for creating different stories
export const Overview = TemplateOverview.bind({});
TemplateOverview.args = {
  bordered: false
};

export const Playground = Template.bind({});
Playground.args = {
  theme: ThemeType.primary
};
