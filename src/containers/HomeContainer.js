import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import Home from "../components/Home";

const mapStateToProps = (state) => {
    return {
      items: state.items,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => {
        dispatch(addToCart(id));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);