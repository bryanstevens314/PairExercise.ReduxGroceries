import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
const ADD_GROCERY = "ADD_GROCERY";
const TOGGLE_GROCERY = "TOGGLE_GROCERY";
const SET_QUANTITY = "SET_QUANTITY";

let nextId = 0;
export const addGrocery = text => ({
  type: ADD_GROCERY,
  id: nextId++,
  quantity: 1,
  text
});

export const toggleGrocery = id => ({
  type: TOGGLE_GROCERY,
  id
});
export const setQuantity = quantity => ({
  type: SET_QUANTITY,
  quantity
});

const initialState = {
  groceries: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const grocery = {
        text: action.text,
        id: action.id,
        bought: false,
        quantity: 1
      };
      const newList = [...state.groceries, grocery];
      return { ...state, groceries: newList };
    case TOGGLE_GROCERY:
      const groceries = state.groceries.map(grocery => {
        if (grocery.id === action.id) {

          return { ...grocery, bought: !grocery.bought };
        } else {
          return grocery;
        }
      });
      return { ...state, groceries };
    case SET_QUANTITY:
      return { ...state, quantity: action.quantity }

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
// store.dispatch(addGrocery('Milk'))
// store.dispatch(addGrocery('Cookies'))
export default store;
