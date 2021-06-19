import React, { useState } from "react";
import ModalPortal from "../../shared/ModalPortal";
import "./ModalPortalDemo.css";

function ModalPortalDemo({ children, disableHide = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="simple_container">
      <button
        className="simple_button"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Show Modal
      </button>
      {!disableHide && (
        <button
          className="simple_button"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          Hide Modal
        </button>
      )}
      {isModalOpen && (
        <ModalPortal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          {children}
        </ModalPortal>
      )}
    </div>
  );
}

export default ModalPortalDemo;
