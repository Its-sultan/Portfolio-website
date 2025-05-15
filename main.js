var typed = new Typed ("#text", {
    strings:["Frontend Developer", "UI/UX Designer","Web Developer","Software Developer", "Design Thinking Expert", "Innovator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

// Close mobile menu
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});


// document.addEventListener('DOMContentLoaded', function() {
//     const radialBars = document.querySelectorAll('.radial-bars');
    
//     radialBars.forEach(bar => {
//         const percentage = parseInt(bar.dataset.percent);
//         const path = bar.querySelector('.path');
//         const radius = 80;
//         const circumference = 2 * Math.PI * radius;
//         const offset = circumference - (circumference * percentage) / 100;
        
//         // Set CSS custom property
//         path.style.setProperty('--target-offset', offset);
        
//         // Optional: Add transition
//         path.style.transition = 'stroke-dashoffset 1.5s ease-out';
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    // Radial bars animation
    document.querySelectorAll('.radial-bars').forEach(bar => {
        const percent = parseInt(bar.querySelector('.percentage').textContent);
        const path = bar.querySelector('circle:nth-child(2)');
        const circumference = 314; // 2 * π * 50
        const offset = circumference - (circumference * percent) / 100;
        
        // Trigger animation after short delay
        setTimeout(() => {
            path.style.strokeDashoffset = offset;
        }, 100);
    });
});