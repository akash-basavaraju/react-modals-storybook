import React from "react";
import ReactDOM from "react-dom";
import CloseButton from "../CloseButton";
import "./index.css";

const PortalModal = ({ onClose, children, height, width, modalStyle }) => {
  return ReactDOM.createPortal(
    <div className="modalp_container" style={{ height, width, ...modalStyle }}>
      <CloseButton onClose={onClose} />
      {children}
    </div>,
    document.body
  );
};

export default PortalModal;
