document.addEventListener('DOMContentLoaded', function() {

    // navigation bar toggle
    var navbarToggler = document.getElementById('navbar-toggler');
    navbarToggler.addEventListener('click', function() {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.style.display === 'none') {
            navbarCollapse.style.display = 'block';
        } else {
            navbarCollapse.style.display = 'none';
        }
    });

    // navbar bg change on scroll
    window.addEventListener('scroll', function() {
        var pos = document.documentElement.scrollTop;
        var navbar = document.querySelector('.navbar');
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
  
