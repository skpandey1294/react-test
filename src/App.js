import React, { Component } from 'react';
import Header from './Header';
import Question from './Question';
import RadioBtn from './RadioBtn';
import Card from './Card';
import './App.css';
import data from './Data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data.BasicValue,
      value: 'Basic'
    };
  }

  checkedBtn = async(event) => {
    let temp;

    if (event.target.value === 'Advance') {
      temp = data.AdvanceValue;
      console.log(temp);
    } else {
      if (event.target.value === 'Superior') {
        temp = data.SuperiorValue;
      } else {
        temp = data.BasicValue;
      }
    }

    console.log(temp);

    this.setState({
      data: { temp },
      value: event.target.value
    });
    console.log(this.state);
    console.log(this.state.value);
  };

  // setStateData = value => {
  //   this.setState({
  //     data: value
  //   });
  //   console.log(this.state.data);
  // };

  render() {
    return (
      <div id="grad">
        <Header />
        <Question
          question={
            'We have 3 policies for you to choose from - which best suits your needs?'
          }
        />
        {/* <RadioBtnCltn stateData={this.setStateData} />
         */}

        <RadioBtn
          btnTitle={'Basic'}
          check={this.state.value === 'Basic'}
          getValue={this.checkedBtn}
        />
        <RadioBtn
          btnTitle={'Advance'}
          check={this.state.value === 'Advance'}
          getValue={this.checkedBtn}
        />
        <RadioBtn
          btnTitle={'Superior'}
          check={this.state.value === 'Superior'}
          getValue={this.checkedBtn}
        />

        <Card Value={this.state.data} />
      </div>
    );
  }
}

export default App;
