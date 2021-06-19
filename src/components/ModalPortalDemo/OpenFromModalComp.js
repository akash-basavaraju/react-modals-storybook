import React, { useState } from "react";
import ModalPortal from "../../shared/ModalPortal";

function OpenFromModalComp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open From Modal
      </button>
      {isModalOpen && (
        <ModalPortal
          onClose={() => {
            setIsModalOpen(false);
          }}
          modalStyle={{ top: "100px", left: "100px" }}
        >
          <div>This is Another Modal</div>
        </ModalPortal>
      )}
    </div>
  );
}

export default OpenFromModalComp;
