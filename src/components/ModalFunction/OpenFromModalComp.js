import React from "react";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../store/actions";
import { bindActionCreators } from "redux";

function OpenFromModalComp({ showModal }) {
  return (
    <div>
      <button
        onClick={() => {
          showModal({
            onClose: () => {
              console.log("Simple Functional Modal Closed");
            },
            comp: <div>This is Another Modal</div>,
            width: "500px",
            height: "50%",
            modalStyle: { top: "200px" },
          });
        }}
      >
        Open From Modal
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state.modalReducer,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal,
      hideModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenFromModalComp);
