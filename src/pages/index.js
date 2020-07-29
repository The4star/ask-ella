import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// styles 
import './main.scss'

//  components 
import Home from '../components/home/home.component'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    // images
    const images = this.props.data.datoCmsMainPage.images
    
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Main</title>
        </Helmet>
        <SEO title="Solutions" />
        <Home images={images} />
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