import React from "react";
import CloseButton from "../CloseButton";
import "./index.css";

export default function ModalFunction({ modalStack = [], hideModal }) {
  if (modalStack.length === 0) {
    return null;
  }
  return modalStack.map(
    ({ comp, onClose, modalStyle, height, width }, index) => {
      return (
        <div
          key={index}
          className="modalf_container"
          style={{ ...modalStyle, height, width }}
        >
          <CloseButton
            onClose={() => {
              onClose();
              hideModal(index);
            }}
          />
          {comp}
        </div>
      );
    }
  );
}
