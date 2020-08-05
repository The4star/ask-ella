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

const Services = ({content}) => {

  return (
    <div className="services-section">
      <div className="services-content-wrapper">
        <div className="header">
          <h2>
            Services
          </h2>
        </div>
        <div className="paragraph-content" dangerouslySetInnerHTML={{ __html: content[0].contentText }} >
        </div>
        <div className="service-list">
          {
            content.map(service => {
              if (service.serviceContent) {
                return (
                  <div key={`${service.title}`}>
                    <button  className="service-title" onClick={() => togglePopup(`${service.title}-popup`)}>
                      {service.title}
                    </button>
                    <InformationPopup id={`${service.title}-popup`} colour="red" title={service.title} content={service.serviceContent} togglePopup={togglePopup} /> 
                  </div>
                )
              }
              return null
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services;