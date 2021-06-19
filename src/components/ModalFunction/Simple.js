import React from "react";
import "./Simple.css";

function SimpleModalFunction(props) {
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

export default SimpleModalFunction;
