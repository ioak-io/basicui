import { Meta, StoryObj } from '@storybook/react';
import ColorScheme from ".";
import UserGuide from '.';

const meta: Meta<typeof UserGuide> = {
  title: "User Guide",
  component: UserGuide
};

export default meta;

type Story = StoryObj<typeof UserGuide>;

export const Introduction: Story = {
  args: {
    variant: "introduction"
  }
};


export const ColorSchemeGenerator: Story = {
  args: {
    variant: "color-scheme-generator"
  }
};

