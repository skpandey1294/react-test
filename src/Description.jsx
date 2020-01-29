import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <p>
        {this.props.paragraph}
        <br></br> <b>{this.props.heading}</b>
      </p>
    );
  }
}

export default Description;
