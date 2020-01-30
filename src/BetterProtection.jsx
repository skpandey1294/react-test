import React, { Component } from 'react';
import arrow from './Image/greenArrow.png';

class BetterProtection extends Component {
  render() {
    return (
      <div className="better-protection-tag">
        <p>Better Protection</p>
        <img className="better-protection" src={arrow} alt="logo" />
      </div>
    );
  }
}

export default BetterProtection;
