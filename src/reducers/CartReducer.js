import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
} from "../actions/cartActions";
import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";
import Item5 from "../images/item5.jpg";
import Item6 from "../images/item6.jpg";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find((item) => item.id === action.id);
      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find((item) => item.id === action.id);
      let addedItemsUpdated = state.addedItems.filter(
        (item) => item.id !== action.id
      );
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      return {
        ...state,
        addedItems: addedItemsUpdated,
        total: newTotal,
      };

    case ADD_QUANTITY:
      let addedItem1 = state.items.find((item) => item.id === action.id);
      addedItem1.quantity += 1;
      let newTotal1 = state.total + addedItem1.price;
      return {
        ...state,
        total: newTotal1,
      };

    case SUB_QUANTITY:
      let addedItem2 = state.items.find((item) => item.id === action.id);
      if (addedItem2.quantity === 1) {
        let newTotal2 = state.total - addedItem2.price;
        let addedItemsUpdated2 = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        return {
          ...state,
          total: newTotal2,
          addedItems: addedItemsUpdated2,
        };
      } else {
        addedItem2.quantity -= 1;
        let newTotal2 = state.total - addedItem2.price;
        return {
          ...state,
          total: newTotal2,
        };
      }

    case ADD_SHIPPING:
      return {
        ...state,
        total: state.total + 6,
      };

    case SUB_SHIPPING:
      return {
        ...state,
        total: state.total - 6,
      };
    default:
      return state;
  }
};
export default CartReducer;
