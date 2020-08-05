import React from 'react'; 
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

const renderSlides = (slide, i) => {
  return (
    <SwiperSlide key={i}>
        <h3>
        {slide.slideHeader}
        </h3>
        <div className="slide-body" dangerouslySetInnerHTML={{ __html: slide.slideBody }}>
        </div> 
    </SwiperSlide>
  )
}

const About = ({slides}) => {

  return (
    <div className="about-section">
      <div className="about-content-wrapper">
        <div className="header">
          <h2>
            Abou<span>t</span>
          </h2>
        </div>
        <div className="swiper">
          <Swiper
            spaceBetween={200}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
          >
            {
              slides.map((slide, i) => {
                return renderSlides(slide, i)
              })
            }
          </Swiper>
        </div>
        
      </div>
    </div>
  )
}

export default About;