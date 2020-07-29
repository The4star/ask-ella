import React from 'react';

import './rectangular-button.styles.scss';

const RectangularButton = ({text, colour }) => (
  <div className={`rect-button ${colour}`}>
    <p>
      {text}
    </p>
  </div>
)

export default RectangularButton