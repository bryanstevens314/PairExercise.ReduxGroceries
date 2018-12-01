import React from "react";
import Footer from "./Footer";
import AddGrocery from "./AddGrocery";
import ActiveGroceries from "./ActiveGroceries";
import AllGroceries from "./AllGroceries";
import BoughtGroceries from "./BoughtGroceries";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => (
  <Router>
    <div className="app">
      <img src="groceries.png" alt="Groceries" width="500" />

      <div className="list">
        <AddGrocery />
        <Route exact path="/" component={AllGroceries}></Route>
        <Route exact path="/all" component={AllGroceries}></Route>
        <Route exact path="/active" component={ActiveGroceries}></Route>
        <Route exact path="/bought" component={BoughtGroceries}></Route>
        {/* <GroceryList /> */}
        <Footer />
      </div>
    </div>

  </Router>

);

export default App;
