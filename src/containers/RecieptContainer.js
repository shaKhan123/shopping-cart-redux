import { connect } from "react-redux";
import Reciept from "../components/Reciept";

const mapStateToProps = (state) => {
    return {
      addedItems: state.addedItems,
      total: state.total,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addShipping: () => {
        dispatch({ type: "ADD_SHIPPING" });
      },
      substractShipping: () => {
        dispatch({ type: "SUB_SHIPPING" });
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Reciept);