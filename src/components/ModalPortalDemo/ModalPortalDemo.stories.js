import React from "react";
import ModalPortalDemo from "./ModalPortalDemo";
import MultipleModalComp from "./MultipleModalComp";
import OpenFromModalComp from "./OpenFromModalComp";

export default {
  component: ModalPortalDemo,
  title: "Portal Modal",
};

const Template = (args) => <ModalPortalDemo {...args} />;

export const SimpleModal = Template.bind({});
SimpleModal.args = {
  children: <div>This is Simple Portal Modal</div>,
};

export const OpenFromModal = Template.bind({});
OpenFromModal.args = {
  children: <OpenFromModalComp />,
};

export const MultipleModal = Template.bind({});
MultipleModal.args = {
  children: <MultipleModalComp />,
};
