import React, { Component } from 'react';

class RadioBtn extends Component {
  render() {
    return (
      <div className="radio-btn-div">
        <b className="radio-title">{this.props.btnTitle}</b>
        <input
          type="radio"
          name="radio-btn"
          id="radio-btn"
          value={this.props.btnTitle}
          checked={this.props.check}
          onChange={this.props.getValue}
        />
      </div>
    );
  }
}

export default RadioBtn;
