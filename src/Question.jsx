import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className="question-tag">
        <p>
          <b>{this.props.question}</b>
        </p>
      </div>
    );
  }
}

export default Question;
