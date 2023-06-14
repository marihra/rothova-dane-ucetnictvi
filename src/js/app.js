document.addEventListener('DOMContentLoaded', function() {

    // navigation bar toggle
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav a');  

    navbarToggler.addEventListener('click', function() {
        if (navbarCollapse.style.display === 'none') {
            navbarCollapse.style.display = 'block';
            navbarToggler.classList.toggle('active');
        } else {
            navbarCollapse.style.display = 'none';
            navbarToggler.classList.remove('active');
        }
    });


    navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navbarCollapse.style.display = 'none';
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

  AOS.init();

});

// Replace the normal space after a single letter word with a non-breaking space
function fixSingleLetterWords(text) {
    const prepositions = ['a', 'i', 'k', 'o', 's', 'u', 'v', 'z'];
    const regex = new RegExp(`\\b(${prepositions.join('|')})\\s`, 'gm');
    const fixedText = text.replace(regex, '$1&nbsp;');
  
    return fixedText;
  }

// Apply the function to <p> elements
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  paragraph.innerHTML = fixSingleLetterWords(paragraph.innerHTML);
}
  
