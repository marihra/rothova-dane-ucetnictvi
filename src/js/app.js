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

});
