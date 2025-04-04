/*!
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// ------------------------------------
function typeEffect(element, text, index = 0, isDeleting = false) {
    if (!element) return;

    if (!isDeleting && index < text.length) {
        element.textContent = text.substring(0, index + 1);
        setTimeout(() => typeEffect(element, text, index + 1, isDeleting), 100);
    } else if (isDeleting && index > 0) {
        element.textContent = text.substring(0, index - 1);
        setTimeout(() => typeEffect(element, text, index - 1, isDeleting), 50);
    } else {
        setTimeout(() => typeEffect(element, text, index, !isDeleting), isDeleting ? 1000 : 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".typewriter").forEach(element => {
        const text = element.getAttribute("data-type") || "";
        typeEffect(element, text);
    });


    const portfolioItems = document.querySelectorAll("#portfolio .portfolio-item");

    setInterval(() => {
        const randomItem = portfolioItems[Math.floor(Math.random() * portfolioItems.length)];
        randomItem.classList.add("shaking");
        setTimeout(() => randomItem.classList.remove("shaking"), 300);
    }, 2500);

    portfolioItems.forEach(item => {
        item.addEventListener("mousemove", (event) => {
            const rect = item.getBoundingClientRect();
            const x = event.clientX - rect.left; 
            const y = event.clientY - rect.top; 

            const offsetX = x - (rect.width / 2);
            const offsetY = y - (rect.height / 2);
            item.style.boxShadow = `${offsetX / 10}px ${offsetY / 10}px 30px rgba(77, 77, 201, 0.7)`;
        });

        item.addEventListener("mouseleave", () => {
            item.style.boxShadow = "0px 0px 10px rgba(77, 77, 201, 0.8)";
        });
    });

});
// -----------------------------------------

function tilt(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const rotateX = y / 5;
    const rotateY = -x / 5;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt(event) {
    event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
}

// -------------Parallax----------------


document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    document.querySelectorAll(".parallax").forEach(img => {
        const speed = 0.1;
        img.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    const parallaxImg = document.querySelector('.timeline-parallax img');
    if (parallaxImg) {
        const speedFactor = 0.11;
        let parent = parallaxImg.parentNode.parentNode;
        const rect = parent.getBoundingClientRect();
        const offset = (window.scrollY - 3*rect.top) * speedFactor;
        parallaxImg.style.transform = `translateY(${offset}px)`;
    }
});
