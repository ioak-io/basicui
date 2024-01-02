import { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccordionProps } from ".";
import ThemeType from "../types/ThemeType";
import AccordionWrapper from "./AccordionWrapper";
import React from 'react';

const meta: Meta<typeof Accordion> = {
  title: "Surfaces/Accordion",
  component: Accordion,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Accordion>;

const Template: Story = {
  render: ({theme, bordered}) => {
    return (
      <AccordionWrapper theme={theme} bordered={bordered} />
    );
  },
};

export const Playground = {
  ...Template,
  args: {
    theme: ThemeType.primary,
    bordered: false
  },
};
