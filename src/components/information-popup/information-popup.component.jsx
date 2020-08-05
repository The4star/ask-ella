import React from 'react';

import { closeIcon } from '../../images/image-variables';

const InformationPopup = ({id, colour, title, content, togglePopup, funHeader}) => {

  return (
    <div id={id} style ={{display: "none"}} className="popup">
      <div className="popup-background" onClick={() => togglePopup(id)} />
      <div className="popup-wrapper">
        <button className={`close-button ${colour}`} onClick={() => togglePopup(id)} >{closeIcon}</button>
        <div className={`popup-header ${colour} ${funHeader && "fun-header"}`}>
          
            {
              funHeader ?
                <h2>
                  <span dangerouslySetInnerHTML={{__html: title.replace(/t/g, "<span>t</span>").replace(/j/g, "J")}}></span>
                </h2>
              :
              <h2>
                Ask Ella, the<span dangerouslySetInnerHTML={{__html: title.replace(/t/g, "<span>t</span>")}}></span>
              </h2>
            }
        </div>
        <div className={`popup-content ${colour}`} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default InformationPopup;