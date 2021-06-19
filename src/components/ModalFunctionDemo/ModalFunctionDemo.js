import React from "react";
import "./ModalFunctionDemo.css";

function ModalFunctionDemo(props) {
  const { showModal, hideModal, showModalProps, getModalStyle } = props;

  return (
    <div className="simple_container">
      <button
        className="simple_button"
        onClick={() => {
          showModal(
            getModalStyle
              ? { ...showModalProps, modalStyle: getModalStyle() }
              : showModalProps
          );
        }}
      >
        Show Modal
      </button>
      <button
        className="simple_button"
        onClick={() => {
          hideModal();
        }}
      >
        Hide Modal
      </button>
    </div>
  );
}

export default ModalFunctionDemo;
