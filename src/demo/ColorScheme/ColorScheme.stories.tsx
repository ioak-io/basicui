import { Meta, StoryObj } from "@storybook/react";
import ColorScheme from ".";

const meta: Meta<typeof ColorScheme> = {
  title: "Styleguide/Color Schemes",
  component: ColorScheme,
};

export default meta;

type Story = StoryObj<typeof ColorScheme>;

export const ThemesOverview: Story = {
  args: {
    discriminator: "primary",
  },
};

// Reuse that template for creating different stories
export const Black: Story = {
  args: {
    discriminator: "black",
  },
};

export const BlackExtended: Story = {
  args: {
    discriminator: "black-extended",
  },
};

export const White: Story = {
  args: {
    discriminator: "white",
  },
};

export const WhiteExtended: Story = {
  args: {
    discriminator: "white-extended",
  },
};

export const Default: Story = {
  args: {
    discriminator: "default",
  },
};

export const DefaultTransparent: Story = {
  args: {
    discriminator: "default-transparent",
  },
};

export const Primary: Story = {
  args: {
    discriminator: "primary",
  },
};

export const PrimaryTransparent: Story = {
  args: {
    discriminator: "primary-transparent",
  },
};

export const Danger: Story = {
  args: {
    discriminator: "danger",
  },
};

export const DangerTransparent: Story = {
  args: {
    discriminator: "danger-transparent",
  },
};
