// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top > offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            }

        });

    // sticky header
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;
    header.classList.toggle('sticky', window.scrollY > 0);

    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll

}