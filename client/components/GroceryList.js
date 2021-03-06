
import React from "react";
import { connect } from "react-redux";
import GroceryItem from "./GroceryItem";
import store, { toggleGrocery } from '../store'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //calls dispatch with addGrocery
    toggle: (id) => dispatch(toggleGrocery(id))
  }
}
const GroceryList = (props) => {
  console.log(props)
  return (
    <ul>
      {props.groceries.map(grocery => (
        <GroceryItem key={grocery.id} onClick={() => props.toggle(grocery.id)}{...grocery} />
      ))}
    </ul>
  )
};

const Persentational = connect(mapStateToProps, mapDispatchToProps)(GroceryList)
export default Persentational;
