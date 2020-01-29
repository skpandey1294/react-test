import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <img src={this.props.img} alt="right logo" className="logo" />
        <b>{this.props.heading}</b>
        <p className="hospital-desc">{this.props.paragraph}</p>
      </div>
    );
  }
}

export default Title;
