import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

// styles 
import './main.scss'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    // images
    const images = this.props.data.datoCmsMainPage.images
    const kaiser = images[0].fluid
    return (
      <Layout>
      <SEO title="Ask Ella" />
      <h1 className="font-test">
        ask Ella
      </h1>
      <Img fluid={kaiser} className="kaiser" />
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