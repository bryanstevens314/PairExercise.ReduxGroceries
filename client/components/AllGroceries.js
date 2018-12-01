
import React from "react";
import { connect } from "react-redux";
import GroceryItem from "./GroceryItem";
import store, { toggleGrocery, setQuantity } from '../store'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //calls dispatch with addGrocery
    toggle: (id) => dispatch(toggleGrocery(id)),
    setQuantity: (event) => {
      dispatch(setQuantity(event.target.value))
    }
  }
}
const GroceryList = (props) => {
  return (
    <ul>
      {props.groceries.map(grocery => (
        <GroceryItem key={grocery.id} onchange={props.setQuantity} onClick={() => props.toggle(grocery.id)}{...grocery} />
      ))}
    </ul>
  )
};

const Persentational = connect(mapStateToProps, mapDispatchToProps)(GroceryList)
export default Persentational;
