import React, { Component } from 'react';
import Header from './Header';
import Question from './Question';
import RadioBtnCltn from './RadioCollection';
import './App.css';
import dataValue from './Data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dataValue.BasicValue
    };
  }

  setStateData = value => {
    this.setState({
      data: value
    });
  };

  render() {
    return (
      <div id="grad">
        <Header />
        <Question
          question={
            'We have 3 policies for you to choose from - which best suits your needs?'
          }
        />
        <RadioBtnCltn stateData={this.setStateData} />
        {/* <Card Value={this.state.data} /> */}
      </div>
    );
  }
}

export default App;
