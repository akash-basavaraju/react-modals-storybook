import { connect } from "react-redux";
import { showModal, hideModal } from "../../store/actions";
import { bindActionCreators } from "redux";
import ModalFunction from "./ModalFunctionDemo";

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

export default connect(mapStateToProps, mapDispatchToProps)(ModalFunction);
