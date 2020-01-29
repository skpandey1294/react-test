import React, { Component } from 'react';
import Description from './Description';
import Title from './Title';
import Info from './Info';
import tick from './Image/tick.png';
import equal from 'fast-deep-equal';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      values: props.Value
    };
    console.log(this.state.values);
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.Value, prevProps.Value)) {
      this.setState({
        values: this.props.Value
      });
    }
  }

  render() {
    let descr = this.state.values.description.map(currDescription => (
      <Description
        key={currDescription.heading}
        className="grid-item"
        paragraph={currDescription.paragraph}
        heading={currDescription.heading}
      />
    ));

    let info = this.state.values.info.map(currInfo => (
      <Info
        key={currInfo.heading}
        className="flex-item"
        img={currInfo.img}
        heading={currInfo.heading}
        paragraph={currInfo.paragraph}
      />
    ));

    return (
      <div id="detail">
        <div className="single-health">
          <b> Single </b>
          <br></br>
          <b>Health</b>
        </div>
        <div className="grid-container">{descr}</div>
        <hr />
        <div className="flex-container">
          <Title className="flex-item" img={tick} heading={"What's included"} />

          {info}
        </div>
        <br />
        <br />
        <React.Fragment>
          <button className="btn">Get this</button>
          <a href="#">
            <h2>More info ></h2>
          </a>
        </React.Fragment>
      </div>
    );
  }
}

export default Card;
