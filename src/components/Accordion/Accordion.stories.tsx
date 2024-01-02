import { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccordionProps } from ".";
import ThemeType from "../types/ThemeType";
import AccordionWrapper from "./AccordionWrapper";
import AccordionOverview from "./AccordionOverview";
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

const TemplateOverview: Story = {
  render: () => {
    return (
      <AccordionOverview />
    );
  },
};

export const Overview = {
  ...TemplateOverview,
  args: {
    
  },
};

export const Playground = {
  ...Template,
  args: {
    theme: ThemeType.primary,
    bordered: false
  },
};

// Create a master template for mapping args to render the Accordion component
// const Template: Story = (args: AccordionProps) => <AccordionWrapper {...args} />;
// const TemplateOverview: Story<AccordionProps> = () => <AccordionOverview />;

// Reuse that template for creating different stories
// export const Overview = TemplateOverview.bind({});
// TemplateOverview.args = {
//   bordered: false
// };

// export const Playground = Template.bind({});
// Playground.args = {
//   theme: ThemeType.primary
// };
