import React, { Component } from "react";
import {connect} from 'react-redux'
import store, {addGrocery} from '../store'

class AddGrocery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === "Enter") {
      this.props.add(this.state.input);
      this.setState({ input: "" });
    }
  }

  render() {
    return (
      <div className="add-grocery">
        <input
          type="text"
          value={this.state.input}
          onChange={evt => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          onClick={() => {
            this.props.add(this.state.input);
            this.setState({ input: "" });
          }}>
          Add Grocery
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    //calls dispatch with addGrocery
    add: (text)=>dispatch(addGrocery(text))
  }
}
//first argyment null because no mapStateToProps
const Presentational = connect(null, mapDispatchToProps)(AddGrocery)

export default Presentational;