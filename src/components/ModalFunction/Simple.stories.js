import React from "react";
import Simple from "./SimpleContainer";
import { Provider as ReduxProvider } from "react-redux";
import store from "../../store";
import ModalFunction from "../../shared/ModalFunction";
import OpenFromModalComp from "./OpenFromModalComp";

export default {
  component: Simple,
  title: "Simple",
};

const Template = (args) => (
  <ReduxProvider store={store}>
    <ModalFunction />
    <Simple {...args} />
  </ReduxProvider>
);

export const SimpleModal = Template.bind({});
SimpleModal.args = {
  showModalProps: {
    onClose: () => {
      console.log("Simple Functional Modal Closed");
    },
    comp: <div>This is the Simple Functional Modal</div>,
    width: "calc(100% - 2rem)",
    height: "50%",
    modalStyle: { top: "200px" },
  },
};

export const OpenFromModal = Template.bind({});
OpenFromModal.args = {
  showModalProps: {
    onClose: () => {
      console.log("Simple Functional Modal Closed");
    },
    comp: <OpenFromModalComp />,
    width: "500px",
    height: "50%",
    modalStyle: { top: "100px", left: "100px" },
  },
};
