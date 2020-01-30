import React, { Component } from 'react';

class MenuList extends Component {
  render() {
    return (
      <div className="menu-list">
        <ul>
          <li id="first">Coverage</li>
          <li>Q & A</li>
          <li>Review</li>
          <li>Checkout</li>
        </ul>
      </div>
    );
  }
}

export default MenuList;
