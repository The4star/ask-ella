import React from "react";
import Img from "gatsby-image";

// styles
import './home.styles.scss';

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
    const ellaRed = images[1].fluid
    
    return (
      <div className="home-section">
        <Img className="ella-red" fluid={ellaRed} />
        
      </div>
    )
  }
}

export default Home;