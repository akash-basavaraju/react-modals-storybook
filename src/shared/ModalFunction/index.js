import { connect } from "react-redux";
import ModalFunction from "./ModalFunction";
import { bindActionCreators } from "redux";
import { showModal, hideModal } from "../../store/actions";

const mapStateToProps = (state) => {
  debugger;
  return {
    ...state.modalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal,
      hideModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFunction);
