import React from "react"
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

// styles 
import '../scss/main.scss';

//  components 
import Home from '../components/home/home.component';
import About from "../components/about/about.component";
import Services from "../components/services/services.component";
import Work from "../components/work/work.component";
import Ask from "../components/ask/ask.component";

import { linkTo, debounce } from '../functions/general'

import FloatingNav from "../components/floating-nav/floating-nav.component";
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ellaImage: "askEllaRed"
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', debounce(this.handleScroll))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", debounce(this.handleScroll))
  }

  componentDidUpdate = () => {
    
  }

  handleScroll = (e) => {
    const aboutSectionTop = document.querySelector('.about-section').offsetTop;
    const servicesSectionTop = document.querySelector('.services-section').offsetTop;
    const workSectionTop = document.querySelector('.work-section').offsetTop;
    const askSectionTop = document.querySelector('.ask-section').offsetTop;

    if (window.scrollY >= aboutSectionTop - 300 && window.scrollY < servicesSectionTop - 400) {
      this.setState({ellaImage: "askEllaGreen"})
    } else if (window.scrollY >= workSectionTop - 300 && window.scrollY < askSectionTop - 400) {
      this.setState({ellaImage: "askEllaBlue"})
    } else {
      this.setState({ellaImage: "askEllaRed"})
    }
  }

  render() {
    // images
    const data = this.props.data.datoCmsMainPage
    const images = data.images
    const askEllaRed = images[1].fluid
    const askEllaGreen = images[2].fluid
    const askEllaBlue = images[5].fluid
    const { ellaImage } = this.state

    // content
    const aboutSlides = data.aboutPage
    const servicesContent = data.services
    const workContent = data.work
    const formOptions = data.formoptions;

    return (
      <Layout>
        <SEO title="Solutions" />
        <FloatingNav />
        {
          ellaImage === "askEllaRed" ? 
          <Img fluid={askEllaRed} className="ella" />
          : ellaImage === "askEllaGreen" ?
          <Img fluid={askEllaGreen} className="ella" />
          : ellaImage === "askEllaBlue" ?
          <Img fluid={askEllaBlue} className="ella" />
          :
          <Img fluid={askEllaRed} className="ella" />
        }
        <div onClick={() => linkTo("ASK")} className="ask-button">
          <p>
            ASK ME
          </p>
          <p>↓</p>
        </div>
        <Home images={images} />
        <About images={images} slides={aboutSlides}/>
        <Services images={images} content={servicesContent}/>
        <Work content={workContent} />
        <Ask formOptions={formOptions}/>
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
    aboutPage {
      slideHeader
      slideBody
    }
    services {
      ... on DatoCmsContent {
        id
        contentText
      }
      ... on DatoCmsService {
        id
        serviceContent
        title
      }
    }
    work {
      ... on DatoCmsWork {
        id
        title
        workContent
      }
      ... on DatoCmsFunFact {
        id
        title
        funFactContent
      }
    }
    formoptions {
      name
    }
  }
}
`