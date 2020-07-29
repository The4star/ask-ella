import React from "react"
import Img from "gatsby-image";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// styles 
import './main.scss'

//  components 
import Home from '../components/home/home.component'
import About from "../components/about/about.component"
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ellaImage: "askEllaRed"
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.debounce(this.handleScroll))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll))
  }

  componentDidUpdate = () => {
    console.log(this.state)
  }

  handleScroll = (e) => {
    const aboutSectionTop = document.querySelector('.about-section').offsetTop
    if (window.scrollY >= aboutSectionTop) {
      this.setState({ellaImage: "askEllaGreen"})
    } else {
      this.setState({ellaImage: "askEllaRed"})
    }
  }

  debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  render() {
    // images
    const images = this.props.data.datoCmsMainPage.images
    const askEllaRed = images[1].fluid
    const askEllaGreen = images[2].fluid
    const { ellaImage } = this.state
    return (
      <Layout>
        <SEO title="Solutions" />
        {
          ellaImage === "askEllaRed" ? 
          <Img fluid={askEllaRed} className="ella" />
          : ellaImage === "askEllaGreen" ?
          <Img fluid={askEllaGreen} className="ella" />
          :
          <Img fluid={askEllaRed} className="ella" />
        }
        <Home images={images} />
        <About images={images}/>
      </Layout>
    )
  }
  
  
}

export default IndexPage

export const query = graphql`
  query MainQuery {
  datoCmsMainPage {
    images {
      fluid(maxWidth: 500) {
        ...GatsbyDatoCmsFluid
      }
    }
  }
}
`