import React from "react";
import ModalFunctionDemo from "./ModalFunctionDemoContainer";
import { Provider as ReduxProvider } from "react-redux";
import store from "../../store";
import ModalFunction from "../../shared/ModalFunction";
import OpenFromModalComp from "./OpenFromModalComp";

export default {
  component: ModalFunctionDemo,
  title: "Functional Modal",
};

const Template = (args) => (
  <ReduxProvider store={store}>
    <ModalFunction />
    <ModalFunctionDemo {...args} />
  </ReduxProvider>
);

export const SimpleModal = Template.bind({});
SimpleModal.args = {
  showModalProps: {
    onClose: () => {
      console.log("Simple Functional Modal Closed");
    },
    comp: <div>This is Simple Functional Modal</div>,
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

let multipleModalTop = 50;
let multipleModalLeft = 0;

export const MultipleModal = Template.bind({});
MultipleModal.args = {
  showModalProps: {
    onClose: () => {
      if (multipleModalLeft > 0) {
        multipleModalLeft -= 10;
        multipleModalTop -= 10;
      }
      console.log("Simple Functional Modal Closed");
    },
    comp: <div>This is Multiple Functional Modal</div>,
    width: "500px",
    height: "50%",
  },
  getModalStyle: () => {
    multipleModalLeft += 10;
    multipleModalTop += 10;
    return { top: `${multipleModalTop}px`, left: `${multipleModalLeft}px` };
  },
};
