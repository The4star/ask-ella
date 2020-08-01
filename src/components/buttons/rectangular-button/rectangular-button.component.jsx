import React from 'react';

const RectangularButton = ({text, colour }) => (
  <div className={`rect-button ${colour}`}>
    <p>
      {text}
    </p>
  </div>
)

export default RectangularButton