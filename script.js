let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');

    // Toggle menu function
    const toggleMenu = () => {
        navbar.classList.toggle('active');
        
        // Optional: Add animation to menu icon
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    };

    // Add click event to menu icon
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    // Add click event to navbar toggle (if you want an alternative toggle method)
    if (navbarToggle) {
        navbarToggle.addEventListener('click', toggleMenu);
    }

    // Close menu when a navbar link is clicked
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);
        
        if (!isClickInsideNavbar && !isClickOnMenuIcon && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});