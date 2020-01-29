import React, { Component } from 'react';
import Description from './Description';
import Title from './Title';
import Info from './Info';
import tick from './Image/tick.png';
import hospital from './Image/hospital.png';
import scissor from './Image/Scissors.png';
import heart from './Image/heart.png';
import disable from './Image/disable.png';
import tooth from './Image/tooth.png';
import stethoscope from './Image/stethoscope .png';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      values: props.Value
    };
    console.log(this.state.values);
    // console.log(props.value);
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
        <div className="grid-container">
          {/* <Description
            className="grid-item"
            paragraph={'What you pay'}
            heading={'VND 800 ngan'}
          />
          <Description
            className="grid-item"
            paragraph={'Protection amount'}
            heading={'VND 80 trieu'}
          />
          <Description
            className="grid-item"
            paragraph={'Insurer'}
            heading={'Bao Minh Corporation'}
          />
          <Description
            className="grid-item"
            paragraph={'Amount of time you are covered'}
            heading={'1 year'}
          /> */}
          {descr}
        </div>
        <hr />
        <div className="flex-container">
          <Title className="flex-item" img={tick} heading={"What's included"} />
          {/* <Info
            className="flex-item"
            img={hospital}
            heading={'Hospital costs'}
            paragraph={`VND 2 million/ day, max. of VND 80 million`}
          />
          <Info
            className="flex-item"
            img={scissor}
            heading={'Surgery costs'}
            paragraph={`VND 40 million/ year`}
          />

          <Info
            className="flex-item"
            img={heart}
            heading={'Money in case of death'}
            paragraph={`Max. of VND 80 million`}
          />
          <Info
            className="flex-item"
            img={disable}
            heading={`Money in case total disability`}
            paragraph={`Max. of VND 80 million`}
          /> */}

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
