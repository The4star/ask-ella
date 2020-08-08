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

export {
  linkTo
}