document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('.accordion input[type="radio"]');
    let currentlyOpen = null;

    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('click', function() {
            if (this === currentlyOpen) {
                this.checked = false;
                currentlyOpen = null;
            } else {
                currentlyOpen = this;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const overlayText = document.querySelector(".overlay-text");
    
    let opacity = 0;
    const targetOpacity = 1;
    const duration = 2000; // Duration in milliseconds

    const interval = 10;
    const increment = (targetOpacity / (duration / interval));

    function fadeIn() {
        if (opacity < targetOpacity) {
            opacity += increment;
            overlayText.style.opacity = opacity;
            setTimeout(fadeIn, interval);
        }
    }

    fadeIn();
});



