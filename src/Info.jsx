import React, { Component } from 'react';

class Info extends Component {
  render() {
    let styles = {};
    if (
      this.props.stateValue === 'Basic' ||
      this.props.heading === 'Money in case of death'
    ) {
      styles = { display: 'none' };
    } else {
      styles = { display: 'block' };
    }
    return (
      <div className="inner-flex">
        <img src={this.props.img} alt="right logo" className="logo-size" />
        <b>{this.props.heading}</b>
        <div id="arrow-sec">
          <p className="hospital-desc">{this.props.paragraph}</p>
          <img
            style={styles}
            src={this.props.arrow}
            alt="arrow"
            className="better-protection"
            id="better-protection-tags"
          />
        </div>
      </div>
    );
  }
}

export default Info;
