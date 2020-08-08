const linkTo = (place) => {
  const homeSection = document.querySelector('.home-section')
  const aboutSection = document.querySelector('.about-section');
  const servicesSection = document.querySelector('.services-section');
  const workSection = document.querySelector('.work-section');
  const askSection = document.querySelector('.ask-section');

  switch (place) {
    case "ABOUT":
      aboutSection.scrollIntoView({behavior: "smooth", block: "center"})
      break;
    case "SERVICES":
        servicesSection.scrollIntoView({behavior: "smooth", block: "center"})
        break;
    case "WORK":
      workSection.scrollIntoView({behavior: "smooth", block: "center"})
      break;
    case "ASK":
      askSection.scrollIntoView({behavior: "smooth", block: "center"})
      break;
    case "HOME":
      homeSection.scrollIntoView({behavior: "smooth", block: "center"})
      break;
    default:
      break;
  }
}

const debounce = (func, wait = 10, immediate = true) => {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export {
  linkTo,
  debounce
}