import React from 'react'; 
import Img from "gatsby-image";

import RectangularButton from '../../buttons/rectangular-button/rectangular-button.component';

import {linkTo} from '../../../functions/general';

const MagicButton = ({title, image, p1, p2, colour, buttonText}) => {

  return (
    <div className="magic-wrapper">
      <div className="magic-background">

      </div>
      <div className="magic-image">
        <Img fluid={image} />
      </div>
      <div className="section-title">
          <p onClick={() => linkTo(title)}>
            {title}
          </p>
      </div>
      <div className={`blurb ${colour}`}>
        <p>
          {p1}
        </p>
        <p>
          {p2}
        </p>
      </div>
      <div className="button">
        <RectangularButton colour={colour} text={buttonText} place={title} />
      </div>
    </div>
  )
}

export default MagicButton;
