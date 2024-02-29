document.addEventListener('DOMContentLoaded', function() {

// navigation bar toggle
const navbarToggler = document.getElementById('navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav a');  

navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
  navbarToggler.classList.toggle('active');
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
        navbarToggler.classList.remove('active');
    });
});

// navbar bg change on scroll
window.addEventListener('scroll', function() {
    const pos = document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');
    if (pos >= 100) {
        navbar.classList.add('cng-navbar');
    } else {
        navbar.classList.remove('cng-navbar');
    }
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // swiper.appendSlide('<div class="swiper-slide">Slide 3</div>');

  AOS.init();

});

// Replace the normal space after a single letter word with a non-breaking space
function fixSingleLetterWords(text) {
    const prepositions = ['a', 'i', 'k', 'o', 's', 'u', 'v', 'z'];
    const regex = new RegExp(`\\b(${prepositions.join('|')})\\s`, 'gm');
    const fixedText = text.replace(regex, '$1&nbsp;');
  
    return fixedText;
  }

  function applyFixToElements(tagName) {
    const elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.innerHTML = fixSingleLetterWords(element.innerHTML);
    }
  }
  
  // Apply the function to <p> elements
  applyFixToElements('p');
  
  // Apply the function to <h2> elements
  applyFixToElements('h2');

document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS
  AOS.init();

  // Remove AOS classes after the initial animation
  const aosElements = document.querySelectorAll('.aos-init.aos-animate');
  aosElements.forEach(element => {
    element.classList.remove('aos-init', 'aos-animate');
  });
});