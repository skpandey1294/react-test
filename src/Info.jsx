import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Info extends Component {
  render() {
    return (
      <div className="inner-flex">
        <img src={this.props.img} alt="right logo" className="logo-size" />
        <b>{this.props.heading}</b>
        <p className="hospital-desc">{this.props.paragraph}</p>
      </div>
    );
  }
}

export default Info;
