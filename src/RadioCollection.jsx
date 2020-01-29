import React, { Component } from 'react';
import RadioBtn from './RadioBtn';
import Card from './Card';
import data from './Data';

class RadioBtnCltn extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Basic',
      dataValue: data.BasicValue,
      styles: {
        height: 150,
        width: 125.9,
        backgroundColor: '#5bbeec',
        position: 'absolute',
        left: 30,
        borderBottomRightRadius: 52,
        borderTopLeftRadius: 20
      }
    };
  }
  checkedBtn = event => {
    this.setState({
      value: event.target.value
    });
    if (event.target.value === 'Advance') {
      this.setState({
        dataValue: data.AdvanceValue,
        styles: {
          height: 150,
          width: 125.9,
          backgroundColor: '#F4C901',
          position: 'absolute',
          left: 156,
          borderBottomRightRadius: 52
        }
      });
    } else {
      if (event.target.value === 'Superior') {
        this.setState({
          dataValue: data.SuperiorValue,
          styles: {
            height: 150,
            width: 125.9,
            backgroundColor: '#11B641',
            position: 'absolute',
            left: 284,
            borderBottomRightRadius: 52
          }
        });
      } else {
        this.setState({
          dataValue: data.BasicValue,
          styles: {
            height: 150,
            width: 125.9,
            backgroundColor: '#5bbeec',
            position: 'absolute',
            left: 30,
            borderBottomRightRadius: 52
          }
        });
      }
    }
  };
  render() {
    return (
      <div>
        <div className="radio-btn-cltn">
          <div style={this.state.styles}></div>
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
        <Card Value={this.state.dataValue} />
      </div>
    );
  }
}

export default RadioBtnCltn;
