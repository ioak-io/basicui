import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Accordion, { AccordionProps } from ".";
import ThemeType from "../types/ThemeType";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Accordion component
const Template: Story<AccordionProps> = (args: AccordionProps) => <Accordion {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  heading: "Lorem ipsum",
  theme: ThemeType.default,
  children: <div>Etiam venenatis, quam nec volutpat bibendum, magna ex fringilla turpis, vitae efficitur nisl lectus ut mauris. Curabitur sagittis neque id odio viverra pellentesque. Etiam pellentesque molestie suscipit. Suspendisse quis dui a arcu ultrices tempor. Integer cursus justo nisi, vel vestibulum justo viverra id. Phasellus suscipit, felis ac volutpat viverra, ligula tellus molestie felis, et elementum tortor libero vel ante. Mauris sodales imperdiet turpis. Fusce pulvinar diam at dictum commodo. Aliquam erat volutpat. Suspendisse porta, sapien et euismod fermentum, lectus risus facilisis purus, sit amet tempus nunc leo sed neque.</div>
};
