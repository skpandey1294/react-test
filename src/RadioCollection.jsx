import React, { Component } from 'react';
import RadioBtn from './RadioBtn';
import Card from './Card';
import data from './Data';
import radioButton from './Image/circle.png';

class RadioBtnCltn extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Basic',
      dataValue: data.BasicValue,
      styles: {
        height: 155,
        width: 125.9,
        backgroundColor: '#5bbeec',
        position: 'absolute',
        left: 30,
        top: 250,
        borderBottomRightRadius: 35,
        borderTopLeftRadius: 20
      },
      circleStyle: {
        height: 45,
        width: 40,
        backgroundColor: '#5bbeec',
        position: 'absolute',
        left: 70,
        top: 320
      },
      innerStyle: {
        position: 'absolute',
        height: 10,
        width: 12,
        top: 0,
        left: 115,
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: 6.4,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        backgroundColor: '#5bbeec'
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
          height: 160,
          width: 125.9,
          backgroundColor: '#F4C901',
          position: 'absolute',
          left: 156,
          top: 252,
          borderTopLeftRadius: 15,
          borderBottomRightRadius: 35
        },
        circleStyle: {
          height: 40,
          width: 40,
          backgroundColor: '#F4C901',
          position: 'absolute',
          left: 196,
          top: 320
        },
        innerStyle: {
          position: 'absolute',
          height: 10,
          width: 12,
          top: 0,
          left: 115,
          borderRadius: '50%',
          display: 'inline-block',
          marginLeft: 6.4,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          backgroundColor: '#F4C901       '
        }
      });
    } else {
      if (event.target.value === 'Superior') {
        this.setState({
          dataValue: data.SuperiorValue,
          styles: {
            height: 160,
            width: 125.9,
            backgroundColor: '#11B641',
            position: 'absolute',
            left: 284,
            top: 252,
            borderBottomRightRadius: 35,
            borderTopLeftRadius: 15
          },

          circleStyle: {
            height: 40,
            width: 40,
            backgroundColor: '#11B641',
            position: 'absolute',
            left: 322,
            top: 320
          },
          innerStyle: {
            position: 'absolute',
            height: 30,
            width: 12,
            top: 0,
            left: 115,
            borderRadius: '50%',
            display: 'inline-block',
            marginLeft: 6.4,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            backgroundColor: '#11B641'
          }
        });
      } else {
        this.setState({
          dataValue: data.BasicValue,
          styles: {
            height: 155,
            width: 125.9,
            backgroundColor: '#5bbeec',
            position: 'absolute',
            left: 30,
            top: 252,
            borderBottomRightRadius: 35,
            borderTopLeftRadius: 15
          },
          circleStyle: {
            height: 40,
            width: 40,
            backgroundColor: '#5bbeec',
            position: 'absolute',
            left: 70,
            top: 320
          },
          innerStyle: {
            position: 'absolute',
            height: 10,
            width: 12,
            top: 0,
            left: 115,
            borderRadius: '50%',
            display: 'inline-block',
            marginLeft: 6.4,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            backgroundColor: '#5bbeec'
          }
        });
      }
    }
  };
  render() {
    return (
      <div>
        <div className="radio-btn-cltn">
          <div style={this.state.styles}>
            <div className="inner-z" style={this.state.innerStyle}></div>
          </div>
          <img
            src={radioButton}
            alt="radio"
            id="circle"
            style={this.state.circleStyle}
          />
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
        <Card Value={this.state.dataValue} val={this.state.value} />
      </div>
    );
  }
}

export default RadioBtnCltn;
