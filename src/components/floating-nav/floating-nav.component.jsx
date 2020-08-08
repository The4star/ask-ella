import React, { Component } from 'react';

import { linkTo, debounce } from '../../functions/general';

class FloatingNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showNav: false
    }
  }
  componentDidMount = () => {
    window.addEventListener('scroll', debounce(this.handleNav))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", debounce(this.handleNav))
  }

  handleNav = () => {
    // sections
    const homeSection = document.querySelector('.home-section');
    const homeSectionBottom = homeSection.offsetHeight;
    const aboutSectionTop = document.querySelector('.about-section').offsetTop;
    const servicesSectionTop = document.querySelector('.services-section').offsetTop;
    const workSectionTop = document.querySelector('.work-section').offsetTop;
    const askSectionTop = document.querySelector('.ask-section').offsetTop;
    // spot for nav to appear
    const appearancePosition = window.screen.width >= 1025 ? document.querySelectorAll('.section-title')[0].offsetTop : homeSectionBottom - 200;
    
    
    if (window.scrollY - 50 >= appearancePosition) {
      if (this.state.showNav === false) {
        this.setState({showNav: true})
      }
    } else {
      if (this.state.showNav === true) {
        this.setState({showNav: false})
      }
    }

    if (window.scrollY >= aboutSectionTop - 100 && window.scrollY < servicesSectionTop - 400) {
      document.querySelector('#about-nav').style.opacity = 0
      document.querySelector('#services-nav').style.opacity = 1
      document.querySelector('#work-nav').style.opacity = 1
    } else if (window.scrollY >= servicesSectionTop - 100 && window.scrollY < workSectionTop - 400) {
      document.querySelector('#about-nav').style.opacity = 1
      document.querySelector('#services-nav').style.opacity = 0
      document.querySelector('#work-nav').style.opacity = 1
    } else if (window.scrollY >= workSectionTop - 100 && window.scrollY < askSectionTop - 400) {
      document.querySelector('#about-nav').style.opacity = 1
      document.querySelector('#services-nav').style.opacity = 1
      document.querySelector('#work-nav').style.opacity = 0
    } else if (window.scrollY >= askSectionTop - 100) {
      document.querySelector('#about-nav').style.opacity = 1
      document.querySelector('#services-nav').style.opacity = 1
      document.querySelector('#work-nav').style.opacity = 1
    }
  }

  render() {
    const {
      showNav
    } = this.state
    if (showNav) {
      return (
        <div className="floating-nav-wrapper">
          <div className="nav-button">
            <button id="about-nav" onClick={() => linkTo("ABOUT")}>
              ABOUT
            </button>
          </div>
          <div id="services-nav" className="nav-button">
            <button onClick={() => linkTo("SERVICES")}>
              SERVICES
            </button>
          </div>
          <div id="work-nav" className="nav-button">
            <button onClick={() => linkTo("WORK")}>
              WORK
            </button>
          </div>
        </div>
      )
    } else {
      return null
    }
    
  }
} 

export default FloatingNav;