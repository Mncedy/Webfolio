var typed = new Typed(".text", {
    strings: [
        '<span style="color: #43bff0;">Business Analyst</span>',
        '<span style="color: #43bff0;">Data Analyst</span>',
        '<span style="color: #43bff0;">Software Developer</span>'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Function to dynamically change media query styles
function applyDynamicStyles() {
    var style = document.createElement('style');
    style.type = 'text/css';

    var screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
        style.innerHTML = `
            h3 {
                font-size: 1.5rem;
            }
            .text span {
                font-size: 1.5rem;
            }
        `;
    } else {
        style.innerHTML = `
            h3 {
                font-size: 2rem;
            }
            .text span {
                font-size: 2rem;
            }
        `;
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}

// Apply styles on load
applyDynamicStyles();

// Apply styles on window resize
window.onresize = applyDynamicStyles;
