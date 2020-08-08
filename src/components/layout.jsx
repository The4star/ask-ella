/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// local images
import { linkedIn, imdb } from '../images/image-variables'

// icons 
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()}, Ella Lehaf
          </p>
          <p><EmailIcon className="email-icon"/> ella@ellalehaf.com</p>
          <p><PhoneIphoneIcon className="phone-icon" /> 0403138275</p>
          <a href="https://www.linkedin.com/in/ellalehaf/" target="_blank" rel="noopener noreferrer">{linkedIn}</a>
          <a href="https://www.imdb.com/name/nm2858095/" target="_blank" rel="noopener noreferrer" id="imdb">{imdb}</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
