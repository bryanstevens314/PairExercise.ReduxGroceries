
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
const toggle = () => {
  props.toggle(grocery.id)
}
const GroceryList = (props) => {
  console.log(props)
  return (
    <ul>
      {props.groceries.map(grocery => {
        if (!grocery.bought) {
          return (
            <GroceryItem key={grocery.id} onchange={props.setQuantity} onClick={() => props.toggle(grocery.id)}{...grocery} />
          )
        }
        return <div></div>

      })}
    </ul>
  )
};

const Persentational = connect(mapStateToProps, mapDispatchToProps)(GroceryList)
export default Persentational;
