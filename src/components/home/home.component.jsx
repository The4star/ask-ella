import React from "react";

import MagicButton from "./magic-button/magic-button.component";

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
  
    const ellaGreen = images[4].fluid
    const ellaRed = images[3].fluid
    const ellaBlue = images[6].fluid

    return (
      <div className="home-section">
        <MagicButton title="ABOUT" image={ellaGreen} p1="Who is Ella?" p2="Let's meet her!" colour="teal" buttonText="Sure!"/>
        <MagicButton title="SERVICES" image={ellaRed} p1="What does Ella do?" p2="Find out!" colour="red" buttonText="Let's Go!"/> 
        <MagicButton title="WORK" image={ellaBlue} p1="What has Ella done?" p2="Have a look!" colour="blue" buttonText="Ok!"/>
      </div>
    )
  }
}

export default Home;