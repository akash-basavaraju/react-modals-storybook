import React from "react";
import "./Simple.css";

function SimpleModalFunction(props) {
  const { showModal, hideModal, showModalProps } = props;

  return (
    <div className="simple_container">
      <button
        className="simple_button"
        onClick={() => {
          showModal(showModalProps);
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
