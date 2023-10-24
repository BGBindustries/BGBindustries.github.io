
window.addEventListener('scroll', function() {
    const rotateLogo = document.querySelector('.rotate-logo');
    const scrolled = window.scrollY;

    // Set flip angle based on scroll position
    const flipAngle = scrolled / 3; // Adjust the factor to control flip speed

    // Apply flip
    rotateLogo.style.transform = `rotateY(${flipAngle}deg)`;
});

// NBsite.js

function handleOpacity() {
    let imageContainer = document.querySelector('.image-container');
    let imagePosition = imageContainer.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    let fadeInPoint = windowHeight / 2 - 200; // Start fade-in later
    let fadeOutPoint = windowHeight / 2 + 250; // Adjust as needed

    let opacity;

    if (imagePosition > fadeInPoint && imagePosition < fadeOutPoint) {
        opacity = 1 - (imagePosition - fadeInPoint) / (fadeOutPoint - fadeInPoint);
        imageContainer.style.opacity = Math.max(0, Math.min(opacity, 1));
    } else {
        imageContainer.style.opacity = imagePosition > fadeOutPoint ? 0 : 1;
    }
}

function handleHiddenImage2Opacity() {
    let hiddenImage2 = document.querySelector('.hiddenImage2');
    let imagePosition = hiddenImage2.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    let fadeInPoint = windowHeight / 2 - 500; // Start fade-in later
    let fadeOutPoint = windowHeight / 2 + 150; // Adjust as needed

    let opacity;

    if (imagePosition > fadeInPoint && imagePosition < fadeOutPoint) {
        opacity = 1 - (imagePosition - fadeInPoint) / (fadeOutPoint - fadeInPoint);
        hiddenImage2.style.opacity = Math.max(0, Math.min(opacity, 1));
    } else {
        hiddenImage2.style.opacity = imagePosition > fadeOutPoint ? 0 : 1;
    }
}

window.addEventListener('scroll', handleOpacity);
window.addEventListener('scroll', handleHiddenImage2Opacity);


function fadeInTitle1() {
    let title1 = document.querySelector('.title1');
    title1.style.transition = 'opacity 1.5s'; // Add transition for a smooth fade-in effect
    title1.style.opacity = '1';
}

function fadeInTitle2() {
    let title2 = document.querySelector('.title2');
    title2.style.transition = 'opacity 1s';
    title2.style.opacity = '1';
}
function fadeInSelfPortrait() {
    let selfPortrait = document.querySelector('.selfportrait');
    selfPortrait.style.transition = 'opacity 1s';
    selfPortrait.style.opacity = '1';
}
function fadeInPage1Script() {
    let page1Script = document.querySelector('.page1script');
    page1Script.style.transition = 'opacity 4.5s'; // Add transition for a smooth fade-in effect
    page1Script.style.opacity = '1';
}
function fadeInSerpent() {
    let serpent = document.querySelector('.serpent');
    serpent.style.transition = 'opacity 2s'; // Add transition for a smooth fade-in effect
    serpent.style.opacity = '1';
}
function fadeInApps() {
    let appTitle = document.querySelector('.appLink');
    appTitle.style.transition = 'opacity 2s';
    appTitle.style.opacity = '1'
}

// Delay the execution of fadeInSerpent after a certain amount of time (in milliseconds)
setTimeout(fadeInApps, 4000); // Adjust the time delay as needed

// Delay the execution of fadeInPage1Script after a certain amount of time (in milliseconds)
setTimeout(fadeInPage1Script, 3000); // Adjust the time delay as needed

// Delay the execution of fadeInSelfPortrait after a certain amount of time (in milliseconds)
setTimeout(fadeInSelfPortrait, 2000); // Adjust the time delay as needed

// Delay the execution of fadeInTitle2 after a certain amount of time (in milliseconds)
setTimeout(fadeInTitle2, 900); // Adjust the time delay as needed

// Add an event listener to call fadeInTitle1
window.addEventListener('load', fadeInTitle1);


/*slide function for old carousel */
//

function handleBackgroundOpacity() {
    const imageContainer = document.querySelector('.second-text');
    const imagePosition = imageContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const fadeInPoint = windowHeight / 2 - 200; // Adjust the starting point for the effect
    const fadeOutPoint = windowHeight / 2 + 250; // Adjust the ending point for the effect
    const pseudoElement = imageContainer.style;

    let opacity;

    if (imagePosition > fadeInPoint && imagePosition < fadeOutPoint) {
        opacity = 1 - (imagePosition - fadeInPoint) / (fadeOutPoint - fadeInPoint);
        pseudoElement.setProperty('--background-opacity', opacity); // Set a custom CSS variable
    } else {
        pseudoElement.setProperty('--background-opacity', 1);
    }
}

window.addEventListener('scroll', handleBackgroundOpacity);



// NBsite.js
/*click to open menu on rotate-logo */


/*click to open menu on rotate-logo */


/*carousel tests */
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const tatimgs = document.querySelectorAll('.tatimg, .tatimg1, .tatimg2, .tatimg3');
    let autoRotateTimer;
    let isPaused = false;
    let playButton = document.querySelector('.play-button');
    let pauseButton = document.querySelector('.nav-button-pause');

    function showSlide(index) {
        tatimgs.forEach(img => img.style.display = 'none');
        tatimgs[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % tatimgs.length;
        showSlide(currentSlide);
        resetAutoRotateTimer();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + tatimgs.length) % tatimgs.length;
        showSlide(currentSlide);
        resetAutoRotateTimer();
    }

    function resetAutoRotateTimer() {
        clearInterval(autoRotateTimer);
        if (!isPaused) {
            autoRotateTimer = setTimeout(rotateSlides, 5000);
        }
    }

    function rotateSlides() {
        nextSlide();
        resetAutoRotateTimer();
    }

    document.querySelector('.nav-button-right').addEventListener('click', nextSlide);
    document.querySelector('.nav-button-left').addEventListener('click', prevSlide);

    pauseButton.addEventListener('click', function() {
        isPaused = true;
        pauseButton.style.display = 'none';
        playButton.style.display = 'flex';
        clearInterval(autoRotateTimer);
    });

    playButton.addEventListener('click', function() {
        isPaused = false;
        playButton.style.display = 'none';
        pauseButton.style.display = 'flex';
        resetAutoRotateTimer();
    });
});


/*test for floating image rotation */
window.addEventListener('scroll', function() {
    const floatingImages = document.querySelectorAll('.floating-image1, .floating-image3');
    const scrolled = window.scrollY;

    floatingImages.forEach((image) => {
        let translateYAmount = scrolled / 4; // Adjust the factor to control the downward movement
        image.style.transform = `translateY(${translateYAmount}px)`;
    });

    const image2 = document.querySelector('.floating-image2');
    if (image2) {
        let translateYAmount = scrolled / -4; // Adjust the factor to control the upward movement
        image2.style.transform = `translateY(${translateYAmount}px)`;
    }
});




/*highlight logo */




/*highlight logo */




/*page 3 whtie box for rotating logo */
/*delete later if Nico doesnt like */
/* window.addEventListener('scroll', function() {
    const rotateLogo = document.querySelector('.rotate-logo');
    const page2 = document.querySelector('.page2');
    const page3 = document.querySelector('.page3');
    const page4 = document.querySelector('.page4');
    
    const scrolled = window.scrollY;
    const normPic = document.querySelector('.default-nico');
    const lightPic = document.querySelector('.light-nico');
    const lightLogo = document.querySelector('.hiddenImage2 img'); // Add the hidden image element for the light logo
    
    // Calculate the position of page2, page3, and page4
    const page2Position = page2.offsetTop;
    const page3Position = page3.offsetTop;
    const page4Position = page4.offsetTop;
    
    if (scrolled >= page2Position && scrolled < page3Position) {
        // The rotate-logo is between the start of page2 and the start of page3
        normPic.style.display = "none";
        lightPic.style.display = "flex";
        lightLogo.style.display = "block"; // Show the hidden light logo
    } else if (scrolled >= page3Position && scrolled < page4Position) {
        // The rotate-logo is between the start of page3 and the start of page4
        normPic.style.display = "none";
        lightPic.style.display = "flex";
        lightLogo.style.display = "block"; // Show the hidden light logo
    } else {
        // The rotate-logo is not in that range, remove background color
        normPic.style.display = "flex";
        lightPic.style.display = "none";
        lightLogo.style.display = "none"; // Hide the light logo
    }
}); */



/*calendary space */


/*hamburger */
// Add this code to your NBsite.js file

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            hamburger.classList.add('active');
        } else {
            hamburger.classList.remove('active');
        }
    });
});


//FULL GALLERY 

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".photo-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.getElementById("close");

    gallery.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            lightbox.style.display = "block";
            lightboxImage.src = e.target.src;
        }
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});


 