import React from "react";


const GroceryItem = ({ onchange, onClick, bought, text }) => {
  return (
    <div >
      <li
        onClick={onClick}
        style={{
          textDecoration: bought ? 'line-through' : "none"
        }}>
        {text}

      </li>
      <div className="quantityDiv">
        <p>Quantity:</p>
        <select onChange={onchange}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(element => <option key={element} value={element}>{element}</option>)}
        </select>
      </div>
    </div>
  )
};

export default GroceryItem;
