import React, { useState } from "react";
import ModalPortal from "../../shared/ModalPortal";

let multipleModalTop = 50;
let multipleModalLeft = 0;

function MultipleModalComp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  multipleModalLeft += 10;
  multipleModalTop += 10;
  return (
    <div>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Another Modal
      </button>
      {isModalOpen && (
        <ModalPortal
          onClose={() => {
            setIsModalOpen(false);
          }}
          modalStyle={{ top: multipleModalTop, left: multipleModalLeft }}
        >
          <MultipleModalComp />
        </ModalPortal>
      )}
    </div>
  );
}

export default MultipleModalComp;
