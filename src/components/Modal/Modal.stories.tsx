import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Modal, { ModalProps }  from ".";
import ThemeType from "../types/ThemeType";
import StoryWrapper from "./StoryWrapper";
import ModalSizeType from "../types/ModalSizeType";
import ModalPlacement from "../types/ModalPlacement";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    // initialValues: [],
    // options: []
  },
} as Meta;

// Create a master template for mapping args to render the Modal component
const Template: Story<ModalProps> = (args: any) => <StoryWrapper {...args} />;

// Reuse that template for creating different stories
export const DefaultModal = Template.bind({});
DefaultModal.args = {
  isOpen: true,
  placement: ModalPlacement.bottom,
  size: ModalSizeType.xlarge
  // open,
  // onClose: handleClose,
  // children:
  //   <svg className="MuiSvgIcon-root cursor-pointer" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></svg>
};
