
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {     // when the user scrolls the page on the window then this function inside the arrow will be executed
    sections.forEach(sec => {    // it assumes that inside the array there are many sections and it accesses one by one each section
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ----------------------------- sticky navbar -------------------------------

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};