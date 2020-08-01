import React from 'react'; 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactMarkdown from 'react-markdown'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const renderSlides = (slide) => {
  return (
    <SwiperSlide>
        <h3>
        {slide.slideHeader}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: slide.slideBody }}>
        </p> 
    </SwiperSlide>
  )
}

const About = ({slides, images}) => {

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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              slides.map(slide => {
                return renderSlides(slide)
              })
            }
          </Swiper>
        </div>
        
      </div>
    </div>
  )
}

export default About;