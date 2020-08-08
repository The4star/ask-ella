import React from 'react';

import { linkTo } from '../../../functions/general'

const RectangularButton = ({text, colour, place }) => (
  <div onClick={() => linkTo(place)} className={`rect-button ${colour}`}>
    <p>
      {text}
    </p>
  </div>
)

export default RectangularButton