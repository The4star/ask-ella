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
import { linkedIn, imdb, closeIcon } from '../images/image-variables'

// icons 
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';

const handleCredits = () => {
  const credits = document.querySelector(".credits")

  if (credits.style.display === "block") {
    credits.style.display = "none";
  } else {
    credits.style.display = "block";
  }
}

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
          <button onClick={handleCredits} className="credits-button">Site Credits</button>
          <div className="credits" style={{display: "none"}}>
          <button className={`close-button`} onClick={() => handleCredits()} >{closeIcon}</button>
            <h4>
              Illustrations
            </h4>
            <a href= "http://max-dalton.com/" target="_blank" rel="noopener noreferrer">
              Max Dalton Illustration
            </a>
            <h4>
              Site Design and Development
            </h4>
            <a href="https://the-4star-045711.netlify.app/" target="_blank" rel="noopener noreferrer">
              Clinton Forster
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
