
/* =================================
   NAVIGATION ELEMENTS
================================= */

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-container");
const navLinks = navMenu.querySelectorAll("a");
const sections = document.querySelectorAll("section[id]");


/* =================================
   HAMBURGER MENU
================================= */

hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    // Animate hamburger into an X
    hamburger.classList.toggle("active", isOpen);

    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


/* ------ CLOSE MENU WHEN A LINK IS CLICKED----- */

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");

        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Open navigation menu");
    });
});


/* -------- ACTIVE SECTION NAVIGATION -------- */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            navLinks.forEach((link) => {
                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${entry.target.id}`
                ) {
                    link.classList.add("active");
                }
            });

        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});


/* OBSERVE EACH SECTION */

sections.forEach((section) => {
    observer.observe(section);
});


/* --------- ABOUT SECTION ------*/
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".skills .progress-fill");
    
    setTimeout(() => {
        progressBars.forEach(bar => {
            const widthValue = bar.getAttribute("data-width");
            bar.style.width = widthValue + "%";
        });
    }, 200);
});