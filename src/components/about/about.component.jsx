import React from 'react'; 
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

const renderSlides = (slide, i) => {
  return (
    <SwiperSlide key={i}>
        <h3>
        {slide.slideHeader}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: slide.slideBody }}>
        </p> 
    </SwiperSlide>
  )
}

const About = ({slides}) => {

  return (
    <div className="about-section">
      <div className="content-wrapper">
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