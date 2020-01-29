import React, { Component } from 'react';
import RadioBtn from './RadioBtn';
import data from './Data';

class RadioBtnCltn extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Basic'
    };
  }
  checkedBtn = event => {
    this.setState({
      value: event.target.value
    });
    if (event.target.value === 'Advance') {
      this.props.stateData(data.AdvanceValue);
      console.log(data.AdvanceValue);
    } else {
      if (event.target.value === 'Superior') {
        this.props.stateData(data.SuperiorValue);
        console.log(data.SuperiorValue);
      } else {
        this.props.stateData(data.BasicValue);
        console.log(data.BasicValue);
      }
    }
  };
  render() {
    return (
      <div className="radio-btn-cltn">
        <RadioBtn
          btnTitle={'Basic'}
          check={this.state.value === 'Basic'}
          getValue={this.checkedBtn}
        />
        <RadioBtn
          btnTitle={'Advance'}
          check={this.state.value === 'Advance'}
          data={data.AdvanceValue}
          getValue={this.checkedBtn}
        />
        <RadioBtn
          btnTitle={'Superior'}
          check={this.state.value === 'Superior'}
          data={data.SuperiorValue}
          getValue={this.checkedBtn}
        />
      </div>
    );
  }
}

export default RadioBtnCltn;
