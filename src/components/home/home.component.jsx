import React from "react";
import Img from "gatsby-image";
import MagicButton from "./magic-button/magic-button.component";

import { linkTo } from '../../functions/general';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    const {
      images
    } = this.props;

    const askEllaRed = images[1].fluid
    const ellaGreen = images[4].fluid
    const ellaRed = images[3].fluid
    const ellaBlue = images[6].fluid

    return (
      
      <div className="home-section">
        <Img fluid={askEllaRed} className="ella-mobile"/>
        <MagicButton title="ABOUT" image={ellaGreen} p1="Who is Ella?" p2="Let's meet her!" colour="teal" buttonText="Sure!"/>
        <MagicButton title="SERVICES" image={ellaRed} p1="What does Ella do?" p2="Find out!" colour="red" buttonText="Let's Go!"/> 
        <MagicButton title="WORK" image={ellaBlue} p1="What has Ella done?" p2="Have a look!" colour="blue" buttonText="Ok!"/>
        <div onClick={() => linkTo("ASK")} className="ask-button-mobile">
          <p>
            ASK ME
          </p>
          <p>↓</p>
        </div>
      </div>
    )
  }
}

export default Home;