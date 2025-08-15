// Drawer Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let drawerMenu = document.querySelector('#drawer-menu');
let drawerClose = document.querySelector('#drawer-close');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    drawerMenu.classList.toggle('active');
};

drawerClose.onclick = () => {
    drawerMenu.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};

// Scroll Section and Navbar Highlighting
let sections = document.querySelectorAll('section');
let navLinks = document.querySelector('header .navbar').querySelectorAll('a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header .navbar a[href*="' + id + '"]').classList.add('active');
        }
    });

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove drawer menu if scrolling
    if (drawerMenu.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        drawerMenu.classList.remove('active');
    }
};

// EmailJS Form Handling
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    btn.value = 'Sending...';

    const serviceID = 'service_59ppln5';
    const templateID = 'template_9gfzx74';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert('Failed to send email: ' + JSON.stringify(err));
        });
});
