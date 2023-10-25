const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.navlinks li')

  burger.addEventListener('click', () => {
    //togle nav
    nav.classList.toggle('nav-active')
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forewards ${index / 7}s`
      }
    });
    //brger animation
    burger.classList.toggle('toggle')
  });

   

}
navSlide();
