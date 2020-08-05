import React from 'react'; 

import InformationPopup from '../information-popup/information-popup.component'

const togglePopup = (id) => {
  const popupToToggle = document.querySelector(`#${id}`)
  
  if (popupToToggle.style.display === "none") {
    return popupToToggle.style.display = "flex"
  } else {
    return popupToToggle.style.display = "none"
  }
}

const Work = ({content}) => {
console.log(content)
  return (
    <div className="work-section">
      <div className="work-content-wrapper">
        <div className="header">
          <h2>
            Work & fun fac<span>t</span>s
          </h2>
        </div>
        <div className="list-area">
          <div className="work-list">
            {
              content.map(section => {
                if (section.workContent) {
                  return (
                    <div key={`${section.title}`}>
                      <button  className="work-title" onClick={() => togglePopup(`${section.title.replace(/ /g, "-")}-popup`)}>
                        {section.title}
                      </button>
                      <InformationPopup id={`${section.title.replace(/ /g, "-")}-popup`} colour="blue" title={section.title} content={section.workContent} togglePopup={togglePopup} /> 
                    </div>
                  )
                }
                return null
              })
            }
          </div>
          <div className="fun-list">
            {
              content.map(section => {
                if (section.funFactContent) {
                  return (
                    <div key={`${section.title}`}>
                      <button  className="fun-title" onClick={() => togglePopup(`${section.title.replace(/ /g, "-")}-popup`)}>
                        {section.title}
                      </button>
                      <InformationPopup id={`${section.title.replace(/ /g, "-")}-popup`} colour="blue" title={section.title} content={section.funFactContent} togglePopup={togglePopup} funHeader/> 
                    </div>
                  )
                }
                return null
              })
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Work;