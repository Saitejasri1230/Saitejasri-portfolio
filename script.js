// =========================================================
// SAI TEJASRI PORTFOLIO
// Website Interactions (updated)
// =========================================================


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
    navLinks.classList.toggle("show", open);
    menuToggle.setAttribute("aria-expanded", String(open));
}

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        setMenu(!navLinks.classList.contains("show"));
    });

    // Close the menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (item) {
        item.addEventListener("click", function () {
            setMenu(false);
        });
    });

    // Close the menu with the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setMenu(false);
        }
    });

    // Reset the menu when the window is resized to desktop width
    window.addEventListener("resize", function () {
        if (window.innerWidth > 850) {
            setMenu(false);
        }
    });
}


// =========================
// PROJECT FILTERING
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.getAttribute("data-filter");

        // Update active state
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Show / hide projects
        projectCards.forEach(function (project) {

            const projectCategory = project.getAttribute("data-category");

            if (selectedCategory === "all" || projectCategory === selectedCategory) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }

        });

    });

});


// =========================
// CERTIFICATION SLIDER
// =========================

const certificateTrack = document.querySelector(".certifications-track");

if (certificateTrack) {

    const certificates = Array.from(certificateTrack.children);

    certificates.forEach(function (certificate) {

        const clone = certificate.cloneNode(true);

        // Duplicates are only for the seamless loop:
        // hide them from screen readers and the Tab key
        clone.setAttribute("aria-hidden", "true");
        clone.setAttribute("tabindex", "-1");
        clone.classList.add("is-clone");

        certificateTrack.appendChild(clone);

    });

}


// =========================
// CURRENT YEAR
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
