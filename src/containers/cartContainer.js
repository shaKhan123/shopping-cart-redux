import { connect } from 'react-redux'
import Cart from "../components/Cart";
import {
    removeItem,
    addQuantity,
    subtractQuantity,
  } from "../actions/cartActions";
  
const mapStateToProps = (state) => {
    return {
      items: state.addedItems,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      removeItem: (id) => {
        dispatch(removeItem(id));
      },
      addQuantity: (id) => {
        dispatch(addQuantity(id));
      },
      subtractQuantity: (id) => {
        dispatch(subtractQuantity(id));
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);
  