import React, { Component } from 'react';
import Header from './Header';
import MenuList from './MenuList';
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
        <MenuList />
        <RadioBtnCltn stateData={this.setStateData} />
      </div>
    );
  }
}

export default App;
