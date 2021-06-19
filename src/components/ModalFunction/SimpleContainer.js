import { connect } from "react-redux";
import { showModal, hideModal } from "../../store/actions";
import { bindActionCreators } from "redux";
import Simple from "./Simple";

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

export default connect(mapStateToProps, mapDispatchToProps)(Simple);
