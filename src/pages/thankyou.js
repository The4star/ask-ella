import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import '../scss/thankyou.styles.scss';

const ThankYouPage = () => (
  <Layout>
    <div className="thanks">
      <h1>You Asked <span>Ella</span></h1>
      <p>Thank you for your submission!</p>
      <p>I will be in touch shortly</p>
      <Link to="/">
        Back
      </Link>
    </div>
    
  </Layout>
)

export default ThankYouPage